'use client'
import Link from "next/link"
import { useState } from "react"

export default function Pricing() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <section className="pricing-area pt-135 rpt-75 pb-110 rpb-80 rel z-1">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-8">
                            <div className="pricing-plan-content text-center mb-50 wow fadeInUp delay-0-2s">
                                <div className="section-title text-center mb-30">
                                    <span className="sub-title style-two mb-10">Trusted web design services</span>
                                    <h2>Pricing Package For All Design Solutions</h2>
                                </div>
                                <ul className="nav tab-style-one mt-15" role="tablist">
                                    <li onClick={() => handleOnClick(1)}>
                                        <button className={activeIndex == 1 ? "nav-link active" : "nav-link"}>Monthly</button>
                                    </li>
                                    <li onClick={() => handleOnClick(2)}>
                                        <button className={activeIndex == 2 ? "nav-link active" : "nav-link"}>Yearly</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="tab-content">
                        <div  className={activeIndex == 1 ? "tab-pane fade show active" : "tab-pane fade"}>
                            <div className="row justify-content-center">
                                <div className="col-xl-4 col-md-6">
                                    <div className="pricing-item wow fadeInUp delay-0-2s">
                                        <div className="icon">
                                            <img src="/assets/images/icons/price1.png" alt="Price" />
                                        </div>
                                        <h4>Monthly Package</h4>
                                        <span className="price">29.9</span>
                                        <ul className="list-style-two">
                                            <li>Landing Page Design</li>
                                            <li>Economic Market Survey</li>
                                            <li>Web Development</li>
                                            <li>SEO Optimizations</li>
                                            <li>Mobile Applications Design</li>
                                            <li>Free domain included</li>
                                        </ul>
                                        <Link className="theme-btn" href="/pricing">Get started for free</Link>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="pricing-item wow fadeInUp delay-0-4s">
                                        <div className="icon">
                                            <img src="/assets/images/icons/price2.png" alt="Price" />
                                        </div>
                                        <h4>Monthly Package</h4>
                                        <span className="price">49.9</span>
                                        <ul className="list-style-two">
                                            <li>Landing Page Design</li>
                                            <li>Economic Market Survey</li>
                                            <li>Web Development</li>
                                            <li>SEO Optimizations</li>
                                            <li>Mobile Applications Design</li>
                                            <li>Free domain included</li>
                                        </ul>
                                        <Link className="theme-btn" href="/pricing">Get started for free</Link>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="pricing-item wow fadeInUp delay-0-6s">
                                        <div className="icon">
                                            <img src="/assets/images/icons/price3.png" alt="Price" />
                                        </div>
                                        <h4>Monthly Package</h4>
                                        <span className="price">69.9</span>
                                        <ul className="list-style-two">
                                            <li>Landing Page Design</li>
                                            <li>Economic Market Survey</li>
                                            <li>Web Development</li>
                                            <li>SEO Optimizations</li>
                                            <li>Mobile Applications Design</li>
                                            <li>Free domain included</li>
                                        </ul>
                                        <Link className="theme-btn" href="/pricing">Get started for free</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div  className={activeIndex == 2 ? "tab-pane fade show active" : "tab-pane fade"}>
                            <div className="row justify-content-center">
                                <div className="col-xl-4 col-md-6">
                                    <div className="pricing-item">
                                        <div className="icon">
                                            <img src="/assets/images/icons/price1.png" alt="Price" />
                                        </div>
                                        <h4>Yearly Package</h4>
                                        <span className="price">29.9</span>
                                        <ul className="list-style-two">
                                            <li>Landing Page Design</li>
                                            <li>Economic Market Survey</li>
                                            <li>Web Development</li>
                                            <li>SEO Optimizations</li>
                                            <li>Mobile Applications Design</li>
                                            <li>Free domain included</li>
                                        </ul>
                                        <Link className="theme-btn" href="/pricing">Get started for free</Link>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="pricing-item">
                                        <div className="icon">
                                            <img src="/assets/images/icons/price2.png" alt="Price" />
                                        </div>
                                        <h4>Yearly Package</h4>
                                        <span className="price">49.9</span>
                                        <ul className="list-style-two">
                                            <li>Landing Page Design</li>
                                            <li>Economic Market Survey</li>
                                            <li>Web Development</li>
                                            <li>SEO Optimizations</li>
                                            <li>Mobile Applications Design</li>
                                            <li>Free domain included</li>
                                        </ul>
                                        <Link className="theme-btn" href="/pricing">Get started for free</Link>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="pricing-item">
                                        <div className="icon">
                                            <img src="/assets/images/icons/price3.png" alt="Price" />
                                        </div>
                                        <h4>Yearly Package</h4>
                                        <span className="price">69.9</span>
                                        <ul className="list-style-two">
                                            <li>Landing Page Design</li>
                                            <li>Economic Market Survey</li>
                                            <li>Web Development</li>
                                            <li>SEO Optimizations</li>
                                            <li>Mobile Applications Design</li>
                                            <li>Free domain included</li>
                                        </ul>
                                        <Link className="theme-btn" href="/pricing">Get started for free</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
