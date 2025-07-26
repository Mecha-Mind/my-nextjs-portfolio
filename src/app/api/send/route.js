import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const body = await req.json();
  try {
    const data = await resend.emails.send({
      from: "New Message for Diamondnight Team <onboarding@resend.dev>",
      to: ["hanishetos4@gmail.com"],
      subject: "Message from portfolio",
      react: EmailTemplate({
        name: body.name || "empty",
        email: body.email || "empty",
        subject: body.subject || "empty",
        message: body.message || "empty",
      }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
