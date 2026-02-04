import Accordion from "../elements/Accordion"


export default function FAQ() {
    return (
        <>
            <section className="faq-area pt-135 rpt-100 rel z-1 bgs-cover" style={{ backgroundImage: 'url(assets/images/faqs/faq-bg.jpg)' }}>
                <div className="faq-section-inner rel">
                    <div className="faq-image-part bgs-cover" style={{ backgroundImage: 'url(assets/images/faqs/faq.jpg)' }}>
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
                    </div>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 offset-lg-6 wow fadeInLeft delay-0-2s">
                                <div className="faq-content-part mb-25 rmb-0">
                                    <div className="section-title mb-35">
                                        <span className="sub-title mb-10">Trusted web design agency</span>
                                        <h2>Frequently Ask Ques -tion for everyone</h2>
                                    </div>
                                    <Accordion />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="faq-shape"><img src="/assets/images/icons/star.png" alt="Star" /></div>
                </div>
            </section>
        </>
    )
}
