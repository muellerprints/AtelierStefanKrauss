import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  de: {
    translation: {
      siteTitle: 'Goldschmiedeatelier Krauss',
      brandWordmark: 'Goldschmiedeatelier',
      tagline: 'Handwerkliche Präzision · Mit Hingabe gearbeitet · Aus jahrzehntelanger Erfahrung',
      nav: {
        home: 'Startseite',
        about: 'Stefan Krauss',
        atelier: 'Atelier',
        services: 'Leistungen',
        contact: 'Kontakt'
      },
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
          {
            title: 'Willkommen im Goldschmiedeatelier Krauss',
            lead: 'Handwerkliche Präzision · Mit Hingabe gearbeitet · Aus jahrzehntelanger Erfahrung'
          },
          {
            title: 'Unikate & Restaurationen',
            lead: 'Einzelstücke mit Persönlichkeit, sorgsame Anfertigung und fachgerechte Wiederherstellung.'
          },
          {
            title: 'Beratung & Anfertigung',
            lead: '<span class="accent-blue">Persönliche Begleitung von der Skizze bis zum fertigen Schmuckstück.</span>'
          },
          {
            title: 'Werkstatt & Arbeitsweise',
            lead: 'Klare Prozesse, durchdachte Materialwahl und zeitlose Gestaltung.'
          }
        ]
      },
      about: {
        title: 'Stefan Krauss',
        intro1: 'Seit über vier Jahrzehnten arbeite ich als Goldschmiedemeister. Meine Wurzeln liegen im Juwelierhaus Günter Krauss Schmuck. Mein beruflicher Weg führte mich durch unterschiedliche Bereiche des Handwerks und der Branche - von der Leitung einer Werkstatt mit Schwerpunkt auf Perlen über Tätigkeiten im Einkauf und Vertrieb bis hin zum direkten Austausch mit Kundinnen und Kunden im Ladengeschäft. So entwickelte sich ein breites Verständnis für das Handwerk und die vielschichtigen Anforderungen dieser besonderen Welt. Diese unterschiedlichen Erfahrungen prägen meinen Blick bis heute. Zugleich wird mit dem Goldschmiedeatelier Krauss ein neues Kapitel aufgeschlagen: eigenständig, verbunden mit der Vergangenheit und mit klarem Blick für das Heute.',
        portraitCaption: 'Stefan Krauss',
        vitaTitle: 'Vita - Tätigkeiten & Stationen',
        vita: [
          {
            year: '1982–1986',
            text: 'Ausbildung an der Goldschmiedeschule Pforzheim'
          },
          {
            year: '1987–1990',
            text: 'Goldschmied bei Günter Krauss Schmuck GmbH'
          },
          {
            year: '1991',
            text: 'Meisterprüfung zum Goldschmiedemeister'
          },
          {
            year: '1991–2000',
            text: 'Werkstattleiter bei Günter Krauss Schmuck GmbH'
          },
          {
            year: '2001–2019',
            text: 'Gellner Schmuckmanufaktur GmbH & Co. KG — Produktionsleitung, Vertrieb und Einkauf, internationale Messeteilnahmen (u. a. Hongkong, Kobe)'
          },
          {
            year: '2019–2022',
            text: 'Werkstatt- und Shopleiter Colleen B. Rosenblatt'
          },
          {
            year: '2022–2026',
            text: 'Geschäftsführer Günter Krauss Schmuck GmbH'
          },
          {
            year: 'seit 2026',
            text: 'Gründung Goldschmiedeatelier Krauss'
          }
        ]
      },
      privacy: {
        purposesTitle: 'Zwecke',
        purposes: 'Datenverarbeitung dient zur Bearbeitung von Anfragen, zur Auftragsabwicklung und zur Erfüllung gesetzlicher Pflichten.',
        rightsTitle: 'Rechte',
        rights: 'Sie haben Auskunfts-, Berichtigungs-, Löschungs- und Widerspruchsrechte. Zur Ausübung kontaktieren Sie uns bitte per E‑Mail.',
        note: 'Diese Seite ist ein Muster. Eine vollständige Datenschutzerklärung sollte prüfbar und vollständig auf die Geschäftsprozesse abgestimmt werden.'
        ,
        fullHtml: `
          <h2>Datenschutzerklärung</h2>
          <br/>
          <ol>
            <li>
              <h4>Verantwortlicher</h4>
              <p>Verantwortlich für die Datenverarbeitung im Sinne der DSGVO ist: Max Müller, Rotenbergstraße 39, 70190 Stuttgart, Deutschland. Tel.: +49 (0)711 / 262 49 64, Fax: +49 (0)711 / 262 48 60, E‑Mail: <a href="mailto:muellerprints@t-online.de">muellerprints@t-online.de</a>.</p>
              <p>Der für die Verarbeitung Verantwortliche ist diejenige natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.</p>
              <p>Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung personenbezogener Daten eine SSL‑ bzw. TLS‑Verschlüsselung. Sie erkennen eine verschlüsselte Verbindung an der Zeichenfolge „https://“ und dem Schloss‑Symbol in der Browserzeile.</p>
            </li>
            <li>
              <h4>Rechtsgrundlagen der Verarbeitung</h4>
              <p>Die Datenverarbeitung erfolgt auf Basis der Datenschutz‑Grundverordnung (DSGVO). Relevante Rechtsgrundlagen sind insbesondere:</p>
              <ul>
                <li>Art. 6 Abs. 1 lit. b DSGVO — Verarbeitung zur Erfüllung eines Vertrags bzw. zur Durchführung vorvertraglicher Maßnahmen (z. B. Bearbeitung von Anfragen, Auftragsabwicklung),</li>
                <li>Art. 6 Abs. 1 lit. f DSGVO — berechtigtes Interesse (z. B. Server‑ und IT‑Sicherheit, Protokollierung),</li>
                <li>Art. 6 Abs. 1 lit. a DSGVO — Einwilligung, wenn diese im Einzelfall eingeholt wurde.</li>
              </ul>
            </li>
            <li>
              <h4>Zwecke der Verarbeitung</h4>
              <p>Die Datenverarbeitung dient der Beantwortung von Kontaktanfragen, der Abwicklung von Aufträgen, der Erfüllung rechtlicher Pflichten und der Gewährleistung der IT‑Sicherheit.</p>
            </li>
            <li>
              <h4>Externe Inhalte und Drittanbieter</h4>
              <p>Wir verwenden keine eigenen Tracking‑Cookies oder Web‑Analysen. Beim Laden externer Inhalte können jedoch Verbindungen zu Drittanbietern entstehen, die dort Daten verarbeiten oder Cookies setzen. Beispiele:</p>
              <ul>
                <li><b>Google Fonts:</b> Schriftarten werden von fonts.googleapis.com geladen; hierfür wird eine Anfrage an Google‑Server gesendet.</li>
                <li><b>Google Maps‑Embed:</b> Die Einbettung von Google Maps erfolgt über einen iframe. Bei Nutzung des Embeds können Daten an Google übermittelt werden und Cookies unter der Domain google.com gesetzt werden.</li>
              </ul>
            </li>
            <li>
              <h4>Verarbeitung von Kontaktanfragen und E‑Mails</h4>
              <p>Nachrichtentexte, Absenderadresse und Anhänge, die Sie über das Kontaktformular senden, werden verarbeitet, um Ihre Anfrage zu beantworten. Wir nutzen für den Versand von E‑Mails einen SMTP‑Dienst (konfigurierbar über Umgebungsvariablen). Anbieter: <strong>IONOS</strong>. Wir haben mit IONOS einen Auftragsverarbeitungsvertrag (AVV / Data Processing Agreement) abgeschlossen.</p>
              <p>Kontaktmails werden standardmäßig für <strong>6 Monate</strong> gespeichert und anschließend gelöscht, sofern keine gesetzlichen Aufbewahrungsfristen (z. B. steuerrechtliche Fristen) entgegenstehen. In Entwicklungsumgebungen können Nachrichten vorübergehend in server/mail-dev.log geschrieben werden; auf Produktivsystemen wird dies nicht verwendet.</p>
            </li>
            <li>
              <h4>Protokollierung, Sicherheit und Aufbewahrung</h4>
              <p>Server‑Logfiles (z. B. Zugriffs‑ und Fehlerprotokolle) können IP‑Adressen, Zeitstempel und Metadaten von Anfragen enthalten. Standardaufbewahrungsfrist für Serverlogs: <strong>90 Tage</strong>. Logs werden danach rotiert, gelöscht oder anonymisiert. Soweit steuer‑ oder handelsrechtliche Aufbewahrungspflichten bestehen, gelten die gesetzlichen Fristen (z. B. in der Regel bis zu <strong>10 Jahre</strong> für steuerrelevante Unterlagen).</p>
            </li>
            <li>
              <h4>Ihre Rechte und Aufsichtsbehörde</h4>
              <p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung sowie Widerspruch und Datenübertragbarkeit gemäß der DSGVO. Zur Ausübung Ihrer Rechte kontaktieren Sie uns bitte über die im Impressum angegebene E‑Mail‑Adresse.</p>
              <p>Sie haben außerdem das Recht, eine Beschwerde bei der zuständigen Aufsichtsbehörde einzureichen. Zuständige Aufsichtsbehörde in Baden‑Württemberg:</p>
              <p><b>Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden‑Württemberg</b> — <a href="https://www.baden-wuerttemberg.datenschutz.de/">https://www.baden-wuerttemberg.datenschutz.de/</a></p>
            </li>
            <li>
              <h4>Änderungen dieser Datenschutzerklärung</h4>
              <p>Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen. Die jeweils aktuelle Version finden Sie auf dieser Website.</p>
            </li>
          </ol>
        `
      },
      impressum: {
        title: 'Impressum',
        name: 'Goldschmiedeatelier',
        owner: 'Inhaber: Karla Krauss',
        street: 'Neuberg 11',
        cityzip: '75210 Keltern',
        vatId: 'Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE 460812502',
        odr: `Plattform der EU-Kommission zur Online-Streitbeilegung: <a href="https://ec.europa.eu/consumers/odr">https://ec.europa.eu/consumers/odr</a>
Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle weder verpflichtet noch bereit.`,
        contactLabel: 'Kontakt',
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
        methods: [
          'Überweisung (Vorkasse)',
          'Barzahlung bei Abholung',
          'SEPA‑Lastschrift (nach Vereinbarung)'
        ],
        note: 'Bei individuellen Auftragsarbeiten werden Zahlungsmodalitäten im Angebot / der Auftragsbestätigung festgehalten.'
      },
      shipping: {
        title: 'Versand & Abholung',
        intro: 'So liefern wir Ihre Stücke:',
        methods: [
          'Abholung im Atelier nach Terminvereinbarung (kostenlos)',
          'Versand per versichertem Paket (kostenpflichtig, abhängig vom Ziel)'
        ],
        note: 'Bei Wertsendungen empfehlen wir die Abholung oder eine vorherige Absprache. Lieferzeiten werden individuell vereinbart.'
      },
      contactPage: {
        title: 'Kontakt',
        inquiryTitle: 'Anfrage',
        form: {
          name: 'Name',
          email: 'Email',
          message: 'Nachricht',
          submit: 'Absenden'
        },
        sending: 'Sende...',
        uploadPrompt: 'Ziehe Dateien hierher ({{types}})',
        browse: 'durchsuchen',
        or: 'oder',
        remove: 'Entfernen',
        fileTooLarge: 'Die Datei {{filename}} ist zu groß. Maximal {{max}} MB.',
        sentOk: 'Vielen Dank — Ihre Nachricht wurde versendet.',
        sentError: 'Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es später oder schreiben Sie direkt an {{email}}.',
        openingHoursTitle: 'Öffnungszeiten',
        openingHoursText: `Mo–Fr: nach Vereinbarung
Sa: nach Vereinbarung`
      },
      opening: {
        title: 'Öffnungszeiten',
        text: `Mo–Fr: nach Vereinbarung
Sa: nach Vereinbarung`,
        openInMaps: 'In Google Maps öffnen'
      },
      directions: {
        title: 'Anfahrt',
        text: `Neuberg 11
75210 Keltern
Anfahrt mit dem Auto: Parkmöglichkeiten in der Nähe. Mit öffentlichen Verkehrsmitteln: Buslinien X/Y bis Haltestelle Z.`,
        openInMaps: 'In Google Maps öffnen'
      },
      services: {
        title: 'Leistungsspektrum',
        headings: [
          'Kernleistungen',
          'Erweiterte Möglichkeiten'
        ],
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
          'Netzwerk zu allen Gold- und Siberschmiedtechniken'
        ]
      },
      atelier: {
        title: 'Atelier & Arbeitsweise',
        description: `Gute Arbeit beginnt mit genauem Hinsehen.

Handwerkliche Präzision, Hingabe zum Material und jahrzehntelange Erfahrung leiten mein Arbeiten. Jedes Stück entsteht mit Sorgfalt, persönlicher Verantwortung und dem Anspruch, Lösungen zu schaffen, die langfristig Bestand haben. Ich konzentriere mich auf Arbeiten, die handwerklich überzeugen und Wert erhalten — sei es in der Neuanfertigung oder in der Weiterführung bestehender Schmuckstücke.

Meine Arbeitsweise ist geprägt von Ruhe, Klarheit und Verlässlichkeit. Absprachen erfolgen auf Augenhöhe, Entscheidungen mit einem realistischen Blick für Machbarkeit und Qualität. Seriosität entsteht für mich durch Erfahrung, Verantwortung und eine ruhige Präsenz — nicht durch Lautstärke.

Qualität zeigt sich im Detail.`,
        positioningHeading: 'Ein starkes Netzwerk',
        positioning: `Ein starkes Netzwerk erweitert die Möglichkeiten. Über viele Jahre hinweg ist ein tragfähiges Netzwerk gewachsen, das kurze Wege und unmittelbare Nähe zur Branche ermöglicht. Es erweitert die handwerklichen Möglichkeiten und schafft Zugriff auf spezialisierte Techniken — immer mit dem Ziel, für jede Aufgabe die bestmögliche Lösung zu realisieren.

Qualität zeigt sich im Detail.`
      },
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
        copyright: '© {{year}} Goldschmiedeatelier · Alle Rechte vorbehalten',
        ticker: {
          goldschmied: 'Goldschmied',
          unikat: 'Unikat',
          reparatur: 'Reparatur',
          restauration: 'Restauration',
          umarbeitung: 'Umarbeitung',
          handwerk: 'Handwerk',
          schmuck: 'Schmuck',
          atelier: 'Atelier'
        }
      },
      home: {
        tiles: [
          {
            title: 'Atelier & Arbeitsweise',
            text: 'Reduzierte Materialästhetik · Haltung vor Aktion.',
            link: '/atelier'
          },
          {
            title: 'Leistungen',
            text: 'Unikate · Reparaturen · Restaurationen · Umarbeitungen',
            link: '/services'
          },
          {
            title: 'Über Stefan Krauss',
            text: 'Persönlich · Erfahren · Handwerklich präzise',
            link: '/about'
          }
        ],
        featurePhotos: [
          {
            title: 'Feines Detail',
            text: 'Filigrane Details, sorgfältig gefertigt — ein Blick auf Material, Oberfläche und Verarbeitung.'
          },
          {
            title: 'Unikat in Arbeit',
            text: 'Ein Unikat im Entstehungsprozess: von der Skizze zur Form, sichtbar in jeder Linie.'
          },
          {
            title: 'Reparatur & Erhalt',
            text: 'Sorgsame Reparatur: Schmuckstücke werden mit Respekt und handwerklicher Expertise aufgearbeitet.'
          }
        ],
        photoLabels: [
          'Manschettenknöpfe, schwarzer Diamant',
          'Diamantring in Weißgold',
          'Handgefertigte Kette',
          'Unikatring mit Zeichnung',
          'Diamantringe, Unikate',
          'Ohrstecker, Morganit, Rubine',
          'Traditionelle Technik',
          'Meisterliche Verarbeitung',
          'Feine Gravur',
          'Zeitloses Design',
          'Handwerkliche Präzision',
          'Original & Restauration',
          'Kostbare Materialien',
          'Individuelle Anfertigung',
          'Sorgfältige Fassung',
          'Einzigartiges Schmuckstück'
        ]
      }
    }
  },
  en: {
    translation: {
      siteTitle: 'Goldsmith Atelier',
      brandWordmark: 'Goldsmith Atelier',
      tagline: 'Craft precision · Made with dedication · From decades of experience',
      nav: {
        home: 'Home',
        about: 'Stefan Krauss',
        atelier: 'Atelier',
        services: 'Services',
        contact: 'Contact'
      },
      contactCta: 'Get in touch',
      contact: {
        name: 'Goldsmith Atelier',
        street: 'Neuberg 11',
        zipcity: '75210 Keltern',
        email: 'info@goldschmiedeatelier-krauss.de',
        phone: '+49 151 52662000',
        phoneRaw: '+4915152662000'
      },
      heroLead: 'Reduced material aesthetics — posture over action.',
      hero: {
        slides: [
          {
            title: 'Goldsmith Atelier — Fine Craftsmanship',
            lead: 'Precise, understated and enduring — jewellery with character.'
          },
          {
            title: 'Bespoke Pieces & Restoration',
            lead: 'Unique pieces with personality, carefully crafted and expertly restored.'
          },
          {
            title: 'Consultation & Creation',
            lead: '<span class="accent-blue">Personal guidance from initial sketch to the finished piece.</span>'
          },
          {
            title: 'Workshop & Practice',
            lead: 'Clear processes, considered material choices and timeless design.'
          }
        ]
      },
      about: {
        title: 'Stefan Krauss',
        intro1: 'For more than four decades I have practised as a master goldsmith. My roots are in the jeweller Günter Krauss Schmuck. Throughout my career I have worked across many areas of the craft and the trade — from leading a workshop with a focus on pearls, through roles in purchasing and sales, to direct customer contact in retail. These experiences have given me a broad and nuanced understanding of the craft and its varied demands, which still shape my perspective today. With the founding of Goldschmiedeatelier Krauss a new chapter begins: independent, mindful of tradition and with a clear view of the present.',
        portraitCaption: 'Stefan Krauss',
        vitaTitle: 'Vita — Roles & Stations',
        vita: [
          {
            year: '1982–1986',
            text: 'Apprenticeship at the Pforzheim School of Goldsmithing'
          },
          {
            year: '1987–1990',
            text: 'Goldsmith at Günter Krauss Schmuck GmbH'
          },
          {
            year: '1991',
            text: 'Master craftsman qualification (Goldsmith)'
          },
          {
            year: '1991–2000',
            text: 'Workshop manager at Günter Krauss Schmuck GmbH'
          },
          {
            year: '2001–2019',
            text: 'Gellner Schmuckmanufaktur GmbH & Co. KG — production management, sales and purchasing, international trade fair participation (e.g. Hong Kong, Kobe)'
          },
          {
            year: '2019–2022',
            text: 'Workshop and shop manager at Colleen B. Rosenblatt'
          },
          {
            year: '2022–2026',
            text: 'Managing Director, Günter Krauss Schmuck GmbH'
          },
          {
            year: 'since 2026',
            text: 'Founder of Goldschmiedeatelier Krauss'
          }
        ]
      },
      privacy: {
        purposesTitle: 'Purposes',
        purposes: 'Data processing serves to handle enquiries, process orders and fulfil legal obligations.',
        rightsTitle: 'Your Rights',
        rights: 'You have the right to access, correct, delete and object. To exercise your rights, please contact us by email.',
        note: 'This page contains sample text. A full privacy policy should be tailored to your business and legally reviewed.',
        title: 'Privacy Policy',
        intro: 'Protecting your personal data is important to us. This summary explains the types, scope and purpose of processing personal data.',
        responsibleTitle: 'Data Controller',
        responsible: 'Goldsmith Atelier — Owner: Stefan Krauss — Neuberg 11, 75210 Keltern — info@goldschmiedeatelier-krauss.de',
        collectedTitle: 'Collected Data',
        collected: 'We process e.g. contact details, order and billing information as well as information you provide to us voluntarily.',
        fullHtml: `
          <h2>Privacy Policy</h2>
          <br/>
          <ol>
            <li>
              <h4>Data controller</h4>
              <p>The data controller in the sense of the GDPR is: Max Müller, Rotenbergstraße 39, 70190 Stuttgart, Germany. Tel.: +49 (0)711 262 49 64, Fax: +49 (0)711 262 48 60, Email: <a href="mailto:muellerprints@t-online.de">muellerprints@t-online.de</a>.</p>
              <p>The data controller is the natural or legal person which alone or jointly with others determines the purposes and means of the processing of personal data.</p>
              <p>This website uses SSL/TLS encryption to protect the transmission of personal data. You can identify an encrypted connection by the "https://" prefix and the padlock symbol in your browser's address bar.</p>
            </li>
            <li>
              <h4>Legal bases for processing</h4>
              <p>Processing is based on the EU General Data Protection Regulation (GDPR). Relevant legal bases include:</p>
              <ul>
                <li>Article 6(1)(b) GDPR — processing necessary for the performance of a contract or to take steps prior to entering into a contract (e.g. handling enquiries, order processing),</li>
                <li>Article 6(1)(f) GDPR — legitimate interests (e.g. IT security, logging),</li>
                <li>Article 6(1)(a) GDPR — consent, where obtained.</li>
              </ul>
            </li>
            <li>
              <h4>Purposes of processing</h4>
              <p>Data are processed to respond to contact enquiries, to fulfil orders, to meet legal obligations and to ensure IT security.</p>
            </li>
            <li>
              <h4>External content and third parties</h4>
              <p>We do not operate our own tracking cookies or web analytics. When loading external content, connections to third parties may occur and those parties may process data or set cookies. Examples:</p>
              <ul>
                <li><b>Google Fonts:</b> Fonts are loaded from fonts.googleapis.com; this causes requests to Google's servers.</li>
                <li><b>Google Maps embed:</b> The Google Maps embed is provided via an iframe. Using the embed may transmit data to Google and cookies may be set under the google.com domain.</li>
              </ul>
            </li>
            <li>
              <h4>Email handling and data processors</h4>
              <p>Contact form messages, sender addresses and attachments are processed to respond to enquiries. We use an SMTP service for delivery (configured via environment variables). Provider: <strong>IONOS</strong>. We have concluded a data processing agreement (DPA) with IONOS.</p>
              <p>Contact messages are retained for <strong>6 months</strong> by default and then deleted unless statutory retention obligations apply. In development, messages may be written to server/mail-dev.log; on production systems this is not used.</p>
            </li>
            <li>
              <h4>Logging, security and retention</h4>
              <p>Server logs (access and error logs) may contain IP addresses, timestamps and request metadata. Standard retention for server logs is <strong>90 days</strong>; logs are then rotated, deleted or anonymised. Where tax or commercial retention obligations apply, statutory retention periods apply (e.g. up to <strong>10 years</strong> for tax‑relevant documents in Germany).</p>
            </li>
            <li>
              <h4>Your rights & supervisory authority</h4>
              <p>You have the right to access, correct, delete and object to processing of your personal data. To exercise your rights, please contact us using the email address in the imprint.</p>
              <p>You also have the right to lodge a complaint with the competent supervisory authority. Competent authority in Baden‑Württemberg:</p>
              <p><b>Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden‑Württemberg</b> — <a href="https://www.baden-wuerttemberg.datenschutz.de/">https://www.baden-wuerttemberg.datenschutz.de/</a></p>
            </li>
            <li>
              <h4>Changes to this privacy policy</h4>
              <p>We may update this privacy policy from time to time. The current version will always be available on this website.</p>
            </li>
          </ol>
        `
      },
      impressum: {
        title: 'Imprint',
        name: 'Goldsmith Atelier',
        owner: 'Owner: Karla Krauss',
        street: 'Neuberg 11',
        cityzip: '75210 Keltern',
        vatId: 'VAT identification number according to § 27 a German VAT Act: DE 460812502',
        odr: `EU Commission platform for online dispute resolution: <a href="https://ec.europa.eu/consumers/odr">https://ec.europa.eu/consumers/odr</a>
We are neither obliged nor willing to participate in dispute resolution proceedings before a consumer arbitration board.`,
        contactLabel: 'Contact',
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
        methods: [
          'Bank transfer (prepayment)',
          'Cash on collection',
          'SEPA direct debit (by arrangement)'
        ],
        note: 'For bespoke commissions, payment terms will be specified in the quote / order confirmation.'
      },
      shipping: {
        title: 'Shipping & Collection',
        intro: 'How we deliver your pieces:',
        methods: [
          'Collection from the atelier by appointment (free of charge)',
          'Shipping via insured parcel (costs depend on destination)'
        ],
        note: 'For high‑value items we recommend collection or prior arrangement. Delivery times are agreed individually.'
      },
      contactPage: {
        title: 'Contact',
        inquiryTitle: 'Enquiry',
        form: {
          name: 'Name',
          email: 'Email',
          message: 'Message',
          submit: 'Send'
        },
        sending: 'Sending...',
        uploadPrompt: 'Drag files here ({{types}})',
        browse: 'browse',
        or: 'or',
        remove: 'Remove',
        fileTooLarge: 'File {{filename}} is too large. Maximum {{max}} MB.',
        sentOk: 'Thank you — your message was sent.',
        sentError: 'An error occurred while sending. Please try again later or contact us at {{email}}.',
        openingHoursTitle: 'Opening hours',
        openingHoursText: `Mon–Fri: by appointment
Sat: by appointment`
      },
      opening: {
        title: 'Opening hours',
        text: `Mon–Fri: by appointment
Sat: by appointment`,
        openInMaps: 'Open in Google Maps'
      },
      directions: {
        title: 'Directions',
        text: `Neuberg 11
75210 Keltern
By car: parking nearby. By public transport: take bus X/Y to stop Z.`,
        openInMaps: 'Open in Google Maps'
      },
      services: {
        title: 'Services',
        headings: [
          'Core Services',
          'Extended Capabilities'
        ],
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
          'Network to all goldsmith and silversmith techniques'
        ]
      },
      atelier: {
        title: 'Atelier & Practice',
        description: `Good work starts with careful observation.

Craft precision, dedication to material and decades of experience guide my work. Each piece is created with care, personal responsibility and the aim of producing solutions that endure. I focus on work that convinces on a craft level and preserves value — whether in new commissions or in continuing existing jewellery.

My working approach is characterised by calm, clarity and reliability. Agreements are made on equal terms and decisions are taken with a realistic view of feasibility and quality. Seriousness for me arises from experience, responsibility and a calm presence — not from volume.

Quality shows in the detail.`,
        positioningHeading: 'A strong network',
        positioning: `A strong network expands possibilities. Over many years a resilient network has grown, providing short channels and close ties to the trade. It extends the craft capabilities and grants access to specialised techniques — always with the aim of realising the best possible solution for each task.

Quality shows in the detail.`
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
        copyright: '© {{year}} Goldsmith Atelier · All rights reserved',
        ticker: {
          goldschmied: 'Goldsmith',
          unikat: 'Unique Piece',
          reparatur: 'Repair',
          restauration: 'Restoration',
          umarbeitung: 'Remodelling',
          handwerk: 'Craftsmanship',
          schmuck: 'Jewellery',
          atelier: 'Atelier'
        }
      },
      home: {
        tiles: [
          {
            title: 'Atelier & Practice',
            text: 'Reduced material aesthetics · Posture over action.',
            link: '/atelier'
          },
          {
            title: 'Services',
            text: 'Unique pieces · Repairs · Restorations · Remodelling',
            link: '/services'
          },
          {
            title: 'About Stefan Krauss',
            text: 'Personal · Experienced · Craft precision',
            link: '/about'
          }
        ],
        featurePhotos: [
          {
            title: 'Fine Detail',
            text: 'Delicate details, carefully crafted — a look at material, surface and finish.'
          },
          {
            title: 'Unique Piece in Progress',
            text: 'A unique piece in progress: from sketch to form, visible in every line.'
          },
          {
            title: 'Repair & Preservation',
            text: 'Careful repair: jewellery is refurbished with respect and craft expertise.'
          }
        ],
        photoLabels: [
          'Cufflinks, black diamond',
          'Diamond ring in white gold',
          'Handcrafted chain',
          'Unique ring with sketch',
          'Diamond rings, unique pieces',
          'Earrings, morganite, rubies',
          'Traditional technique',
          'Master craftsmanship',
          'Fine engraving',
          'Timeless design',
          'Craft precision',
          'Original & restoration',
          'Precious materials',
          'Custom made',
          'Careful setting',
          'Unique jewellery piece'
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
  // update document language for screen readers and UA heuristics
  try {
    if (typeof document !== 'undefined' && document.documentElement) document.documentElement.lang = lng
  } catch (e) {
    // ignore — server-side rendering or test environments may not have document
  }

  if (lng === 'en') {
    // run in background
    translateMissingToEn()
  }
})

export default i18n
