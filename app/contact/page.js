import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Contact() {
  return (
    <>
      <Layout breadcrumbTitle="Contact Us">
        <div>
          <section className="contact-page py-140 rpy-100 rel z-1">
            <div className="container">
              <div className="row pb-60 justify-content-center align-items-stretch">
                <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                  <div className="contact-info-item h-100 d-flex flex-column wow fadeInUp delay-0-2s">
                    <div className="icon">
                      <img src="/assets/images/icons/contact1.png" alt="Icon" />
                    </div>
                    <div className="content flex-grow-1 d-flex flex-column" style={{ minHeight: "140px" }}>
                      <h5>Contact</h5>
                      <p className="mb-1">Andy Vu</p>
                      <Link href="tel:+84978608788">+84 978 608 788</Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                  <div className="contact-info-item h-100 d-flex flex-column wow fadeInUp delay-0-4s">
                    <div className="icon">
                      <img src="/assets/images/icons/contact2.png" alt="Icon" />
                    </div>
                    <div className="content flex-grow-1 d-flex flex-column" style={{ minHeight: "140px" }}>
                      <h5>Address</h5>
                      <span>
                        30 Hoang Dao Thuy Street, Trung Hoa, Cau Giay, Hanoi,
                        Vietnam
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                  <div className="contact-info-item h-100 d-flex flex-column wow fadeInUp delay-0-6s">
                    <div className="icon">
                      <img src="/assets/images/icons/contact3.png" alt="Icon" />
                    </div>
                    <div className="content flex-grow-1 d-flex flex-column" style={{ minHeight: "140px" }}>
                      <h5>Email</h5>
                      <Link href="mailto:andyvu@activefingers.com">andyvu@activefingers.com</Link>
                      <p className="mt-2 mb-0 small">
                        Monday - Friday
                        <br /> 09:00 AM - 05:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-page-form wow fadeInUp delay-0-2s">
                <form action="#" method="post">
                  <div className="row">
                    <div className="col-md-6 wow fadeInUp delay-0-2s">
                      <div className="form-group">
                        <input
                          type="text"
                          id="fname"
                          name="fname"
                          className="form-control"
                          placeholder="First Name*"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 wow fadeInUp delay-0-4s">
                      <div className="form-group">
                        <input
                          type="text"
                          id="lname"
                          name="lname"
                          className="form-control"
                          placeholder="Last Name*"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 wow fadeInUp delay-0-2s">
                      <div className="form-group">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          placeholder="Email Address*"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 wow fadeInUp delay-0-4s">
                      <div className="form-group">
                        <input
                          type="text"
                          id="phone"
                          name="phone"
                          className="form-control"
                          placeholder="Phone Number*"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 wow fadeInUp delay-0-2s">
                      <div className="form-group">
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows={8}
                          placeholder="Enter Your Messege"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12 text-center wow fadeInUp delay-0-2s">
                      <button type="submit" className="theme-btn style-two">
                        Send Massage
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
          {/* Contact Page Area end */}
          {/* Location Map Area Start */}
          <div className="contact-page-map wow fadeInUp delay-0-2s">
            <div className="our-location">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4005.9283847219863!2d105.80042037555772!3d21.007045680636864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aca1124d6387%3A0x178c49e7f49a1488!2zUC4gSG_DoG5nIMSQ4bqhbyBUaMO6eSwgVHJ1bmcgSMOyYSBOaMOibiBDaMOtbmgsIFRydW5nIEhvw6AsIEPhuqd1IEdp4bqleSwgSMOgIE7hu5lpLCBWaWV0bmFt!5e1!3m2!1sen!2sbd!4v1712586769055!5m2!1sen!2sbd"
                style={{ border: 0, width: "100%" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          {/* Location Map Area End */}
        </div>
      </Layout>
    </>
  );
}
