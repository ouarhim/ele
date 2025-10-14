'use client';

import React, { useState, use } from 'react';
import { useTranslations } from 'next-intl';

export default function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  const t = useTranslations('Contact');
  const tCommon = useTranslations('Common');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the data to an API route
    console.log('Form submitted:', formData);
    alert(t('send'));
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  // Service options
  const serviceOptions = [
    { value: 'bobinage', label: tCommon('services.bobinage') },
    { value: 'armoires', label: tCommon('services.armoires') },
    { value: 'installations', label: tCommon('services.installations') },
    { value: 'maintenance', label: tCommon('services.maintenance') },
    { value: 'urgence', label: tCommon('services.urgence') },
    { value: 'devis', label: tCommon('services.devis') }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="row">
        <div className="col-lg-6 mb-8 mb-lg-0">
          <h1 className="text-4xl font-bold mb-6">{t('title')}</h1>
          <p className="text-lg mb-8 text-gray-700">
            {t('subtitle')}
          </p>
          
          <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6 text-primary">{t('contactInfo')}</h3>
            
            <div className="flex items-start mb-6">
              <div className="mr-4 text-primary">
                <i className="bi bi-geo-alt fs-5"></i>
              </div>
              <div>
                <h4 className="font-semibold">{t('address')}</h4>
                <p className="text-gray-600">{tCommon('address')}</p>
              </div>
            </div>
            
            <div className="flex items-start mb-6">
              <div className="mr-4 text-primary">
                <i className="bi bi-telephone fs-5"></i>
              </div>
              <div>
                <h4 className="font-semibold">{t('phone')}</h4>
                <p className="text-gray-600">{tCommon('phone')}</p>
              </div>
            </div>
            
            <div className="flex items-start mb-6">
              <div className="mr-4 text-primary">
                <i className="bi bi-envelope fs-5"></i>
              </div>
              <div>
                <h4 className="font-semibold">{t('email')}</h4>
                <p className="text-gray-600">{tCommon('email')}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 text-primary">
                <i className="bi bi-clock fs-5"></i>
              </div>
              <div>
                <h4 className="font-semibold">{t('workingHours')}</h4>
                <p className="text-gray-600 whitespace-pre-line">{tCommon('workingHours')}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-primary/10 p-6 rounded-lg border border-primary/30">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <i className="bi bi-exclamation-triangle-fill text-primary mr-2"></i>
              {t('emergency')}
            </h3>
            <p className="text-gray-600 mb-0">
              {t('emergencyHelp')} <strong>{tCommon('emergencyPhone')}</strong>.
            </p>
          </div>
        </div>
        
        <div className="col-lg-6">
          <div className="card shadow-lg border-0">
            <div className="card-body p-6">
              <div className="mb-6">
                <h2 className="card-title text-2xl font-bold mb-4">{t('formTitle')}</h2>
                <p className="text-gray-600">{t('formDescription')}</p>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="form-label font-medium block mb-2">{t('name')} <span className="text-danger">*</span></label>
                  <input
                    type="text"
                    className="form-control w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="row -mx-2 mb-6">
                  <div className="col-md-6 px-2 mb-4 md:mb-0">
                    <label htmlFor="email" className="form-label font-medium block mb-2">{t('email')} <span className="text-danger">*</span></label>
                    <input
                      type="email"
                      className="form-control w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="col-md-6 px-2">
                    <label htmlFor="phone" className="form-label font-medium block mb-2">{t('phone')}</label>
                    <input
                      type="tel"
                      className="form-control w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="service" className="form-label font-medium block mb-2">{t('serviceType')}</label>
                  <select
                    className="form-select w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">{tCommon('select')}</option>
                    {serviceOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="form-label font-medium block mb-2">{t('message')} <span className="text-danger">*</span></label>
                  <textarea
                    className="form-control w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary w-full py-3 px-6 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark transition-colors duration-300">
                  {t('send')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}