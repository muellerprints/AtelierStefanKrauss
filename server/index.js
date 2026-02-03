import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import nodemailer from 'nodemailer'

dotenv.config()

const app = express()
app.use(cors())
// Increase JSON body size to allow base64 attachments from the client
app.use(express.json({ limit: process.env.JSON_LIMIT || '25mb' }))

// light request logging for API endpoints — keep output concise
app.use('/api', (req, res, next) => {
  if (req.path === '/send-email' && req.method === 'POST') {
    const ct = req.headers['content-type'] || ''
    const bodyPreview = (() => {
      try {
        const b = JSON.stringify(req.body)
        return b.length > 200 ? b.slice(0, 200) + '…' : b
      } catch (e) {
        return String(req.body)
      }
    })()
    console.log(`[API] ${req.method} ${req.originalUrl} content-type=${ct} body=${bodyPreview}`)
  }
  next()
})

const PORT = process.env.PORT || 4000

function getTransport() {
  const host = process.env.SMTP_HOST
  const port = parseInt(process.env.SMTP_PORT || '587', 10)
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS

  if (!host || !user || !pass) {
    // No SMTP configured — return null to let caller handle dev fallback
    return null
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // true for 465, false for other ports
    auth: { user, pass }
  })
}

app.post('/api/send-email', async (req, res) => {
  try {
    // Ensure we always respond with JSON
    res.type('application/json')

    const { name, email, message } = req.body || {}
    if (!message || !email) return res.status(400).json({ ok: false, error: 'Missing fields' })
    const transporter = getTransport()

    const to = process.env.TO_EMAIL || process.env.CONTACT_EMAIL || 'local-dev@localhost'

    const subject = `Website Anfrage — ${name || 'Anonyme Anfrage'}`
    const body = `${message}\n\n--\n${name || ''}\n${email || ''}`

    if (!transporter) {
      // Development fallback: append to a local file so messages are not lost
      const fs = await import('fs')
      const logLine = `[${new Date().toISOString()}] To: ${to} | From: ${email} | Subject: ${subject}\n${body}\n---\n`
      try {
        fs.appendFileSync('server/mail-dev.log', logLine)
        console.log(`Saved mail to server/mail-dev.log (no SMTP configured) — to=${to}`)
        return res.json({ ok: true, info: 'saved-to-file' })
      } catch (e) {
        console.error('Failed to write mail-dev.log', e)
        return res.status(500).json({ ok: false, error: String(e) })
      }
    }

    // Prepare attachments if any (client sends base64 strings)
    const rawAttachments = (req.body && req.body.attachments) || []
    const mailAttachments = rawAttachments.map(a => {
      try {
        return {
          filename: a.filename,
          content: Buffer.from(a.content || '', 'base64'),
          contentType: a.contentType || undefined
        }
      } catch (_) {
        return null
      }
    }).filter(Boolean)

    // log attempt
    console.log(`Sending mail via SMTP to=${to} from=${process.env.FROM_EMAIL || process.env.SMTP_USER} attachments=${mailAttachments.length}`)
    const info = await transporter.sendMail({
      from: process.env.FROM_EMAIL || process.env.SMTP_USER,
      to,
      subject,
      text: body,
      attachments: mailAttachments
    })

    console.log('Mail sent, nodemailer info:', info && info.messageId ? info.messageId : info)
    return res.json({ ok: true, info })
  } catch (e) {
    const errStack = e && e.stack ? e.stack : String(e)
    console.error('Send email failed', errStack)

    // Try to persist a detailed error dump to server/error.log for offline inspection
    try {
      const fs = await import('fs')
      const now = new Date().toISOString()
      const headers = Object.assign({}, req.headers || {})
      if (headers.authorization) headers.authorization = '[redacted]'
      if (headers.cookie) headers.cookie = '[redacted]'
      const bodyPreview = (() => {
        try {
          const b = JSON.stringify(req.body)
          return b.length > 200 ? b.slice(0, 200) + '…' : b
        } catch (_) {
          return String(req.body)
        }
      })()
      const logLine = `[${now}] ERROR ${req.method} ${req.originalUrl}\nHeaders: ${JSON.stringify(headers)}\nBody: ${bodyPreview}\nError: ${errStack}\n---\n`
      fs.appendFileSync('server/error.log', logLine)
      console.log('Wrote server/error.log')
    } catch (logErr) {
      console.error('Failed to write server/error.log', logErr && logErr.stack ? logErr.stack : logErr)
    }

    // respond with a concise error message (no HTML)
    return res.status(500).json({ ok: false, error: String(e) })
  }
})

// Global error handler for API routes — logs details and returns JSON
app.use('/api', async (err, req, res, next) => {
  try {
    const now = new Date().toISOString()
    const fs = await import('fs')
    const headers = Object.assign({}, req.headers || {})
    if (headers.authorization) headers.authorization = '[redacted]'
    if (headers.cookie) headers.cookie = '[redacted]'
    const bodyPreview = (() => {
      try { const b = JSON.stringify(req.body); return b.length > 200 ? b.slice(0,200) + '…' : b } catch (_) { return String(req.body) }
    })()
    const errStack = err && err.stack ? err.stack : String(err)
    const logLine = `[${now}] GLOBAL ERROR ${req.method} ${req.originalUrl}\nHeaders: ${JSON.stringify(headers)}\nBody: ${bodyPreview}\nError: ${errStack}\n---\n`
    fs.appendFileSync('server/error.log', logLine)
    console.error('Global API error:', errStack)
  } catch (logErr) {
    console.error('Failed to write global error log', logErr && logErr.stack ? logErr.stack : logErr)
  }

  // ensure JSON response
  if (!res.headersSent) {
    res.status(500).type('application/json').json({ ok: false, error: 'Internal Server Error' })
  }
})

app.listen(PORT, () => console.log(`Mail server listening on ${PORT}`))
