
import Link from "next/link"

export default function Team2() {
    return (
        <>
            <section className="team-area pt-140 rpt-100 pb-130 rpb-95 rel z-1">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="team-member-two wow fadeInUp delay-0-2s">
                                <div className="image">
                                    <img src="/assets/images/team/team-two1.png" alt="Team" />
                                    <Link className="arrow" href="/team-details"><img src="/assets/images/team/arrow.png" alt="Arrow" /></Link>
                                </div>
                                <div className="content">
                                    <h5>Cameron Williamson</h5>
                                    <span className="designation">creative director</span>
                                    <div className="social-style-two">
                                        <Link href="#"><i className="fab fa-twitter" /></Link>
                                        <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                        <Link href="#"><i className="fab fa-instagram" /></Link>
                                        <Link href="#"><i className="fab fa-pinterest-p" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="team-member-two wow fadeInUp delay-0-4s">
                                <div className="image">
                                    <img src="/assets/images/team/team-two2.png" alt="Team" />
                                    <Link className="arrow" href="/team-details"><img src="/assets/images/team/arrow.png" alt="Arrow" /></Link>
                                </div>
                                <div className="content">
                                    <h5>Cameron Williamson</h5>
                                    <span className="designation">creative director</span>
                                    <div className="social-style-two">
                                        <Link href="#"><i className="fab fa-twitter" /></Link>
                                        <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                        <Link href="#"><i className="fab fa-instagram" /></Link>
                                        <Link href="#"><i className="fab fa-pinterest-p" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="team-member-two wow fadeInUp delay-0-6s">
                                <div className="image">
                                    <img src="/assets/images/team/team-two3.png" alt="Team" />
                                    <Link className="arrow" href="/team-details"><img src="/assets/images/team/arrow.png" alt="Arrow" /></Link>
                                </div>
                                <div className="content">
                                    <h5>Cameron Williamson</h5>
                                    <span className="designation">creative director</span>
                                    <div className="social-style-two">
                                        <Link href="#"><i className="fab fa-twitter" /></Link>
                                        <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                        <Link href="#"><i className="fab fa-instagram" /></Link>
                                        <Link href="#"><i className="fab fa-pinterest-p" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="team-member-two wow fadeInUp delay-0-8s">
                                <div className="image">
                                    <img src="/assets/images/team/team-two4.png" alt="Team" />
                                    <Link className="arrow" href="/team-details"><img src="/assets/images/team/arrow.png" alt="Arrow" /></Link>
                                </div>
                                <div className="content">
                                    <h5>Cameron Williamson</h5>
                                    <span className="designation">creative director</span>
                                    <div className="social-style-two">
                                        <Link href="#"><i className="fab fa-twitter" /></Link>
                                        <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                        <Link href="#"><i className="fab fa-instagram" /></Link>
                                        <Link href="#"><i className="fab fa-pinterest-p" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="marquee-heading-two pt-10 wow fadeInUp delay-0-2s">
                        <div className="marquee-item text-center">
                            <div className="text-image grayscale" style={{ backgroundImage: 'url(assets/images/shapes/heading-text.jpg)' }}>Expert Team</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
