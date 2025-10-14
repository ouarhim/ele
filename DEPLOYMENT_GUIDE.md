# REO Electric - Deployment Guide

## 🚀 Fresh Deployment Setup

This guide will help you deploy the REO Electric website from scratch.

## 📋 Prerequisites

- GitHub account
- Coolify account (or your preferred hosting platform)
- Node.js 18+ installed locally

## 🔧 Deployment Steps

### 1. Create New GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Create a new repository named `reo-electric-website`
3. Make it public
4. Don't initialize with README (we already have files)

### 2. Push Code to New Repository

```bash
# Add the new repository as origin
git remote add origin https://github.com/YOUR_USERNAME/reo-electric-website.git

# Push all code to the new repository
git push -u origin main
```

### 3. Coolify Deployment

#### Option A: Connect GitHub Repository
1. Go to your Coolify dashboard
2. Click "New Project"
3. Select "Git Repository"
4. Connect your GitHub account
5. Select the `reo-electric-website` repository
6. Choose the `main` branch

#### Option B: Manual Deployment
1. Download the repository as ZIP
2. Upload to Coolify
3. Configure build settings

### 4. Environment Variables

Set these environment variables in Coolify:

```
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### 5. Build Configuration

The project includes:
- ✅ `Dockerfile` - Multi-stage Docker build
- ✅ `coolify.yaml` - Coolify configuration
- ✅ `.dockerignore` - Docker ignore file
- ✅ `next.config.ts` - Next.js configuration

## 🐳 Docker Configuration

The `Dockerfile` is optimized for production:
- Multi-stage build for smaller image size
- Node.js 18 Alpine for security and performance
- Standalone output for deployment

## 📁 Project Structure

```
REO/
├── src/                    # Source code
├── messages/              # Translation files
├── public/                # Static assets
├── content/               # Blog content
├── Dockerfile             # Docker configuration
├── coolify.yaml          # Coolify settings
├── next.config.ts        # Next.js config
└── package.json          # Dependencies
```

## 🌍 Multi-language Support

- **English** (`/en`) - Default language
- **French** (`/fr`) - French translations
- **Arabic** (`/ar`) - Arabic translations with RTL support

## 🔧 Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start
```

## 📱 Features

- ✅ Responsive design
- ✅ Multi-language support
- ✅ SEO optimized
- ✅ Contact form
- ✅ Blog system
- ✅ Service pages
- ✅ WhatsApp integration
- ✅ Floating WhatsApp button

## 🚀 Deployment Checklist

- [ ] Create GitHub repository
- [ ] Push code to repository
- [ ] Connect to Coolify
- [ ] Set environment variables
- [ ] Configure domain
- [ ] Test all pages
- [ ] Verify translations
- [ ] Check contact form
- [ ] Test WhatsApp integration

## 🔍 Post-Deployment Testing

1. **Homepage**: Check all languages
2. **Services**: Test all service pages
3. **Contact**: Test contact form
4. **Blog**: Verify blog functionality
5. **Mobile**: Test responsive design
6. **WhatsApp**: Test floating button

## 📞 Support

If you encounter any issues:
1. Check the build logs in Coolify
2. Verify environment variables
3. Test locally with `npm run build`
4. Check GitHub repository for latest changes

## 🎯 Success Criteria

- ✅ Website loads without errors
- ✅ All pages accessible
- ✅ Translations working
- ✅ Contact form functional
- ✅ Mobile responsive
- ✅ WhatsApp button working
- ✅ SEO meta tags present

---

**Ready to deploy!** 🚀
