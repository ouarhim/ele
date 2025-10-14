'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

interface FooterProps {
  locale: string;
}

const Footer: React.FC<FooterProps> = ({ locale }) => {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    REO Electric
                  </span>
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {locale === 'ar' 
                    ? 'خبير الكهرباء الخاص بك في أكادير - خبرة تزيد عن 20 عامًا في لف المحركات واللوحات الكهربائية والتركيبات.'
                    : 'Your electrical expert in Agadir - 20+ years of experience in motor winding, electrical panels, and installations.'
                  }
                </p>
                
                {/* Contact Info Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="flex items-center mb-2">
                      <i className="bi bi-telephone-fill text-blue-400 mr-3"></i>
                      <span className="font-semibold text-white">Phone</span>
                    </div>
                    <a href="tel:+212667924515" className="text-gray-300 hover:text-blue-400 transition-colors">
                      +212 667924515
                    </a>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="flex items-center mb-2">
                      <i className="bi bi-envelope-fill text-blue-400 mr-3"></i>
                      <span className="font-semibold text-white">Email</span>
                    </div>
                    <a href="mailto:contact@reo-electric.ma" className="text-gray-300 hover:text-blue-400 transition-colors">
                      contact@reo-electric.ma
                    </a>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="flex items-center mb-2">
                      <i className="bi bi-geo-alt-fill text-blue-400 mr-3"></i>
                      <span className="font-semibold text-white">Location</span>
                    </div>
                    <span className="text-gray-300">
                      {locale === 'ar' ? 'أكادير، المغرب' : 'Agadir, Morocco'}
                    </span>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="flex items-center mb-2">
                      <i className="bi bi-clock-fill text-blue-400 mr-3"></i>
                      <span className="font-semibold text-white">Hours</span>
                    </div>
                    <span className="text-gray-300">
                      {locale === 'ar' ? '24/7 طوارئ' : '24/7 Emergency'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white">
                {locale === 'ar' ? 'روابط سريعة' : 'Quick Links'}
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href={`/${locale}`} className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group">
                    <i className="bi bi-house-fill mr-2 group-hover:scale-110 transition-transform"></i>
                    {t('Navigation.home')}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/about`} className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group">
                    <i className="bi bi-people-fill mr-2 group-hover:scale-110 transition-transform"></i>
                    {t('Navigation.about')}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/services`} className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group">
                    <i className="bi bi-tools mr-2 group-hover:scale-110 transition-transform"></i>
                    {t('Navigation.services')}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/portfolio`} className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group">
                    <i className="bi bi-briefcase-fill mr-2 group-hover:scale-110 transition-transform"></i>
                    {t('Navigation.portfolio')}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/blog`} className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group">
                    <i className="bi bi-journal-text mr-2 group-hover:scale-110 transition-transform"></i>
                    {t('Navigation.blog')}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/contact`} className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group">
                    <i className="bi bi-telephone-fill mr-2 group-hover:scale-110 transition-transform"></i>
                    {t('Navigation.contact')}
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white">
                {locale === 'ar' ? 'خدماتنا' : 'Our Services'}
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href={`/${locale}/services/bobinage`} className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group">
                    <i className="bi bi-gear-fill mr-2 group-hover:scale-110 transition-transform"></i>
                    {locale === 'ar' ? 'لف المحركات' : 'Motor Winding'}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/services/armoires-hotels`} className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group">
                    <i className="bi bi-building mr-2 group-hover:scale-110 transition-transform"></i>
                    {locale === 'ar' ? 'لوحات الفنادق' : 'Hotel Panels'}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/services/installations-immeubles`} className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group">
                    <i className="bi bi-house-gear mr-2 group-hover:scale-110 transition-transform"></i>
                    {locale === 'ar' ? 'تركيبات المباني' : 'Building Installations'}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/faq`} className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group">
                    <i className="bi bi-question-circle-fill mr-2 group-hover:scale-110 transition-transform"></i>
                    {t('Navigation.faq')}
                  </Link>
                </li>
              </ul>
              
              {/* Emergency Contact */}
              <div className="mt-8 p-4 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-lg border border-red-500/30">
                <div className="flex items-center mb-2">
                  <i className="bi bi-exclamation-triangle-fill text-red-400 mr-2"></i>
                  <span className="font-semibold text-white">
                    {locale === 'ar' ? 'طوارئ 24/7' : '24/7 Emergency'}
                  </span>
                </div>
                <a href="tel:+212667924515" className="text-red-300 hover:text-red-400 transition-colors font-semibold">
                  +212 667924515
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/20 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-center md:text-left">
                <p>
                  © {currentYear} REO Electric. {locale === 'ar' ? 'جميع الحقوق محفوظة' : 'All rights reserved'}.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="https://wa.me/212667924515" className="text-gray-400 hover:text-green-400 transition-colors" title="WhatsApp">
                  <i className="bi bi-whatsapp text-xl"></i>
                </a>
                <a href="tel:+212667924515" className="text-gray-400 hover:text-blue-400 transition-colors" title="Phone">
                  <i className="bi bi-telephone text-xl"></i>
                </a>
                <a href="mailto:contact@reo-electric.ma" className="text-gray-400 hover:text-red-400 transition-colors" title="Email">
                  <i className="bi bi-envelope text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;