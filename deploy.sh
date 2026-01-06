#!/bin/bash
# Deploy React app to GitHub Pages

echo "🚀 Building React app..."
npm run build

echo "📦 Copying build files to root..."
cp -r build/* .

echo "📝 Adding files to git..."
git add .

echo "💬 Committing changes..."
git commit -m "Deploy: Update portfolio site"

echo "🌐 Pushing to GitHub..."
git push

echo "✅ Deployment complete!"
echo "🔗 Your site will be live at: https://samim-reza.github.io"
