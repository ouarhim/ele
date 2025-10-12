# Deployment Instructions

## Prerequisites

1. Node.js (version 18 or higher)
2. npm or yarn package manager
3. Git

## Local Development

1. Install dependencies:
   ```
   npm install
   ```

2. Run the development server:
   ```
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

1. Create a production build:
   ```
   npm run build
   ```

2. Start the production server:
   ```
   npm start
   ```

## Deploying to Vercel

1. Push your code to a GitHub repository.

2. Sign in to [Vercel](https://vercel.com/).

3. Click "New Project" and import your repository.

4. Configure the project:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: `.next`

5. Click "Deploy" and wait for the build to complete.

## Environment Variables

Set the following environment variables in your deployment platform:

```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Continuous Integration

Example GitHub Actions workflow (`.github/workflows/deploy.yml`):

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Use Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```