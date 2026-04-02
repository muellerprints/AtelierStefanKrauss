#!/usr/bin/env sh
set -euo pipefail

# Prepare a safe upload folder for IONOS with only public-facing files.
# This script excludes sensitive files like server/, package.json, .env.example
# Usage: ./scripts/prepare-ionos-upload.sh

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DIST="$ROOT/dist"
UPLOAD="$ROOT/ionos-upload"

echo "🔐 Preparing IONOS upload folder (secure)"
echo "Source: $DIST"
echo "Target: $UPLOAD"

# Check if dist/ exists
if [ ! -d "$DIST" ]; then
  echo "❌ Error: dist/ folder not found. Run 'npm run build' first."
  exit 1
fi

# Remove old upload folder and create fresh one
rm -rf "$UPLOAD"
mkdir -p "$UPLOAD"

echo ""
echo "✅ Copying safe files..."

# Copy individual safe files from dist root
for file in index.html .htaccess manifest.json robots.txt sitemap.xml privacy.html apple-touch-icon.png favicon.ico; do
  if [ -e "$DIST/$file" ]; then
    cp -v "$DIST/$file" "$UPLOAD/" 2>/dev/null || true
  fi
done

# Copy all favicon PNG files
if ls "$DIST"/favicon*.png >/dev/null 2>&1; then
  cp -v "$DIST"/favicon*.png "$UPLOAD/" 2>/dev/null || true
fi

# Copy safe directories
echo ""
echo "📁 Copying safe directories..."

if [ -d "$DIST/assets" ]; then
  echo "  → assets/"
  cp -R "$DIST/assets" "$UPLOAD/"
fi

if [ -d "$DIST/privacy" ]; then
  echo "  → privacy/"
  cp -R "$DIST/privacy" "$UPLOAD/"
fi

if [ -d "$DIST/api" ]; then
  echo "  → api/"
  cp -R "$DIST/api" "$UPLOAD/"
fi

# Remove any .DS_Store files that might have been copied
echo ""
echo "🧹 Cleaning up..."
find "$UPLOAD" -name ".DS_Store" -type f -delete 2>/dev/null || true

# Show summary
echo ""
echo "✨ IONOS upload folder ready!"
echo ""
echo "📊 Summary:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Count files
FILE_COUNT=$(find "$UPLOAD" -type f | wc -l | tr -d ' ')
DIR_COUNT=$(find "$UPLOAD" -type d | wc -l | tr -d ' ')

echo "Total files: $FILE_COUNT"
echo "Total directories: $DIR_COUNT"
echo ""

echo "✅ INCLUDED (safe for upload):"
echo "   • HTML files (index.html, privacy.html)"
echo "   • Configuration (.htaccess, manifest.json)"
echo "   • SEO files (robots.txt, sitemap.xml)"
echo "   • Icons (favicons, apple-touch-icon)"
echo "   • assets/ (images, CSS, JS)"
echo "   • privacy/ (privacy page)"
echo "   • api/ (PHP email handler)"
echo ""

echo "❌ EXCLUDED (security risk):"
echo "   • server/ (Node.js code)"
echo "   • package.json (dependency info)"
echo "   • .env.example (config structure)"
echo "   • .DS_Store (Mac metadata)"
echo ""

echo "📤 Ready to upload to IONOS:"
echo "   Upload the contents of ionos-upload/ to your IONOS publish/ folder"
echo ""
