import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  de: {
    translation: {
      siteTitle: 'Goldschmiedeatelier Krauss',
      brandWordmark: 'Goldschmiedeatelier',
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
          headings: ['Kernleistungen', 'Erweiterte Möglichkeiten'],
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
        vatId: 'Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE 123456789',
        odr: 'Plattform der EU-Kommission zur Online-Streitbeilegung: <a href="https://ec.europa.eu/consumers/odr">https://ec.europa.eu/consumers/odr</a>\nWir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle weder verpflichtet noch bereit.',
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
        ,
        photoLabels: [
          'Siegelring in Silber',
          'Handgefertigter Ring',
          'Werkzeug & Handwerk',
          'Unikat in Entstehung',
          'Edles Material',
          'Detailarbeit',
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
      ,
        // Full English HTML version of the Datenschutzerklärung (shows on the privacy page when language is 'en')
        fullHtml: `
          <h2>Privacy Policy</h2>
          <br/>
          <h4>1) Information about the collection of personal data and contact details of the controller</h4>

          <b>1.1</b> We appreciate your visit to our website and thank you for your interest. Below we inform you about how we handle your personal data when you use our website. Personal data means any data that can be used to personally identify you.
          <br/>
          <b>1.2</b> The controller for data processing on this website within the meaning of the General Data Protection Regulation (GDPR) is Goldsmith Atelier — Owner: Karla Krauss — Neuberg 11, 75210 Keltern — info@goldschmiedeatelier-krauss.de, Tel.: +49 151 52662000. The controller is the natural or legal person who, alone or jointly with others, determines the purposes and means of processing personal data.
          <br/>
          <b>1.3</b> For security reasons and to protect the transmission of personal data and other confidential content (e.g. orders or enquiries to the controller), this website uses SSL/TLS encryption. You can recognize a secure connection by the string "https://" and the lock icon in your browser address bar.
          <br/><br/>
          <h4>2) Data collected when visiting our website</h4>
          When using our website for informational purposes only — i.e. if you do not register or transmit other information to us — we only collect the data that your browser transmits to our server (so-called "server log files"). When you access our website, we collect the following data that is technically necessary for us to display the website:
          <br/><br/>
          <ul>
            <li>The website you visited</li>
            <li>Date and time of access</li>
            <li>Amount of data transferred in bytes</li>
            <li>Referrer URL</li>
            <li>Browser used</li>
            <li>Operating system used</li>
            <li>IP address used (possibly in anonymised form)</li>
          </ul>
          The processing is carried out pursuant to Art. 6(1)(f) GDPR on the basis of our legitimate interest in improving the stability and functionality of our website. The data will not be passed on or used otherwise. However, we reserve the right to retrospectively check server log files if there are concrete indications of unlawful use.
          <br/><br/>
          <h4>3) Cookies</h4>
          To make your visit to our website attractive and to enable the use of certain functions, we use so-called cookies on various pages. These are small text files that are stored on your device. Some of the cookies we use are deleted after the end of your browser session (session cookies). Other cookies remain on your device and enable us or our partner companies (third‑party cookies) to recognise your browser on your next visit (persistent cookies). Cookies may store information such as browser and location data and IP address values. Persistent cookies are deleted automatically after a predefined period, which depends on the individual cookie.
          <br/>
          Some cookies are used to simplify the ordering process by saving settings (e.g. remembering the contents of a virtual shopping cart for a later visit). If cookies used by us also process personal data, the processing is based either on Art. 6(1)(b) GDPR for contract performance or Art. 6(1)(f) GDPR for our legitimate interest in a well‑functioning and customer‑friendly website.
          <br/>
          We may work with advertising partners who help make our online offering more interesting. In such cases, cookies from partner companies may be stored on your device. If we work with such partners, we inform you individually below about the use of these cookies and the information collected.
          <br/>
          You can set your browser to inform you about cookies and to accept or reject them individually or in general. Each browser handles cookie settings differently; please consult your browser's help menu for instructions. Links for common browsers:
          <br/>
          <br/>Internet Explorer: <a href="https://support.microsoft.com/de-de/help/17442/windows-internet-explorer-delete-manage-cookies">https://support.microsoft.com/de-de/help/17442/windows-internet-explorer-delete-manage-cookies</a>
          <br/>Firefox: <a href="https://support.mozilla.org/de/kb/cookies-erlauben-und-ablehnen">https://support.mozilla.org/de/kb/cookies-erlauben-und-ablehnen</a>
          <br/>Chrome: <a href="https://support.google.com/chrome/answer/95647?hl=de&hlrm=en">https://support.google.com/chrome/answer/95647?hl=de&hlrm=en</a>
          <br/>Safari: <a href="https://support.apple.com/de-de/guide/safari/sfri11471/mac">https://support.apple.com/de-de/guide/safari/sfri11471/mac</a>
          <br/>Opera: <a href="https://help.opera.com/en/latest/web-preferences/#cookies">https://help.opera.com/en/latest/web-preferences/#cookies</a>
          <br/><br/>
          Please note that disabling cookies may restrict the functionality of our website.
          <br/><br/>
          <h4>4) Contact</h4>
          When you contact us (e.g. by contact form or e‑mail), personal data is collected. Which data is collected in a contact form is evident from the form itself. These data are stored and used exclusively for the purpose of answering your request and for the associated technical administration. The legal basis for processing is our legitimate interest in answering your enquiry pursuant to Art. 6(1)(f) GDPR. If your contact aims at concluding a contract, Art. 6(1)(b) GDPR additionally applies. Your data will be deleted after completion of processing, insofar as no statutory retention obligations prevent deletion.
          <br/><br/>
          <h4>5) Data processing for account creation and contract processing</h4>
          Pursuant to Art. 6(1)(b) GDPR, personal data is also collected and processed if you provide it for the purpose of performing a contract or opening a customer account. Which data are collected is evident from the respective input forms. You may request deletion of your account at any time by notifying the controller at the address above. We store and use the data provided by you for contract processing. After full performance of the contract or deletion of the account, data will be blocked and deleted in accordance with tax and commercial retention periods unless you have consented to further use or another lawful processing is permitted.
          <br/><br/>
          <h4>6) Data processing for order handling</h4>
          For the fulfilment of your order we work with the service providers named below who support us in whole or in part. Certain personal data required for contract performance will be passed on to these service providers.
          <br/>
          Personal data collected in the course of contract processing will be passed on to the carrier commissioned to deliver the goods insofar as this is necessary for delivery. Payment data will be transmitted to the financial institution commissioned to process payments, if required. Where payment service providers are used, we will inform you explicitly below. The legal basis for disclosure is Art. 6(1)(b) GDPR.
          <br/><br/>
          <h4>7) Web analytics services</h4>
          <p>Matomo (formerly Piwik)</p>
          <p>This website uses the web analytics software Matomo (www.matomo.org) provided by InnoCraft Ltd., 150 Willis St, 6011 Wellington, New Zealand, on the basis of our legitimate interest in statistical analysis of user behaviour for optimisation and marketing purposes pursuant to Art. 6(1)(f) GDPR. Pseudonymised usage profiles may be generated and analysed. Cookies may be used to this end. The Matomo‑related data (including your pseudonymised IP address) are processed on our servers.</p>
          <p>The information stored in the pseudonymous user profile is not used to identify the visitor personally and is not merged with personal data about the bearer of the pseudonym.</p>
          <p>If you do not agree with the storage and analysis of data from your visit, you can object at any time by clicking the opt‑out link below. An opt‑out cookie will be stored in your browser to prevent Matomo from collecting any session data. Please note that deleting all cookies will also remove the opt‑out cookie and it may need to be reactivated.</p>
          <br/>
          <h4>8) Data subject rights</h4>
          <b>8.1</b> Under applicable data protection law you have extensive rights with respect to the processing of your personal data by the controller (rights of access and intervention). These include:
          <ul>
            <li>Right of access pursuant to Art. 15 GDPR</li>
            <li>Right to rectification pursuant to Art. 16 GDPR</li>
            <li>Right to erasure pursuant to Art. 17 GDPR</li>
            <li>Right to restriction of processing pursuant to Art. 18 GDPR</li>
            <li>Right to be informed pursuant to Art. 19 GDPR</li>
            <li>Right to data portability pursuant to Art. 20 GDPR</li>
            <li>Right to withdraw consent pursuant to Art. 7(3) GDPR</li>
            <li>Right to lodge a complaint pursuant to Art. 77 GDPR</li>
          </ul>
          <br/>
          <h4><span style="font-size:15px">8.2</span> Right to object</h4>
          If we process your personal data on the basis of a balancing of interests for our overriding legitimate interests, you have the right to object to this processing at any time for reasons arising from your particular situation. If you object, we will stop processing the data unless we can demonstrate compelling legitimate grounds for the processing which override your interests, rights and freedoms, or the processing is for the assertion, exercise or defence of legal claims.
          <br/><br/>
          If your personal data are processed by us for direct marketing purposes, you have the right to object to the processing of your personal data for such marketing at any time.
          <br/><br/>
          <h4>9) Retention periods for personal data</h4>
          The length of time personal data are stored depends on the legal basis, the purpose of processing and, where applicable, statutory retention periods (e.g. commercial and tax retention periods).
          <br/><br/>
          Where processing is based on consent (Art. 6(1)(a) GDPR), data are retained until consent is revoked. Where statutory retention periods apply for data processed in connection with contractual obligations, data will be deleted after expiry of those retention periods unless required for contract fulfilment or a legitimate interest in continued storage exists. For data processed on the basis of Art. 6(1)(f) GDPR, data are stored until you exercise your right to object unless we can demonstrate overriding legitimate grounds or the processing serves the assertion, exercise or defence of legal claims.
          <br/><br/>
          Unless otherwise specified in this statement for specific processing operations, personal data will otherwise be deleted when they are no longer needed for the purposes for which they were collected or otherwise processed.
        `
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
        vatId: 'VAT identification number according to § 27 a German VAT Act: DE 123456789',
        odr: 'EU Commission platform for online dispute resolution: <a href="https://ec.europa.eu/consumers/odr">https://ec.europa.eu/consumers/odr</a>\nWe are neither obliged nor willing to participate in dispute resolution proceedings before a consumer arbitration board.',
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
        ,
        photoLabels: [
          'Silver Signet Ring',
          'Handcrafted Ring',
          'Tools & Craft',
          'Bespoke Piece in Progress',
          'Noble Materials',
          'Detail Work',
          'Traditional Technique',
          'Master Craftsmanship',
          'Fine Engraving',
          'Timeless Design',
          'Precision Craftsmanship',
          'Original & Restoration',
          'Precious Materials',
          'Custom Made',
          'Careful Setting',
          'Unique Piece of Jewelry'
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
