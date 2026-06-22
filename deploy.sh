#!/bin/bash
set -euo pipefail

MSG="${1:-Update portfolio}"

git add .
if git diff --cached --quiet; then
  echo "Nothing to commit."
  exit 0
fi

git commit -m "$MSG"
git push

echo "Pushed. Site will update at https://samim-reza.github.io"
