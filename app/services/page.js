import Layout from "@/components/layout/Layout";
import Link from "next/link";

const services = [
  {
    slug: "software-development",
    title: "Software Development",
    excerpt: "Custom software and web applications tailored to your business-planning, development, integration, and support.",
    image: "/assets/images/services/software-development/file3.jpg",
  },
  {
    slug: "app-development",
    title: "App Development",
    excerpt: "Web, mobile, and hybrid apps-from concept to launch. We design, build, and support apps that users love.",
    image: "/assets/images/services/app-development/file3.jpg",
  },
  {
    slug: "managed-services",
    title: "Managed IT Services",
    excerpt: "Ongoing IT support and management so you can focus on your business. Cloud, applications, and infrastructure.",
    image: "/assets/images/services/managed-services/file1.jpg",
  },
  {
    slug: "sitecore-development",
    title: "Sitecore Development",
    excerpt: "Digital Experience Platform (DXP) and CMS solutions. Content, commerce, and personalization at scale.",
    image: "/assets/images/services/sitecore-development/file2.jpg",
  },
];

export default function Services() {
  return (
    <Layout breadcrumbTitle="Services">
      <div className="services-page-wrap">
        <section className="services-hero pt-135 pb-70 rpt-100 rpb-50">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <span className="sub-title d-block mb-15">What we offer</span>
                <h2 className="services-hero-title mb-25">Digital solutions for your business</h2>
                <p className="services-hero-desc mb-40">
                  We design, develop, and deliver software and web solutions-from custom applications and mobile apps to managed IT and enterprise platforms like Sitecore. Our services are built to scale with you and deliver results on time.
                </p>
                
              </div>
            </div>
          </div>
        </section>

        <section className="services-cards-section pt-0 pb-120 rpb-80">
          <div className="container">
            <div className="row g-4">
              {services.map((item, i) => (
                <div key={item.slug} className="col-lg-6">
                  <Link href={`/${item.slug}`} className="service-card-modern">
                    <div className="service-card-modern__image">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="service-card-modern__body">
                      <h3 className="service-card-modern__title">{item.title}</h3>
                      <p className="service-card-modern__excerpt">{item.excerpt}</p>
                      <span className="service-card-modern__link">
                        Learn more <i className="far fa-long-arrow-right" />
                      </span>
                    </div>
                  </Link>
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
      </div>
    </Layout>
  );
}
