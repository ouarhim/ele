# 🚀 REO Electric - Fresh Deployment Checklist

## ✅ Pre-Deployment Setup

### 1. GitHub Repository
- [ ] Create new repository on GitHub
- [ ] Name it `reo-electric-website` (or your preferred name)
- [ ] Make it public
- [ ] Don't initialize with README

### 2. Local Repository Setup
```bash
# Remove old remote (if exists)
git remote remove origin

# Add new repository as origin
git remote add origin https://github.com/YOUR_USERNAME/reo-electric-website.git

# Push to new repository
git push -u origin main
```

### 3. Coolify Setup
- [ ] Go to Coolify dashboard
- [ ] Create new project
- [ ] Connect GitHub repository
- [ ] Select the new repository
- [ ] Choose `main` branch

## 🔧 Environment Configuration

### Required Environment Variables
```
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Optional Environment Variables
```
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-maps-key
```

## 📋 Deployment Steps

### Step 1: GitHub Repository
1. **Create Repository**
   - Go to [GitHub New Repository](https://github.com/new)
   - Repository name: `reo-electric-website`
   - Description: "REO Electric - Professional Electrical Services Website"
   - Make it Public
   - Don't initialize with README

2. **Push Code**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/reo-electric-website.git
   git push -u origin main
   ```

### Step 2: Coolify Deployment
1. **Connect Repository**
   - Go to Coolify dashboard
   - Click "New Project"
   - Select "Git Repository"
   - Connect GitHub account
   - Select `reo-electric-website` repository

2. **Configure Build**
   - Build Command: `npm run build`
   - Start Command: `npm start`
   - Port: `3000`
   - Node Version: `18`

3. **Set Environment Variables**
   - `NODE_ENV=production`
   - `NEXT_PUBLIC_SITE_URL=https://your-domain.com`

### Step 3: Domain Configuration
1. **Custom Domain**
   - Add your domain in Coolify
   - Configure DNS records
   - Enable SSL certificate

2. **SSL Certificate**
   - Coolify will automatically provision SSL
   - Verify HTTPS is working

## 🧪 Testing Checklist

### Basic Functionality
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Contact form submits successfully
- [ ] WhatsApp button opens correctly
- [ ] All service pages load

### Multi-language Testing
- [ ] English version (`/en`) works
- [ ] French version (`/fr`) works
- [ ] Arabic version (`/ar`) works with RTL
- [ ] Language switcher functions

### Mobile Testing
- [ ] Responsive design on mobile
- [ ] Touch interactions work
- [ ] WhatsApp button accessible
- [ ] Contact form usable on mobile

### Performance Testing
- [ ] Page load times < 3 seconds
- [ ] Images load properly
- [ ] No console errors
- [ ] Lighthouse score > 90

## 🔍 Post-Deployment Verification

### 1. Website Functionality
- [ ] All pages accessible
- [ ] Contact form working
- [ ] WhatsApp integration active
- [ ] Blog system functional
- [ ] Service pages complete

### 2. SEO & Performance
- [ ] Meta tags present
- [ ] Sitemap accessible (`/sitemap.xml`)
- [ ] Robots.txt present (`/robots.txt`)
- [ ] Page titles correct
- [ ] Open Graph tags working

### 3. Security
- [ ] HTTPS enabled
- [ ] No mixed content warnings
- [ ] Security headers present
- [ ] Contact form protected

## 📞 Contact Information Verification

### Phone Numbers
- [ ] +212 667924515 (Primary)
- [ ] WhatsApp: +212 667924515
- [ ] All contact forms use correct number

### Email
- [ ] contact@reo-electric.ma
- [ ] Contact form sends to correct email
- [ ] Email validation working

### Location
- [ ] Agadir, Morocco
- [ ] Service area clearly defined
- [ ] Google Maps integration (if applicable)

## 🚨 Troubleshooting

### Common Issues
1. **Build Failures**
   - Check Node.js version (18+)
   - Verify all dependencies installed
   - Check for TypeScript errors

2. **Translation Issues**
   - Verify all translation files present
   - Check for missing translation keys
   - Test all language versions

3. **Contact Form Issues**
   - Verify API route is working
   - Check email configuration
   - Test form validation

4. **WhatsApp Integration**
   - Verify phone number format
   - Test on mobile devices
   - Check message encoding

### Debug Commands
```bash
# Check build locally
npm run build

# Test production build
npm start

# Check for TypeScript errors
npx tsc --noEmit

# Lint code
npm run lint
```

## ✅ Success Criteria

### Technical
- [ ] Website loads without errors
- [ ] All pages accessible
- [ ] Mobile responsive
- [ ] Fast loading times
- [ ] SEO optimized

### Business
- [ ] Contact information correct
- [ ] WhatsApp integration working
- [ ] All services properly described
- [ ] Professional appearance
- [ ] Multi-language support

### User Experience
- [ ] Easy navigation
- [ ] Clear contact options
- [ ] Professional design
- [ ] Fast performance
- [ ] Mobile-friendly

## 🎯 Final Verification

### Before Going Live
- [ ] All tests passed
- [ ] Contact form tested
- [ ] WhatsApp button tested
- [ ] All languages working
- [ ] Mobile version tested
- [ ] Performance optimized
- [ ] SEO meta tags present

### After Going Live
- [ ] Monitor for 24 hours
- [ ] Check analytics
- [ ] Test contact form submissions
- [ ] Verify WhatsApp messages
- [ ] Monitor error logs

---

## 🚀 Ready to Deploy!

Your REO Electric website is ready for deployment with:
- ✅ Complete codebase
- ✅ Docker configuration
- ✅ Coolify setup
- ✅ Health monitoring
- ✅ Multi-language support
- ✅ Contact integration
- ✅ WhatsApp integration
- ✅ SEO optimization

**Deploy with confidence!** 🎉
