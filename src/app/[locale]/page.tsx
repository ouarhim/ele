import React from 'react';
import { getTranslations } from 'next-intl/server';

// 定义页面组件
export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'HomePage' });
  
  return (
    <main className="container mx-auto px-4 py-12" suppressHydrationWarning>
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
                alt={t('Hero.imageAlt')}
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
          <ServiceCard 
            title={t('Services.bobinage.title')} 
            description={t('Services.bobinage.description')} 
            icon="bi-gear"
          />
          <ServiceCard 
            title={t('Services.armoires.title')} 
            description={t('Services.armoires.description')} 
            icon="bi-building"
          />
          <ServiceCard 
            title={t('Services.installations.title')} 
            description={t('Services.installations.description')} 
            icon="bi-house-door"
          />
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
          <WhyChooseCard 
            title={t('WhyChoose.experience.title')} 
            description={t('WhyChoose.experience.description')} 
            icon="bi-award"
          />
          <WhyChooseCard 
            title={t('WhyChoose.safety.title')} 
            description={t('WhyChoose.safety.description')} 
            icon="bi-shield-check"
          />
          <WhyChooseCard 
            title={t('WhyChoose.proximity.title')} 
            description={t('WhyChoose.proximity.description')} 
            icon="bi-geo-alt"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mb-16 bg-light py-12 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="section-title">{t('Testimonials.title')}</h2>
        </div>
        
        <div className="row">
          <TestimonialCard 
            text={t('Testimonials.testimonial1')} 
            author={t('Testimonials.author1')}
          />
          <TestimonialCard 
            text={t('Testimonials.testimonial2')} 
            author={t('Testimonials.author2')}
          />
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
    </main>
  );
}

// 服务卡片组件
function ServiceCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="col-md-4 mb-6">
      <div className="card h-100 shadow-sm hover:shadow-lg transition-all">
        <div className="card-body">
          <div className="text-primary mb-4">
            <i className={`bi ${icon} fs-1`}></i>
          </div>
          <h3 className="card-title text-xl font-bold mb-3">{title}</h3>
          <p className="card-text text-gray-600">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

// 为什么选择我们卡片组件
function WhyChooseCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="col-md-4 mb-6">
      <div className="text-center">
        <div className="bg-primary text-white rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
          <i className={`bi ${icon} fs-3`}></i>
        </div>
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
}

// 客户评价卡片组件
function TestimonialCard({ text, author }: { text: string; author: string }) {
  return (
    <div className="col-md-6 mb-6">
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
            "{text}"
          </p>
          <p className="font-bold">— {author}</p>
        </div>
      </div>
    </div>
  );
}