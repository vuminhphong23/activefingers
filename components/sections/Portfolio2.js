
import Link from "next/link"

export default function Portfolio2() {
    return (
        <>
            <section className="portfolio-area pt-140 rpt-100 rel z-1">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="section-title text-center mb-70 wow fadeInUp delay-0-2s">
                                <span className="sub-title mb-15">work portfolio for company</span>
                                <h2>Let’s Test Our Recent Project Forest</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row portfolio-masonry-active">
                        <div className="col-xl-6 col-lg-8">
                            <div className="portfolio-item style-two wow fadeInUp delay-0-2s">
                                <div className="portfolio-image">
                                    <img src="/assets/images/portfolio/portfolio-two1.jpg" alt="Portfolio" />
                                </div>
                                <Link className="hover-box" href="/portfolio-details">
                                    <span>View Project</span>
                                </Link>
                                <div className="portfolio-content">
                                    <h6><Link href="/portfolio-details">Digital Marketing</Link></h6>
                                    <Link className="tag-category" href="/blog">Art , Direction</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="portfolio-item style-two wow fadeInUp delay-0-4s">
                                <div className="portfolio-image">
                                    <img src="/assets/images/portfolio/portfolio-two2.jpg" alt="Portfolio" />
                                </div>
                                <Link className="hover-box" href="/portfolio-details">
                                    <span>View Project</span>
                                </Link>
                                <div className="portfolio-content">
                                    <h6><Link href="/portfolio-details">Digital Marketing</Link></h6>
                                    <Link className="tag-category" href="/blog">Art , Direction</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="portfolio-item style-two wow fadeInUp delay-0-6s">
                                <div className="portfolio-image">
                                    <img src="/assets/images/portfolio/portfolio-two3.jpg" alt="Portfolio" />
                                </div>
                                <Link className="hover-box" href="/portfolio-details">
                                    <span>View Project</span>
                                </Link>
                                <div className="portfolio-content">
                                    <h6><Link href="/portfolio-details">Digital Marketing</Link></h6>
                                    <Link className="tag-category" href="/blog">Art , Direction</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
