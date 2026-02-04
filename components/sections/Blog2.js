
import Link from "next/link"

export default function Blog2() {
    return (
        <>
            <section className="blog-two-area pt-140 rpt-100 pb-100 rpb-60 rel z-1">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-7 col-lg-9 wow fadeInUp delay-0-2s">
                            <div className="section-title text-center mb-45">
                                <span className="sub-title mb-15">leatest news &amp; articles for</span>
                                <h2>Check our latest news &amp; articles from blog</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-md-6">
                            <div className="blog-item-two wow fadeInUp delay-0-2s">
                                <div className="image">
                                    <img src="/assets/images/blog/blog-two1.jpg" alt="Blog" />
                                    <Link href="/blog-details" className="details-btn"><i className="fal fa-long-arrow-right" /></Link>
                                </div>
                                <div className="content">
                                    <ul className="blog-meta">
                                        <li><Link href="#"><i className="far fa-clipboard" /> Business</Link></li>
                                        <li><Link href="#"><i className="fal fa-calendar-alt" /> 02 Apr 2021</Link></li>
                                    </ul>
                                    <h4><Link href="/blog-details">Weblog publishing tool from Google, for sharing text</Link></h4>
                                </div>
                                <Link href="/blog-details" className="read-more-two">Read MOre <img src="/assets/images/icons/arrow.svg" alt="Arrow" /></Link>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="blog-item-two wow fadeInUp delay-0-4s">
                                <div className="image">
                                    <img src="/assets/images/blog/blog-two2.jpg" alt="Blog" />
                                    <Link href="/blog-details" className="details-btn"><i className="fal fa-long-arrow-right" /></Link>
                                </div>
                                <div className="content">
                                    <ul className="blog-meta">
                                        <li><Link href="#"><i className="far fa-clipboard" /> Business</Link></li>
                                        <li><Link href="#"><i className="fal fa-calendar-alt" /> 02 Apr 2021</Link></li>
                                    </ul>
                                    <h4><Link href="/blog-details">Choose the perfect design. Create a beautiful blog that</Link></h4>
                                </div>
                                <Link href="/blog-details" className="read-more-two">Read MOre <img src="/assets/images/icons/arrow.svg" alt="Arrow" /></Link>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="blog-item-two wow fadeInUp delay-0-6s">
                                <div className="image">
                                    <img src="/assets/images/blog/blog-two3.jpg" alt="Blog" />
                                    <Link href="/blog-details" className="details-btn"><i className="fal fa-long-arrow-right" /></Link>
                                </div>
                                <div className="content">
                                    <ul className="blog-meta">
                                        <li><Link href="#"><i className="far fa-clipboard" /> Business</Link></li>
                                        <li><Link href="#"><i className="fal fa-calendar-alt" /> 02 Apr 2021</Link></li>
                                    </ul>
                                    <h4><Link href="/blog-details">A blog is your creative space. It where you can share your</Link></h4>
                                </div>
                                <Link href="/blog-details" className="read-more-two">Read MOre <img src="/assets/images/icons/arrow.svg" alt="Arrow" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
