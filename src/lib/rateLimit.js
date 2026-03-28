/**
 * Rate Limiter بسيط (In-Memory)
 *
 * يمنع إرسال طلبات كثيرة من نفس الـ IP في وقت قصير.
 * في Serverless (Vercel) الـ Map بيكون per-instance فقط،
 * لكن لا يزال يحمي من spam في نفس الـ instance.
 */

const store = new Map();

const WINDOW_MS = 60 * 1000; // 1 دقيقة
const MAX_REQUESTS = 5; // 5 طلبات كحد أقصى لكل دقيقة

/**
 * يتحقق إذا الـ IP مسموح له يرسل طلب جديد
 * @param {string} ip - عنوان الـ IP
 * @returns {{ allowed: boolean, remaining: number, resetIn: number }}
 */
export function checkRateLimit(ip) {
  const now = Date.now();
  let data = store.get(ip);

  if (!data) {
    data = { count: 1, resetAt: now + WINDOW_MS };
    store.set(ip, data);
    return { allowed: true, remaining: MAX_REQUESTS - 1, resetIn: WINDOW_MS };
  }

  // انتهت النافذة الزمنية؟ نعيد من الصفر
  if (now > data.resetAt) {
    data = { count: 1, resetAt: now + WINDOW_MS };
    store.set(ip, data);
    return { allowed: true, remaining: MAX_REQUESTS - 1, resetIn: WINDOW_MS };
  }

  if (data.count >= MAX_REQUESTS) {
    return {
      allowed: false,
      remaining: 0,
      resetIn: Math.ceil((data.resetAt - now) / 1000),
    };
  }

  data.count += 1;
  return {
    allowed: true,
    remaining: MAX_REQUESTS - data.count,
    resetIn: Math.ceil((data.resetAt - now) / 1000),
  };
}
