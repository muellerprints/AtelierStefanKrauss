
#!/usr/bin/env sh
set -euo pipefail

# Prepare the dist/ folder with files to upload to the server.
# Usage: ./scripts/prepare-dist.sh [additional paths...]

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DIST="$ROOT/dist"

echo "Preparing $DIST"
mkdir -p "$DIST"

# Default paths to include in dist (space-separated)
# Note: do NOT copy the project's top-level `index.html` into `dist/` because
# the build step produces a processed `dist/index.html` with correct asset
# links. Copying the source `index.html` would break the built site.
INCLUDE=".env.example package.json public server"

# We'll copy the IONOS PHP send-email endpoint explicitly into dist/api/send-email
# so the prepared site exposes the handler at /api/send-email on the target.

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

# If the IONOS PHP handler exists, copy it into dist/api/send-email (not under deploy/)
if [ -d "$ROOT/deploy/ionos/api/send-email" ]; then
  echo "Syncing deploy/ionos/api/send-email -> dist/api/send-email"
  mkdir -p "$DIST/api"
  rsync -av --delete --exclude='_notes' "$ROOT/deploy/ionos/api/send-email/" "$DIST/api/send-email/"
fi

# Remove any remaining editor metadata folders named _notes from dist
echo "Removing _notes folders from dist (if any)"
if command -v find >/dev/null 2>&1; then
  find "$DIST" -type d -name "_notes" -prune -exec rm -rf "{}" \; || true
fi

echo "dist/ updated. Review before uploading."
