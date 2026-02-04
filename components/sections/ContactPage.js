import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <section className="contact-page py-140 rpy-100 rel z-1">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <div className="contact-content-part rmb-55 wow fadeInRight delay-0-2s">
                <div className="section-title mb-60">
                  <span className="sub-title mb-15">
                    Trusted web design services
                  </span>
                  <h2>Contact Us &amp; Make Reserve Today</h2>
                </div>
                <form action="#" method="post">
                  <div className="form-group">
                    <label htmlFor="name">
                      <i className="far fa-user" />
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Your Name*"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      <i className="far fa-envelope" />
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Email Address*"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">
                      <i className="far fa-edit" />
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows={4}
                      placeholder="Enter Your Messege here"
                      required
                    />
                  </div>
                  <button type="submit" className="theme-btn">
                    <i className="fal fa-paper-plane" /> Get In Touch
                  </button>
                </form>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="contact-info-part wow fadeInLeft delay-0-2s">
                <h3>Get in touch</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipi scing elit mattis
                  faucibus odio feugiat arc
                </p>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="c-info-item">
                      <span className="title">Contact</span>
                      <h6>
                        <Link href="/callto:+(84) 978 608 788">
                          +(84) 978 608 788
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="c-info-item">
                      <span className="title">Email</span>
                      <h6>
                        <Link href="mailto:vietanhvu225@gmail.com">
                          vietanhvu225@gmail.com
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="c-info-item">
                      <span className="title">Address</span>
                      <h6>
                        30 Hoang Dao Thuy Street, Trung Hoa, Cau Giay, Hanoi,
                        Vietnam
                      </h6>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="c-info-item">
                      <span className="title">Follow</span>
                      <div className="social-style-two">
                        <Link href="#">
                          <i className="fab fa-twitter" />
                        </Link>
                        <Link href="#">
                          <i className="fab fa-facebook-f" />
                        </Link>
                        <Link href="#">
                          <i className="fab fa-instagram" />
                        </Link>
                        <Link href="#">
                          <i className="fab fa-pinterest-p" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m12!1m10!1m3!1d142190.2862584524!2d-74.01298319978558!3d40.721725351435126!2m1!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1663473911885!5m2!1sen!2sbd"
                  style={{ border: 0, width: "100%" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
