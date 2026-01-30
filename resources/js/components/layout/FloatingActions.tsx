import { Phone, Mail, MessageCircle, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const FloatingActions = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const phoneNumber = "+819044078453";
  const email = "info@indosakura.com";
  const whatsappNumber = "919629129539";
  const message = encodeURIComponent("Hello!");

  return (
    <>
      {/* Right floating actions – hidden on small screens */}
      <div
        className="
          fixed
          right-4
          top-1/2
          -translate-y-1/2
          z-50
          hidden
          lg:flex
          flex-col
          gap-3
        "
      >
        {[
          {
            href: `tel:${phoneNumber}`,
            label: "Call us",
            Icon: Phone,
          },
          {
            href: `mailto:${email}`,
            label: "Email us",
            Icon: Mail,
          },
          {
            href: `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`,
            label: "WhatsApp us",
            Icon: MessageCircle,
            external: true,
          },
        ].map(({ href, label, Icon, external }) => (
          <a
            key={label}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            aria-label={label}
            className="
              group
              flex
              h-12
              w-12
              xl:h-14
              xl:w-14
              items-center
              justify-center
              rounded-full
              bg-primary
              text-primary-foreground
              shadow-lg
              transition
              hover:scale-110
              hover:bg-accent
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-ring
            "
          >
            <Icon className="h-6 w-6 xl:h-7 xl:w-7" />
          </a>
        ))}
      </div>

      {/* Scroll to top – mobile + desktop */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`
          fixed
          bottom-4
          right-4
          z-50
          flex
          h-12
          w-12
          xl:h-14
          xl:w-14
          items-center
          justify-center
          rounded-full
          bg-primary
          text-primary-foreground
          shadow-lg
          transition
          hover:scale-110
          hover:bg-accent
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-ring
          ${
            showScrollTop
              ? "opacity-100 translate-y-0"
              : "pointer-events-none opacity-0 translate-y-3"
          }
        `}
      >
        <ArrowUp className="h-6 w-6 xl:h-7 xl:w-7" />
      </button>
    </>
  );
};

export default FloatingActions;
