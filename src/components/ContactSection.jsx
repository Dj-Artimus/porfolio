"use client";

import { sendContactMessage } from "@/utils/contactMessageSender";
import { useEffect, useState, useRef, useTransition } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Toast from "./Toast";

const ContactSection = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [toast, setToast] = useState({
    isVisible: false,
    message: "",
    type: "",
  });
  const textareaRef = useRef(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const adjustTextareaHeight = () => {
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto"; // Reset height to recalculate
        const scrollHeight = textareaRef.current.scrollHeight;
        textareaRef.current.style.height =
          scrollHeight > 336 ? "336px" : `${scrollHeight}px`; // Limit height to 336px
        textareaRef.current.style.overflowY =
          scrollHeight > 336 ? "scroll" : "hidden"; // Add scroll if content exceeds max height
      }
    };

    adjustTextareaHeight(); // Adjust height on initial render and when `message` changes
  }, [message]);

  const handleSubmit = (e) => {
    e.preventDefault();
    startTransition(() => {
      sendContactMessage( email, message.trim() ).then((result) => {
        if (result.success) {
          setToast({ message: "Message sent successfully!", type: "success", isVisible: true });
          setEmail("");
          setMessage("");
        } else {
          setToast({ message: "Failed to send the message. Please try again.", type: "error", isVisible: true });
        }
      });
    });
  };

  const handleCloseToast = () => {
    setToast((prev) => ({ ...prev, isVisible: false }));
  };

  return (
    <section id="contact" className="py-16 bg-white dark:bg-black">
      <div className="container mx-auto px-8 text-center">
        <h2 className="text-4xl font-bold text-primary mb-6">Contact Me</h2>
        <p className="mb-8 text-lg">
          Interested in collaborating, want to discuss an idea, or want to hire
          me? Feel free to reach out to me!
        </p>
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto flex flex-col gap-4"
        >
          <input
            type="email"
            placeholder="Email to reply you back"
            className="w-full px-6 py-3 rounded-xl bg-white dark:bg-black border border-gray-700 dark:border-gray-300"
            value={email}
            onChange={(e) => setEmail(e.target.value.trim())}
            required
            spellCheck={false}
          />
          <textarea
            ref={textareaRef}
            placeholder="Name, Your Message..."
            className="w-full px-6 py-3 rounded-xl bg-white dark:bg-black border border-gray-700 dark:border-gray-300 resize-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            spellCheck={false}
          />
          <button
            className="w-full px-6 py-3 rounded-xl bg-white dark:bg-black border border-gray-700 dark:border-gray-300 resize-none flex justify-center"
            type="submit"
            disabled={isPending}
          >
            {isPending ? (
              <span className="flex gap-2 items-center">
                SENDING <AiOutlineLoading3Quarters className="animate-spin" />
              </span>
            ) : (
              <span>SEND</span>
            )}
          </button>
        </form>
      </div>
      {toast.isVisible && (
        <Toast
          message={toast.message}
          type={toast.type}
          isVisible={toast.isVisible}
          onClose={handleCloseToast}
        />
      )}
    </section>
  );
};

export default ContactSection;
