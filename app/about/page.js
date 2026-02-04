import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function About() {
  return (
    <Layout breadcrumbTitle="About Us">
      <div>
        {/* Hero */}
        <section className="about-page-hero bg-primary-shape rel z-1">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-7 wow fadeInLeft delay-0-2s">
                <div className="about-hero-content pt-135 rpt-95 pb-95">
                  <span className="sub-title mb-15 d-block">About Us</span>
                  <h1>
                    We are <span>Active Fingers</span>
                  </h1>
                  <p className="mb-30">
                    A digital agency that designs, develops, and delivers software and web solutions for businesses. We work with you from idea to launch—and beyond—so your product meets real needs and stands out in the market.
                  </p>
                  <Link href="/contact" className="theme-btn style-two">
                    Contact us
                  </Link>
                </div>
              </div>
              <div className="col-lg-5 wow fadeInRight delay-0-2s">
                <div className="about-hero-image">
                  <img
                    src="/assets/images/about/stratgy-missoin.jpg"
                    alt="Active Fingers - About Us"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who we are */}
        <section id="about" className="about-area bgc-black py-145 rpy-100 rel z-1">
          <div className="container">
            <div className="row align-items-center justify-content-between gap-4">
              <div className="col-lg-5">
                <div className="section-title mb-30 wow fadeInLeft delay-0-2s">
                  <span className="sub-title mb-15">Who we are</span>
                  <h2 className="text-white">
                    We build digital solutions that help businesses grow.
                  </h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content wow fadeInRight delay-0-2s">
                  <p className="text-white mb-20">
                    Active Fingers is a team of developers, designers, and consultants focused on web development, ecommerce, content platforms, and enterprise systems. We work with organisations of all sizes—from startups to large enterprises—to deliver solutions that are reliable, scalable, and easy to use.
                  </p>
                  <p className="text-white mb-0">
                    Whether you need a new website, an ecommerce platform, a CMS, or custom software, we bring the right mix of technology and process to your project. We are based in Hanoi, Vietnam, and serve clients locally and internationally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team, Leadership, Let's Connect */}
        <section className="py-20 black text-center rel z-1">
          <div className="container">
            <h2 className="text-white mb-50">Why work with us</h2>
            <div className="row justify-content-center">
              <div className="col-md-4 mb-4">
                <h5 className="mb-3 text-white">Team</h5>
                <p className="text-white">
                  We design, develop, and deliver results that match your goals. Our way of working is flexible: we adapt to your timelines, team structure, and preferred collaboration style.
                </p>
              </div>
              <div className="col-md-4 mb-4">
                <h5 className="mb-3 text-white">Experience</h5>
                <p className="text-white">
                  Our team has deep experience in web and software development across industries including finance, retail, media, and automotive. We bring that know-how to every project.
                </p>
              </div>
              <div className="col-md-4 mb-4">
                <h5 className="mb-3 text-white">Let&apos;s connect</h5>
                <p className="text-white mb-4">
                  We&apos;d like to hear about your project and explore how we can help you reach your goals.
                </p>
                <Link href="/contact" className="btn btn-dark px-4 py-2 text-sm rounded-pill text-decoration-none">
                  Book a consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="lets-talk-area text-center py-110 rpy-80 rel z-1">
          <div className="container">
            <h3 className="mb-20">Let&apos;s work together</h3>
            <Link href="/contact" className="lets-talk-text wow zoomIn delay-0-2s">
              Get in touch <i className="fal fa-arrow-right" />
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
