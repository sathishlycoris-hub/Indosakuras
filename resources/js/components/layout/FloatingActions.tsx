import { Phone, Mail, MessageCircle, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const FloatingActions = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const phoneNumber = "+81 90-4407-8453";
  const email = "info@indosakura.com";
  const whatsappNumber = "919629129539";
const message = encodeURIComponent("Hello!");

  return (  
 <>
  {/* Right Side Floating Icons */}
  <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
    {/* Phone */}
    <a
      href={`tel:${phoneNumber}`}
      className="w-14 h-14 bg-primary hover:bg-[#f78da7] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg group border-white border"
      aria-label="Call us"
    >
      <Phone className="w-7 h-7 text-white group-hover:text-white transition-colors duration-300" />
    </a>

    {/* Email */}
    <a
      href={`mailto:${email}`}
      className="w-14 h-14 bg-primary hover:bg-[#f78da7] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg group border-white border"
      aria-label="Email us"
    >
      <Mail className="w-7 h-7 text-white group-hover:text-white transition-colors duration-300" />
    </a>

    {/* WhatsApp (Right Side) - Keeps original green */}
    <a
      href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="w-14 h-14 bg-primary hover:bg-[#f78da7] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg group border-white border"
      aria-label="WhatsApp us"
    >
      <MessageCircle className="w-7 h-7 text-white transition-colors duration-300" />
    </a>
  </div>

  {/* Bottom Left WhatsApp Icon */}
  {/* <a
    href={`https://wa.me/${whatsappNumber}`}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 left-6 z-50 w-16 h-16 bg-[#25d366] hover:bg-[#128C7E] rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="w-9 h-9 text-white" />
  </a> */}

  {/* Scroll to Top Button */}
  <button
    onClick={scrollToTop}
    className={`fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#d83377] hover:bg-[#ffd700] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
      showScrollTop
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-4 pointer-events-none"
    }`}
    aria-label="Scroll to top"
  >
    <ArrowUp className="w-7 h-7 text-white group-hover:text-[#d83377] transition-colors duration-300" />
  </button>
</>
  );
};

export default FloatingActions;
