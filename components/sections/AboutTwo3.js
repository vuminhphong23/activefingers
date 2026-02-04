
import Link from "next/link"
import VideoPopup from "../elements/VideoPopup"

export default function AboutTwo3() {
    return (
        <>
            <section id="about" className="about-two-area rel z-1">
                <div className="container">
                    <div className="row gap-110 align-items-center">
                        <div className="col-lg-6 wow fadeInRight delay-0-2s">
                            <div className="about-two-images rmb-75">
                                <div className="image one"><img src="/assets/images/about/about-two1.jpg" alt="About" /></div>
                                <div className="image two"><img src="/assets/images/about/about-two2.jpg" alt="About" /></div>
                                {/* <VideoPopup style={2}/> */}
                                {/* <div className="experince-years"><b>13</b> <span>Years of Experince</span></div> */}
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInLeft delay-0-2s">
                            <div className="about-two-content">
                                <div className="section-title mb-30">
                                    <span className="sub-title mb-10">Our team of experts are here to tackle your business’s challenges.</span>
                                    {/* <h2>Get Best Design <span>Solution</span> Over The World</h2> */}
                                </div>
                                {/* <h5>Proin est lacus, sagittislobortis iaculise get sagittislo</h5>
                                <p>Transmax is the world’s driving worldwide coordinations supplier — we uphold industry and exchange the worldwide trade of merchandise through land transport.</p>
                                <div className="service-stye-two pb-10">
                                    <div className="icon">
                                        <img src="/assets/images/icons/writing.png" alt="Icon" />
                                    </div>
                                    <h6>Most easy premium web design process Making a quality design ideas premium web</h6>
                                </div> */}
                                {/* <div className="skillbar" data-percent={88}>
                                    <span className="skillbar-title">Marketing</span>
                                    <div className="progress-bar-striped skillbar-bar progress-bar-animated" role="progressbar" aria-valuenow={88} aria-valuemin={0} aria-valuemax={100}  style={{ width: "88%" }}>
                                        <span className="skill-bar-percent" /></div>
                                </div> */}
                                <div className="author-name-btn pt-30">
                                    {/* <img className="author" src="/assets/images/about/author.jpg" alt="Author" /> */}
                                    {/* <img className="signature" src="/assets/images/about/signature.png" alt="Signature" /> */}
                                    <Link href="/about" className="theme-btn style-two">Let's Get In Touch</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
