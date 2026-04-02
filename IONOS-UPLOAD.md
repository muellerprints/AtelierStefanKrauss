# IONOS Upload Anleitung

Diese Anleitung erklärt, wie Sie die Website sicher auf IONOS hochladen.

## 🔐 Sicherheits-Prinzip

Der `ionos-upload/` Ordner enthält **nur sichere, öffentliche Dateien** ohne sensible Informationen wie:
- ❌ Node.js Server-Code (`server/`)
- ❌ Dependency-Informationen (`package.json`)
- ❌ Konfigurationsbeispiele (`.env.example`)
- ❌ Entwicklungs-Logs oder Metadata

## 📦 Verfügbare Kommandos

### Einmaliger Upload-Build
Erstellt den sicheren Upload-Ordner **einmalig**:

```bash
# Build + Upload-Ordner erstellen
npm run build:ionos
```

Dies führt aus:
1. `npm run build` - Vite Build
2. `npm run prepare-ionos` - Sichere Dateien nach `ionos-upload/` kopieren

### Automatisches Watching (empfohlen für Entwicklung)
Überwacht `src/` und `public/` und erstellt bei **jeder Änderung** automatisch einen neuen Upload-Ordner:

```bash
# Automatisches Update bei Änderungen
npm run watch:ionos
```

**Hinweis:** Dieser Prozess läuft im Hintergrund. Drücken Sie `Ctrl+C` zum Beenden.

### Nur Upload-Ordner aktualisieren
Falls `dist/` bereits existiert und Sie nur den Upload-Ordner neu erstellen möchten:

```bash
npm run prepare-ionos
```

## 📤 Upload zu IONOS

1. **Erstellen Sie den Upload-Ordner:**
   ```bash
   npm run build:ionos
   ```

2. **Öffnen Sie Ihren IONOS File Manager** oder verbinden Sie sich via FTP/SFTP

3. **Laden Sie den INHALT von `ionos-upload/` hoch:**
   - Navigieren Sie zu Ihrem IONOS `publish/` Ordner
   - Laden Sie **alle Dateien und Ordner** aus `ionos-upload/` hoch
   - ⚠️ **NICHT** den `ionos-upload/` Ordner selbst hochladen, nur den Inhalt!

## ✅ Was wird hochgeladen?

Der `ionos-upload/` Ordner enthält:

```
ionos-upload/
├── index.html              ✅ Haupt-HTML
├── .htaccess              ✅ Apache-Konfiguration
├── manifest.json          ✅ PWA-Manifest
├── robots.txt             ✅ SEO
├── sitemap.xml            ✅ SEO
├── privacy.html           ✅ Datenschutz-Seite
├── favicon*.png           ✅ Icons (11 Dateien)
├── apple-touch-icon.png   ✅ Apple Icon
├── favicon.ico            ✅ Browser Icon
├── assets/                ✅ CSS, JS, Bilder
├── privacy/               ✅ Datenschutz-Unterseite
└── api/                   ✅ PHP Email-Handler
```

## 🚫 Was wird NICHT hochgeladen?

Folgende Dateien/Ordner werden **automatisch ausgeschlossen**:

- `server/` - Node.js Server-Code (funktioniert nicht auf IONOS PHP-Server)
- `package.json` - Zeigt Ihre Dependencies
- `.env.example` - Konfigurationsstruktur
- `.DS_Store` - Mac-Metadaten

## 🔍 Überprüfung

Nach dem Upload sollte Ihre IONOS-Struktur so aussehen:

```
publish/
├── index.html
├── .htaccess
├── assets/
├── api/
└── ... (weitere Dateien)
```

**NICHT:**
```
publish/
└── ionos-upload/    ❌ FALSCH!
    ├── index.html
    └── ...
```

## 💡 Tipps

- **Vor jedem Upload:** Führen Sie `npm run build:ionos` aus, um sicherzustellen, dass alle Änderungen enthalten sind
- **Während Entwicklung:** Nutzen Sie `npm run watch:ionos` für automatische Updates
- **Backup:** IONOS erstellt automatisch Backups, aber Sie können auch lokal ein Backup des `ionos-upload/` Ordners erstellen

## 🛠 Troubleshooting

### "Script nicht gefunden"
```bash
npm install
```

### "ionos-upload/ ist leer"
Stellen Sie sicher, dass `dist/` existiert:
```bash
npm run build
npm run prepare-ionos
```

### "Dateien fehlen nach Upload"
Prüfen Sie, ob Sie den **Inhalt** von `ionos-upload/` hochgeladen haben, nicht den Ordner selbst.

## 📞 Support

Bei Problemen mit dem Upload-Script:
1. Überprüfen Sie die Ausgabe von `npm run build:ionos`
2. Kontrollieren Sie den Inhalt von `ionos-upload/`
3. Stellen Sie sicher, dass `dist/` korrekt erstellt wurde
