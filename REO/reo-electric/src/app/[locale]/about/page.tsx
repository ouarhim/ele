import React from 'react';
import { getTranslations } from 'next-intl/server';

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'About' });

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

      {/* Company Story Section */}
      <section className="mb-16">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-8 mb-lg-0">
            <h2 className="text-3xl font-bold mb-6">{t('Story.title')}</h2>
            <p className="text-lg mb-6 text-gray-700">
              {t('Story.description1')}
            </p>
            <p className="text-lg mb-6 text-gray-700">
              {t('Story.description2')}
            </p>
            <div className="d-flex gap-3">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <div className="text-sm text-gray-600">{t('Story.yearsExperience')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-gray-600">{t('Story.projectsCompleted')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-gray-600">{t('Story.satisfactionRate')}</div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt={t('Story.imageAlt')}
                className="w-100 h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mb-16 bg-light py-12 rounded-lg">
        <div className="row">
          <div className="col-md-6 mb-8 mb-md-0">
            <div className="text-center">
              <div className="bg-primary text-white rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                <i className="bi bi-bullseye fs-3"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">{t('Mission.title')}</h3>
              <p className="text-gray-700">
                {t('Mission.description')}
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="text-center">
              <div className="bg-primary text-white rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                <i className="bi bi-eye fs-3"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">{t('Vision.title')}</h3>
              <p className="text-gray-700">
                {t('Vision.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t('Values.title')}</h2>
          <p className="text-lg text-gray-700">
            {t('Values.subtitle')}
          </p>
        </div>
        
        <div className="row">
          <ValueCard 
            title={t('Values.safety.title')} 
            description={t('Values.safety.description')} 
            icon="bi-shield-check"
          />
          <ValueCard 
            title={t('Values.quality.title')} 
            description={t('Values.quality.description')} 
            icon="bi-award"
          />
          <ValueCard 
            title={t('Values.innovation.title')} 
            description={t('Values.innovation.description')} 
            icon="bi-lightbulb"
          />
          <ValueCard 
            title={t('Values.integrity.title')} 
            description={t('Values.integrity.description')} 
            icon="bi-heart"
          />
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t('Team.title')}</h2>
          <p className="text-lg text-gray-700">
            {t('Team.subtitle')}
          </p>
        </div>
        
        <div className="row">
          <TeamMember 
            name={t('Team.ceo.name')}
            position={t('Team.ceo.position')}
            description={t('Team.ceo.description')}
            image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
          />
          <TeamMember 
            name={t('Team.cto.name')}
            position={t('Team.cto.position')}
            description={t('Team.cto.description')}
            image="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
          />
          <TeamMember 
            name={t('Team.lead.name')}
            position={t('Team.lead.position')}
            description={t('Team.lead.description')}
            image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
          />
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="text-center py-12 bg-primary text-white rounded-lg">
        <h2 className="text-3xl font-bold mb-4">{t('Contact.title')}</h2>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          {t('Contact.subtitle')}
        </p>
        <a href={`/${locale}/contact`} className="btn btn-light btn-lg px-6">
          {t('Contact.cta')}
        </a>
      </section>
    </div>
  );
}

// Value Card Component
function ValueCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="col-md-6 col-lg-3 mb-6">
      <div className="text-center">
        <div className="bg-primary text-white rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
          <i className={`bi ${icon} fs-3`}></i>
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
}

// Team Member Component
function TeamMember({ name, position, description, image }: { name: string; position: string; description: string; image: string }) {
  return (
    <div className="col-md-4 mb-6">
      <div className="card h-100 shadow-sm">
        <div className="card-body text-center">
          <img 
            src={image} 
            alt={name}
            className="rounded-circle mb-4 mx-auto"
            style={{ width: '120px', height: '120px', objectFit: 'cover' }}
          />
          <h3 className="text-xl font-bold mb-2">{name}</h3>
          <p className="text-primary font-semibold mb-3">{position}</p>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}
