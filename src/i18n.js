import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  de: {
    translation: {
      siteTitle: 'Goldschmiedeatelier Krauss',
      tagline: 'Handwerkliche Präzision · Mit Hingabe gearbeitet · Aus jahrzehntelanger Erfahrung',
      nav: { home: 'Startseite', about: 'Stefan Krauss', atelier: 'Atelier & Arbeitsweise', services: 'Leistungen', contact: 'Kontakt' },
      contactCta: 'Kontakt aufnehmen',
      contact: {
        name: 'Goldschmiedeatelier Stefan Krauss',
        street: 'Neuberg 11',
        zipcity: '75210 Keltern',
        email: 'info@goldschmiedeatelier-krauss.de',
        phone: '+49 151 52662000',
        phoneRaw: '+4915152662000'
      },
      heroLead: 'Reduzierte Materialästhetik — Haltung vor Aktion.',
      hero: {
        slides: [
          { title: 'Willkommen im Goldschmiedeatelier Krauss', lead: 'Handwerkliche Präzision · Mit Hingabe gearbeitet · Aus jahrzehntelanger Erfahrung' },
          { title: 'Unikate & Restaurationen', lead: 'Einzelstücke mit Persönlichkeit; sorgsame Anfertigung und fachgerechte Wiederherstellung.' },
          { title: 'Beratung & Anfertigung', lead: 'Persönliche Begleitung von der Skizze bis zum fertigen Schmuckstück.' },
          { title: 'Werkstatt & Arbeitsweise', lead: 'Klare Prozesse, durchdachte Materialwahl und zeitlose Gestaltung.' }
        ]
      },
      about: {
        title: 'Stefan Krauss',
        intro1: 'Seit über vier Jahrzehnten arbeite ich als Goldschmiedemeister. Meine Wurzeln liegen im Juwelierhaus Günter Krauss Schmuck. Mein beruflicher Weg führte mich durch unterschiedliche Bereiche des Handwerks und der Branche - von der Leitung einer Werkstatt mit Schwerpunkt auf Perlen über Tätigkeiten im Einkauf und Vertrieb bis hin zum direkten Austausch mit Kundinnen und Kunden im Ladengeschäft. So entwickelte sich ein breites Verständnis für das Handwerk und die vielschichtigen Anforderungen dieser besonderen Welt. Diese unterschiedlichen Erfahrungen prägen meinen Blick bis heute. Zugleich wird mit dem Goldschmiedeatelier Krauss ein neues Kapitel aufgeschlagen: eigenständig, verbunden mit der Vergangenheit und mit klarem Blick für das Heute.',
        portraitCaption: 'Porträt — Stefan Krauss',
        vitaTitle: 'Vita – Stefan Krauss',
        vita: [
          { year: '1982–1986', text: 'Ausbildung an der Goldschmiedeschule Pforzheim' },
          { year: '1987–1990', text: 'Goldschmied bei Günter Krauss Schmuck GmbH' },
          { year: '1991', text: 'Meisterprüfung zum Goldschmiedemeister' },
          { year: '1991–2000', text: 'Werkstattleiter bei Günter Krauss Schmuck GmbH' },
          { year: '2001–2019', text: 'Gellner Schmuckmanufaktur GmbH & Co. KG — Tätigkeiten in Produktion, Vertrieb und Einkauf; internationale Messeteilnahmen (u. a. Hongkong, Kobe)' },
          { year: '2019–2022', text: 'Werkstatt- und Shopleiter Colleen B. Rosenblatt' },
          { year: '2022–2026', text: 'Geschäftsführer Günter Krauss Schmuck GmbH' },
          { year: 'seit 2026', text: 'Gründung Goldschmiedeatelier Krauss' }
        ]
      },
        services: {
          title: 'Service Spectrum',
          headings: ['Core Services', 'Extended Capabilities'],
          list: [
            'Core Services',
            'Custom commissions — from design to the finished piece',
            'Wedding and partner rings — individually crafted',
            'Preserving value means shaping the future',
            'Remodelling — rethinking existing pieces and continuing craftsmanship',
            'Repair and refurbishment of jewellery',
            'Ring sizing adjustments',
            'Lengthening and shortening necklaces, including pearl and gemstone strands',
            'Certificates — gemstone and diamond reports',
            'Extended Capabilities',
            'Gem setting by specialised partners',
            'Turning and milling work',
            'Laser work',
            'CAD design',
            'CNC technology',
            'Electroplating processes',
            'Sintering processes',
            'Collaboration with a silversmith for small series and special commissions'
          ]
        },
      privacy: {
        purposesTitle: 'Zwecke',
        purposes: 'Datenverarbeitung dient zur Bearbeitung von Anfragen, zur Auftragsabwicklung und zur Erfüllung gesetzlicher Pflichten.',
        rightsTitle: 'Rechte',
        rights: 'Sie haben Auskunfts-, Berichtigungs-, Löschungs- und Widerspruchsrechte. Zur Ausübung kontaktieren Sie uns bitte per E‑Mail.',
        note: 'Diese Seite ist ein Muster. Eine vollständige Datenschutzerklärung sollte prüfbar und vollständig auf die Geschäftsprozesse abgestimmt werden.'
      }
      ,
      impressum: {
        title: 'Impressum',
        name: 'Goldsmith Atelier',
        owner: 'Owner: Karla Krauss',
        street: 'Neuberg 11',
        cityzip: '75210 Keltern',
        contactLabel: 'Contact',
        registryTitle: 'Company register / Tax',
        registry: 'Please insert company register details, VAT identification number and professional title where applicable.',
        note: 'Note: This is a sample imprint. Please have texts legally reviewed before publication.'
      },
      terms: {
        title: 'Terms & Conditions (T&C)',
        intro: 'The following sample terms govern the contractual relationship between the Goldsmith Atelier and customers within the scope of work and service contracts. Please adapt individually.',
        contractTitle: 'Contract Formation',
        contract: 'Offers are non-binding. A contract is concluded upon our order confirmation.',
        pricesTitle: 'Prices & Payment',
        prices: 'All prices include statutory VAT unless stated otherwise.',
        deliveryTitle: 'Delivery & Performance',
        delivery: 'Delivery times are non-binding unless explicitly agreed as binding.',
        warrantyTitle: 'Warranty',
        warranty: 'Statutory warranty rights apply. For work contracts, the contractor is entitled to subsequent performance.',
        note: 'This is sample text. For legally binding terms, we recommend legal review.'
      },
      payment: {
        title: 'Payment methods',
        intro: 'We accept the following payment methods:',
        methods: ['Bank transfer (prepayment)', 'Cash on collection', 'SEPA direct debit (by arrangement)'],
        note: 'For bespoke commissions, payment terms will be specified in the quote / order confirmation.'
      },
      shipping: {
        title: 'Shipping & Collection',
        intro: 'How we deliver your pieces:',
        methods: ['Collection from the atelier by appointment (free of charge)', 'Shipping via insured parcel (costs depend on destination)'],
        note: 'For high‑value items we recommend collection or prior arrangement. Delivery times are agreed individually.'
      }
      ,
        contactPage: {
          title: 'Kontakt',
          inquiryTitle: 'Anfrage',
          form: { name: 'Name', email: 'Email', message: 'Nachricht', submit: 'Absenden' },
          openingHoursTitle: 'Öffnungszeiten',
          openingHoursText: 'Mo–Fr: nach Vereinbarung\nSa: nach Vereinbarung'
        },
        opening: {
          title: 'Öffnungszeiten',
          text: 'Mo–Fr: nach Vereinbarung\nSa: nach Vereinbarung',
          openInMaps: 'In Google Maps öffnen'
        },
        directions: {
          title: 'Anfahrt',
          text: 'Neuberg 11\n75210 Keltern\nAnfahrt mit dem Auto: Parkmöglichkeiten in der Nähe. Mit öffentlichen Verkehrsmitteln: Buslinien X/Y bis Haltestelle Z.',
          openInMaps: 'In Google Maps öffnen'
        },
        services: {
          title: 'Leistungsspektrum',
          list: [
            'Kernleistungen',
            'Einzelanfertigungen — vom Entwurf bis zum fertigen Schmuckstück',
            'Trauringe und Partnerringe — individuell gefertigt',
            'Werte erhalten heißt Zukunft gestalten',
            'Umarbeitungen — Bestehendes neu gedacht und handwerklich weitergeführt',
            'Instandsetzung und Aufarbeitung von Schmuck',
            'Ringgrößenanpassungen',
            'Verlängerung und Verkürzung von Colliers sowie Perlen- und Edelsteinketten',
            'Zertifikate — Edelstein- und Diamantgutachten',
            'Erweiterte Möglichkeiten',
            'Edelsteinfassen durch spezialisierte Partner',
            'Dreh- und Fräsarbeiten',
            'Laserarbeiten',
            'CAD-Konstruktion',
            'CNC‑Technologie',
            'Galvanische Verfahren',
            'Sinterverfahren',
            'Zusammenarbeit mit einer Silberschmiede für Kleinserien und Sonderanfertigungen'
          ]
        },
        atelier: {
          title: 'Atelier & Arbeitsweise',
          description: 'Gute Arbeit beginnt mit genauem Hinsehen.\n\nHandwerkliche Präzision, Hingabe zum Material und jahrzehntelange Erfahrung leiten mein Arbeiten. Jedes Stück entsteht mit Sorgfalt, persönlicher Verantwortung und dem Anspruch, Lösungen zu schaffen, die langfristig Bestand haben. Ich konzentriere mich auf Arbeiten, die handwerklich überzeugen und Wert erhalten — sei es in der Neuanfertigung oder in der Weiterführung bestehender Schmuckstücke.\n\nMeine Arbeitsweise ist geprägt von Ruhe, Klarheit und Verlässlichkeit. Absprachen erfolgen auf Augenhöhe, Entscheidungen mit einem realistischen Blick für Machbarkeit und Qualität. Seriosität entsteht für mich durch Erfahrung, Verantwortung und eine ruhige Präsenz — nicht durch Lautstärke.\n\nQualität zeigt sich im Detail.',
          positioningHeading: 'Ein starkes Netzwerk',
          positioning: 'Ein starkes Netzwerk erweitert die Möglichkeiten. Über viele Jahre hinweg ist ein tragfähiges Netzwerk gewachsen, das kurze Wege und unmittelbare Nähe zur Branche ermöglicht. Es erweitert die handwerklichen Möglichkeiten und schafft Zugriff auf spezialisierte Techniken — immer mit dem Ziel, für jede Aufgabe die bestmögliche Lösung zu realisieren.\n\nQualität zeigt sich im Detail.'
        },
      impressum: {
        title: 'Impressum',
        name: 'Goldschmiedeatelier',
        owner: 'Inhaber: Karla Krauss',
        street: 'Neuberg 11',
        cityzip: '75210 Keltern',
        contactLabel: 'Kontakt',
        registryTitle: 'Handelsregister / Steuern',
        registry: 'Angaben zum Handelsregister, Umsatzsteuer‑Identifikationsnummer und ggf. Berufsbezeichnung hier einfügen.',
        note: 'Hinweis: Dies ist ein Muster‑Impressum. Bitte die Texte vor Veröffentlichung rechtlich prüfen lassen.'
      },
      terms: {
        title: 'Allgemeine Geschäftsbedingungen (AGB)',
        intro: 'Die folgenden Muster‑AGB regeln die Vertragsbeziehungen zwischen dem Goldschmiedeatelier und Kundinnen/Kunden im Rahmen von Werkverträgen und Dienstleistungsaufträgen. Bitte individuell anpassen.',
        contractTitle: 'Vertragsabschluss',
        contract: 'Angebote sind freibleibend. Der Vertrag kommt mit unserer Auftragsbestätigung zustande.',
        pricesTitle: 'Preise & Zahlung',
        prices: 'Alle Preise verstehen sich einschließlich der gesetzlichen Mehrwertsteuer, sofern nicht anders angegeben.',
        deliveryTitle: 'Lieferung & Leistungserbringung',
        delivery: 'Lieferfristen sind unverbindlich, sofern nicht ausdrücklich als verbindlich vereinbart.',
        warrantyTitle: 'Gewährleistung',
        warranty: 'Es gelten die gesetzlichen Gewährleistungsrechte. Bei Werkverträgen ist der Unternehmer zur Nacherfüllung berechtigt.',
        note: 'Dies ist ein Mustertext. Für rechtssichere AGB empfehlen wir eine juristische Prüfung.'
      },
      payment: {
        title: 'Zahlungsarten',
        intro: 'Wir akzeptieren folgende Zahlungsarten:',
        methods: ['Überweisung (Vorkasse)', 'Barzahlung bei Abholung', 'SEPA‑Lastschrift (nach Vereinbarung)'],
        note: 'Bei individuellen Auftragsarbeiten werden Zahlungsmodalitäten im Angebot / der Auftragsbestätigung festgehalten.'
      },
      shipping: {
        title: 'Versand & Abholung',
        intro: 'So liefern wir Ihre Stücke:',
        methods: ['Abholung im Atelier nach Terminvereinbarung (kostenlos)', 'Versand per versichertem Paket (kostenpflichtig, abhängig vom Ziel)'],
        note: 'Bei Wertsendungen empfehlen wir die Abholung oder eine vorherige Absprache. Lieferzeiten werden individuell vereinbart.'
      }
      ,
      footer: {
        aboutTitle: 'Über uns',
        links: {
          about: 'About',
          openingHours: 'Öffnungszeiten',
          directions: 'Anfahrt',
          contact: 'Kontakt',
          sitemap: 'Sitemap'
        },
        legalTitle: 'Rechtliches',
        legalLinks: {
          impressum: 'Impressum',
          privacy: 'Datenschutzerklärung',
          terms: 'Allgemeine Geschäftsbedingungen (AGB)',
          payment: 'Zahlungsarten',
          shipping: 'Versandarten'
        },
        copyright: '© {{year}} Goldschmiedeatelier · Alle Rechte vorbehalten'
      }
      ,
      home: {
        tiles: [
          { title: 'Atelier & Arbeitsweise', text: 'Reduzierte Materialästhetik · Haltung vor Aktion.', link: '/atelier' },
          { title: 'Leistungen', text: 'Unikate · Reparaturen · Restaurationen · Umarbeitungen', link: '/services' },
          { title: 'Über Stefan', text: 'Persönlich · Erfahren · Handwerklich präzise', link: '/about' }
        ]
        ,
        featurePhotos: [
          { title: 'Feines Detail', text: 'Filigrane Details, sorgfältig gefertigt — ein Blick auf Material, Oberfläche und Verarbeitung.' },
          { title: 'Unikat in Arbeit', text: 'Ein Unikat im Entstehungsprozess: von der Skizze zur Form, sichtbar in jeder Linie.' },
          { title: 'Restauration & Erhalt', text: 'Sorgsame Restauration: alte Stücke werden mit Respekt und handwerklicher Expertise wiederbelebt.' }
        ]
      }
    }
  },
  en: {
    translation: {
      siteTitle: 'Goldsmith Atelier',
      tagline: 'Craft precision · Made with dedication · From decades of experience',
      nav: { home: 'Home', about: 'Stefan Krauss', atelier: 'Atelier & Practice', services: 'Services', contact: 'Contact' },
      contactCta: 'Get in touch',
      heroLead: 'Reduced material aesthetics — posture over action.',
      hero: {
        slides: [
          { title: 'Goldsmith Atelier — Fine Craftsmanship', lead: 'Precise, understated and enduring — jewellery with character.' },
          { title: 'Bespoke Pieces & Restoration', lead: 'Unique pieces with personality; carefully crafted and expertly restored.' },
          { title: 'Consultation & Creation', lead: 'Personal guidance from initial sketch to the finished piece.' },
          { title: 'Workshop & Practice', lead: 'Clear processes, considered material choices and timeless design.' }
        ]
      },
      about: {
        title: 'Stefan Krauss',
        intro1: 'For over four decades I have worked as a master goldsmith. My roots lie with the jeweller Günter Krauss Schmuck. My professional path has led me through different areas of the craft and the trade — from managing a workshop focused on pearls to roles in purchasing and sales and to direct customer interaction in the retail shop. This has given me a broad understanding of the craft and the complex demands of this special world. These varied experiences continue to shape my perspective. At the same time, Goldschmiedeatelier Krauss opens a new chapter: independent, connected to the past and with a clear view of the present.',
        portraitCaption: 'Portrait — Stefan Krauss',
        vitaTitle: 'Vita – Stefan Krauss',
        vita: [
          { year: '1982–1986', text: 'Training at the Pforzheim School of Goldsmithing' },
          { year: '1987–1990', text: 'Goldsmith at Günter Krauss Schmuck GmbH' },
          { year: '1991', text: 'Master craftsman (Goldsmith)' },
          { year: '1991–2000', text: 'Workshop manager at Günter Krauss Schmuck GmbH' },
          { year: '2001–2019', text: 'Gellner Schmuckmanufaktur GmbH & Co. KG — roles in production, sales and purchasing; international trade fair participation (e.g. Hong Kong, Kobe)' },
          { year: '2019–2022', text: 'Workshop and shop manager at Colleen B. Rosenblatt' },
          { year: '2022–2026', text: 'Managing Director, Günter Krauss Schmuck GmbH' },
          { year: 'since 2026', text: 'Founder, Goldschmiedeatelier Krauss' }
        ]
      }
      ,
      privacy: {
        title: 'Privacy Policy',
        intro: 'Protecting your personal data is important to us. This summary explains the types, scope and purpose of processing personal data.',
        responsibleTitle: 'Data Controller',
        responsible: 'Goldsmith Atelier — Owner: Stefan Krauss — Neuberg 11, 75210 Keltern — info@goldschmiedeatelier-krauss.de',
        collectedTitle: 'Collected Data',
        collected: 'We process e.g. contact details, order and billing information as well as information you provide to us voluntarily.',
        purposesTitle: 'Purposes',
        purposes: 'Data processing serves to handle enquiries, process orders and fulfil legal obligations.',
        rightsTitle: 'Your Rights',
        rights: 'You have the right to access, correct, delete and object. To exercise your rights, please contact us by email.',
        note: 'This page contains sample text. A full privacy policy should be tailored to your business and legally reviewed.'
      }
      ,
      contact: {
        name: 'Goldsmith Atelier',
        street: 'Neuberg 11',
        zipcity: '75210 Keltern',
        email: 'info@goldschmiedeatelier-krauss.de',
        phone: '+49 151 52662000',
        phoneRaw: '+4915152662000'
      },
      impressum: {
        title: 'Imprint',
        name: 'Goldsmith Atelier',
        owner: 'Owner: Karla Krauss',
        street: 'Neuberg 11',
        cityzip: '75210 Keltern',
        contactLabel: 'Contact',
        registryTitle: 'Company register / Tax',
        registry: 'Please insert company register details, VAT identification number and professional title where applicable.',
        note: 'Note: This is a sample imprint. Please have texts legally reviewed before publication.'
      },
      terms: {
        title: 'Terms & Conditions (T&C)',
        intro: 'The following sample terms govern the contractual relationship between the Goldsmith Atelier and customers within the scope of work and service contracts. Please adapt individually.',
        contractTitle: 'Contract Formation',
        contract: 'Offers are non-binding. A contract is concluded upon our order confirmation.',
        pricesTitle: 'Prices & Payment',
        prices: 'All prices include statutory VAT unless stated otherwise.',
        deliveryTitle: 'Delivery & Performance',
        delivery: 'Delivery times are non-binding unless explicitly agreed as binding.',
        warrantyTitle: 'Warranty',
        warranty: 'Statutory warranty rights apply. For work contracts, the contractor is entitled to subsequent performance.',
        note: 'This is sample text. For legally binding terms, we recommend legal review.'
      },
      payment: {
        title: 'Payment methods',
        intro: 'We accept the following payment methods:',
        methods: ['Bank transfer (prepayment)', 'Cash on collection', 'SEPA direct debit (by arrangement)'],
        note: 'For bespoke commissions, payment terms will be specified in the quote / order confirmation.'
      },
      shipping: {
        title: 'Shipping & Collection',
        intro: 'How we deliver your pieces:',
        methods: ['Collection from the atelier by appointment (free of charge)', 'Shipping via insured parcel (costs depend on destination)'],
        note: 'For high‑value items we recommend collection or prior arrangement. Delivery times are agreed individually.'
      }
      ,
        contactPage: {
          title: 'Contact',
          inquiryTitle: 'Enquiry',
          form: { name: 'Name', email: 'Email', message: 'Message', submit: 'Send' },
          openingHoursTitle: 'Opening hours',
          openingHoursText: 'Mon–Fri: by appointment\nSat: by appointment'
        },
        opening: {
          title: 'Opening hours',
          text: 'Mon–Fri: by appointment\nSat: by appointment',
          openInMaps: 'Open in Google Maps'
        },
        directions: {
          title: 'Directions',
          text: 'Neuberg 11\n75210 Keltern\nBy car: parking nearby. By public transport: take bus X/Y to stop Z.',
          openInMaps: 'Open in Google Maps'
        },
        services: {
          title: 'Services',
          list: ['Unique pieces', 'Repairs & restoration', 'Remodelling', 'Consultation & custom work']
        },
        atelier: {
          title: 'Atelier & Practice',
          description: 'Good work starts with careful observation.\n\nCraft precision, dedication to material and decades of experience guide my work. Each piece is created with care, personal responsibility and the aim of producing solutions that endure. I focus on work that convinces on a craft level and preserves value — whether in new commissions or in continuing existing jewellery.\n\nMy working approach is characterised by calm, clarity and reliability. Agreements are made on equal terms and decisions are taken with a realistic view of feasibility and quality. Seriousness for me arises from experience, responsibility and a calm presence — not from volume.\n\nQuality shows in the detail.',
          positioningHeading: 'A strong network',
          positioning: 'A strong network expands possibilities. Over many years a resilient network has grown, providing short channels and close ties to the trade. It extends the craft capabilities and grants access to specialised techniques — always with the aim of realising the best possible solution for each task.\n\nQuality shows in the detail.'
        },
      footer: {
        aboutTitle: 'About us',
        links: {
          about: 'About',
          openingHours: 'Opening hours',
          directions: 'Directions',
          contact: 'Contact',
          sitemap: 'Sitemap'
        },
        legalTitle: 'Legal',
        legalLinks: {
          impressum: 'Imprint',
          privacy: 'Privacy Policy',
          terms: 'Terms & Conditions',
          payment: 'Payment methods',
          shipping: 'Shipping methods'
        },
        copyright: '© {{year}} Goldsmith Atelier · All rights reserved'
      }
      ,
      home: {
        tiles: [
          { title: 'Atelier & Practice', text: 'Reduced material aesthetics, posture over action.', link: '/atelier' },
          { title: 'Services', text: 'Unique pieces, repairs, restorations, remodelling.', link: '/services' },
          { title: 'About Stefan', text: 'Decades of craft, focused moments and refined details.', link: '/about' }
        ]
        ,
        featurePhotos: [
          { title: 'Fine Detail', text: 'Delicate details, carefully crafted — a close look at material and finish.' },
          { title: 'Bespoke Piece in Progress', text: 'A bespoke piece in progress — from sketch to form, craftsmanship made visible.' },
          { title: 'Restoration & Conservation', text: 'Careful restoration: bringing older pieces back to life with respect and expert skill.' }
        ]
      }
    }
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'de',
  fallbackLng: 'de',
  interpolation: { escapeValue: false }
})

// If the app is already running with English as current language,
// trigger translation of missing keys immediately.
if (i18n.language === 'en') {
  // run in background
  translateMissingToEn()
}
// Auto-translate missing German -> English keys when switching to English.
// Controlled by Vite env `VITE_AUTO_TRANSLATE` (default: enabled) and
// optional `VITE_TRANSLATE_API_URL` (default: libretranslate.de public instance).
const AUTO_TRANSLATE = !(import.meta.env.VITE_AUTO_TRANSLATE === 'false')
const TRANSLATE_API = import.meta.env.VITE_TRANSLATE_API_URL || 'https://libretranslate.de/translate'

function flattenStrings(obj, prefix = '', out = {}) {
  if (typeof obj === 'string') {
    out[prefix] = obj
    return out
  }
  if (Array.isArray(obj)) {
    obj.forEach((v, i) => flattenStrings(v, prefix ? `${prefix}.${i}` : `${i}`, out))
    return out
  }
  if (obj && typeof obj === 'object') {
    Object.keys(obj).forEach(k => flattenStrings(obj[k], prefix ? `${prefix}.${k}` : k, out))
  }
  return out
}

function setNested(obj, path, value) {
  const parts = path.split('.')
  let cur = obj
  for (let i = 0; i < parts.length; i++) {
    const p = parts[i]
    const nxt = parts[i + 1]
    const isIndex = !isNaN(parseInt(nxt))
    if (i === parts.length - 1) {
      // last
      if (/^\d+$/.test(p)) {
        cur[parseInt(p)] = value
      } else {
        cur[p] = value
      }
    } else {
      if (/^\d+$/.test(p)) {
        const idx = parseInt(p)
        cur[idx] = cur[idx] || (isIndex ? [] : {})
        cur = cur[idx]
      } else {
        cur[p] = cur[p] || (isIndex ? [] : {})
        cur = cur[p]
      }
    }
  }
}

async function translateText(text, source = 'de', target = 'en') {
  try {
    const res = await fetch(TRANSLATE_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ q: text, source, target, format: 'text' })
    })
    if (!res.ok) return ''
    const json = await res.json()
    // LibreTranslate returns { translatedText: '...' }
    if (json.translatedText) return json.translatedText
    // fallback: some instances return an array
    if (Array.isArray(json) && json[0] && json[0].translatedText) return json[0].translatedText
    return ''
  } catch (e) {
    console.warn('Translate failed', e)
    return ''
  }
}

async function translateMissingToEn() {
  if (!AUTO_TRANSLATE) return
  try {
    const deRes = resources.de && resources.de.translation ? resources.de.translation : {}
    const enRes = (resources.en && resources.en.translation) ? JSON.parse(JSON.stringify(resources.en.translation)) : {}

    const flatDe = flattenStrings(deRes)
    const flatEn = flattenStrings(enRes)

    const missingKeys = Object.keys(flatDe).filter(k => !flatEn[k] || flatEn[k] === '')
    if (!missingKeys.length) return

    // translate sequentially to be gentle with public endpoints
    for (const key of missingKeys) {
      const src = flatDe[key]
      if (!src || typeof src !== 'string') continue
      const translated = await translateText(src, 'de', 'en')
      if (translated) {
        setNested(enRes, key, translated)
      }
    }

    // merge into i18n resources at runtime
    i18n.addResourceBundle('en', 'translation', enRes, true, true)
  } catch (e) {
    console.warn('Auto-translate process failed', e)
  }
}

// Trigger translation when language switches to 'en'
i18n.on && i18n.on('languageChanged', (lng) => {
  if (lng === 'en') {
    // run in background
    translateMissingToEn()
  }
})

export default i18n
