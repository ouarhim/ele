import React from 'react';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

interface BlogPageProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ page?: string }>;
}

export default async function BlogPage({ params, searchParams }: BlogPageProps) {
  const { locale } = await params;
  const { page = '1' } = await searchParams;
  const t = await getTranslations({ locale, namespace: 'Blog' });

  // All blog posts
  const allPosts = [
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
    },
    {
      id: 7,
      title: t('posts.emergencyRepairs.title'),
      excerpt: t('posts.emergencyRepairs.excerpt'),
      date: "2023-12-05",
      slug: "reparations-urgence"
    },
    {
      id: 8,
      title: t('posts.solarInstallation.title'),
      excerpt: t('posts.solarInstallation.excerpt'),
      date: "2023-11-28",
      slug: "installation-solaire"
    },
    {
      id: 9,
      title: t('posts.electricalSafety.title'),
      excerpt: t('posts.electricalSafety.excerpt'),
      date: "2023-11-20",
      slug: "securite-electrique"
    }
  ];

  // Pagination logic
  const postsPerPage = 3;
  const currentPage = parseInt(page);
  const totalPages = Math.ceil(allPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const posts = allPosts.slice(startIndex, endIndex);

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
          {/* Previous button */}
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            {currentPage === 1 ? (
              <span className="page-link" tabIndex={-1} aria-disabled="true">{t('previous')}</span>
            ) : (
              <Link 
                href={`/${locale}/blog?page=${currentPage - 1}`} 
                className="page-link"
              >
                {t('previous')}
              </Link>
            )}
          </li>

          {/* Page numbers */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
            <li 
              key={pageNum} 
              className={`page-item ${currentPage === pageNum ? 'active' : ''}`}
              aria-current={currentPage === pageNum ? 'page' : undefined}
            >
              <Link 
                href={`/${locale}/blog?page=${pageNum}`} 
                className="page-link"
              >
                {pageNum}
              </Link>
            </li>
          ))}

          {/* Next button */}
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            {currentPage === totalPages ? (
              <span className="page-link" tabIndex={-1} aria-disabled="true">{t('next')}</span>
            ) : (
              <Link 
                href={`/${locale}/blog?page=${currentPage + 1}`} 
                className="page-link"
              >
                {t('next')}
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}