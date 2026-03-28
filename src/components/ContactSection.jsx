"use client"

import Link from "next/link";
import { HiArrowRight, HiEnvelope, HiPhone, HiMapPin } from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";

/**
 * ContactSection - سكشن الاتصال للصفحة الرئيسية
 * 
 * هذا الـ Component:
 * - يعرض معلومات الاتصال الأساسية
 * - يحتوي على زر للانتقال لصفحة الاتصال الكاملة
 * - يستخدم reveal animations
 */

const ContactSection = () => {
  return (
    <section id="contact" className="bg-primary/20 py-32">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side - Text & Info */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="h2 mb-6 animate-fade-in-up-delay-1">
              Let's <span className="text-accent">Connect</span>
            </h2>
            <p className="max-w-[500px] mx-auto lg:mx-0 mb-8 text-white/80 animate-fade-in-up-delay-2">
              Have a project in mind? I'd love to hear from you. Send me a message and I'll respond as soon as possible.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col gap-4 mb-8 animate-fade-in-up-delay-3">
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <HiEnvelope className="text-accent text-xl" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">WhatsApp</p>
                  <a 
                    href="mailto:hani@example.com" 
                    className="text-white hover:text-accent transition-colors"
                  >
                    +20 012 7712 1823
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <HiPhone className="text-accent text-xl" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Phone</p>
                  <a 
                    href="tel:+201234567890" 
                    className="text-white hover:text-accent transition-colors"
                  >
                    +20 012 7712 1823
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <HiMapPin className="text-accent text-xl" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Location</p>
                  <p className="text-white">Ismailia, Egypt</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - CTA Button */}
          <div className="flex-1 flex justify-center lg:justify-end animate-fade-in-up-delay-4">
            <Link
              href="/contact"
              className="group flex items-center gap-3 px-10 py-5 bg-accent/70 text-white font-semibold rounded-lg bg-accent/50 transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-accent/30 hover:scale-105 text-lg"
            >
              Get In Touch
              <HiArrowRight className="text-2xl group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

