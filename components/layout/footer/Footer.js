"use client"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="main-footer footer-one pt-70 pb-20 bgc-black bordered-top rel z-1">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="footer-widget widget-about wow fadeInUp delay-0-2s">
                            <div className="footer-logo mb-15">
                                <Link href="/">
                                    <img src="/assets/images/logos/logo.png" alt="Logo" />
                                </Link>
                            </div>
                            <p>We create innovative digital solutions for brands and businesses.</p>
                            <div className="social-style-one mt-15">
                                <Link href="#" aria-label="Twitter"><i className="fab fa-twitter" /></Link>
                                <Link href="#" aria-label="Facebook"><i className="fab fa-facebook-f" /></Link>
                                <Link href="#" aria-label="Instagram"><i className="fab fa-instagram" /></Link>
                                <Link href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-6">
                        <div className="footer-widget widget-links wow fadeInUp delay-0-3s">
                            <h6 className="footer-title">Quick Links</h6>
                            <ul>
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/about">About Us</Link></li>
                                <li><Link href="/services">Services</Link></li>
                                <li><Link href="/portfolio">Portfolio</Link></li>
                                <li><Link href="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    {/* <div className="col-lg-2 col-6">
                        <div className="footer-widget widget-links wow fadeInUp delay-0-4s">
                            <h6 className="footer-title">Resources</h6>
                            <ul>
                                <li><Link href="/contact">Support</Link></li>
                            </ul>
                        </div>
                    </div> */}
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="footer-widget widget-text wow fadeInUp delay-0-5s">
                            <h6 className="footer-title">Contact</h6>
                            <div className="footer-contact-text">
                                <p>Andy Vu</p>
                                <p>30 Hoang Dao Thuy Street, Trung Hoa, Cau Giay, Hanoi, Vietnam</p>
                                <Link href="mailto:andyvu@activefingers.com">andyvu@activefingers.com</Link>
                                <br />
                                <Link href="tel:+84978608788">+84 978 608 788</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
