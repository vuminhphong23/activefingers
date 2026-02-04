
import Link from "next/link"

export default function About1() {
    return (
        <>
            <section className="about-area bgc-black py-145 rpy-100 rel z-1">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-content hover-box-wrap rmb-55 wow fadeInRight delay-0-2s">
                                <div className="section-title">
                                    <span className="sub-title mb-15">Trusted web design agency</span>
                                    <h2>We’re a digital design studio connecting brands to people <span>through</span> craft and culture. <i className="fas fa-asterisk" /></h2>
                                </div>
                                <div className="hover-box">
                                    <span>What We Do</span>
                                    <i className="fal fa-arrow-down" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="our-clients wow fadeInLeft delay-0-2s">
                                <Link href="/contact"><img src="/assets/images/client-logos/client-logo1.png" alt="Client Logo" /></Link>
                                <Link href="/contact"><img src="/assets/images/client-logos/client-logo2.png" alt="Client Logo" /></Link>
                                <Link href="/contact"><img src="/assets/images/client-logos/client-logo3.png" alt="Client Logo" /></Link>
                                <Link href="/contact"><img src="/assets/images/client-logos/client-logo4.png" alt="Client Logo" /></Link>
                                <Link href="/contact"><img src="/assets/images/client-logos/client-logo5.png" alt="Client Logo" /></Link>
                                <Link href="/contact"><img src="/assets/images/client-logos/client-logo6.png" alt="Client Logo" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
