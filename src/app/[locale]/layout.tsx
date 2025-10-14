import '@/app/globals.css';
import { locales, getMessages } from '@/i18n';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import LocaleAttributes from '@/components/LocaleAttributes';
import BootstrapClient from '@/components/BootstrapClient';
import { Inter, Noto_Sans_Arabic } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
});

const notoSansArabic = Noto_Sans_Arabic({ 
  subsets: ['arabic'], 
  variable: '--font-arabic',
  display: 'swap',
});

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Updated type definition to match Next.js layout props expectation
export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Get the locale from params
  const { locale } = await params;
  
  // Validate locale
  if (!locales.includes(locale as any)) notFound();
  
  // Set text direction based on locale
  const direction = locale === 'ar' ? 'rtl' : 'ltr';
  const fontClass = locale === 'ar' ? notoSansArabic.variable : inter.variable;
  
  // Providing all messages to the client
  const messages = await getMessages(locale);
  
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <BootstrapClient />
      <LocaleAttributes locale={locale} direction={direction} fontClass={fontClass} />
      <SEOHead />
      <Header locale={locale} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer locale={locale} />
    </NextIntlClientProvider>
  );
}