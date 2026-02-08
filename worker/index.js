const MAILEROO_URL = "https://smtp.maileroo.com/api/v2/emails";

export default {
  async fetch(request, env, ctx) {
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    if (request.method !== "POST") {
      return json({ success: false, message: "Method not allowed" }, 405);
    }

    const apiKey = env.MAILEROO_API_KEY;
    const fromEmailRaw = (env.FROM_EMAIL && String(env.FROM_EMAIL).trim()) || "";
    const fromEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fromEmailRaw) ? fromEmailRaw : "55abbcb854c9a477.maileroo.org";
    const toEmail = (env.TO_EMAIL && String(env.TO_EMAIL).trim()) || "phongvuminh2003@gmail.com";

    if (!apiKey) {
      return json({ success: false, message: "Server missing MAILEROO_API_KEY" }, 500);
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return json({ success: false, message: "Invalid JSON" }, 400);
    }

    const { fname = "", lname = "", email = "", phone = "", message = "" } = body;
    if (!email || !message) {
      return json({ success: false, message: "Email and message are required" }, 400);
    }

    const subject = `[Active Fingers] Contact from ${fname} ${lname}`.trim() || "[Active Fingers] Contact form";
    const html = `
      <h2>New contact form submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(fname)} ${escapeHtml(lname)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Message:</strong></p>
      <pre>${escapeHtml(message)}</pre>
    `;
    const plain = `Name: ${[fname, lname].filter(Boolean).join(" ") || "—"}\nEmail: ${email}\nPhone: ${phone || "—"}\n\n${message}`;

    // Maileroo bắt buộc: from/to là object có "address" và (tùy chọn) "display_name". Không gửi key khác.
    const fromObj = { address: fromEmail, display_name: "Active Fingers Website" };
    const toObj = [{ address: toEmail }];

    const mailerooBody = {
      from: fromObj,
      to: toObj,
      subject,
      html,
      plain,
    };

    const res = await fetch(MAILEROO_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(mailerooBody),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      return json(
        { success: false, message: data.message || "Maileroo request failed" },
        res.status
      );
    }

    return json(
      { success: true, message: "Email sent successfully" },
      200,
      { "Access-Control-Allow-Origin": "*" }
    );
  },
};

function json(obj, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      ...extraHeaders,
    },
  });
}

function escapeHtml(str) {
  if (typeof str !== "string") return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
