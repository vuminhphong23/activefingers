
import Link from "next/link"

export default function Services1() {
    return (
        <>
            <section className="services-area pt-135 rpt-100 rel z-1">
                <div className="container">
                    <div className="row pb-60 align-items-center justify-content-between">
                        <div className="col-xl-6 col-lg-8 wow fadeInLeft delay-0-2s">
                            <div className="section-title mb-20 rmb-35">
                                <span className="sub-title mb-15">Trusted web design Service</span>
                                <h2>modern &amp; intuitive web <span>solutions</span></h2>
                            </div>
                        </div>
                        <div className="col-lg-4 text-lg-end wow fadeInRight delay-0-2s">
                            <Link href="/services" className="theme-btn">View all service</Link>
                        </div>
                    </div>
                    <div className="row gap-40">
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item wow fadeInUp delay-0-2s">
                                <div className="content">
                                    <h5><Link href="/service-details">WEBSITE DESIGN</Link></h5>
                                    <p>Be advised that image .</p>
                                </div>
                                <Link href="/service-details" className="details-btn"><i className="fal fa-long-arrow-right" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item wow fadeInUp delay-0-4s">
                                <div className="content">
                                    <h5><Link href="/service-details">SOFTWERE DESIGN</Link></h5>
                                    <p>Be advised that image .</p>
                                </div>
                                <Link href="/service-details" className="details-btn"><i className="fal fa-long-arrow-right" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item wow fadeInUp delay-0-6s">
                                <div className="content">
                                    <h5><Link href="/service-details">GRAPHICS DESIGN</Link></h5>
                                    <p>Be advised that image .</p>
                                </div>
                                <Link href="/service-details" className="details-btn"><i className="fal fa-long-arrow-right" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item wow fadeInUp delay-0-2s">
                                <div className="content">
                                    <h5><Link href="/service-details">MOBILE APP DESIGN</Link></h5>
                                    <p>Be advised that image .</p>
                                </div>
                                <Link href="/service-details" className="details-btn"><i className="fal fa-long-arrow-right" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item wow fadeInUp delay-0-4s">
                                <div className="content">
                                    <h5><Link href="/service-details">DIGITAL MARKETING</Link></h5>
                                    <p>Be advised that image .</p>
                                </div>
                                <Link href="/service-details" className="details-btn"><i className="fal fa-long-arrow-right" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item wow fadeInUp delay-0-6s">
                                <div className="content">
                                    <h5><Link href="/service-details">UI/UX DEVELOPMENT</Link></h5>
                                    <p>Be advised that image .</p>
                                </div>
                                <Link href="/service-details" className="details-btn"><i className="fal fa-long-arrow-right" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
