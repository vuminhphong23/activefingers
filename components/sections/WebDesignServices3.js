
import Link from "next/link"

export default function WebDesignServices3() {
    return (
        <>
            <section className="web-services-area py-150 rpy-100 rel z-1">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-7 col-lg-10 wow fadeInUp delay-0-2s">
                            <div className="section-title text-center mb-35">
                                <span className="sub-title mb-15">Trusted web design Service</span>
                                <h2>Already <span>Published</span> Our Recent Work For Our Client’s</h2>
                            </div>
                        </div>
                    </div>
                    <div className="blog-item style-two wow fadeInUp delay-0-2s">
                        <div className="content">
                            <ul className="blog-meta">
                                <li>
                                    <Link href="#">Art</Link> ,
                                    <Link href="#"> Direction</Link>
                                </li>
                            </ul>
                            <h4><Link href="/blog-details"><span>EPD</span>  -  Excelent product design</Link></h4>
                        </div>
                        <div className="image">
                            <img src="/assets/images/blog/blog1.jpg" alt="Blog" />
                        </div>
                        <Link href="/service-details" className="details-btn"><i className="fal fa-long-arrow-right" /></Link>
                    </div>
                    <div className="blog-item style-two wow fadeInUp delay-0-2s">
                        <div className="content">
                            <ul className="blog-meta">
                                <li>
                                    <Link href="#">Art</Link> ,
                                    <Link href="#"> Direction</Link>
                                </li>
                            </ul>
                            <h4><Link href="/blog-details"><span>DMS</span>  -  Digital Marketing Strategy</Link></h4>
                        </div>
                        <div className="image">
                            <img src="/assets/images/blog/blog2.jpg" alt="Blog" />
                        </div>
                        <Link href="/service-details" className="details-btn"><i className="fal fa-long-arrow-right" /></Link>
                    </div>
                    <div className="blog-item style-two wow fadeInUp delay-0-2s">
                        <div className="content">
                            <ul className="blog-meta">
                                <li>
                                    <Link href="#">Art</Link> ,
                                    <Link href="#"> Direction</Link>
                                </li>
                            </ul>
                            <h4><Link href="/blog-details"><span>BDD</span>  -  branding Digital design</Link></h4>
                        </div>
                        <div className="image">
                            <img src="/assets/images/blog/blog1.jpg" alt="Blog" />
                        </div>
                        <Link href="/service-details" className="details-btn"><i className="fal fa-long-arrow-right" /></Link>
                    </div>
                    <div className="blog-item style-two wow fadeInUp delay-0-2s">
                        <div className="content">
                            <ul className="blog-meta">
                                <li>
                                    <Link href="#">Art</Link> ,
                                    <Link href="#"> Direction</Link>
                                </li>
                            </ul>
                            <h4><Link href="/blog-details"><span>UDT</span>  -  UI/UX Design Technnology</Link></h4>
                        </div>
                        <div className="image">
                            <img src="/assets/images/blog/blog2.jpg" alt="Blog" />
                        </div>
                        <Link href="/service-details" className="details-btn"><i className="fal fa-long-arrow-right" /></Link>
                    </div>
                </div>
            </section>
        </>
    )
}
