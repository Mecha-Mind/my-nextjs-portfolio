/**
 * التحقق من بيانات فورم الاتصال (Backend Validation)
 *
 */

const LIMITS = {
  name: { min: 2, max: 100 },
  email: { max: 254 },
  subject: { min: 1, max: 200 },
  message: { min: 1, max: 5000 },
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * يحوّل النص لـ safe string (يتجنب أحرف قد تسبب مشاكل)
 */
function sanitize(str) {
  if (typeof str !== "string") return "";
  return str.trim().slice(0, LIMITS.message.max);
}

/**
 * يتحقق من صحة بيانات الفورم
 * @returns {{ valid: boolean, errors: Record<string, string> }}
 */
export function validateContactForm(body) {
  const errors = {};

  // الاسم
  const name = sanitize(body?.name || "");
  if (!name) {
    errors.name = "Name is required";
  } else if (name.length < LIMITS.name.min) {
    errors.name = `Name must be at least ${LIMITS.name.min} characters`;
  } else if (name.length > LIMITS.name.max) {
    errors.name = `Name must be at most ${LIMITS.name.max} characters`;
  }

  // الإيميل
  const email = sanitize(body?.email || "").toLowerCase();
  if (!email) {
    errors.email = "Email is required";
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = "Invalid email format";
  } else if (email.length > LIMITS.email.max) {
    errors.email = "Email is too long";
  }

  // الموضوع
  const subject = sanitize(body?.subject || "");
  if (!subject) {
    errors.subject = "Subject is required";
  } else if (subject.length > LIMITS.subject.max) {
    errors.subject = `Subject must be at most ${LIMITS.subject.max} characters`;
  }

  // الرسالة
  const message = sanitize(body?.message || "");
  if (!message) {
    errors.message = "Message is required";
  } else if (message.length > LIMITS.message.max) {
    errors.message = `Message must be at most ${LIMITS.message.max} characters`;
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
    data: { name, email, subject, message },
  };
}
