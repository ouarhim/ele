'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { locales } from '@/i18n';

interface HeaderProps {
  locale: string;
}

const Header: React.FC<HeaderProps> = ({ locale }) => {
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations('Navigation');

  // Get the current locale from the pathname
  const currentLocale = locales.includes(locale as any) ? locale : 'en';

  // Function to switch locale
  const switchLocale = (newLocale: string) => {
    // Remove the current locale from the pathname
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPath);
  };

  // Get language name for display
  const getLanguageName = (locale: string) => {
    switch (locale) {
      case 'en': return 'English';
      case 'fr': return 'Français';
      case 'ar': return 'العربية';
      default: return 'English';
    }
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link className="navbar-brand" href={`/${currentLocale}`}>
            <span className="font-bold text-primary text-xl">REO Electric</span>
          </Link>
          
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link 
                  className={`nav-link ${pathname === `/${currentLocale}` ? 'active' : ''}`} 
                  href={`/${currentLocale}`}
                >
                  {t('home')}
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className="nav-link" 
                  href={`/${currentLocale}/about`}
                >
                  {t('about')}
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link 
                  className="nav-link dropdown-toggle" 
                  href="#" 
                  role="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                >
                  {t('services')}
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link 
                      className="dropdown-item" 
                      href={`/${currentLocale}/services/bobinage`}
                    >
                      Bobinage Moteurs
                    </Link>
                  </li>
                  <li>
                    <Link 
                      className="dropdown-item" 
                      href={`/${currentLocale}/services/armoires-hotels`}
                    >
                      Armoires Hôtels
                    </Link>
                  </li>
                  <li>
                    <Link 
                      className="dropdown-item" 
                      href={`/${currentLocale}/services/installations-immeubles`}
                    >
                      Installations Immeubles
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link 
                  className="nav-link" 
                  href={`/${currentLocale}/portfolio`}
                >
                  {t('portfolio')}
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className="nav-link" 
                  href={`/${currentLocale}/faq`}
                >
                  {t('faq')}
                </Link>
              </li>
              
              <li className="nav-item">
                <Link 
                  className="nav-link" 
                  href={`/${currentLocale}/contact`}
                >
                  {t('contact')}
                </Link>
              </li>
            </ul>
            
            {/* Desktop Language Switcher - Hidden on Mobile */}
            <div className="d-none d-lg-flex">
              <div className="dropdown">
                <button 
                  className="btn btn-outline-primary dropdown-toggle" 
                  type="button" 
                  id="languageDropdownDesktop" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                >
                  {getLanguageName(currentLocale)}
                </button>
                <ul className="dropdown-menu" aria-labelledby="languageDropdownDesktop">
                  {locales.map((loc) => (
                    <li key={loc}>
                      <button 
                        className="dropdown-item" 
                        onClick={() => switchLocale(loc)}
                      >
                        {getLanguageName(loc)}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Mobile Language Switcher - Visible in Mobile Dropdown */}
            <div className="d-lg-none mt-3">
              <div className="dropdown">
                <button 
                  className="btn btn-outline-primary dropdown-toggle w-100" 
                  type="button" 
                  id="languageDropdownMobile" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                >
                  {getLanguageName(currentLocale)}
                </button>
                <ul className="dropdown-menu w-100" aria-labelledby="languageDropdownMobile">
                  {locales.map((loc) => (
                    <li key={loc}>
                      <button 
                        className="dropdown-item" 
                        onClick={() => switchLocale(loc)}
                      >
                        {getLanguageName(loc)}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;