
import Link from "next/link"

export default function Awward() {
    return (
        <>
            <section className="awwards-area pt-110 rpt-70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="section-title mb-70 wow fadeInUp delay-0-2s">
                                <span className="sub-title mb-15">our honurable awwards</span>
                                <h2>Checkout our <span>awards</span> &amp; achievements</h2>
                            </div>
                        </div>
                    </div>
                    <div className="awwards-wrap">
                        <div className="awward-item wow fadeInUp delay-0-2s">
                            <div className="year-website">
                                <span className="year">2012</span>
                                <div className="text">This Awwards provide from govt.bd</div>
                            </div>
                            <div className="icon">
                                <img src="/assets/images/icons/awward1.svg" alt="Awward" />
                            </div>
                            <div className="content">
                                <h5>Awwwards animation quality</h5>
                                <span className="number">02</span>
                            </div>
                            <div className="award-btn">
                                <Link href="/service-details" className="details-btn"><i className="fal fa-long-arrow-right" /></Link>
                            </div>
                        </div>
                        <div className="awward-item wow fadeInUp delay-0-3s">
                            <div className="year-website">
                                <span className="year">2012</span>
                                <div className="text">This Awwards provide from govt.bd</div>
                            </div>
                            <div className="icon">
                                <img src="/assets/images/icons/awward2.svg" alt="Awward" />
                            </div>
                            <div className="content">
                                <h5>Site of the day</h5>
                                <span className="number">02</span>
                            </div>
                            <div className="award-btn">
                                <Link href="/service-details" className="details-btn"><i className="fal fa-long-arrow-right" /></Link>
                            </div>
                        </div>
                        <div className="awward-item wow fadeInUp delay-0-4s">
                            <div className="year-website">
                                <span className="year">2012</span>
                                <div className="text">This Awwards provide from govt.bd</div>
                            </div>
                            <div className="icon">
                                <img src="/assets/images/icons/awward3.svg" alt="Awward" />
                            </div>
                            <div className="content">
                                <h5>Creative product design</h5>
                                <span className="number">02</span>
                            </div>
                            <div className="award-btn">
                                <Link href="/service-details" className="details-btn"><i className="fal fa-long-arrow-right" /></Link>
                            </div>
                        </div>
                        <div className="awward-item wow fadeInUp delay-0-5s">
                            <div className="year-website">
                                <span className="year">2012</span>
                                <div className="text">This Awwards provide from govt.bd</div>
                            </div>
                            <div className="icon">
                                <img src="/assets/images/icons/awward4.svg" alt="Awward" />
                            </div>
                            <div className="content">
                                <h5>Awwwards animation quality</h5>
                                <span className="number">02</span>
                            </div>
                            <div className="award-btn">
                                <Link href="/service-details" className="details-btn"><i className="fal fa-long-arrow-right" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
