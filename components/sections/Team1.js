
import Link from "next/link"

export default function Team1() {
    return (
        <>
            <section className="team-area overflow-hidden pt-140 rpt-50 pb-120 rpb-70 rel z-1">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-9">
                            <div className="section-title text-center mb-70 wow fadeInUp delay-0-2s">
                                <span className="sub-title mb-15">team member of company</span>
                                <h2>Extra ordinary <span>creation</span> Team behind</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container container-1450">
                    <div className="row justify-content-center">
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="team-member wow fadeInUp delay-0-2s">
                                <div className="image">
                                    <img src="/assets/images/team/team1.jpg" alt="Team" />
                                </div>
                                <div className="content">
                                    <span className="designation">creative director</span>
                                    <h6>Ronald Richards</h6>
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
                            <div className="team-member mt-45 wow fadeInUp delay-0-3s">
                                <div className="image">
                                    <img src="/assets/images/team/team2.jpg" alt="Team" />
                                </div>
                                <div className="content">
                                    <span className="designation">creative director</span>
                                    <h6>ESTHER HOWAR</h6>
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
                            <div className="team-member wow fadeInUp delay-0-4s">
                                <div className="image">
                                    <img src="/assets/images/team/team3.jpg" alt="Team" />
                                </div>
                                <div className="content">
                                    <span className="designation">creative director</span>
                                    <h6>Jenny Wilson</h6>
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
                            <div className="team-member mt-45 wow fadeInUp delay-0-5s">
                                <div className="image">
                                    <img src="/assets/images/team/team4.jpg" alt="Team" />
                                </div>
                                <div className="content">
                                    <span className="designation">creative director</span>
                                    <h6>Bessie Cooper</h6>
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
                </div>
                <div className="team-shapes">
                    <div className="shape one">
                        <img src="/assets/images/shapes/circle.png" alt="Circle" />
                    </div>
                    <div className="shape two">
                        <img src="/assets/images/shapes/box.png" alt="Box" />
                    </div>
                </div>
            </section>
        </>
    )
}
