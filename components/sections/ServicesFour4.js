
import Link from "next/link"

export default function ServicesFour4() {
    return (
        <>
            <section className="services-area-four pb-130 rpb-100 rel z-1">
                <div className="container">
                    <div className="row gap-150 justify-content-between">
                        <div className="col-lg-6 wow fadeInLeft delay-0-2s">
                            <div className="section-title mb-20">
                                <span className="sub-title mb-20">Trusted web design services</span>
                                <h2>Unlock Revenue Growth for Your Business</h2>
                                <Link href="/services" className="read-more-two mt-20">What We Do <img src="/assets/images/icons/arrow.svg" alt="Arrow" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-6 pt-35 wow fadeInRight delay-0-2s">
                            <div className="service-item-four">
                                <h5>WEBSITE DEsign <span className="number">01</span></h5>
                                <p>There are many variations of simply free text passages of hold industry available but the majority have suffered alteration</p>
                                <Link href="/services" className="read-more-two">Read More <img src="/assets/images/icons/arrow.svg" alt="Arrow" /></Link>
                            </div>
                            <div className="service-item-four">
                                <h5>digital marketing <span className="number">02</span></h5>
                                <p>There are many variations of simply free text passages of hold industry available but the majority have suffered alteration</p>
                                <Link href="/services" className="read-more-two">Read More <img src="/assets/images/icons/arrow.svg" alt="Arrow" /></Link>
                            </div>
                            <div className="service-item-four">
                                <h5>Content Solutions <span className="number">03</span></h5>
                                <p>There are many variations of simply free text passages of hold industry available but the majority have suffered alteration</p>
                                <Link href="/services" className="read-more-two">Read More <img src="/assets/images/icons/arrow.svg" alt="Arrow" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
