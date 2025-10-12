import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Portfolio' });
  
  return {
    title: t('meta.title'),
    description: t('meta.description'),
  };
}

export default async function PortfolioPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Portfolio' });
  const tCommon = await getTranslations({ locale, namespace: 'Common' });

  const caseStudies = [
    {
      id: 'hotel-tgbt',
      title: t('caseStudies.hotelTgbt.title'),
      description: t('caseStudies.hotelTgbt.description'),
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      category: t('caseStudies.hotelTgbt.category'),
      location: t('caseStudies.hotelTgbt.location'),
      duration: t('caseStudies.hotelTgbt.duration'),
      challenges: [
        t('caseStudies.hotelTgbt.challenges.old'),
        t('caseStudies.hotelTgbt.challenges.compliance'),
        t('caseStudies.hotelTgbt.challenges.continuity')
      ],
      solutions: [
        t('caseStudies.hotelTgbt.solutions.design'),
        t('caseStudies.hotelTgbt.solutions.standards'),
        t('caseStudies.hotelTgbt.solutions.testing')
      ],
      results: [
        t('caseStudies.hotelTgbt.results.zero'),
        t('caseStudies.hotelTgbt.results.compliance'),
        t('caseStudies.hotelTgbt.results.satisfaction')
      ]
    },
    {
      id: 'motor-rewinding',
      title: t('caseStudies.motorRewinding.title'),
      description: t('caseStudies.motorRewinding.description'),
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      category: t('caseStudies.motorRewinding.category'),
      location: t('caseStudies.motorRewinding.location'),
      duration: t('caseStudies.motorRewinding.duration'),
      challenges: [
        t('caseStudies.motorRewinding.challenges.performance'),
        t('caseStudies.motorRewinding.challenges.downtime'),
        t('caseStudies.motorRewinding.challenges.cost')
      ],
      solutions: [
        t('caseStudies.motorRewinding.solutions.diagnosis'),
        t('caseStudies.motorRewinding.solutions.rewinding'),
        t('caseStudies.motorRewinding.solutions.testing')
      ],
      results: [
        t('caseStudies.motorRewinding.results.performance'),
        t('caseStudies.motorRewinding.results.efficiency'),
        t('caseStudies.motorRewinding.results.warranty')
      ]
    },
    {
      id: 'building-installation',
      title: t('caseStudies.buildingInstallation.title'),
      description: t('caseStudies.buildingInstallation.description'),
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      category: t('caseStudies.buildingInstallation.category'),
      location: t('caseStudies.buildingInstallation.location'),
      duration: t('caseStudies.buildingInstallation.duration'),
      challenges: [
        t('caseStudies.buildingInstallation.challenges.complexity'),
        t('caseStudies.buildingInstallation.challenges.standards'),
        t('caseStudies.buildingInstallation.challenges.coordination')
      ],
      solutions: [
        t('caseStudies.buildingInstallation.solutions.planning'),
        t('caseStudies.buildingInstallation.solutions.installation'),
        t('caseStudies.buildingInstallation.solutions.documentation')
      ],
      results: [
        t('caseStudies.buildingInstallation.results.compliance'),
        t('caseStudies.buildingInstallation.results.efficiency'),
        t('caseStudies.buildingInstallation.results.satisfaction')
      ]
    },
    {
      id: 'restaurant-panels',
      title: t('caseStudies.restaurantPanels.title'),
      description: t('caseStudies.restaurantPanels.description'),
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      category: t('caseStudies.restaurantPanels.category'),
      location: t('caseStudies.restaurantPanels.location'),
      duration: t('caseStudies.restaurantPanels.duration'),
      challenges: [
        t('caseStudies.restaurantPanels.challenges.hygiene'),
        t('caseStudies.restaurantPanels.challenges.safety'),
        t('caseStudies.restaurantPanels.challenges.continuity')
      ],
      solutions: [
        t('caseStudies.restaurantPanels.solutions.design'),
        t('caseStudies.restaurantPanels.solutions.materials'),
        t('caseStudies.restaurantPanels.solutions.protection')
      ],
      results: [
        t('caseStudies.restaurantPanels.results.safety'),
        t('caseStudies.restaurantPanels.results.compliance'),
        t('caseStudies.restaurantPanels.results.performance')
      ]
    },
    {
      id: 'industrial-motors',
      title: t('caseStudies.industrialMotors.title'),
      description: t('caseStudies.industrialMotors.description'),
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      category: t('caseStudies.industrialMotors.category'),
      location: t('caseStudies.industrialMotors.location'),
      duration: t('caseStudies.industrialMotors.duration'),
      challenges: [
        t('caseStudies.industrialMotors.challenges.critical'),
        t('caseStudies.industrialMotors.challenges.downtime'),
        t('caseStudies.industrialMotors.challenges.performance')
      ],
      solutions: [
        t('caseStudies.industrialMotors.solutions.emergency'),
        t('caseStudies.industrialMotors.solutions.rewinding'),
        t('caseStudies.industrialMotors.solutions.testing')
      ],
      results: [
        t('caseStudies.industrialMotors.results.uptime'),
        t('caseStudies.industrialMotors.results.performance'),
        t('caseStudies.industrialMotors.results.reliability')
      ]
    },
    {
      id: 'apartment-building',
      title: t('caseStudies.apartmentBuilding.title'),
      description: t('caseStudies.apartmentBuilding.description'),
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      category: t('caseStudies.apartmentBuilding.category'),
      location: t('caseStudies.apartmentBuilding.location'),
      duration: t('caseStudies.apartmentBuilding.duration'),
      challenges: [
        t('caseStudies.apartmentBuilding.challenges.old'),
        t('caseStudies.apartmentBuilding.challenges.safety'),
        t('caseStudies.apartmentBuilding.challenges.standards')
      ],
      solutions: [
        t('caseStudies.apartmentBuilding.solutions.renovation'),
        t('caseStudies.apartmentBuilding.solutions.installation'),
        t('caseStudies.apartmentBuilding.solutions.compliance')
      ],
      results: [
        t('caseStudies.apartmentBuilding.results.safety'),
        t('caseStudies.apartmentBuilding.results.compliance'),
        t('caseStudies.apartmentBuilding.results.satisfaction')
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('Hero.title')}</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('Hero.description')}</p>
      </div>

      {/* Case Studies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((study, index) => (
          <div key={study.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img 
              src={study.image} 
              alt={study.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  {study.category}
                </span>
                <span className="text-sm text-gray-500">{study.duration}</span>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{study.title}</h3>
              <p className="text-gray-600 mb-3">{study.description}</p>
              
              <div className="mb-4">
                <span className="text-sm text-gray-500">{t('location')}: {study.location}</span>
              </div>

              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">{t('challenges')}:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {study.challenges.map((challenge, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">{t('solutions')}:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {study.solutions.map((solution, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">{t('results')}:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {study.results.map((result, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16 bg-primary text-white py-12 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">{t('CTA.title')}</h2>
        <p className="text-xl mb-6">{t('CTA.subtitle')}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href={`/${locale}/contact`}
            className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            {t('CTA.button')}
          </a>
          <a 
            href={`tel:${tCommon('phone')}`}
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
          >
            {t('CTA.phone')}
          </a>
        </div>
      </div>
    </div>
  );
}
