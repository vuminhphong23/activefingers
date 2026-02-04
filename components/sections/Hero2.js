
import Link from "next/link"

export default function Hero2() {
    return (
        <>
            <section className="hero-area-two pt-200 rpt-150 pb-90 rel z-1">
                <div className="hero-image-two" style={{ backgroundImage: 'url(/assets/images/hero/hero-two.jpg)' }} />
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-11">
                            <div className="hero-content-two">
                                <h1 className="wow fadeInUp delay-0-2s">
                                    <span>We create</span> 
                                    <span>innovative digital</span> 
                                    <span>solutions</span> 
                                    </h1>
                                {/* <div className="hero-sub-heading mb-25 wow fadeInUp delay-0-4s">
                                    <div className="text">We create  innovative digital solutions</div>
                                </div> */}
                                {/* <div className="hero-scroll-down wow fadeInDown delay-0-6s">
                                    <Link href="#about"><i className="far fa-arrow-down" /></Link>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="hero-contact-info">
                    <Link className="number" href="/callto:(603)5550123">(603) 555-0123</Link>
                    <Link className="email" href="mailto:contact@gmail.com">Contact@gmail.com</Link>
                </div>
                <div className="hero-shape-two">
                    <img src="/assets/images/hero/hero-shape-two.png" alt="Shape" />
                </div> */}
            </section>
        </>
    )
}
