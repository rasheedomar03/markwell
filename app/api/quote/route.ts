import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, business, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Wearmill Quote Form <onboarding@resend.dev>",
    to: ["rasheed.omar@outlook.com"],
    replyTo: email,
    subject: `Quote Request from ${name}${business ? ` — ${business}` : ""}`,
    html: `
      <div style="font-family: sans-serif; max-width: 560px;">
        <h2 style="margin-bottom: 4px;">New Quote Request</h2>
        <p style="color: #666; margin-top: 0; margin-bottom: 24px;">Via wearmill.com</p>

        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #999; width: 120px;">Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #999;">Business</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${business || "—"}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #999;">Email</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
          </tr>
        </table>

        <h3 style="margin-top: 24px; margin-bottom: 8px;">What they need</h3>
        <p style="background: #f5f5f5; padding: 16px; border-radius: 6px; white-space: pre-wrap;">${message}</p>

        <p style="margin-top: 32px; color: #999; font-size: 13px;">
          Reply directly to this email to respond to ${name}.
        </p>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
