import React from 'react';
import { getTranslations } from 'next-intl/server';

export default async function BlogPostPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const t = await getTranslations('Blog');

  // In a real implementation, this would fetch from Contentlayer based on the slug
  const post = {
    title: locale === 'fr' 
      ? "L'avenir de l'énergie renouvelable" 
      : locale === 'ar' 
        ? "مستقبل الطاقة المتجددة" 
        : "The Future of Renewable Energy",
    date: "2023-06-15",
    author: "John Smith",
    content: `
      <p>${locale === 'fr' 
        ? "Le paysage énergétique évolue rapidement alors que nous nous dirigeons vers un avenir plus durable. Les sources d'énergie renouvelable comme le solaire, l'éolien et l'hydroélectricité deviennent de plus en plus rentables et efficaces." 
        : locale === 'ar' 
          ? "المشهد الطاقي يتطور بسرعة بينما نتجه نحو مستقبل أكثر استدامة. مصادر الطاقة المتجددة مثل الطاقة الشمسية وطاقة الرياح والطاقة الكهرومائية تصبح أكثر فعالية من حيث التكلفة وكفاءة." 
          : "The energy landscape is rapidly evolving as we move towards a more sustainable future. Renewable energy sources like solar, wind, and hydroelectric power are becoming increasingly cost-effective and efficient."}</p>
      
      <p>${locale === 'fr' 
        ? "Ces dernières années, nous avons assisté à des progrès significatifs dans la technologie de stockage des batteries, ce qui est crucial pour gérer le caractère intermittent des sources renouvelables. Cela a permis aux maisons et aux entreprises de stocker l'énergie excédentaire générée pendant les périodes de production maximale pour l'utiliser lorsque la production est faible." 
        : locale === 'ar' 
          ? "في السنوات الأخيرة، شهدنا تطورات كبيرة في تقنية تخزين البطاريات، وهي أمر بالغ الأهمية لإدارة الطبيعة متقطعة للمصادر المتجددة. وهذا جعل من الممكن للمنازل والشركات تخزين الطاقة الزائدة التي يتم إنتاجها خلال فترات الذروة لاستخدامها عندما تكون الإنتاجية منخفضة." 
          : "In recent years, we've seen significant advancements in battery storage technology, which is crucial for managing the intermittent nature of renewable sources. This has made it possible for homes and businesses to store excess energy generated during peak production times for use when production is low."}</p>
      
      <h2>${locale === 'fr' 
        ? "Technologies émergentes" 
        : locale === 'ar' 
          ? "التقنيات الناشئة" 
          : "Emerging Technologies"}</h2>
      
      <p>${locale === 'fr' 
        ? "Plusieurs technologies émergentes sont destinées à révolutionner le secteur des énergies renouvelables :" 
        : locale === 'ar' 
          ? "عدة تقنيات ناشئة من المقرر أن تحدث ثورة في قطاع الطاقة المتجددة:" 
          : "Several emerging technologies are set to revolutionize the renewable energy sector:"}</p>
      
      <ul>
        <li>${locale === 'fr' 
          ? "Conceptions avancées de panneaux solaires avec des taux d'efficacité plus élevés" 
          : locale === 'ar' 
            ? "تصاميم متقدمة للألواح الشمسية بمعدلات كفاءة أعلى" 
            : "Advanced solar panel designs with higher efficiency rates"}</li>
        <li>${locale === 'fr' 
          ? "Parcs éoliens offshore qui peuvent générer plus d'énergie que les installations terrestres" 
          : locale === 'ar' 
            ? "مزرعة الرياح البحرية التي يمكنها توليد طاقة أكثر من المواقع البرية" 
            : "Offshore wind farms that can generate more power than land-based installations"}</li>
        <li>${locale === 'fr' 
          ? "Technologies de batteries de nouvelle génération avec des durées de vie plus longues" 
          : locale === 'ar' 
            ? "تقنيات البطاريات من الجيل التالي بعمر أطول" 
            : "Next-generation battery technologies with longer lifespans"}</li>
        <li>${locale === 'fr' 
          ? "Systèmes de réseau intelligent qui optimisent la distribution d'énergie" 
          : locale === 'ar' 
            ? "أنظمة الشبكة الذكية التي تحسن توزيع الطاقة" 
            : "Smart grid systems that optimize energy distribution"}</li>
      </ul>
      
      <p>${locale === 'fr' 
        ? "Alors que ces technologies continuent de se développer et de devenir plus abordables, nous pouvons nous attendre à voir une transition accélérée loin des combustibles fossiles. Ce changement est non seulement bénéfique sur le plan environnemental, mais aussi avantageux sur le plan économique à long terme." 
        : locale === 'ar' 
          ? "بينما تستمر هذه التقنيات في التطور وأصبحت أكثر تحملًا، يمكننا أن نتوقع رؤية انتقال متسارع بعيدًا عن الوقود الأحفوري. هذا التحول مفيد ليس فقط بيئيًا ولكن أيضًا من الناحية الاقتصادية على المدى الطويل." 
          : "As these technologies continue to develop and become more affordable, we can expect to see an accelerated transition away from fossil fuels. This shift is not only environmentally beneficial but also economically advantageous in the long term."}</p>
    `
  };

  // Related posts data
  const relatedPosts = [
    {
      id: 1,
      title: locale === 'fr' 
        ? "Conseils d'efficacité énergétique pour votre maison" 
        : locale === 'ar' 
          ? "نصائح لزيادة كفاءة الطاقة في منزلك" 
          : "Energy Efficiency Tips for Your Home",
      excerpt: locale === 'fr' 
        ? "Moyens simples et efficaces de réduire votre consommation d'énergie." 
        : locale === 'ar' 
          ? "طرق بسيطة وفعالة لتقليل استهلاك الطاقة." 
          : "Simple and effective ways to reduce your energy consumption.",
      date: "2023-05-22",
      slug: "energy-efficiency-tips"
    },
    {
      id: 2,
      title: locale === 'fr' 
        ? "Comprendre la technologie des réseaux intelligents" 
        : locale === 'ar' 
          ? "فهم تقنية الشبكة الذكية" 
          : "Understanding Smart Grid Technology",
      excerpt: locale === 'fr' 
        ? "Comment les réseaux intelligents révolutionnent l'industrie électrique." 
        : locale === 'ar' 
          ? "كيف تحدث الشبكات الذكية ثورة في الصناعة الكهربائية." 
          : "How smart grids are revolutionizing the electrical industry.",
      date: "2023-04-10",
      slug: "smart-grid-technology"
    }
  ];

  return (
    <article className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="d-flex justify-content-center align-items-center text-muted">
            <span>{post.date}</span>
            <span className="mx-3">•</span>
            <span>{t('Blog.by')} {post.author}</span>
          </div>
        </header>
        
        <div className="rounded-lg overflow-hidden mb-8">
          <img 
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
            alt="Renewable energy" 
            className="w-100 h-auto"
          />
        </div>
        
        <div 
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        <div className="mt-8 pt-8 border-top">
          <div className="d-flex justify-content-between align-items-center">
            <a href={`/${locale}/blog`} className="btn btn-outline-primary">
              {t('Blog.backToBlog')}
            </a>
            <div className="d-flex gap-2">
              <button className="btn btn-primary">{t('Blog.share')}</button>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6">{t('Blog.relatedPosts')}</h3>
          <div className="row">
            {relatedPosts.map((relatedPost) => (
              <div key={relatedPost.id} className="col-md-6 mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <h4 className="card-title font-bold mb-2">{relatedPost.title}</h4>
                    <p className="text-muted text-sm mb-2">{relatedPost.date}</p>
                    <p className="card-text text-gray-600">{relatedPost.excerpt}</p>
                    <a href={`/${locale}/blog/${relatedPost.slug}`} className="btn btn-sm btn-outline-primary">
                      {t('Blog.readMore')}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Post Navigation */}
        <div className="mt-12 pt-8 border-top">
          <div className="d-flex justify-content-between">
            <a href="#" className="btn btn-outline-secondary">
              {t('Blog.previous')}
            </a>
            <a href="#" className="btn btn-outline-secondary">
              {t('Blog.next')}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}