"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { TBlog } from "@/types/types";
import { getAllBlogs } from "@/services/GetAllService";
import CommonSection from "../shared/CommonSection";
import Heading from "../shared/Heading";
import { MagicCard } from "../magicui/magic-card";
import { motion, AnimatePresence } from "framer-motion";
import DOMPurify from "dompurify";

export default function BlogSection() {
  const [selectedBlog, setSelectedBlog] = useState<TBlog | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [blogs, setBlogs] = useState<TBlog[] | []>([]);

  const openBlogDetails = (blog: TBlog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Re-enable scrolling
    document.body.style.overflow = "auto";
    setTimeout(() => setSelectedBlog(null), 300);
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await getAllBlogs();
        setBlogs(res?.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  // Close modal on escape key
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isModalOpen) {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleEscKey);
    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  }, [isModalOpen]);

  const sanitizeHtml = (html: string) => {
    return DOMPurify.sanitize(html);
  };

  return (
    <CommonSection>
      <div className="text-center mb-5 md:mb-10 lg:mb-16">
        <Heading heading="Blogs" />
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs?.map((blog, index) => (
            <MagicCard
              key={index}
              className="h-full w-full rounded-lg"
              gradientOpacity={0}
            >
              <div
                key={blog?.id}
                className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
              >
                {/* Image Section */}
                <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] flex items-center justify-center bg-gray-50 dark:bg-gray-800">
                  <Image
                    src={blog?.blog_image || "/placeholder.svg"}
                    alt={blog.title || "Blog Image"}
                    fill
                    className="object-cover p-2 rounded-lg"
                  />
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {blog?.tags?.slice(0, 2)?.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block text-xs px-2 py-1 rounded-full font-medium"
                          style={{
                            background: "#f72585",
                            color: "white",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                      {blog?.tags && blog?.tags.length > 2 && (
                        <span
                          className="inline-block text-xs px-2 py-1 rounded-full"
                          style={{
                            background: "rgba(162, 89, 255, 0.2)",
                            border: "1px solid #a259ff",
                            color: "#a259ff",
                          }}
                        >
                          +{blog?.tags.length - 2}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-semibold mb-2 line-clamp-2">
                      {blog.title}
                    </h2>
                  </div>

                  {/* Footer */}
                  <div className="flex justify-between items-center mt-auto pt-4 border-t">
                    <div className="text-sm flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {new Date(blog.publishDate!).toLocaleDateString()}
                    </div>

                    <button
                      onClick={() => openBlogDetails(blog)}
                      style={{ color: "#f72585" }}
                      className="cursor-pointer font-medium text-sm flex items-center hover:opacity-80 transition-opacity"
                    >
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </MagicCard>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", damping: 20 }}
                className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl"
                style={{
                  background: "var(--background, #fff)",
                  boxShadow: "0 20px 50px rgba(247, 37, 133, 0.2)",
                  border: "1px solid rgba(247, 37, 133, 0.2)",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full transition-colors"
                  style={{
                    background: "rgba(247, 37, 133, 0.1)",
                    color: "#f72585",
                  }}
                  aria-label="Close modal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {selectedBlog && (
                  <div className="p-6 ">
                    {/* Title and Date */}
                    <div className="mb-6">
                      <h2
                        className="text-2xl md:text-3xl font-bold mb-3"
                        style={{
                          background:
                            "linear-gradient(to right, #f72585, #a259ff)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        {selectedBlog.title}
                      </h2>
                      <div className="flex items-center gap-2 text-sm opacity-70">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        {new Date(
                          selectedBlog.publishDate!
                        ).toLocaleDateString()}
                      </div>
                    </div>

                    {/* Image container with consistent aspect ratio */}
                    <div className="relative w-full aspect-[16/9] mb-6 bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden">
                      <Image
                        src={selectedBlog.blog_image || "/placeholder.svg"}
                        alt={selectedBlog.title}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                      />
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                      <p className="text-base leading-relaxed opacity-90">{selectedBlog.short_description}</p>
                      <div
                        className="text-sm  prose prose-sm prose-headings:font-medium prose-a:text-blue-600 max-w-none"
                        dangerouslySetInnerHTML={{
                          __html: sanitizeHtml(selectedBlog?.short_description)
                        }}
                      />
                    </div>

                    {/* Tags section */}
                    <div className="mb-6">
                      <div
                        className="flex items-center gap-2 mb-3 text-sm font-medium"
                        style={{ color: "#f72585" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                          />
                        </svg>
                        Tags:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {selectedBlog?.tags?.map((tag) => (
                          <span
                            key={tag}
                            className="inline-block text-xs md:text-sm px-3 py-1 rounded-full font-medium"
                            style={{
                              background: "#f72585",
                              color: "white",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Author section */}
                    <div className="flex items-center gap-4 pt-4 border-t">
                      {/* {selectedBlog?.author?.profile_image && (
                        <div className="relative h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
                          <Image
                            src={selectedBlog?.author?.profile_image || "/placeholder.svg"}
                            alt={selectedBlog?.author?.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )} */}
                      <div>
                        <div className="font-medium ">
                          {selectedBlog.author.name}
                        </div>
                        <div className="text-sm opacity-70">
                          Full-Stack Developer
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </CommonSection>
  );
}
