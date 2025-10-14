#!/bin/bash

# REO Electric - Deployment Script
echo "🚀 Starting REO Electric deployment..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Git not initialized. Please run 'git init' first."
    exit 1
fi

# Check if we're on main branch
current_branch=$(git branch --show-current)
if [ "$current_branch" != "main" ]; then
    echo "⚠️  Warning: You're not on the main branch (current: $current_branch)"
    read -p "Continue anyway? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Add all changes
echo "📦 Adding all changes..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')"

# Push to remote
echo "🚀 Pushing to remote repository..."
git push origin main

echo "✅ Deployment complete!"
echo "🌐 Your website should be live shortly."
echo "📧 Contact: contact@reo-electric.ma"
echo "📱 WhatsApp: +212 667924515"
