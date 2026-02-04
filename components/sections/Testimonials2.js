"use client";
import Slider from "react-slick";

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
};

export default function Testimonials2() {
  return (
    <>
      <section className="testimonials-two-area pb-115 rpb-80 rel z-1">
        <div className="container">
          <div
            className="testimonials-two-inner"
            style={{
              backgroundImage:
                "url(/assets/images/testimonials/testimonials-bg.png)",
            }}
          >
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-3 wow fadeInRight delay-0-2s">
                <div className="testimonials-image rmb-55">
                  <img
                    src="/assets/images/testimonials/testimonials-two-left.png"
                    alt="Testimonials"
                  />
                </div>
              </div>
              <div className="col-xl-8 col-lg-9 wow fadeInLeft delay-0-2s">
                <Slider {...settings} className="testimonials-two-active">
                  <div className="testimonial-item">
                    <div className="testimonial-header">
                      <h6>High Performing Team</h6>
                      <div className="ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                    </div>
                    <div className="author-speech">
                      <p>
                        Our collaboration with the Active Fingers team has
                        delivered results. Through the design, development and
                        app launch process the communication and guidance have
                        been excellent. Highly recommended!
                      </p>
                    </div>
                    <div className="testimonial-author">
                      <div className="author-image">
                        <i className="fal fa-comments" />
                      </div>
                      <div className="author-info">
                        <h6>Leslie Alexander</h6>
                        {/* <span className="designation">ThemeForest Exclusive</span> */}
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-item">
                    <div className="testimonial-header">
                      <h6>Rapid Wins!</h6>
                      <div className="ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                    </div>
                    <div className="author-speech">
                      <p>
                        We needed a responsive and secure web application fast.
                        The Active Fingers team co-designed our product roadmap.
                        The execution was win after win from our product
                        launch through to version 6.
                      </p>
                    </div>
                    <div className="testimonial-author">
                      <div className="author-image">
                        <i className="fal fa-comments" />
                      </div>
                      <div className="author-info">
                        <h6>Cameron Williamson</h6>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-item">
                    <div className="testimonial-header">
                      <h6>Hybrid App Expertise</h6>
                      <div className="ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                    </div>
                    <div className="author-speech">
                      <p>
                      We required development of a hybrid web and mobile application for one of our European customers. The Active Fingers team delivered a secure and scalable solution without any delays. Happy customer!


                      </p>
                    </div>
                    <div className="testimonial-author">
                      <div className="author-image">
                        <i className="fal fa-comments" />
                      </div>
                      <div className="author-info">
                        <h6>Leslie Alexander</h6>
                      
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-item">
                    <div className="testimonial-header">
                      <h6>Identity and Access Mgmt</h6>
                      <div className="ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                    </div>
                    <div className="author-speech">
                      <p>
                      Our company needed an Identity and Access Management capability for our customer &amp; partner platform. Active Fingers designed and implemented the Microsoft Azure Active Directory B2C solution. Remarkable!
                      </p>
                    </div>
                    <div className="testimonial-author">
                      <div className="author-image">
                        <i className="fal fa-comments" />
                      </div>
                      <div className="author-info">
                        <h6>Cameron Williamson</h6>
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
  );
}
