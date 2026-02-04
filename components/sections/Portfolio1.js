
import Link from "next/link"

export default function Portfolio1() {
    return (
        <>
            <section className="portfolio-area pt-140 rpt-100 rel z-1">
                <div className="section-title text-center mb-70 wow fadeInUp delay-0-2s">
                    <span className="sub-title mb-15">work portfolio for company</span>
                    <h2> Recent Work <span>Portfolio</span></h2>
                </div>
                <div className="row portfolio-masonry-active style-one">
                    <div className="col-xl-3 col-sm-6">
                        <div className="portfolio-item wow fadeInUp delay-0-2s">
                            <div className="portfolio-image">
                                <img src="/assets/images/portfolio/portfolio1.jpg" alt="Portfolio" />
                            </div>
                            <Link className="hover-box" href="/portfolio-details">
                                <span>View Project</span>
                                <i className="fal fa-long-arrow-down" />
                            </Link>
                            <div className="portfolio-content">
                                <h6><Link href="/portfolio-details">Digital Marketing</Link></h6>
                                <Link className="tag-category" href="/blog">Art , Direction</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 order-xl-2">
                        <div className="portfolio-item wow fadeInUp delay-0-6s">
                            <div className="portfolio-image">
                                <img src="/assets/images/portfolio/portfolio3.jpg" alt="Portfolio" />
                            </div>
                            <Link className="hover-box" href="/portfolio-details">
                                <span>View Project</span>
                                <i className="fal fa-long-arrow-down" />
                            </Link>
                            <div className="portfolio-content">
                                <h6><Link href="/portfolio-details">Digital Marketing</Link></h6>
                                <Link className="tag-category" href="/blog">Art , Direction</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-8">
                        <div className="portfolio-item wow fadeInUp delay-0-4s">
                            <div className="portfolio-image">
                                <img src="/assets/images/portfolio/portfolio2.jpg" alt="Portfolio" />
                            </div>
                            <Link className="hover-box" href="/portfolio-details">
                                <span>View Project</span>
                                <i className="fal fa-long-arrow-down" />
                            </Link>
                            <div className="portfolio-content">
                                <h6><Link href="/portfolio-details">Digital Marketing</Link></h6>
                                <Link className="tag-category" href="/blog">Art , Direction</Link>
                            </div>
                        </div>
                        <div className="portfolio-item wow fadeInUp delay-0-2s">
                            <div className="portfolio-image">
                                <img src="/assets/images/portfolio/portfolio4.jpg" alt="Portfolio" />
                            </div>
                            <Link className="hover-box" href="/portfolio-details">
                                <span>View Project</span>
                                <i className="fal fa-long-arrow-down" />
                            </Link>
                            <div className="portfolio-content">
                                <h6><Link href="/portfolio-details">Digital Marketing</Link></h6>
                                <Link className="tag-category" href="/blog">Art , Direction</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
