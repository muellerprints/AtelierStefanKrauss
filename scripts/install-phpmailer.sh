#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.." || exit 1
PROJECT_ROOT=$(pwd)
COMPOSER="${PROJECT_ROOT}/composer.phar"

if [ ! -f "$COMPOSER" ]; then
  echo "composer.phar nicht gefunden im Projektroot. Bitte zunächst composer.phar erzeugen."
  echo "Anleitung: php -r \"copy('https://getcomposer.org/installer','composer-setup.php');\" && php composer-setup.php && php -r \"unlink('composer-setup.php');\""
  exit 2
fi

echo "Verwendeter Composer: $COMPOSER"
php "$COMPOSER" require phpmailer/phpmailer --no-interaction --prefer-dist

echo
if [ -f "vendor/autoload.php" ]; then
  echo "PHPMailer erfolgreich installiert. Vendor-Autoload gefunden: vendor/autoload.php"
else
  echo "Installation abgeschlossen, aber vendor/autoload.php nicht gefunden. Bitte prüfe die Composer-Ausgabe oben."
fi
