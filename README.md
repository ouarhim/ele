# REO Electric Website

A professional electrical services website for REO Electric, serving Agadir, Morocco with 20+ years of expertise in motor winding, electrical panels, and building installations.

## 🌟 Features

- **Multi-language Support**: English, French, and Arabic with RTL support
- **Responsive Design**: Mobile-first approach with Bootstrap and Tailwind CSS
- **Professional Services**: Motor winding, hotel panels, building installations
- **Contact Integration**: WhatsApp floating button and contact form
- **Blog System**: Technical articles and industry insights
- **SEO Optimized**: Meta tags, sitemap, and structured data

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/reo-electric-website.git
cd reo-electric-website
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:3000
```

## 🌍 Multi-language Support

- **English** (`/en`) - Default language
- **French** (`/fr`) - French translations
- **Arabic** (`/ar`) - Arabic with RTL support

## 📱 Pages

- **Homepage**: Hero section, services overview, testimonials
- **About**: Company history, team, values
- **Services**: 
  - Motor Winding (`/services/bobinage`)
  - Hotel Panels (`/services/armoires-hotels`)
  - Building Installations (`/services/installations-immeubles`)
- **Portfolio**: Project showcase
- **Blog**: Technical articles and insights
- **Contact**: Contact form and information
- **FAQ**: Frequently asked questions

## 🛠️ Technologies

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Bootstrap 5
- **Internationalization**: next-intl
- **Icons**: Bootstrap Icons
- **Deployment**: Docker + Coolify

## 🐳 Docker Deployment

### Build and Run
```bash
# Build Docker image
docker build -t reo-electric .

# Run container
docker run -p 3000:3000 reo-electric
```

### Environment Variables
```bash
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 📦 Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint and fix
npm run lint:fix
```

## 🌐 Deployment Options

### Coolify (Recommended)
1. Connect GitHub repository
2. Set environment variables
3. Deploy automatically

### Vercel
1. Import GitHub repository
2. Configure build settings
3. Deploy

### Manual Server
1. Build the project: `npm run build`
2. Upload files to server
3. Install dependencies: `npm install --production`
4. Start server: `npm start`

## 📁 Project Structure

```
src/
├── app/
│   ├── [locale]/           # Internationalized pages
│   │   ├── about/          # About page
│   │   ├── contact/        # Contact page
│   │   ├── services/       # Service pages
│   │   └── ...
│   ├── api/                # API routes
│   └── globals.css         # Global styles
├── components/             # React components
├── i18n/                  # Internationalization config
└── locales.ts             # Locale definitions

messages/                   # Translation files
├── en.json                # English translations
├── fr.json                # French translations
└── ar.json                # Arabic translations

content/                    # Blog content
├── en/blog/               # English blog posts
├── fr/blog/               # French blog posts
└── ar/blog/               # Arabic blog posts
```

## 🔧 Configuration

### Next.js Config (`next.config.ts`)
- Internationalization setup
- Image optimization
- Build optimization

### Tailwind Config (`tailwind.config.js`)
- Custom color scheme
- Responsive breakpoints
- Component styling

### TypeScript Config (`tsconfig.json`)
- Strict type checking
- Path mapping
- Next.js optimizations

## 📞 Contact Information

- **Phone**: +212 667924515
- **Email**: contact@reo-electric.ma
- **WhatsApp**: +212 667924515
- **Location**: Agadir, Morocco
- **Service Area**: Agadir and surrounding regions

## 🚀 Deployment Checklist

- [ ] Environment variables configured
- [ ] Domain configured
- [ ] SSL certificate installed
- [ ] Contact form tested
- [ ] WhatsApp integration working
- [ ] All languages tested
- [ ] Mobile responsiveness verified
- [ ] SEO meta tags present

## 📈 Performance

- **Lighthouse Score**: 90+ across all metrics
- **Core Web Vitals**: Optimized
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic with Next.js
- **Caching**: Optimized for production

## 🔒 Security

- **HTTPS**: Enforced in production
- **CSP**: Content Security Policy headers
- **Input Validation**: Contact form sanitization
- **Dependencies**: Regular security updates

## 📝 License

This project is proprietary software for REO Electric. All rights reserved.

## 🤝 Contributing

This is a private project. For issues or suggestions, please contact the development team.

---

**Built with ❤️ for REO Electric** ⚡