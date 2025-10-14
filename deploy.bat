@echo off
echo 🚀 Starting REO Electric deployment...

REM Check if git is initialized
if not exist ".git" (
    echo ❌ Git not initialized. Please run 'git init' first.
    pause
    exit /b 1
)

REM Add all changes
echo 📦 Adding all changes...
git add .

REM Commit changes
echo 💾 Committing changes...
git commit -m "Deploy: %date% %time%"

REM Push to remote
echo 🚀 Pushing to remote repository...
git push origin main

echo ✅ Deployment complete!
echo 🌐 Your website should be live shortly.
echo 📧 Contact: contact@reo-electric.ma
echo 📱 WhatsApp: +212 667924515
pause
