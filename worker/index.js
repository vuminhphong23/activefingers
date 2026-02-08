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
    const fromEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fromEmailRaw) ? fromEmailRaw : "noreply@activefingers.com";
    const toEmail = (env.TO_EMAIL && String(env.TO_EMAIL).trim()) || "phongvuminh2003@gmail.com";

    if (!apiKey) {
      return json({ success: false, message: "Server missing MAILEROO_API_KEY" }, 500);
    }
    const fromAddress = String(fromEmail);
    if (!fromAddress || !fromAddress.includes("@")) {
      return json({ success: false, message: "FROM_EMAIL invalid or not set. Set it in Cloudflare Worker: Settings → Variables and Secrets, or in worker/wrangler.toml [vars]. Then run: cd worker && npx wrangler deploy" }, 500);
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

    const subject = `[Active Fingers] Contact from ${[fname, lname].filter(Boolean).join(" ") || "Someone"}`.trim();
    const fullName = [fname, lname].filter(Boolean).join(" ") || "—";
    const plain = `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone || "—"}\n\n${message}`;
    const html = buildEmailHtml({ fullName, email, phone, message });

    const fromObj = { address: fromAddress, display_name: "Active Fingers Website" };
    const toObj = [{ address: String(toEmail) }];

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

function buildEmailHtml({ fullName, email, phone, message }) {
  const accent = "#C4EF17"; // Active Fingers primary
  const bg = "#0d0d0d";
  const cardBg = "#1a1a1a";
  const border = "#2a2a2a";
  const labelColor = "#83827F";
  const textColor = "#e5e5e5";
  const name = escapeHtml(fullName);
  const emailEsc = escapeHtml(email);
  const phoneEsc = escapeHtml(phone || "—");
  const messageEsc = escapeHtml(message).replace(/\n/g, "<br>");
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0; padding:0; background-color:${bg}; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${bg}; max-width:560px; margin:0 auto;">
    <tr>
      <td style="padding:32px 24px 24px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${cardBg}; border:1px solid ${border}; border-radius:12px; overflow:hidden;">
          <tr>
            <td style="padding:20px 24px; border-bottom:1px solid ${border};">
              <div style="width:4px; height:24px; background-color:${accent}; border-radius:2px; margin-bottom:12px;"></div>
              <h1 style="margin:0; font-size:18px; font-weight:600; color:${textColor}; letter-spacing:-0.02em;">New contact form submission</h1>
              <p style="margin:8px 0 0; font-size:13px; color:${labelColor};">Active Fingers website</p>
            </td>
          </tr>
          <tr>
            <td style="padding:24px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr><td style="padding:12px 0; border-bottom:1px solid ${border};"><span style="font-size:12px; color:${labelColor}; text-transform:uppercase; letter-spacing:0.05em;">Name</span><br><span style="font-size:15px; color:${textColor};">${name}</span></td></tr>
                <tr><td style="padding:12px 0; border-bottom:1px solid ${border};"><span style="font-size:12px; color:${labelColor}; text-transform:uppercase; letter-spacing:0.05em;">Email</span><br><a href="mailto:${emailEsc}" style="font-size:15px; color:${accent}; text-decoration:none;">${emailEsc}</a></td></tr>
                <tr><td style="padding:12px 0; border-bottom:1px solid ${border};"><span style="font-size:12px; color:${labelColor}; text-transform:uppercase; letter-spacing:0.05em;">Phone</span><br><span style="font-size:15px; color:${textColor};">${phoneEsc}</span></td></tr>
                <tr><td style="padding:12px 0 0;"><span style="font-size:12px; color:${labelColor}; text-transform:uppercase; letter-spacing:0.05em;">Message</span><br><span style="font-size:15px; color:${textColor}; line-height:1.5; display:block; margin-top:8px;">${messageEsc}</span></td></tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 24px; border-top:1px solid ${border}; font-size:11px; color:${labelColor};">
              This email was sent from the Active Fingers contact form. Reply directly to the sender’s email above.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
