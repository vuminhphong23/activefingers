'use client'
import Slider from "react-slick"

const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 600,
    arrows: false,
    dots: false,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 5000,
}

export default function Testimonials1() {
    return (
        <>
            <section className="testimonials-area py-145 rpy-100 rel z-1">
                <div className="container">
                    <div className="row gap-140 align-items-center">
                        <div className="col-lg-5 wow fadeInRight delay-0-2s">
                            <div className="testimonials-image rmb-55">
                                <img src="/assets/images/testimonials/testimonials-left.png" alt="Testimonials" />
                            </div>
                        </div>
                        <div className="col-lg-7 wow fadeInLeft delay-0-2s">
                            <div className="testimonials-content">
                                <div className="section-title mb-35">
                                    <span className="sub-title mb-15">know what our client’s says</span>
                                    <h2>made the biggest <span>players</span> happy</h2>
                                </div>
                                <Slider {...settings} className="testimonials-active">
                                    <div className="testimonial-item">
                                        <div className="author-speech">
                                            <p>creative agency, we believe in the power of imagination and innovation. We are constantly pushing the boundaries of what is possible, and strive to create work that is not only bea utiful and effective,but also meaningful and impactful.</p>
                                        </div>
                                        <div className="testimonial-footer">
                                            <div className="testimonial-author">
                                                <div className="author-image">
                                                    <img src="/assets/images/testimonials/author1.png" alt="Author Image" />
                                                </div>
                                                <div className="author-info">
                                                    <h6>Cameron Williamson</h6>
                                                    <span className="designation">graphics Design</span>
                                                </div>
                                            </div>
                                            <div className="ratting">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-item">
                                        <div className="author-speech">
                                            <p>creative agency, we believe in the power of imagination and innovation. We are constantly pushing the boundaries of what is possible, and strive to create work that is not only bea utiful and effective,but also meaningful and impactful.</p>
                                        </div>
                                        <div className="testimonial-footer">
                                            <div className="testimonial-author">
                                                <div className="author-image">
                                                    <img src="/assets/images/testimonials/author1.png" alt="Author Image" />
                                                </div>
                                                <div className="author-info">
                                                    <h6>Cameron Williamson</h6>
                                                    <span className="designation">graphics Design</span>
                                                </div>
                                            </div>
                                            <div className="ratting">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
