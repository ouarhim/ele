import React from 'react';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { locale, slug } = await params;
  const t = await getTranslations('Blog');

  // Map slugs to article keys
  const slugToArticleMap: { [key: string]: string } = {
    'guide-bobinage-moteurs': 'motorWinding',
    'securite-electrique-hotels': 'hotelElectrical',
    'installation-electrique-immeuble': 'buildingInstallation',
    'maintenance-preventive': 'electricalMaintenance',
    'economies-energie': 'energyEfficiency',
    'normes-electriques-maroc': 'electricalStandards',
    'reparations-urgence': 'emergencyRepairs',
    'installation-solaire': 'solarInstallation',
    'securite-electrique': 'electricalSafety'
  };

  const articleKey = slugToArticleMap[slug];
  if (!articleKey) {
    notFound();
  }

  // Get article data from translations
  const article = {
    title: t(`articles.${articleKey}.title`),
    excerpt: t(`articles.${articleKey}.excerpt`),
    content: t(`articles.${articleKey}.content`),
    date: "2024-01-15",
    author: "REO Electric Team"
  };

  // Generate content sections dynamically based on available sections
  const contentSections = [];
  
  // Introduction section
  if (t(`articles.${articleKey}.sections.introduction`)) {
    contentSections.push({
      title: t(`articles.${articleKey}.sections.introduction`),
      content: t(`articles.${articleKey}.content`)
    });
  }

  // Process/Technical section
  const processTitle = t(`articles.${articleKey}.sections.process`) || 
                      t(`articles.${articleKey}.sections.maintenance`) || 
                      t(`articles.${articleKey}.sections.materials`) ||
                      t(`articles.${articleKey}.sections.planning`);
  
  if (processTitle) {
    contentSections.push({
      title: processTitle,
      content: locale === 'fr' 
        ? "Notre processus professionnel garantit des résultats de qualité supérieure avec une traçabilité complète."
        : locale === 'ar' 
          ? "عملية المهنية تضمن نتائج عالية الجودة مع تتبع كامل."
          : "Our professional process ensures superior quality results with complete traceability."
    });
  }

  // Benefits/Results section
  const benefitsTitle = t(`articles.${articleKey}.sections.benefits`) || 
                       t(`articles.${articleKey}.sections.compliance`) || 
                       t(`articles.${articleKey}.sections.testing`) ||
                       t(`articles.${articleKey}.sections.emergency`);
  
  if (benefitsTitle) {
    contentSections.push({
      title: benefitsTitle,
      content: locale === 'fr' 
        ? "Les avantages de notre approche professionnelle incluent la durabilité, l'efficacité et la conformité aux normes."
        : locale === 'ar' 
          ? "فوائد نهجنا المهني تشمل المتانة والكفاءة والامتثال للمعايير."
          : "The benefits of our professional approach include durability, efficiency, and standards compliance."
    });
  }

  // Safety/Standards section
  const safetyTitle = t(`articles.${articleKey}.sections.safety`) || 
                      t(`articles.${articleKey}.sections.standards`) ||
                      t(`articles.${articleKey}.sections.installation`);
  
  if (safetyTitle) {
    contentSections.push({
      title: safetyTitle,
      content: locale === 'fr' 
        ? "La sécurité et la conformité aux normes sont nos priorités absolues dans chaque intervention."
        : locale === 'ar' 
          ? "السلامة والامتثال للمعايير هي أولوياتنا المطلقة في كل تدخل."
          : "Safety and standards compliance are our absolute priorities in every intervention."
    });
  }

  // Related posts data
  const relatedPosts = [
    {
      id: 1,
      title: t('posts.energyEfficiency.title'),
      excerpt: t('posts.energyEfficiency.excerpt'),
      date: "2023-12-15",
      slug: "economies-energie"
    },
    {
      id: 2,
      title: t('posts.electricalSafety.title'),
      excerpt: t('posts.electricalSafety.excerpt'),
      date: "2023-11-20",
      slug: "securite-electrique"
    }
  ];

  return (
    <article className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
          <div className="d-flex justify-content-center align-items-center text-muted">
            <span>{article.date}</span>
            <span className="mx-3">•</span>
            <span>{t('by')} {article.author}</span>
          </div>
        </header>
        
        <div className="rounded-lg overflow-hidden mb-8">
          <img 
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
            alt="Renewable energy" 
            className="w-100 h-auto"
          />
        </div>
        
        <div className="blog-content">
          {contentSections.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">{section.title}</h2>
              <p className="text-gray-700 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 pt-8 border-top">
          <div className="d-flex justify-content-between align-items-center">
            <Link href={`/${locale}/blog`} className="btn btn-outline-primary">
              {t('backToBlog')}
            </Link>
            <div className="d-flex gap-2">
              <button className="btn btn-primary">{t('share')}</button>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6">{t('relatedPosts')}</h3>
          <div className="row">
            {relatedPosts.map((relatedPost) => (
              <div key={relatedPost.id} className="col-md-6 mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <h4 className="card-title font-bold mb-2">{relatedPost.title}</h4>
                    <p className="text-muted text-sm mb-2">{relatedPost.date}</p>
                    <p className="card-text text-gray-600">{relatedPost.excerpt}</p>
                    <Link href={`/${locale}/blog/${relatedPost.slug}`} className="btn btn-sm btn-outline-primary">
                      {t('readMore')}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Post Navigation */}
        <div className="mt-12 pt-8 border-top">
          <div className="d-flex justify-content-between">
            <Link href={`/${locale}/blog`} className="btn btn-outline-secondary">
              {t('previous')}
            </Link>
            <Link href={`/${locale}/blog`} className="btn btn-outline-secondary">
              {t('next')}
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}