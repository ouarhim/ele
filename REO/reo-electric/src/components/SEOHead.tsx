import React from 'react';
import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  locale?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'REO Electric Company',
  description = 'Powering Your Future with Clean Energy',
  image,
  url,
  locale = 'en'
}) => {
  const siteTitle = 'REO Electric Company';
  const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;
  
  // Define alternate language URLs
  const alternateUrls = {
    en: url ? url.replace(`/${locale}/`, '/en/') : '',
    fr: url ? url.replace(`/${locale}/`, '/fr/') : '',
    ar: url ? url.replace(`/${locale}/`, '/ar/') : ''
  };

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      {url && <meta property="og:url" content={url} />}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={locale === 'ar' ? 'ar_SA' : locale === 'fr' ? 'fr_FR' : 'en_US'} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
      
      {/* hreflang tags for SEO */}
      <link rel="alternate" hrefLang="en" href={alternateUrls.en || '/en'} />
      <link rel="alternate" hrefLang="fr" href={alternateUrls.fr || '/fr'} />
      <link rel="alternate" hrefLang="ar" href={alternateUrls.ar || '/ar'} />
      <link rel="alternate" hrefLang="x-default" href={alternateUrls.en || '/en'} />
      
      {/* RTL support */}
      {locale === 'ar' && (
        <>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </>
      )}
    </Head>
  );
};

export default SEOHead;