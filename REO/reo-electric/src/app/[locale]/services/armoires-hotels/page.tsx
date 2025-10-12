import React from 'react';
import { getTranslations } from 'next-intl/server';

export default async function ArmoiresHotelsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('ArmoiresHotels');

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            {t('Hero.title')}
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {t('Hero.description')}
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="mb-16">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-8 mb-lg-0">
            <h2 className="text-3xl font-bold mb-6">{t('Process.title')}</h2>
            <div className="space-y-4">
              <ProcessStep 
                step="1"
                title={t('Process.audit.title')}
                description={t('Process.audit.description')}
              />
              <ProcessStep 
                step="2"
                title={t('Process.design.title')}
                description={t('Process.design.description')}
              />
              <ProcessStep 
                step="3"
                title={t('Process.installation.title')}
                description={t('Process.installation.description')}
              />
              <ProcessStep 
                step="4"
                title={t('Process.testing.title')}
                description={t('Process.testing.description')}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt={t('Process.imageAlt')}
                className="w-100 h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="mb-16 bg-light py-12 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t('Services.title')}</h2>
          <p className="text-lg text-gray-700">
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
            icon="bi-grid"
          />
          <ServiceCard 
            title={t('Services.cuisines.title')} 
            description={t('Services.cuisines.description')} 
            icon="bi-egg-fried"
          />
          <ServiceCard 
            title={t('Services.buanderies.title')} 
            description={t('Services.buanderies.description')} 
            icon="bi-washing-machine"
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t('Benefits.title')}</h2>
          <p className="text-lg text-gray-700">
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
          <h2 className="text-3xl font-bold mb-4">{t('Pricing.title')}</h2>
          <p className="text-lg text-gray-700">
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
        <div className="row">
          <div className="col-lg-6 mb-8 mb-lg-0">
            <h2 className="text-3xl font-bold mb-6">{t('Preparation.title')}</h2>
            <div className="space-y-4">
              <PreparationItem 
                title={t('Preparation.plans.title')}
                description={t('Preparation.plans.description')}
              />
              <PreparationItem 
                title={t('Preparation.incidents.title')}
                description={t('Preparation.incidents.description')}
              />
              <PreparationItem 
                title={t('Preparation.creneaux.title')}
                description={t('Preparation.creneaux.description')}
              />
              <PreparationItem 
                title={t('Preparation.acces.title')}
                description={t('Preparation.acces.description')}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="bg-primary text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">{t('Safety.title')}</h3>
              <ul className="space-y-2">
                <li>{t('Safety.tests')}</li>
                <li>{t('Safety.documentation')}</li>
                <li>{t('Safety.guarantee')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t('FAQ.title')}</h2>
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
      <section className="text-center py-12 bg-primary text-white rounded-lg">
        <h2 className="text-3xl font-bold mb-4">{t('CTA.title')}</h2>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          {t('CTA.subtitle')}
        </p>
        <div className="d-flex gap-3 justify-content-center">
          <a href={`/${locale}/contact`} className="btn btn-light btn-lg px-6">
            {t('CTA.devis')}
          </a>
          <a href={`tel:${t('Common.phone')}`} className="btn btn-outline-light btn-lg px-6">
            {t('CTA.call')}
          </a>
        </div>
      </section>
    </div>
  );
}

// Process Step Component
function ProcessStep({ step, title, description }: { step: string; title: string; description: string }) {
  return (
    <div className="d-flex align-items-start mb-4">
      <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}>
        {step}
      </div>
      <div>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

// Service Card Component
function ServiceCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="col-md-6 col-lg-3 mb-6">
      <div className="text-center">
        <div className="bg-primary text-white rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
          <i className={`bi ${icon} fs-3`}></i>
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

// Benefit Card Component
function BenefitCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="col-md-6 col-lg-3 mb-6">
      <div className="text-center">
        <div className="bg-primary text-white rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
          <i className={`bi ${icon} fs-3`}></i>
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
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
          <h3 className="text-xl font-bold mb-3">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="text-primary font-bold text-2xl mb-2">{price}</div>
          <div className="text-muted">{duration}</div>
        </div>
      </div>
    </div>
  );
}

// Preparation Item Component
function PreparationItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="d-flex align-items-start mb-4">
      <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '24px', height: '24px' }}>
        <i className="bi bi-check"></i>
      </div>
      <div>
        <h4 className="font-bold mb-1">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

// FAQ Item Component
function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-bold mb-2">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  );
}
