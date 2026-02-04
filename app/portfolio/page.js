import Layout from "@/components/layout/Layout";
import Link from "next/link";

const successStories = [
  {
    slug: "caresuper-website",
    title: "CareSuper Website Personalization",
    category: "Financial Services",
    excerpt: "Member engagement and personalized digital experiences for Australia's award-winning industry super fund.",
    image: "/assets/images/success-story-detail/Screenshot 2025-08-16 201620.jpg",
  },
  {
    slug: "rabbit-group-website",
    title: "Rabbit Group Website",
    category: "Fintech",
    excerpt: "Central content hub and CMS for Rabbit Group Thailand—payment, rewards, insurance, and digital lending.",
    image: "/assets/images/success-story-detail/Screenshot 2025-08-16 201639.jpg",
  },
  {
    slug: "osim-ecommerce-system",
    title: "OSIM Ecommerce System",
    category: "Retail",
    excerpt: "Scalable ecommerce and content ecosystem for OSIM's multi-country wellness and massage chair business.",
    image: "/assets/images/success-story-detail/aaa-min-1024x603-min-min.png",
  },
  {
    slug: "spacebar-news",
    title: "Spacebar News Platform",
    category: "Media",
    excerpt: "Data-driven news platform with personalized content delivery for Thailand's digital-first news outlet.",
    image: "/assets/images/success-story-detail/Screenshot 2025-08-16 201516.jpg",
  },
  {
    slug: "toyota-and-lexus",
    title: "Toyota & Lexus Australia",
    category: "Automotive",
    excerpt: "Unified digital presence: dealer websites and national landing pages for Toyota and Lexus Australia.",
    image: "/assets/images/success-story-detail/Screenshot 2025-08-16 201552.jpg",
  },
];

export default function Portfolio() {
  return (
    <Layout breadcrumbTitle="Portfolio">
      <section className="blog-page-area pt-140 rpt-100 pb-90 rpb-50 rel z-1">
        <div className="container">
          <div className="row">
            {successStories.map((item, i) => (
              <div key={item.slug} className="col-lg-6">
                <div className={`blog-item-two style-two wow fadeInUp delay-0-${i % 2 === 0 ? "2" : "4"}s`}>
                  <div className="image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="content">
                    <ul className="blog-meta">
                      <li><span><i className="fal fa-folder" /> {item.category}</span></li>
                    </ul>
                    <h5><Link href={`/${item.slug}`}>{item.title}</Link></h5>
                    <p className="mb-0">{item.excerpt}</p>
                    <Link href={`/${item.slug}`} className="read-more">Read more <i className="far fa-long-arrow-alt-right" /></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="lets-talk-area text-center pt-55 rpt-30 pb-75 rpb-100">
        <div className="container">
          <Link href="/contact" className="lets-talk-text wow zoomIn delay-0-2s">
            Let&apos;s Talk <i className="fal fa-arrow-right" />
          </Link>
        </div>
      </div>
    </Layout>
  );
}
