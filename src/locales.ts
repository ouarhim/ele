// Define the supported locales
export const locales = ['en', 'fr', 'ar'] as const;

export type Locale = (typeof locales)[number];

// Default locale
export const defaultLocale: Locale = 'en';