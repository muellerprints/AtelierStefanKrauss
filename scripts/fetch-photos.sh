#!/usr/bin/env bash
set -euo pipefail

# Download photos into public/assets/photos
# Usage: edit SEARCH_TERMS array below or pass no args to use defaults.

DEST_DIR="$(cd "$(dirname "$0")/.." && pwd)/public/assets/photos"
mkdir -p "$DEST_DIR"

# Unsplash search queries (comma separated terms, no spaces)
SEARCH_TERMS=(
  "jewelry,workshop"
  "goldsmith,bench,tools"
  "hands,workshop,jewelry"
  "jeweler,bench"
  "metalworking,jewelry"
)

# If arguments are provided, use them as search queries
if [ "$#" -gt 0 ]; then
  SEARCH_TERMS=("$@")
fi

i=1
for q in "${SEARCH_TERMS[@]}"; do
  unsplash_url="https://source.unsplash.com/1600x900/?${q}"
  out="$DEST_DIR/photo${i}.jpg"
  echo "Trying Unsplash: ${unsplash_url} -> ${out}"
  # Check content type first (follow redirects). If it's not an image, fall back.
  content_type=$(curl -sSL -o /dev/null -w "%{content_type}" "${unsplash_url}" || true)
  case "$content_type" in
    image/*)
      if curl -L --fail --silent --show-error "${unsplash_url}" -o "$out"; then
        echo "Saved Unsplash photo ${i} (content-type: ${content_type})"
      else
        echo "Unsplash download failed for '${q}', falling back to picsum"
        picsum_url="https://picsum.photos/1600/900?random=${RANDOM}"
        curl -L --fail --silent --show-error "$picsum_url" -o "$out" || { echo "Fallback download failed: $picsum_url"; exit 1; }
        echo "Saved fallback photo ${i}"
      fi
      ;;
    *)
      echo "Unsplash returned non-image content-type '${content_type}' for '${q}', falling back to picsum"
      picsum_url="https://picsum.photos/1600/900?random=${RANDOM}"
      curl -L --fail --silent --show-error "$picsum_url" -o "$out" || { echo "Fallback download failed: $picsum_url"; exit 1; }
      echo "Saved fallback photo ${i}"
      ;;
  esac
  i=$((i+1))
done

echo "Done. Photos saved to $DEST_DIR"
