'use client'
import Slider from "react-slick"

const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 600,
    arrows: false,
    dots: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 5000,
}

export default function Testimonials3() {
    return (
        <>
            <section className="testimonials-three-area bg-primary-shape rel z-1">
                <div className="container">
                    <div className="row align-items-end justify-content-between">
                        <div className="col-lg-7 wow fadeInLeft delay-0-2s">
                            <Slider {...settings} className="testimonials-two-active style-two py-135 rpy-100">
                                <div className="testimonial-item">
                                    <div className="testimonial-author">
                                        <div className="author-image">
                                            <img src="/assets/images/icons/wp-icon1.png" alt="Icon" />
                                        </div>
                                        <div className="author-info">
                                            <h5>Leslie Alexander</h5>
                                            <span className="designation">ThemeForest Exclusive</span>
                                        </div>
                                    </div>
                                    <div className="testimonial-header">
                                        <h6>Quality Services</h6>
                                        <div className="ratting">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                        </div>
                                    </div>
                                    <div className="author-speech">
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaqu ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo enim ipsam voluptatem</p>
                                    </div>
                                </div>
                                <div className="testimonial-item">
                                    <div className="testimonial-author">
                                        <div className="author-image">
                                            <img src="/assets/images/icons/wp-icon1.png" alt="Icon" />
                                        </div>
                                        <div className="author-info">
                                            <h5>Leslie Alexander</h5>
                                            <span className="designation">ThemeForest Exclusive</span>
                                        </div>
                                    </div>
                                    <div className="testimonial-header">
                                        <h6>Quality Services</h6>
                                        <div className="ratting">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                        </div>
                                    </div>
                                    <div className="author-speech">
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaqu ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo enim ipsam voluptatem</p>
                                    </div>
                                </div>
                                <div className="testimonial-item">
                                    <div className="testimonial-author">
                                        <div className="author-image">
                                            <img src="/assets/images/icons/wp-icon1.png" alt="Icon" />
                                        </div>
                                        <div className="author-info">
                                            <h5>Leslie Alexander</h5>
                                            <span className="designation">ThemeForest Exclusive</span>
                                        </div>
                                    </div>
                                    <div className="testimonial-header">
                                        <h6>Quality Services</h6>
                                        <div className="ratting">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                        </div>
                                    </div>
                                    <div className="author-speech">
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaqu ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo enim ipsam voluptatem</p>
                                    </div>
                                </div>
                                <div className="testimonial-item">
                                    <div className="testimonial-author">
                                        <div className="author-image">
                                            <img src="/assets/images/icons/wp-icon1.png" alt="Icon" />
                                        </div>
                                        <div className="author-info">
                                            <h5>Leslie Alexander</h5>
                                            <span className="designation">ThemeForest Exclusive</span>
                                        </div>
                                    </div>
                                    <div className="testimonial-header">
                                        <h6>Quality Services</h6>
                                        <div className="ratting">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                        </div>
                                    </div>
                                    <div className="author-speech">
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaqu ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo enim ipsam voluptatem</p>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                        <div className="col-lg-5 wow fadeInRight delay-0-2s">
                            <div className="testimonials-three-image">
                                <img src="/assets/images/testimonials/testimonials-right.png" alt="Testimonials" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="testi-three-shape"><i className="fal fa-quote-right" /></div>
            </section>
        </>
    )
}
