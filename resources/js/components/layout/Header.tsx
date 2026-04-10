import { Link, usePage, router } from "@inertiajs/react";
import { Globe } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const { url, props } = usePage<{ lang: "en" | "ja" }>();
  const lang = props.lang;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /* ================= NAVIGATION ITEMS ================= */

  const navItems = [
    {
      label_en: "Products",
      label_ja: "ソリューション",
      href: "/solutions",
    },
    {
      label_en: "Services",
      label_ja: "サービス",
      href: "/services",
    },
    {
      label_en: "Insights",
      label_ja: "導入事例",
      href: "/blogs",
    },
    {
      label_en: "Corporate Info",
      label_ja: "企業情報",
      href: "/corporate-info",
    },
    {
      label_en: "Careers",
      label_ja: "採用情報",
      href: "/recruitment",
    },
  ];

  /* ================= LANGUAGE SWITCH ================= */

  const changeLanguage = (language: "en" | "ja") => {
    router.post(
      route("set.language"),
      { lang: language },
      {
        preserveScroll: true,
        preserveState: false,
      }
    );
  };

  /* ================= ACTIVE LINK LOGIC ================= */

  const isActive = (href: string) => {
    if (href === "/") return url === "/";

    if (href === "/corporate-info") {
      return url === "/corporate-info" || url.startsWith("/corporate");
    }

    if (href === "/solutions") {
      return url === "/solutions" || url.startsWith("/solutions/");
    }

    if (href === "/services") {
      return url === "/services" || url.startsWith("/services/");
    }

    // if (href === "/casestudies") {
    //   return url === "/casestudies" || url.startsWith("/casestudies/");
    // }

    if (href === "/recruitment") {
      return url === "/recruitment" || url.startsWith("/recruitment/");
    }

    if (href === "/blogs") {
      return url === "/blogs-" || url.startsWith("/blogs/");
    }

    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border w-full">
  <div className="container mx-auto px-4 lg:px-8">
    
    {/* ================= DESKTOP TOP BAR ================= */}
    {/* Hidden on mobile, shows on LG screens */}
    <div className="hidden lg:flex flex-col items-end pt-2">
      <div className="flex items-center gap-3 text-[15px] font-semibold">
        <Link href="/contact" className="hover:text-primary transition-colors">
          {lang === "ja" ? "お問い合わせ" : "Contact us"}
        </Link>
        <span className="text-border">/</span>
        <button
          onClick={() => changeLanguage("en")}
          className={`${lang === "en" ? "text-primary" : "hover:text-primary"} transition-colors`}
        >
          English
        </button>
        <span className="text-border">/</span>
        <button
          onClick={() => changeLanguage("ja")}
          className={`${lang === "ja" ? "text-primary" : "hover:text-primary"} transition-colors`}
        >
          日本語
        </button>
      </div>
      {/* Decorative Underline */}
      <div className="w-72 border-b border-border mt-1"></div>
    </div>

    {/* ================= MAIN NAV BAR (Logo + Links) ================= */}
    <div className="flex items-center justify-between h-16 lg:h-24">
      
      {/* LOGO */}
      <Link href="/" className="flex items-center">
        <img
          src="/image/logo.png"
          alt="logo"
          // Reduced padding-bottom to keep it centered  in the header
          className="w-24 h-20 lg:w-32 object-contain hover:scale-105 transition-transform"
        />
      </Link>

      {/* DESKTOP MAIN NAV */}
      <nav className="hidden lg:flex items-center gap-8">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-[16px] font-semibold transition-colors hover:text-primary ${
              isActive(item.href) ? "text-primary" : "text-foreground"
            }`}
          >
            {lang === "ja" ? item.label_ja : item.label_en}
          </Link>
        ))}
      </nav>

      {/* MOBILE MENU BUTTON */}
      <button
        className="lg:hidden p-2 focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span className={`block h-[2px] w-full bg-foreground transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-[2px] w-full bg-foreground transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-[2px] w-full bg-foreground transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </div>
      </button>
    </div>

    {/* ================= MOBILE NAV OVERLAY ================= */}
    {isMenuOpen && (
      <nav className="lg:hidden py-6 border-t border-border animate-in fade-in slide-in-from-top-4">
        <div className="flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-lg font-semibold ${isActive(item.href) ? "text-primary" : "text-foreground"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {lang === "ja" ? item.label_ja : item.label_en}
            </Link>
          ))}
          
          <hr className="border-border my-2" />
          
          {/* Mobile Language & Contact Support */}
          <div className="space-y-4">
            <Link href="/contact" className="flex items-center gap-2 font-semibold" onClick={() => setIsMenuOpen(false)}>
              <Globe className="w-5 h-5 text-primary" />
              {lang === "ja" ? "お問い合わせ" : "Contact us"}
            </Link>
            
            <div className="flex gap-4 text-sm font-bold">
               <button onClick={() => { changeLanguage("en"); setIsMenuOpen(false); }} className={lang === "en" ? "text-primary" : ""}>English</button>
               <span className="text-border">|</span>
               <button onClick={() => { changeLanguage("ja"); setIsMenuOpen(false); }} className={lang === "ja" ? "text-primary" : ""}>日本語</button>
            </div>
          </div>
        </div>
      </nav>
    )}
  </div>
</header>
  );
};

export default Header;