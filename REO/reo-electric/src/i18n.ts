import { locales, defaultLocale } from './locales';

// Re-export locales and defaultLocale
export { locales, defaultLocale };

// Define pathnames for static pages
export const pathnames = {
  '/': '/',
  '/about': '/about',
  '/blog': '/blog',
  '/contact': '/contact',
};

// Export a function to get messages for a locale
export async function getMessages(locale: string) {
  try {
    const messages = await import(`../messages/${locale}.json`);
    return messages.default;
  } catch (error) {
    // If the locale file doesn't exist, fallback to English
    const messages = await import(`../messages/en.json`);
    return messages.default;
  }
}