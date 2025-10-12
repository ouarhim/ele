import { locales } from '@/i18n';

export default async function sitemap() {
  const baseUrl = 'https://reoelectric.com';
  
  const routes = [
    '',
    '/about',
    '/blog',
    '/contact'
  ];

  const localizedRoutes = locales.flatMap(locale => 
    routes.map(route => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date().toISOString(),
      alternates: {
        languages: Object.fromEntries(
          locales.map(loc => [loc, `${baseUrl}/${loc}${route}`])
        )
      }
    }))
  );

  return localizedRoutes;
}