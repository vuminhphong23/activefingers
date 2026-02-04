
'use client'
import Isotope from "isotope-layout"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"

export default function PortfolioFilter1() {
    // Isotope
    const isotope = useRef()
    // const [filterKey, setFilterKey] = useState("*")
    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope(".portfolio-masonry-two", {
                itemSelector: ".item",
                // layoutMode: "fitRows",
                percentPosition: true,
                masonry: {
                    columnWidth: ".item",
                },
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                },
            })
        }, 1000)
    }, [])

    return (
        <>
            <div className="row gap-100 portfolio-masonry-two">
                <div className="col-md-6 item">
                    <div className="portfolio-item style-two wow fadeInUp delay-0-2s">
                        <div className="image">
                            <img src="/assets/images/portfolio/portfolio-page1.jpg" alt="Portfolio" />
                            <Link className="hover-box" href="/portfolio-details">
                                <span>View Project</span>
                            </Link>
                        </div>
                        <div className="content">
                            <h4><Link href="/portfolio-details">Stellar Vibe Digital Media</Link></h4>
                            <span className="meta">Redesign · Webflow · Visual Design</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 item">
                    <div className="portfolio-item style-two mt-75 wow fadeInUp delay-0-4s">
                        <div className="image">
                            <img src="/assets/images/portfolio/portfolio-page2.jpg" alt="Portfolio" />
                            <Link className="hover-box" href="/portfolio-details">
                                <span>View Project</span>
                            </Link>
                        </div>
                        <div className="content">
                            <h4><Link href="/portfolio-details">Stellar Vibe Digital Media</Link></h4>
                            <span className="meta">Redesign · Webflow · Visual Design</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 item">
                    <div className="portfolio-item style-two wow fadeInUp delay-0-2s">
                        <div className="image">
                            <img src="/assets/images/portfolio/portfolio-page3.jpg" alt="Portfolio" />
                            <Link className="hover-box" href="/portfolio-details">
                                <span>View Project</span>
                            </Link>
                        </div>
                        <div className="content">
                            <h4><Link href="/portfolio-details">Stellar Vibe Digital Media</Link></h4>
                            <span className="meta">Redesign · Webflow · Visual Design</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 item">
                    <div className="portfolio-item style-two wow fadeInUp delay-0-4s">
                        <div className="image">
                            <img src="/assets/images/portfolio/portfolio-page4.jpg" alt="Portfolio" />
                            <Link className="hover-box" href="/portfolio-details">
                                <span>View Project</span>
                            </Link>
                        </div>
                        <div className="content">
                            <h4><Link href="/portfolio-details">Stellar Vibe Digital Media</Link></h4>
                            <span className="meta">Redesign · Webflow · Visual Design</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
