"use client";

import { useState } from "react";

const SEND_EMAIL_URL =
  process.env.NEXT_PUBLIC_SEND_EMAIL_URL;

export default function ContactForm() {
  const [status, setStatus] = useState(""); // "sending" | "success" | "error"
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!SEND_EMAIL_URL) {
      setStatus("error");
      setErrorMessage("Form chưa được cấu hình. Liên hệ quản trị viên.");
      return;
    }

    const form = e.target;
    const payload = {
      fname: form.fname?.value?.trim() || "",
      lname: form.lname?.value?.trim() || "",
      email: form.email?.value?.trim() || "",
      phone: form.phone?.value?.trim() || "",
      message: form.message?.value?.trim() || "",
    };

    if (!payload.email || !payload.message) {
      setStatus("error");
      setErrorMessage("Vui lòng điền Email và Message.");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch(SEND_EMAIL_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Gửi thất bại. Thử lại sau.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage(err.message || "Lỗi kết nối. Kiểm tra URL Worker.");
    }
  }

  return (
    <div className="contact-page-form wow fadeInUp delay-0-2s">
      <form onSubmit={handleSubmit}>
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
                required
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
                placeholder="Phone Number"
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
                placeholder="Enter Your Message"
                required
              />
            </div>
          </div>
          {status && (
            <div className="col-md-12 mb-3">
              {status === "sending" && (
                <p className="text-warning mb-0">Đang gửi...</p>
              )}
              {status === "success" && (
                <p className="text-success mb-0">Đã gửi thành công. Chúng tôi sẽ phản hồi sớm.</p>
              )}
              {status === "error" && (
                <p className="text-danger mb-0">{errorMessage}</p>
              )}
            </div>
          )}
          <div className="col-md-12 text-center wow fadeInUp delay-0-2s">
            <button
              type="submit"
              className="theme-btn style-two"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
