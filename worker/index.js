/**
 * Cloudflare Worker: nhận form liên hệ, gửi email qua Maileroo API.
 * Cấu hình trong Cloudflare: Workers & Pages → Worker này → Settings → Variables
 * - MAILEROO_API_KEY (secret)
 * - FROM_EMAIL (vd: andyvu@activefingers.com, domain đã verify trên Maileroo)
 * - TO_EMAIL (nhận thư, vd: andyvu@activefingers.com)
 */

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
    const fromEmail = (env.FROM_EMAIL && String(env.FROM_EMAIL).trim()) || "noreply@activefingers.com";
    const toEmail = (env.TO_EMAIL && String(env.TO_EMAIL).trim()) || "andyvu@activefingers.com";

    if (!apiKey) {
      return json({ success: false, message: "Server missing MAILEROO_API_KEY" }, 500);
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fromEmail)) {
      return json({ success: false, message: "Invalid or missing FROM_EMAIL; set a valid address on your verified domain in Cloudflare Variables" }, 500);
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

    const mailerooBody = {
      from: {
        address: String(fromEmail),
        display_name: "Active Fingers Website",
      },
      to: [{ address: String(toEmail) }],
      reply_to: [{ address: email, display_name: `${fname} ${lname}`.trim() || email }],
      subject,
      html,
    };

    const res = await fetch(MAILEROO_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": apiKey,
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
