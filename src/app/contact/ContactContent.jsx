"use client"
//module css
import modules from './page.module.css'

// react icon
import { BsArrowRight } from "react-icons/bs";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "/variants";

// toastify
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { useState } from 'react';


const ContactContent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    } else if (formData.name.length === 1) {
      errors.name = "Name must be more than 1 character";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const sendEmail = async () => {
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData }),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        toast.success("Email Was Successfully Sent!");
      } else {
        toast.error("Something went wrong, Failed to sent email!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        await sendEmail();
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } catch (error) {
        console.error(error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };
    return (
        <>
            {/* text */}
          <motion.h2
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 mb-12"
          >
            {"let's"} <span className="text-accent">connect.</span>
          </motion.h2>
          
          {/* form */}
          {submitSuccess ? (
          <div className={modules.successMessage}>"Email Was Successfully Sent!"</div>
            ) : (
          <motion.form
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            id="contact-form"
            onSubmit={handleSubmit}
            noValidate
            className="flex-1 flex flex-col gap-6 w-full"
          >
            {/* inputs */}
            <div className="flex flex-col w-full gap-6 md:flex-row">
              <input
                type="text" 
                placeholder="name" 
                className="input" 
                id="name"
                autoComplete="off"
                name="name" 
                value={formData.name}
                onChange={handleInputChange} />
                {formErrors.name && (
                  <span className={modules.errorMessage}>{formErrors.name}</span>
                )}
              <input 
                type="text" 
                placeholder="email" 
                className="input" 
                id="email"
                name="email"
                autoComplete="off"
                value={formData.email}
                onChange={handleInputChange}
                  />
                {formErrors.email && (
                  <span className={modules.errorMessage}>{formErrors.email}</span>
                )}
            </div>
            <input 
              type="text" 
              placeholder="subject" 
              className="input"
              id="subject"
              name="subject"
              autoComplete="off"
              value={formData.subject}
              onChange={handleInputChange}
              />
              {formErrors.subject && (
                <span className={modules.errorMessage}>{formErrors.subject}</span>
              )}
            <textarea 
              placeholder="message" 
              className="textarea" 
              id="message"
              name="message"
              autoComplete="off"
              value={formData.message}
              onChange={handleInputChange}
              />
              {formErrors.message && (
                <span className={modules.errorMessage}>{formErrors.message}</span>
              )}
            <button className="btn rounded-full border border-white/50 flex items-center justify-center max-w-[170px] hover:border-accent transition-all duration-300 group" type="submit" id="submit" disabled={isSubmitting}>
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                {isSubmitting ? "submitting..." : "let's talk"}
              </span>
              <BsArrowRight className="opacity-0 group-hover:opacity-100 -translate-y-[120%] group-hover:-translate-y-0 transition-all duration-300 group-hover:flex absolute text-[22px]" />
            </button>
          </motion.form>
          )}
          <div>
            <ToastContainer></ToastContainer>
          </div>
        </>       
    )
}

export default ContactContent