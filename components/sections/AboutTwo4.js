
import Link from "next/link"

export default function AboutTwo4() {
    return (
        <>
            <section id="about" className="about-two-area pt-135 pb-85 rpt-100 rpb-50 rel z-1">
                <div className="container">
                    <div className="row gap-110 align-items-center">
                        <div className="col-xl-6 wow fadeInRight delay-0-2s">
                            <div className="about-three-images mb-50">
                                <div className="experience-corner">
                                    <img src="/assets/images/shapes/experience-corner.jpg" alt="Shape" />
                                </div>
                                <div className="image">
                                    <img src="/assets/images/about/about-three.jpg" alt="About" />
                                </div>
                                <div className="experience-circle">
                                    <span>13</span>
                                    <p>Years of Experince</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 wow fadeInLeft delay-0-2s">
                            <div className="about-two-content mb-50">
                                <div className="section-title mb-30">
                                    <span className="sub-title mb-10">Trusted web design services</span>
                                    <h2>We Give You Digital Solutions for</h2>
                                </div>
                                <h5>Proin est lacus, sagittislobortis iaculise get sagittislo</h5>
                                <p>TTransmax is the world’s driving worldwide coordinations supplier — we uphold industry and exchange the worldwide trade of merchandise through land transport.</p>
                                <div className="row pt-25">
                                    <div className="col-md-6">
                                        <div className="service-item wow fadeInUp delay-0-2s">
                                            <div className="content">
                                                <h6><Link href="/service-details">WEBSITE DESIGN</Link></h6>
                                                <p>Design an website</p>
                                            </div>
                                            <Link href="/service-details" className="details-btn"><i className="fal fa-long-arrow-right" /></Link>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="service-item wow fadeInUp delay-0-6s">
                                            <div className="content">
                                                <h6><Link href="/service-details">GRAPHICS DESIGN</Link></h6>
                                                <p>Design an website</p>
                                            </div>
                                            <Link href="/service-details" className="details-btn"><i className="fal fa-long-arrow-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="author-name-btn">
                                    <img className="author" src="/assets/images/about/author.jpg" alt="Author" />
                                    <img className="signature" src="/assets/images/about/signature-two.png" alt="Signature" />
                                    <Link href="/about" className="theme-btn style-two">More about us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
