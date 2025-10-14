import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Blog' });
  
  return {
    title: t('articles.motorWindingGuide.meta.title'),
    description: t('articles.motorWindingGuide.meta.description'),
  };
}

export default async function MotorWindingGuidePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Blog.articles.motorWindingGuide' });

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <span className="bg-primary text-white px-2 py-1 rounded mr-2">{t('category')}</span>
            <span>{t('date')}</span>
            <span className="mx-2">•</span>
            <span>{t('readTime')}</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('title')}</h1>
          <p className="text-xl text-gray-600">{t('excerpt')}</p>
        </div>

        {/* Article Image */}
        <div className="mb-8">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
            alt={t('title')}
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('sections.introduction.title')}</h2>
            <p className="text-gray-700 mb-4">{t('sections.introduction.content')}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('sections.signs.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2">{t('sections.signs.overheating.title')}</h3>
                <p className="text-red-700">{t('sections.signs.overheating.content')}</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-2">{t('sections.signs.vibrations.title')}</h3>
                <p className="text-yellow-700">{t('sections.signs.vibrations.content')}</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">{t('sections.signs.noise.title')}</h3>
                <p className="text-blue-700">{t('sections.signs.noise.content')}</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">{t('sections.signs.performance.title')}</h3>
                <p className="text-green-700">{t('sections.signs.performance.content')}</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('sections.process.title')}</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{t('sections.process.step1.title')}</h3>
                  <p className="text-gray-700">{t('sections.process.step1.content')}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{t('sections.process.step2.title')}</h3>
                  <p className="text-gray-700">{t('sections.process.step2.content')}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{t('sections.process.step3.title')}</h3>
                  <p className="text-gray-700">{t('sections.process.step3.content')}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{t('sections.process.step4.title')}</h3>
                  <p className="text-gray-700">{t('sections.process.step4.content')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('sections.benefits.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-4">💰</div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('sections.benefits.cost.title')}</h3>
                <p className="text-gray-700">{t('sections.benefits.cost.content')}</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('sections.benefits.performance.title')}</h3>
                <p className="text-gray-700">{t('sections.benefits.performance.content')}</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-4">🛡️</div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('sections.benefits.warranty.title')}</h3>
                <p className="text-gray-700">{t('sections.benefits.warranty.content')}</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('sections.conclusion.title')}</h2>
            <p className="text-gray-700 mb-4">{t('sections.conclusion.content')}</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-primary text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">{t('cta.title')}</h2>
          <p className="text-lg mb-6">{t('cta.subtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`/${locale}/contact`}
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              {t('cta.button')}
            </a>
            <a 
              href={`tel:${t('cta.phone')}`}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              {t('cta.phoneText')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
