#!/bin/bash

set -euo pipefail

echo "Building React app..."
npm run build

echo "Refreshing root deployment files..."
rm -rf static
rm -f asset-manifest.json index.html manifest.json cv.pdf cvi.pdf cva.pdf samim.jpeg
cp -r build/* .

echo "Staging changes..."
git add .

if git diff --cached --quiet; then
  echo "No deployment changes to commit."
  exit 0
fi

echo "Creating deployment commit..."
git commit -m "chore: deploy latest portfolio build"

echo "Pushing to GitHub..."
git push

echo "Deployment complete: https://samim-reza.github.io"
