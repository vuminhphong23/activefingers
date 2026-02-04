
import Link from "next/link"

export default function Blog1() {
    return (
        <>
            <section className="blog-area pt-150 rpt-100 pb-50 rel z-1">
                <div className="container">
                    <div className="row pb-55 align-items-center justify-content-between">
                        <div className="col-xl-6 col-lg-8 wow fadeInLeft delay-0-2s">
                            <div className="section-title mb-20 rmb-35">
                                <span className="sub-title mb-15">check our news &amp; Blogs</span>
                                <h2>Checkout our <span>awards</span> &amp; achievements</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 text-lg-end wow fadeInRight delay-0-2s">
                            <Link href="/blog" className="theme-btn style-two">View all blog</Link>
                        </div>
                    </div>
                    <div className="blog-item wow fadeInUp delay-0-2s">
                        <div className="content">
                            <ul className="blog-meta">
                                <li>
                                    <Link href="#">02 Apr 2023</Link>
                                </li>
                                <li>
                                    <Link href="#">Comments (03)</Link>
                                </li>
                            </ul>
                            <h4><Link href="/blog-details">Trending code settings for a nice portfolio</Link></h4>
                        </div>
                        <div className="image">
                            <img src="/assets/images/blog/blog1.jpg" alt="Blog" />
                        </div>
                        <Link className="read-more" href="/blog-details"><i className="fal fa-arrow-up" /> View blog details</Link>
                    </div>
                    <div className="blog-item wow fadeInUp delay-0-2s">
                        <div className="content">
                            <ul className="blog-meta">
                                <li>
                                    <Link href="#">02 Apr 2023</Link>
                                </li>
                                <li>
                                    <Link href="#">Comments (03)</Link>
                                </li>
                            </ul>
                            <h4><Link href="/blog-details">Our web design and development process</Link></h4>
                        </div>
                        <div className="image">
                            <img src="/assets/images/blog/blog1.jpg" alt="Blog" />
                        </div>
                        <Link className="read-more" href="/blog-details"><i className="fal fa-arrow-up" /> View blog details</Link>
                    </div>
                    <div className="blog-item wow fadeInUp delay-0-2s">
                        <div className="content">
                            <ul className="blog-meta">
                                <li>
                                    <Link href="#">02 Apr 2023</Link>
                                </li>
                                <li>
                                    <Link href="#">Comments (03)</Link>
                                </li>
                            </ul>
                            <h4><Link href="/blog-details">Transparent Pricing for Custom Web Design</Link></h4>
                        </div>
                        <div className="image">
                            <img src="/assets/images/blog/blog1.jpg" alt="Blog" />
                        </div>
                        <Link className="read-more" href="/blog-details"><i className="fal fa-arrow-up" /> View blog details</Link>
                    </div>
                    <div className="blog-item wow fadeInUp delay-0-2s">
                        <div className="content">
                            <ul className="blog-meta">
                                <li>
                                    <Link href="#">02 Apr 2023</Link>
                                </li>
                                <li>
                                    <Link href="#">Comments (03)</Link>
                                </li>
                            </ul>
                            <h4><Link href="/blog-details">Through a multi-channel approach in the areas</Link></h4>
                        </div>
                        <div className="image">
                            <img src="/assets/images/blog/blog1.jpg" alt="Blog" />
                        </div>
                        <Link className="read-more" href="/blog-details"><i className="fal fa-arrow-up" /> View blog details</Link>
                    </div>
                </div>
            </section>
        </>
    )
}
