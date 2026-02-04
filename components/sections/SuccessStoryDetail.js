import Layout from "@/components/layout/Layout";
import Link from "next/link";

const OTHER_PROJECTS = [
  { title: "CareSuper Website Personalization", href: "/caresuper-website", image: "/assets/images/success-story-detail/Screenshot 2025-08-16 201620.jpg" },
  { title: "Rabbit Group Website", href: "/rabbit-group-website", image: "/assets/images/success-story-detail/Screenshot 2025-08-16 201639.jpg" },
  { title: "OSIM Ecommerce System", href: "/osim-ecommerce-system", image: "/assets/images/success-story-detail/aaa-min-1024x603-min-min.png" },
  { title: "Spacebar News Platform", href: "/spacebar-news", image: "/assets/images/success-story-detail/Screenshot 2025-08-16 201516.jpg" },
  { title: "Toyota & Lexus Australia", href: "/toyota-and-lexus", image: "/assets/images/success-story-detail/Screenshot 2025-08-16 201552.jpg" },
];

export default function SuccessStoryDetail({
  title,
  breadcrumbTitle,
  imageUrl,
  client,
  industry,
  website,
  techStack = [],
  children,
}) {
  return (
    <Layout breadcrumbTitle={breadcrumbTitle || title}>
      <div className="blog-page-two pt-100 rpt-70">
        <div className="container">
          <div className="row gap-50">
            <div className="col-lg-8">
              <div className="blog-details-content wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src={imageUrl} alt={title} />
                </div>
                <div className="content">
                  <ul className="blog-meta mb-3">
                    {client && <li><i className="far fa-building" /> Client: {client}</li>}
                    {industry && <li><i className="far fa-briefcase" /> {industry}</li>}
                    {website && (
                      <li>
                        <i className="far fa-globe" />{" "}
                        <a href={website.startsWith("http") ? website : `https://${website}`} target="_blank" rel="noopener noreferrer">{website.replace(/^https?:\/\//, "")}</a>
                      </li>
                    )}
                  </ul>
                  <h4>{title}</h4>
                </div>
                {children}
                {techStack.length > 0 && (
                  <div className="mt-4">
                    <h6 className="mb-2">Technology stack</h6>
                    <ul className="list-unstyled">
                      {techStack.map((tech, i) => (
                        <li key={i}><i className="far fa-check text-primary me-2" />{tech}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="tag-share py-5 wow fadeInUp delay-0-2s">
                  <Link href="/contact" className="theme-btn style-two">
                    Contact us about this project <i className="fal fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-7 col-sm-9">
              <div className="main-sidebar rmt-65">
                <div className="widget widget-recent-news wow fadeInUp delay-0-2s">
                  <h5 className="widget-title">Other success stories</h5>
                  <ul>
                    {OTHER_PROJECTS.filter((p) => p.title !== title).map((item) => (
                      <li key={item.href}>
                        <div className="image">
                          <img src={item.image} alt={item.title} />
                        </div>
                        <div className="content">
                          <h6><Link href={item.href}>{item.title}</Link></h6>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="widget wow fadeInUp delay-0-4s">
                  <Link href="/portfolio" className="theme-btn style-two w-100 text-center">
                    Back to Portfolio
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lets-talk-area text-center pt-120 rpt-90 pb-75 rpb-100">
        <div className="container">
          <Link href="/contact" className="lets-talk-text wow zoomIn delay-0-2s">
            Let&apos;s Talk <i className="fal fa-arrow-right" />
          </Link>
        </div>
      </div>
    </Layout>
  );
}
