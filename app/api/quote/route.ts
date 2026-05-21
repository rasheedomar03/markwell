import { Resend } from "resend";
import { NextResponse } from "next/server";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim().slice(0, 200) : "";
  const business = typeof body.business === "string" ? body.business.trim().slice(0, 200) : "";
  const email = typeof body.email === "string" ? body.email.trim().slice(0, 320) : "";
  const message = typeof body.message === "string" ? body.message.trim().slice(0, 5000) : "";
  const attachmentName = typeof body.attachmentName === "string" ? body.attachmentName.trim().slice(0, 255) : "";
  const attachmentData = typeof body.attachmentData === "string" ? body.attachmentData : "";

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  // Basic email format check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  // Attachment size check (4 MB base64 ≈ 5.6 MB string)
  if (attachmentData && attachmentData.length > 6_000_000) {
    return NextResponse.json({ error: "Attachment too large." }, { status: 400 });
  }

  const safeName = escapeHtml(name);
  const safeBusiness = escapeHtml(business);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message);

  const emailPayload: Parameters<typeof resend.emails.send>[0] = {
    from: "Wearmill Quote Form <onboarding@resend.dev>",
    to: ["rasheed.omar@outlook.com"],
    replyTo: email,
    subject: `Quote Request from ${name.replace(/[<>"]/g, "")}${business ? ` — ${business.replace(/[<>"]/g, "")}` : ""}`,
    html: `
      <div style="font-family: sans-serif; max-width: 560px;">
        <h2 style="margin-bottom: 4px;">New Quote Request</h2>
        <p style="color: #666; margin-top: 0; margin-bottom: 24px;">Via wearmill.com</p>

        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #999; width: 120px;">Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${safeName}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #999;">Business</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${safeBusiness || "—"}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #999;">Email</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="mailto:${safeEmail}">${safeEmail}</a></td>
          </tr>
        </table>

        <h3 style="margin-top: 24px; margin-bottom: 8px;">What they need</h3>
        <p style="background: #f5f5f5; padding: 16px; border-radius: 6px; white-space: pre-wrap;">${safeMessage}</p>

        <p style="margin-top: 32px; color: #999; font-size: 13px;">
          Reply directly to this email to respond to ${safeName}.
        </p>
      </div>
    `,
  };

  if (attachmentName && attachmentData) {
    emailPayload.attachments = [
      {
        filename: attachmentName,
        content: Buffer.from(attachmentData, "base64"),
      },
    ];
  }

  const { error } = await resend.emails.send(emailPayload);

  if (error) {
    return NextResponse.json({ error: "Failed to send. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
