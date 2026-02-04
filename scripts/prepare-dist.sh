
#!/usr/bin/env sh
set -euo pipefail

# Prepare the dist/ folder with files to upload to the server.
# Usage: ./scripts/prepare-dist.sh [additional paths...]

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DIST="$ROOT/dist"

echo "Preparing $DIST"
mkdir -p "$DIST"

# Default paths to include in dist (space-separated)
INCLUDE=".env.example index.html package.json public server"

# If caller supplied extra paths, append them
if [ "$#" -gt 0 ]; then
  for p in "$@"; do
    INCLUDE="$INCLUDE $p"
  done
fi

echo "Including: $INCLUDE"

# Use rsync to copy only the listed paths into dist.
for path in $INCLUDE; do
  if [ -e "$ROOT/$path" ]; then
    echo "Syncing $path -> dist/"
    rsync -av --delete --exclude='.git' --exclude='node_modules' --exclude='dist' --exclude='_notes' "$ROOT/$path" "$DIST/"
  else
    echo "Warning: $path not found, skipping"
  fi
done

# Remove any remaining editor metadata folders named _notes from dist
echo "Removing _notes folders from dist (if any)"
if command -v find >/dev/null 2>&1; then
  find "$DIST" -type d -name "_notes" -prune -exec rm -rf "{}" \; || true
fi

echo "dist/ updated. Review before uploading."
