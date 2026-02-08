"use client";

import { useState } from "react";

const SEND_EMAIL_URL =
  process.env.NEXT_PUBLIC_SEND_EMAIL_URL ||
  "https://activefingers.phongvuminh2003.workers.dev";

export default function ContactForm() {
  const [status, setStatus] = useState(""); // "sending" | "success" | "error"
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!SEND_EMAIL_URL) {
      setStatus("error");
      setErrorMessage("Form is not configured. Please contact the administrator.");
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
      setErrorMessage("Please fill in Email and Message.");
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
        setErrorMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage(err.message || "Connection error. Please check your network.");
    }
  }

  return (
    <div className="contact-page-form wow fadeInUp delay-0-2s">
      <div
        className="contact-form-card"
        style={{
          background: "var(--lighter-color)",
          border: "1px solid var(--border-color)",
          borderRadius: "16px",
          padding: "2.5rem 2rem",
          marginTop: "1rem",
        }}
      >
        <h4
          className="mb-4"
          style={{
            color: "var(--heading-color)",
            fontSize: "1.5rem",
            fontWeight: 600,
          }}
        >
          Send us a message
        </h4>
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="form-group mb-0">
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="form-control"
                  placeholder="First name"
                  disabled={status === "sending"}
                  style={{ borderRadius: "10px", padding: "12px 18px" }}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group mb-0">
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  className="form-control"
                  placeholder="Last name"
                  disabled={status === "sending"}
                  style={{ borderRadius: "10px", padding: "12px 18px" }}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group mb-0">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Email address *"
                  required
                  disabled={status === "sending"}
                  style={{ borderRadius: "10px", padding: "12px 18px" }}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group mb-0">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-control"
                  placeholder="Phone number"
                  disabled={status === "sending"}
                  style={{ borderRadius: "10px", padding: "12px 18px" }}
                />
              </div>
            </div>
            <div className="col-12">
              <div className="form-group mb-0">
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  rows={6}
                  placeholder="Your message *"
                  required
                  disabled={status === "sending"}
                  style={{
                    borderRadius: "10px",
                    padding: "14px 18px",
                    resize: "vertical",
                    minHeight: "140px",
                  }}
                />
              </div>
            </div>

            {status === "sending" && (
              <div className="col-12">
                <div
                  role="status"
                  className="contact-form-status contact-form-status--sending"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    color: "var(--base-color)",
                    fontSize: "0.95rem",
                  }}
                >
                  <span className="contact-form-spinner" aria-hidden="true" />
                  Sending your message…
                </div>
              </div>
            )}

            {status === "success" && (
              <div className="col-12">
                <div
                  role="alert"
                  style={{
                    padding: "14px 18px",
                    borderRadius: "10px",
                    background: "rgba(25, 135, 84, 0.15)",
                    border: "1px solid rgba(25, 135, 84, 0.4)",
                    color: "#75c994",
                    fontSize: "0.95rem",
                  }}
                >
                  Message sent successfully. We&apos;ll get back to you soon.
                </div>
              </div>
            )}

            {status === "error" && (
              <div className="col-12">
                <div
                  role="alert"
                  style={{
                    padding: "14px 18px",
                    borderRadius: "10px",
                    background: "rgba(220, 53, 69, 0.12)",
                    border: "1px solid rgba(220, 53, 69, 0.35)",
                    color: "#f08a96",
                    fontSize: "0.95rem",
                  }}
                >
                  {errorMessage}
                </div>
              </div>
            )}

            <div className="col-12 pt-2">
              <button
                type="submit"
                className="theme-btn style-two"
                disabled={status === "sending"}
                style={{
                  opacity: status === "sending" ? 0.7 : 1,
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                  borderRadius: "10px",
                  padding: "14px 32px",
                }}
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
