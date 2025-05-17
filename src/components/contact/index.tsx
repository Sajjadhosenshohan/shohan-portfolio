"use client";

import type React from "react";

import { useState } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";
import CommonSection from "../shared/CommonSection";
import Image from "next/image";
import Heading from "../shared/Heading";
import { MagicCard } from "../magicui/magic-card";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(
    null
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      // Reset form after successful submission
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  return (
    <CommonSection>
      <div className="text-center mb-16">
        <Heading heading="GET IN TOUCH" />
        <Image
          src="/AllSvg/section.svg"
          alt="Background"
          fill
          className="object-cover absolute top-0 left-60 z-[-10]"
          priority
        />
      </div>

      <div className="relative">
        {/* Main Contact Card */}
        <MagicCard
          className="w-full rounded-3xl overflow-hidden p-[1px]"
          spotlight
          glare
          glareSize={100}
          gradientOpacity={0}
          glarePosition="all"
          glareBorderRadius="100%"
          glareColor="hsl(0 0% 100% / 0.3)"
          borderColor="hsl(var(--primary) / 0.2)"
          spotlightColor="hsl(var(--primary) / 0.1)"
          background="radial-gradient(circle at center, rgba(147, 51, 234, 0.1), rgba(0, 0, 0, 0))"
        >
          <div className="w-full  backdrop-blur-md border  p-8 rounded-3xl">
            <div className="grid md:grid-cols-2 gap-10">
              {/* Left Side - Contact Info & Social */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                    Let&apos;s Connect
                  </h2>
                  <p className="text-gray-300 mb-8">
                    Have a project in mind or just want to say hello? Feel free
                    to reach out!
                  </p>

                  {/* Contact Info */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 group">
                      <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all duration-300">
                        <FaEnvelope />
                      </div>
                      <div>
                        <p className="text-xs ">Email</p>
                        <p className="text-sm  group-hover:text-purple-300 transition-colors">
                          mdshohansajjad@gmail.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 group">
                      <div className="p-3 bg-gradient-to-br from-pink-500 to-red-500 rounded-xl  shadow-lg shadow-pink-500/20 group-hover:shadow-pink-500/40 transition-all duration-300">
                        <FaMapMarkerAlt />
                      </div>
                      <div>
                        <p className="text-xs ">Location</p>
                        <p className="text-sm group-hover:text-pink-300 transition-colors">
                          Rangpur, Bangladesh
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 group">
                      <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl  shadow-lg shadow-green-500/20 group-hover:shadow-green-500/40 transition-all duration-300">
                        <FaCalendarAlt />
                      </div>
                      <div>
                        <p className="text-xs ">Availability</p>
                        <p className="text-sm  group-hover:text-green-300 transition-colors">
                          Open to opportunities
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="text-xl font-semibold  mb-4">
                    Connect with me
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="#"
                      className="p-3 bg-[#EA4335]/20 hover:bg-[#EA4335]/30 text-[#EA4335] rounded-xl transition-all duration-300 hover:scale-110"
                      aria-label="Email"
                    >
                      <FaEnvelope />
                    </a>
                    <a
                      href="#"
                      className="p-3 bg-[#333]/20 hover:bg-[#333]/30  rounded-xl transition-all duration-300 hover:scale-110"
                      aria-label="GitHub"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href="#"
                      className="p-3 bg-[#0A66C2]/20 hover:bg-[#0A66C2]/30 text-[#0A66C2] rounded-xl transition-all duration-300 hover:scale-110"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href="#"
                      className="p-3 bg-[#1DA1F2]/20 hover:bg-[#1DA1F2]/30 text-[#1DA1F2] rounded-xl transition-all duration-300 hover:scale-110"
                      aria-label="Twitter"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href="#"
                      className="p-3 bg-[#C13584]/20 hover:bg-[#C13584]/30 text-[#C13584] rounded-xl transition-all duration-300 hover:scale-110"
                      aria-label="Instagram"
                    >
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div className="relative">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl"></div>

                <div className="relative  backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                  <h2 className="text-2xl font-bold  mb-6 flex items-center gap-2">
                    <FaPaperPlane className="text-purple-400" /> Send a Message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-1">
                      <label htmlFor="name" className="text-sm ">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="w-full  border border-white/10 rounded-lg py-3 px-4  placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition"
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="email" className="text-sm ">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="w-full  border border-white/10 rounded-lg py-3 px-4  placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition"
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="message" className="text-sm ">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write your message here..."
                        required
                        rows={4}
                        className="w-full  border border-white/10 rounded-lg py-3 px-4  placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition"
                      ></textarea>
                    </div>

                    <button
                      // data-aos="fade-up"
                      // data-aos-duration="1000"
                      // className="bg-[var(--accent)] cursor-pointer text-white rounded-full hover:scale-105 duration-300 px-5 py-2 font-bold"
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-3 px-6 bg-[var(--accent)] rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
                        isSubmitting
                          ? "cursor-not-allowed"
                          : " hover:shadow-lg hover:shadow-purple-500/20"
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 "
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <FaPaperPlane />
                        </>
                      )}
                    </button>

                    {submitStatus === "success" && (
                      <div className="bg-green-500/20 border border-green-500/30 text-green-300 p-3 rounded-lg text-center">
                        Message sent successfully!
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="bg-red-500/20 border border-red-500/30 text-red-300 p-3 rounded-lg text-center">
                        Failed to send message. Please try again.
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </MagicCard>
      </div>
    </CommonSection>
  );
};

export default ContactSection;
