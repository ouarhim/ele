import React from 'react';
import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export default async function ArmoiresHotelsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'ArmoiresHotels' });
  const tCommon = await getTranslations({ locale, namespace: 'Common' });
  
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
            <div className="d-flex gap-3">
              <a href={`/${locale}/contact`} className="btn btn-primary btn-lg px-6">
                {t('CTA.devis')}
              </a>
              <a href={`tel:${tCommon('phone')}`} className="btn btn-outline-primary btn-lg px-6">
                {t('CTA.call')}
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt={t('Process.imageAlt')}
                className="w-100 h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="section-title">{t('Process.title')}</h2>
        </div>
        
        <div className="row">
          <ProcessStep 
            title={t('Process.audit.title')} 
            description={t('Process.audit.description')} 
            step="1"
          />
          <ProcessStep 
            title={t('Process.design.title')} 
            description={t('Process.design.description')} 
            step="2"
          />
          <ProcessStep 
            title={t('Process.installation.title')} 
            description={t('Process.installation.description')} 
            step="3"
          />
          <ProcessStep 
            title={t('Process.testing.title')} 
            description={t('Process.testing.description')} 
            step="4"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="mb-16 bg-light py-12 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="section-title">{t('Services.title')}</h2>
          <p className="section-subtitle">
            {t('Services.subtitle')}
          </p>
        </div>
        
        <div className="row">
          <ServiceCard 
            title={t('Services.tgbt.title')} 
            description={t('Services.tgbt.description')} 
            icon="bi-building"
          />
          <ServiceCard 
            title={t('Services.divisionnaires.title')} 
            description={t('Services.divisionnaires.description')} 
            icon="bi-layers"
          />
          <ServiceCard 
            title={t('Services.cuisines.title')} 
            description={t('Services.cuisines.description')} 
            icon="bi-egg-fried"
          />
          <ServiceCard 
            title={t('Services.buanderies.title')} 
            description={t('Services.buanderies.description')} 
            icon="bi-wash"
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="section-title">{t('Benefits.title')}</h2>
          <p className="section-subtitle">
            {t('Benefits.subtitle')}
          </p>
        </div>
        
        <div className="row">
          <BenefitCard 
            title={t('Benefits.safety.title')} 
            description={t('Benefits.safety.description')} 
            icon="bi-shield-check"
          />
          <BenefitCard 
            title={t('Benefits.continuity.title')} 
            description={t('Benefits.continuity.description')} 
            icon="bi-lightning"
          />
          <BenefitCard 
            title={t('Benefits.maintenance.title')} 
            description={t('Benefits.maintenance.description')} 
            icon="bi-tools"
          />
          <BenefitCard 
            title={t('Benefits.optimization.title')} 
            description={t('Benefits.optimization.description')} 
            icon="bi-graph-up"
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="section-title">{t('Pricing.title')}</h2>
          <p className="section-subtitle">
            {t('Pricing.subtitle')}
          </p>
        </div>
        
        <div className="row">
          <PricingCard 
            title={t('Pricing.etage.title')} 
            description={t('Pricing.etage.description')} 
            price={t('Pricing.etage.price')} 
            duration={t('Pricing.etage.duration')}
          />
          <PricingCard 
            title={t('Pricing.tgbt.title')} 
            description={t('Pricing.tgbt.description')} 
            price={t('Pricing.tgbt.price')} 
            duration={t('Pricing.tgbt.duration')}
          />
          <PricingCard 
            title={t('Pricing.conformite.title')} 
            description={t('Pricing.conformite.description')} 
            price={t('Pricing.conformite.price')} 
            duration={t('Pricing.conformite.duration')}
          />
        </div>
      </section>

      {/* Preparation Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="section-title">{t('Preparation.title')}</h2>
        </div>
        
        <div className="row">
          <PreparationCard 
            title={t('Preparation.plans.title')} 
            description={t('Preparation.plans.description')} 
            icon="bi-file-earmark-text"
          />
          <PreparationCard 
            title={t('Preparation.incidents.title')} 
            description={t('Preparation.incidents.description')} 
            icon="bi-exclamation-triangle"
          />
          <PreparationCard 
            title={t('Preparation.creneaux.title')} 
            description={t('Preparation.creneaux.description')} 
            icon="bi-calendar"
          />
          <PreparationCard 
            title={t('Preparation.acces.title')} 
            description={t('Preparation.acces.description')} 
            icon="bi-door-open"
          />
        </div>
      </section>

      {/* Safety Section */}
      <section className="mb-16 bg-primary text-white py-12 rounded-lg">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">{t('Safety.title')}</h2>
        </div>
        
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <i className="bi bi-shield-check fs-1 mb-3"></i>
            <p className="text-lg">{t('Safety.tests')}</p>
          </div>
          <div className="col-md-4 mb-4">
            <i className="bi bi-file-text fs-1 mb-3"></i>
            <p className="text-lg">{t('Safety.documentation')}</p>
          </div>
          <div className="col-md-4 mb-4">
            <i className="bi bi-award fs-1 mb-3"></i>
            <p className="text-lg">{t('Safety.guarantee')}</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="section-title">{t('FAQ.title')}</h2>
        </div>
        
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <FAQItem 
              question={t('FAQ.q1.question')} 
              answer={t('FAQ.q1.answer')} 
            />
            <FAQItem 
              question={t('FAQ.q2.question')} 
              answer={t('FAQ.q2.answer')} 
            />
            <FAQItem 
              question={t('FAQ.q3.question')} 
              answer={t('FAQ.q3.answer')} 
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-12 bg-light rounded-lg">
        <h2 className="text-3xl font-bold mb-4">{t('CTA.title')}</h2>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          {t('CTA.subtitle')}
        </p>
        <div className="d-flex gap-3 justify-content-center">
          <a href={`/${locale}/contact`} className="btn btn-primary btn-lg px-6">
            {t('CTA.devis')}
          </a>
          <a href={`tel:${tCommon('phone')}`} className="btn btn-outline-primary btn-lg px-6">
            {t('CTA.call')}
          </a>
        </div>
      </section>
    </main>
  );
}

// Process Step Component
function ProcessStep({ title, description, step }: { title: string; description: string; step: string }) {
  return (
    <div className="col-md-6 col-lg-3 mb-6">
      <div className="text-center">
        <div className="bg-primary text-white rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
          <span className="fs-4 font-bold">{step}</span>
        </div>
        <h3 className="font-bold text-lg mb-3">{title}</h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
}

// Service Card Component
function ServiceCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="col-md-6 col-lg-3 mb-6">
      <div className="card h-100 shadow-sm">
        <div className="card-body text-center">
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

// Benefit Card Component
function BenefitCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="col-md-6 col-lg-3 mb-6">
      <div className="text-center">
        <div className="text-primary mb-4">
          <i className={`bi ${icon} fs-1`}></i>
        </div>
        <h3 className="font-bold text-lg mb-3">{title}</h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
}

// Pricing Card Component
function PricingCard({ title, description, price, duration }: { title: string; description: string; price: string; duration: string }) {
  return (
    <div className="col-md-4 mb-6">
      <div className="card h-100 shadow-sm">
        <div className="card-body text-center">
          <h3 className="card-title text-xl font-bold mb-3">{title}</h3>
          <p className="card-text text-gray-600 mb-4">{description}</p>
          <div className="mb-4">
            <span className="text-3xl font-bold text-primary">{price}</span>
          </div>
          <p className="text-sm text-gray-500">{duration}</p>
        </div>
      </div>
    </div>
  );
}

// Preparation Card Component
function PreparationCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="col-md-6 col-lg-3 mb-6">
      <div className="card h-100 shadow-sm">
        <div className="card-body text-center">
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

// FAQ Item Component
function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="mb-6">
      <div className="card">
        <div className="card-body">
          <h4 className="font-bold text-lg mb-3">{question}</h4>
          <p className="text-gray-600">{answer}</p>
        </div>
      </div>
    </div>
  );
}