PHPMailer Installation (kurz)

Wenn du `composer.phar` bereits im Projektroot hast, führe im Projektverzeichnis aus:

```bash
# im Projektroot
php composer.phar require phpmailer/phpmailer
```

Alternativ (lokales Skript):

```bash
# macht dasselbe, nutzt das bereitgestellte Skript
bash scripts/install-phpmailer.sh
```

Nach erfolgreicher Installation:
- `vendor/phpmailer/phpmailer` sollte existieren
- `vendor/autoload.php` ist vorhanden und wird vom Mail-Handler automatisch geladen

SMTP Umgebungsvariablen (optional):
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`
- optional: `SMTP_SECURE` (`tls` oder `ssl`), `SMTP_FROM`, `SMTP_FROM_NAME`

Fehlersuche:
- Prüfe `php -m | grep -E 'mbstring|openssl'` — beide sollten gelistet sein.
- Wenn `composer` global fehlen sollte, nutze `php composer.phar` wie oben.
