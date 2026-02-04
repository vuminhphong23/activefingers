
import Link from "next/link"
import VideoPopup from "../elements/VideoPopup"

export default function Hero3() {
    return (
        <>
            <div className="hero-area-three pt-130 rpt-100 rel z-1">
                <div className="container">
                    <div className="row rel align-items-center justify-content-between">
                        <div className="col-lg-10">
                            <div className="hero-content-three">
                                <div className="hero-top">
                                    <span className="hero-heading wow fadeInUp delay-0-2s">Website</span>
                                    <div className="text wow fadeInUp delay-0-4s">Welcome to our Print 128 website! We are a professional and reliable printing company that offers a wide range of printing services to your needs.</div>
                                </div>
                                <div className="hero-bottom wow fadeInUp delay-0-6s">
                                    <VideoPopup style={2} />
                                    <span className="hero-heading">desi<span>g</span>n Agen<span>c</span>y</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="hero-scroll-down wow fadeInDown delay-0-6s">
                                <Link href="#client"><i className="far fa-arrow-down" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center rel wow fadeInUp delay-0-2s">
                    <div className="col-xl-10">
                        <div className="video-inner-two mt-45 py-250 bgs-cover rpy-150" style={{ backgroundImage: 'url(assets/images/hero/hero-three.jpg)' }}>
                            <div className="headline-wrap style-three color-black">
                                <span className="marquee-wrap bg-white py-15">
                                    <span className="marquee-inner left">
                                        <span className="marquee-item"><b>customer business solution</b><i className="fas fa-bahai" /></span>
                                        <span className="marquee-item"><b><span>design</span> - customer centric solution</b><i className="fas fa-bahai" /></span>
                                        <span className="marquee-item"><b>web development based company</b><i className="fas fa-bahai" /></span>
                                        <span className="marquee-item"><b><span>design</span> - customer centric solution</b><i className="fas fa-bahai" /></span>
                                        <span className="marquee-item"><b>marketing based devlopment</b><i className="fas fa-bahai" /></span>
                                    </span>
                                    <span className="marquee-inner left">
                                        <span className="marquee-item"><b>customer business solution</b><i className="fas fa-bahai" /></span>
                                        <span className="marquee-item"><b><span>design</span> - customer centric solution</b><i className="fas fa-bahai" /></span>
                                        <span className="marquee-item"><b>web development based company</b><i className="fas fa-bahai" /></span>
                                        <span className="marquee-item"><b><span>design</span> - customer centric solution</b><i className="fas fa-bahai" /></span>
                                        <span className="marquee-item"><b>marketing based devlopment</b><i className="fas fa-bahai" /></span>
                                    </span>
                                    <span className="marquee-inner left">
                                        <span className="marquee-item"><b>customer business solution</b><i className="fas fa-bahai" /></span>
                                        <span className="marquee-item"><b><span>design</span> - customer centric solution</b><i className="fas fa-bahai" /></span>
                                        <span className="marquee-item"><b>web development based company</b><i className="fas fa-bahai" /></span>
                                        <span className="marquee-item"><b><span>design</span> - customer centric solution</b><i className="fas fa-bahai" /></span>
                                        <span className="marquee-item"><b>marketing based devlopment</b><i className="fas fa-bahai" /></span>
                                    </span>
                                </span>
                            </div>
                            <div className="hero-three-shape wow zoomIn delay-0-2s">
                                <img src="/assets/images/hero/hero-shape-three.png" alt="Shape" />
                            </div>
                        </div>
                        <div className="hero-lighting" />
                    </div>
                </div>
            </div>
        </>
    )
}
