import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Privacy(){
  const { t, i18n } = useTranslation()

  // If language is English and we have the pre-rendered HTML, render it directly
  if (i18n && i18n.language === 'en' && t('privacy.fullHtml')) {
    return (
      <main className="container">
        <div className="col-md-12">
          <div className="flowing-text-footer" dangerouslySetInnerHTML={{ __html: t('privacy.fullHtml') }} />
        </div>
      </main>
    )
  }

  // Default: render the existing German content (unchanged)
  return (
    <main className="container">
      <div className="col-md-12">
        <div className="flowing-text-footer">
          <h2>Datenschutzerklärung</h2>
          <br/>
          <h4>1) Information über die Erhebung personenbezogener Daten und Kontaktdaten des Verantwortlichen</h4>

          <b>1.1</b> Wir freuen uns, dass Sie unsere Website besuchen und bedanken uns für Ihr Interesse. Im Folgenden
          informieren wir Sie über den Umgang mit Ihren personenbezogenen Daten bei der Nutzung unserer Website.
          Personenbezogene Daten sind hierbei alle Daten, mit denen Sie persönlich identifiziert werden können.
          <br/>
          <b>1.2</b> Verantwortlicher für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung
          (DSGVO) ist {t('impressum.name')}{t('impressum.owner') ? `, ${t('impressum.owner')}` : ''}, {t('impressum.street')}, {t('impressum.cityzip')}, Tel.: {t('contact.phone')}, E‑Mail: {t('contact.email')}. Der für die Verarbeitung von personenbezogenen Daten
          Verantwortliche ist diejenige natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die
          Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
          <br/>
          <b>1.3</b> Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung personenbezogener Daten und
          anderer vertraulicher Inhalte (z.B. Bestellungen oder Anfragen an den Verantwortlichen) eine SSL-bzw.
          TLS-Verschlüsselung. Sie können eine verschlüsselte Verbindung an der Zeichenfolge „https://“ und dem Schloss-Symbol
          in Ihrer Browserzeile erkennen.
          <br/>
          <br/>
          <h4>2) Datenerfassung beim Besuch unserer Website</h4> Bei der bloß informatorischen Nutzung unserer Website, also
          wenn Sie sich nicht registrieren oder uns anderweitig Informationen übermitteln, erheben wir nur solche Daten, die
          Ihr Browser an unseren Server übermittelt (sog. „Server-Logfiles“). Wenn Sie unsere Website aufrufen, erheben wir
          die folgenden Daten, die für uns technisch erforderlich sind, um Ihnen die Website anzuzeigen:
          <br/>
          <br/>
          <ul>
            <li>Unsere besuchte Website</li>
            <li>Datum und Uhrzeit zum Zeitpunkt des Zugriffes</li>
            <li>Menge der gesendeten Daten in Byte</li>
            <li>Quelle/Verweis, von welchem Sie auf die Seite gelangten</li>
            <li>Verwendeter Browser</li>
            <li>Verwendetes Betriebssystem</li>
            <li>Verwendete IP-Adresse (ggf.: in anonymisierter Form)</li>
            <br/>
          </ul>
          Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an der
          Verbesserung der Stabilität und Funktionalität unserer Website. Eine Weitergabe oder anderweitige Verwendung der
          Daten findet nicht statt. Wir behalten uns allerdings vor, die Server-Logfiles nachträglich zu überprüfen, sollten
          konkrete Anhaltspunkte auf eine rechtswidrige Nutzung hinweisen.
          <br/>
          <br/>
          <h4>3) Cookies</h4> Um den Besuch unserer Website attraktiv zu gestalten und die Nutzung bestimmter Funktionen zu
          ermöglichen, verwenden wir auf verschiedenen Seiten sogenannte Cookies. Hierbei handelt es sich um kleine
          Textdateien, die auf Ihrem Endgerät abgelegt werden. Einige der von uns verwendeten Cookies werden nach dem Ende der
          Browser-Sitzung, also nach Schließen Ihres Browsers, wieder gelöscht (sog. Sitzungs-Cookies). Andere Cookies
          verbleiben auf Ihrem Endgerät und ermöglichen uns oder unseren Partnerunternehmen (Cookies von Drittanbietern),
          Ihren Browser beim nächsten Besuch wiederzuerkennen (sog. persistente Cookies). Werden Cookies gesetzt, erheben und
          verarbeiten diese im individuellen Umfang bestimmte Nutzerinformationen wie Browser- und Standortdaten sowie
          IP-Adresswerte. Persistente Cookies werden automatisiert nach einer vorgegebenen Dauer gelöscht, die sich je nach
          Cookie unterscheiden kann.

          <br/>Teilweise dienen die Cookies dazu, durch Speicherung von Einstellungen den Bestellprozess zu vereinfachen (z.B.
          Merken des Inhalts eines virtuellen Warenkorbs für einen späteren Besuch auf der Website). Sofern durch einzelne von
          uns eingesetzte Cookies auch personenbezogene Daten verarbeitet werden, erfolgt die Verarbeitung gemäß Art. 6 Abs. 1
          lit. b DSGVO entweder zur Durchführung des Vertrages oder gemäß Art. 6 Abs. 1 lit. f DSGVO zur Wahrung unserer
          berechtigten Interessen an der bestmöglichen Funktionalität der Website sowie einer kundenfreundlichen und
          effektiven Ausgestaltung des Seitenbesuchs.

          <br/>Wir arbeiten unter Umständen mit Werbepartnern zusammen, die uns helfen, unser Internetangebot für Sie
          interessanter zu gestalten. Zu diesem Zweck werden für diesen Fall bei Ihrem Besuch unserer Website auch Cookies von
          Partnerunternehmen auf Ihrer Festplatte gespeichert (Cookies von Drittanbietern). Wenn wir mit vorbenannten
          Werbepartnern zusammenarbeiten, werden Sie über den Einsatz derartiger Cookies und den Umfang der jeweils erhobenen
          Informationen innerhalb der nachstehenden Absätze individuell und gesondert informiert.

          <br/>Bitte beachten Sie, dass Sie Ihren Browser so einstellen können, dass Sie über das Setzen von Cookies
          informiert werden und einzeln über deren Annahme entscheiden oder die Annahme von Cookies für bestimmte Fälle oder
          generell ausschließen können. Jeder Browser unterscheidet sich in der Art, wie er die Cookie-Einstellungen
          verwaltet. Diese ist in dem Hilfemenü jedes Browsers beschrieben, welches Ihnen erläutert, wie Sie Ihre
          Cookie-Einstellungen ändern können. Diese finden Sie für die jeweiligen Browser unter den folgenden Links:
          <br/>
          <br/>Internet Explorer: <a href=" https://support.microsoft.com/de-de/help/17442/windows-internet-explorer-delete-manage-cookies"> https://support.microsoft.com/de-de/help/17442/windows-internet-explorer-delete-manage-cookies</a>
          <br/>Firefox: <a href="https://support.mozilla.org/de/kb/cookies-erlauben-und-ablehnen">https://support.mozilla.org/de/kb/cookies-erlauben-und-ablehnen</a>
          <br/>Chrome: <a href="https://support.google.com/chrome/answer/95647?hl=de&hlrm=en">https://support.google.com/chrome/answer/95647?hl=de&hlrm=en</a>
          <br/>Safari: <a href=" https://support.apple.com/de-de/guide/safari/sfri11471/mac"> https://support.apple.com/de-de/guide/safari/sfri11471/mac</a>
          <br/>Opera: <a href=" https://help.opera.com/en/latest/web-preferences/#cookies"> https://help.opera.com/en/latest/web-preferences/#cookies</a>
          <br/>
          <br/>Bitte beachten Sie, dass bei Nichtannahme von Cookies die Funktionalität unserer Website eingeschränkt sein
          kann.
          <br/>
          <br/>
          <h4>4) Kontaktaufnahme</h4> Im Rahmen der Kontaktaufnahme mit uns (z.B. per Kontaktformular oder E-Mail) werden
          personenbezogene Daten erhoben. Welche Daten im Falle eines Kontaktformulars erhoben werden, ist aus dem jeweiligen
          Kontaktformular ersichtlich. Diese Daten werden ausschließlich zum Zweck der Beantwortung Ihres Anliegens bzw. für
          die Kontaktaufnahme und die damit verbundene technische Administration gespeichert und verwendet. Rechtsgrundlage
          für die Verarbeitung dieser Daten ist unser berechtigtes Interesse an der Beantwortung Ihres Anliegens gemäß Art. 6
          Abs. 1 lit. f DSGVO. Zielt Ihre Kontaktierung auf den Abschluss eines Vertrages ab, so ist zusätzliche
          Rechtsgrundlage für die Verarbeitung Art. 6 Abs. 1 lit. b DSGVO. Ihre Daten werden nach abschließender Bearbeitung
          Ihrer Anfrage gelöscht. Dies ist der Fall, wenn sich aus den Umständen entnehmen lässt, dass der betroffene
          Sachverhalt abschließend geklärt ist und sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
          <br/>
          <br/>
          <h4>5) Datenverarbeitung bei Eröffnung eines Kundenkontos und zur Vertragsabwicklung</h4> Gemäß Art. 6 Abs. 1 lit. b
          DSGVO werden personenbezogene Daten weiterhin erhoben und verarbeitet, wenn Sie uns diese zur Durchführung eines
          Vertrages oder bei der Eröffnung eines Kundenkontos mitteilen. Welche Daten erhoben werden, ist aus den jeweiligen
          Eingabeformularen ersichtlich. Eine Löschung Ihres Kundenkontos ist jederzeit möglich und kann durch eine Nachricht
          an die o.g. Adresse des Verantwortlichen erfolgen. Wir speichern und verwenden die von Ihnen mitgeteilten Daten zur
          Vertragsabwicklung. Nach vollständiger Abwicklung des Vertrages oder Löschung Ihres Kundenkontos werden Ihre Daten
          mit Rücksicht auf steuer- und handelsrechtliche Aufbewahrungsfristen gesperrt und nach Ablauf dieser Fristen
          gelöscht, sofern Sie nicht ausdrücklich in eine weitere Nutzung Ihrer Daten eingewilligt haben oder eine gesetzlich
          erlaubte weitere Datenverwendung von unserer Seite vorbehalten wurde.
          <br/>
          <br/>
          <h4>6) Datenverarbeitung zur Bestellabwicklung</h4> Zur Abwicklung Ihrer Bestellung arbeiten wir mit dem / den
          nachstehenden Dienstleistern zusammen, die uns ganz oder teilweise bei der Durchführung geschlossener Verträge
          unterstützen. An diese Dienstleister werden nach Maßgabe der folgenden Informationen gewisse personenbezogene Daten
          übermittelt.
          <br/>
          <br/>
          <h4>7) Webanalysedienste</h4>
          <p>Matomo (ehemals Piwik)</p>
          <p>Auf dieser Website werden unter Einsatz der Webanalysedienst-Software Matomo (www.matomo.org), einem Dienst des
            Anbieters InnoCraft Ltd., 150 Willis St, 6011 Wellington, Neuseeland, ("Matomo") auf Basis unseres
            berechtigten Interesses an der statistischen Analyse des Nutzerverhaltens zu Optimierungs- und Marketingzwecken
            gemäß Art. 6 Abs. 1 lit. f DSGVO Daten gesammelt und gespeichert. Aus diesen Daten können zum
            selben Zweck pseudonymisierte Nutzungsprofile erstellt und ausgewertet werden. Hierzu können Cookies
            eingesetzt werden. Bei Cookies handelt es sich um kleine Textdateien, die lokal im Zwischenspeicher des
            Internet-Browsers des Seitenbesuchers gespeichert werden. Die Cookies ermöglichen unter anderem die
            Wiedererkennung des Internet-Browsers. Die mit der Matomo-Technologie erhobenen Daten (einschließlich Ihrer
            pseudonymisierten IP-Adresse) werden auf unseren Servern verarbeitet.</p>
          <br/>
          <h4>8) Rechte des Betroffenen</h4>

          <b>8.1</b> Das geltende Datenschutzrecht gewährt Ihnen gegenüber dem Verantwortlichen hinsichtlich der Verarbeitung
          Ihrer personenbezogenen Daten umfassende Betroffenenrechte (Auskunfts- und Interventionsrechte), über die wir Sie
          nachstehend informieren:
          <br/>
          <br/>
          <ul>
            <li>Auskunftsrecht gemäß Art. 15 DSGVO</li>
            <li>Recht auf Berichtigung gemäß Art. 16 DSGVO</li>
            <li>Recht auf Löschung gemäß Art. 17 DSGVO</li>
            <li>Recht auf Einschränkung der Verarbeitung gemäß Art. 18 DSGVO</li>
            <li>Recht auf Unterrichtung gemäß Art. 19 DSGVO</li>
            <li>Recht auf Datenübertragbarkeit gemäß Art. 20 DSGVO</li>
            <li>Recht auf Widerruf erteilter Einwilligungen gemäß Art. 7 Abs. 3 DSGVO</li>
            <li>Recht auf Beschwerde gemäß Art. 77 DSGVO</li>
          </ul>
          <br/>
          <h4><span style={{fontSize: '15px'}}>8.2</span> Widerspruchsrecht</h4>
          WENN WIR IM RAHMEN EINER INTERESSENABWÄGUNG IHRE PERSONENBEZOGENEN DATEN AUFGRUND UNSERES ÜBERWIEGENDEN BERECHTIGTEN INTERESSES VERARBEITEN, HABEN SIE DAS JEDERZEITIGE RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIESE VERARBEITUNG WIDERSPRUCH MIT WIRKUNG FÜR DIE ZUKUNFT EINZULEGEN.
          <br/>
          <br/>
          <h4>9) Dauer der Speicherung personenbezogener Daten</h4>
          Die Dauer der Speicherung von personenbezogenen Daten bemisst sich anhand der jeweiligen Rechtsgrundlage, am Verarbeitungszweck und – sofern einschlägig – zusätzlich anhand der jeweiligen gesetzlichen Aufbewahrungsfrist (z.B. handels- und steuerrechtliche Aufbewahrungsfristen).
        </div>
      </div>
    </main>
  )
}
