import React from 'react';
import { getTranslations } from 'next-intl/server';

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Blog' });

  // In a real implementation, this would fetch from Contentlayer
  const posts = [
    {
      id: 1,
      title: t('posts.motorWinding.title'),
      excerpt: t('posts.motorWinding.excerpt'),
      date: "2024-01-15",
      slug: "guide-bobinage-moteurs"
    },
    {
      id: 2,
      title: t('posts.hotelElectrical.title'),
      excerpt: t('posts.hotelElectrical.excerpt'),
      date: "2024-01-10",
      slug: "securite-electrique-hotels"
    },
    {
      id: 3,
      title: t('posts.buildingInstallation.title'),
      excerpt: t('posts.buildingInstallation.excerpt'),
      date: "2024-01-05",
      slug: "installation-electrique-immeuble"
    },
    {
      id: 4,
      title: t('posts.electricalMaintenance.title'),
      excerpt: t('posts.electricalMaintenance.excerpt'),
      date: "2023-12-20",
      slug: "maintenance-preventive"
    },
    {
      id: 5,
      title: t('posts.energyEfficiency.title'),
      excerpt: t('posts.energyEfficiency.excerpt'),
      date: "2023-12-15",
      slug: "economies-energie"
    },
    {
      id: 6,
      title: t('posts.electricalStandards.title'),
      excerpt: t('posts.electricalStandards.excerpt'),
      date: "2023-12-10",
      slug: "normes-electriques-maroc"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="section-title">{t('title')}</h1>
        <p className="section-subtitle">
          {t('subtitle')}
        </p>
      </div>

      <div className="row">
        {posts.map((post) => (
          <div key={post.id} className="col-md-4 mb-8">
            <div className="card h-100 shadow-sm hover:shadow-lg transition-all">
              <div className="card-body d-flex flex-column">
                <h3 className="card-title text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-muted mb-2 text-sm">{post.date}</p>
                <p className="card-text text-gray-600 flex-grow-1">{post.excerpt}</p>
                <a href={`/${locale}/blog/${post.slug}`} className="btn btn-primary mt-3">
                  {t('readMore')}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <nav aria-label="Blog pagination" className="mt-12">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a className="page-link" href="#" tabIndex={-1} aria-disabled="true">{t('previous')}</a>
          </li>
          <li className="page-item active" aria-current="page">
            <a className="page-link" href="#">1</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">2</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">3</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">{t('next')}</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}