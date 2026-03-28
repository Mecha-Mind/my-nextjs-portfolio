import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";
import { checkRateLimit } from "@/lib/rateLimit";
import { validateContactForm } from "@/lib/validateContact";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    // 1. استخراج الـ IP (مهم للـ Rate Limit)
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "unknown";

    // 2. Rate Limiting: هل هذا الـ IP أرسل طلبات كثيرة؟
    const { allowed, remaining, resetIn } = checkRateLimit(ip);
    if (!allowed) {
      return Response.json(
        { error: "Too many requests. Please try again later." },
        {
          status: 429,
          headers: {
            "Retry-After": String(resetIn),
            "X-RateLimit-Remaining": "0",
          },
        }
      );
    }

    // 3. قراءة الـ body
    const body = await req.json();

    // 4. التحقق من صحة البيانات (Validation)
    const { valid, errors, data } = validateContactForm(body);
    if (!valid) {
      return Response.json(
        { error: "Validation failed", errors },
        { status: 400 }
      );
    }

    // 5. إرسال الإيميل
    const result = await resend.emails.send({
      from: "New Message for Diamondnight Team <onboarding@resend.dev>",
      to: ["hanishetos4@gmail.com"],
      subject: "Message from portfolio",
      react: EmailTemplate({
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      }),
    });

    return Response.json(result, {
      headers: { "X-RateLimit-Remaining": String(remaining) },
    });
  } catch (error) {
    // لا نرجع تفاصيل الخطأ للعميل (أمان)
    console.error("[API /send]", error);
    return Response.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
