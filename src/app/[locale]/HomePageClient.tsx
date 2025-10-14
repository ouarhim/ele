'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

interface HomePageClientProps {
  locale: string;
}

export default function HomePageClient({ locale }: HomePageClientProps) {
  const t = useTranslations();
  
  // Services data
  const services = [
    {
      title: t('Services.residential.title'),
      description: t('Services.residential.description'),
      icon: 'bi-house-door'
    },
    {
      title: t('Services.commercial.title'),
      description: t('Services.commercial.description'),
      icon: 'bi-building'
    },
    {
      title: t('Services.emergency.title'),
      description: t('Services.emergency.description'),
      icon: 'bi-lightning'
    }
  ];

  // Why choose us data
  const whyChoose = [
    {
      title: t('WhyChoose.certified.title'),
      description: t('WhyChoose.certified.description'),
      icon: 'bi-person-check'
    },
    {
      title: t('WhyChoose.quality.title'),
      description: t('WhyChoose.quality.description'),
      icon: 'bi-shield-check'
    },
    {
      title: t('WhyChoose.experience.title'),
      description: t('WhyChoose.experience.description'),
      icon: 'bi-award'
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      text: t('Testimonials.testimonial1'),
      author: t('Testimonials.author1')
    },
    {
      text: t('Testimonials.testimonial2'),
      author: t('Testimonials.author2')
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-8 mb-lg-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              {t('Hero.title')}
            </h1>
            <p className="text-lg mb-8 text-gray-700">
              {t('Hero.description')}
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3">
              <button className="btn btn-primary btn-lg px-4 px-sm-6 py-3 text-center">
                <span className="d-block d-sm-inline">{t('Hero.cta')}</span>
              </button>
              <a href={`/${locale}/contact`} className="btn btn-outline-primary btn-lg px-4 px-sm-6 py-3 text-center">
                <span className="d-block d-sm-inline">
                  <span className="d-block d-sm-none">
                    <span className="d-block">24/7</span>
                    <span className="d-block">Emergency</span>
                  </span>
                  <span className="d-none d-sm-inline">{t('Hero.contact')}</span>
                </span>
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Electricity infrastructure" 
                className="w-100 h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="section-title">{t('Services.title')}</h2>
          <p className="section-subtitle">
            {t('Services.subtitle')}
          </p>
        </div>
        
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-md-4 mb-6">
              <div className="card h-100 shadow-sm hover:shadow-lg transition-all">
                <div className="card-body">
                  <div className="text-primary mb-4">
                    <i className={`bi ${service.icon} fs-1`}></i>
                  </div>
                  <h3 className="card-title text-xl font-bold mb-3">{service.title}</h3>
                  <p className="card-text text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="section-title">{t('WhyChoose.title')}</h2>
          <p className="section-subtitle">
            {t('WhyChoose.subtitle')}
          </p>
        </div>
        
        <div className="row">
          {whyChoose.map((item, index) => (
            <div key={index} className="col-md-4 mb-6">
              <div className="text-center">
                <div className="bg-primary text-white rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                  <i className={`bi ${item.icon} fs-3`}></i>
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mb-16 bg-light py-12 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="section-title">{t('Testimonials.title')}</h2>
        </div>
        
        <div className="row">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-md-6 mb-6">
              <div className="card h-100 testimonial-card">
                <div className="card-body">
                  <div className="text-warning mb-3">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <p className="card-text mb-4 fst-italic">
                    "{testimonial.text}"
                  </p>
                  <p className="font-bold">— {testimonial.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="mb-16 text-center py-12 bg-primary text-white rounded-lg">
        <h2 className="text-3xl font-bold mb-4">{t('Contact.title')}</h2>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          {t('Contact.subtitle')}
        </p>
        <a href={`/${locale}/contact`} className="btn btn-light btn-lg px-6">
          {t('Hero.contact')}
        </a>
      </section>
    </div>
  );
}