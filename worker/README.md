# Contact form – Maileroo (Cloudflare Worker)

Form liên hệ gửi email qua **Maileroo** nhờ Cloudflare Worker. API key không lộ trên frontend.

## 1. Maileroo

1. Đăng ký / đăng nhập [Maileroo](https://maileroo.com).
2. Thêm và **verify domain** (vd: `activefingers.com`) trong Dashboard → Domains.
3. Tạo **Sending key** (API key) trong Domains → API Keys. Copy key.

## 2. Deploy Worker lên Cloudflare

1. Cài Wrangler (nếu chưa): `npm i -g wrangler`
2. Đăng nhập: `wrangler login`
3. Trong thư mục `worker/`: `wrangler deploy`
4. Trong Cloudflare: **Workers & Pages** → Worker **activefingers-send-email** → **Settings** → **Variables and Secrets**:
   - **MAILEROO_API_KEY** (Secret): dán API key từ Maileroo
   - **FROM_EMAIL**: email gửi đi (phải dùng domain đã verify), vd `andyvu@activefingers.com`
   - **TO_EMAIL**: email nhận thư, vd `andyvu@activefingers.com`
5. Copy URL Worker (vd: `https://activefingers-send-email.<tên-account>.workers.dev`).

## 3. Cấu hình site (build time)

Khi build Next.js, set biến môi trường trỏ tới Worker:

- **NEXT_PUBLIC_SEND_EMAIL_URL** = URL Worker (vd: `https://activefingers-send-email.xxx.workers.dev`)

Ví dụ:

- Local: tạo file `.env.local` với `NEXT_PUBLIC_SEND_EMAIL_URL=https://...workers.dev`
- GitHub Actions: trong workflow, thêm env cho bước build:
  `NEXT_PUBLIC_SEND_EMAIL_URL: ${{ secrets.SEND_EMAIL_WORKER_URL }}`
  và thêm secret **SEND_EMAIL_WORKER_URL** trong repo (giá trị = URL Worker).

## 4. (Tùy chọn) Gắn Worker vào domain

Trong Cloudflare: **Workers & Pages** → Worker → **Triggers** → **Custom Domains** → thêm `api.activefingers.com` (hoặc route `activefingers.com/api/send-email` tùy cấu hình). Sau đó dùng `https://api.activefingers.com` làm **NEXT_PUBLIC_SEND_EMAIL_URL** thay cho `*.workers.dev`.
