import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'FAQ' });
  
  return {
    title: t('meta.title'),
    description: t('meta.description'),
  };
}

export default async function FAQPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'FAQ' });

  const faqCategories = [
    {
      id: 'general',
      title: t('categories.general.title'),
      icon: 'bi-question-circle',
      questions: [
        {
          id: 'what-services',
          question: t('questions.whatServices.question'),
          answer: t('questions.whatServices.answer')
        },
        {
          id: 'service-area',
          question: t('questions.serviceArea.question'),
          answer: t('questions.serviceArea.answer')
        },
        {
          id: 'emergency-service',
          question: t('questions.emergencyService.question'),
          answer: t('questions.emergencyService.answer')
        },
        {
          id: 'certification',
          question: t('questions.certification.question'),
          answer: t('questions.certification.answer')
        }
      ]
    },
    {
      id: 'bobinage',
      title: t('categories.bobinage.title'),
      icon: 'bi-gear',
      questions: [
        {
          id: 'motor-diagnosis',
          question: t('questions.motorDiagnosis.question'),
          answer: t('questions.motorDiagnosis.answer')
        },
        {
          id: 'rewinding-time',
          question: t('questions.rewindingTime.question'),
          answer: t('questions.rewindingTime.answer')
        },
        {
          id: 'warranty',
          question: t('questions.warranty.question'),
          answer: t('questions.warranty.answer')
        }
      ]
    },
    {
      id: 'armoires',
      title: t('categories.armoires.title'),
      icon: 'bi-building',
      questions: [
        {
          id: 'panel-design',
          question: t('questions.panelDesign.question'),
          answer: t('questions.panelDesign.answer')
        },
        {
          id: 'compliance',
          question: t('questions.compliance.question'),
          answer: t('questions.compliance.answer')
        }
      ]
    },
    {
      id: 'installations',
      title: t('categories.installations.title'),
      icon: 'bi-house-door',
      questions: [
        {
          id: 'building-installation',
          question: t('questions.buildingInstallation.question'),
          answer: t('questions.buildingInstallation.answer')
        },
        {
          id: 'timeline',
          question: t('questions.timeline.question'),
          answer: t('questions.timeline.answer')
        }
      ]
    },
    {
      id: 'pricing',
      title: t('categories.pricing.title'),
      icon: 'bi-currency-dollar',
      questions: [
        {
          id: 'quote-process',
          question: t('questions.quoteProcess.question'),
          answer: t('questions.quoteProcess.answer')
        },
        {
          id: 'payment-methods',
          question: t('questions.paymentMethods.question'),
          answer: t('questions.paymentMethods.answer')
        }
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

      {/* Search Bar */}
      <div className="mb-8">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder={t('search.placeholder')}
              className="w-full px-4 py-3 pl-12 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <i className="bi bi-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          </div>
        </div>
      </div>

      {/* FAQ Categories */}
      <div className="space-y-8">
        {faqCategories.map((category) => (
          <div key={category.id} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-6">
              <i className={`bi ${category.icon} text-2xl text-primary mr-3`}></i>
              <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
            </div>
            
            <div className="space-y-4">
              {category.questions.map((faq) => (
                <div key={faq.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <i className="bi bi-question-circle text-primary text-lg"></i>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="mt-16 bg-primary text-white py-12 rounded-lg text-center">
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
            href={`tel:${t('Common.phone')}`}
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
          >
            {t('CTA.phone')}
          </a>
        </div>
      </div>
    </div>
  );
}
