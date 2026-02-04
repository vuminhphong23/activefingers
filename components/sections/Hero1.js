
import VideoPopup from "../elements/VideoPopup"

export default function Hero1() {
    return (
        <>
            <section className="hero-area py-100 rel z-1">
                <div className="container container-1530">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-lg-2">
                            <div className="hero-content-part rmb-55">
                                <h1 className="wow fadeInUp delay-0-2s">Digital<i className="fas fa-star-of-life" /></h1>
                                <div className="hero-sub-heading wow fadeInUp delay-0-4s">
                                    <img src="/assets/images/hero/sub-heading.svg" alt="Shape" />
                                    <span className="agency-text">agency</span>
                                </div>
                                <div className="text wow fadeInUp delay-0-6s">Welcome to our Print 128 website! We are a professional and reliable printing company that offers a wide range of printing services to meet your needs.</div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="hero-image-part">
                                <div className="hero-main-img wow fadeInRight delay-0-2s">
                                    <img src="/assets/images/hero/hero-main.jpg" alt="Hero" />
                                    <VideoPopup  style={1}/>
                                </div>
                                <div className="mail-us wow fadeInRight delay-0-4s">
                                    <i className="far fa-at" />
                                    <span>mail us today</span>
                                </div>
                                <div className="hero-small-img wow fadeInDown delay-0-6s">
                                    <img src="/assets/images/hero/hero-small.jpg" alt="Hero" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-shape">
                    <img src="/assets/images/hero/hero-shape.png" alt="Shape" />
                </div>
            </section>
        </>
    )
}
