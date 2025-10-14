import { getRequestConfig } from 'next-intl/server';
import { locales } from '../locales';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is supported
  if (!locale || !locales.includes(locale as any)) {
    // Default to English if locale is not provided or unsupported
    return {
      locale: 'en',
      messages: (await import(`../../messages/en.json`)).default
    };
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});