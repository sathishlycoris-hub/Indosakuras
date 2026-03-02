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
      label_en: "Solutions",
      label_ja: "ソリューション",
      href: "/solutions",
    },
    {
      label_en: "Services",
      label_ja: "サービス",
      href: "/services",
    },
    {
      label_en: "Case Studies",
      label_ja: "導入事例",
      href: "/casestudies",
    },
    {
      label_en: "Corporate Info",
      label_ja: "企業情報",
      href: "/corporate-info",
    },
    {
      label_en: "Recruitment",
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

    if (href === "/casestudies") {
      return url === "/casestudies" || url.startsWith("/casestudies/");
    }

    if (href === "/recruitment") {
      return url === "/recruitment" || url.startsWith("/recruitment/");
    }

    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">

        {/* ================= TOP RIGHT BAR ================= */}
        <div className="hidden lg:flex justify-end items-center gap-3 pt-2 text-[16px] font-semibold">
          <Link href="/contact" className="hover:text-primary">
            {lang === "ja" ? "お問い合わせ" : "Contact us"}
          </Link>

          <span>/</span>

          <button
            onClick={() => changeLanguage("en")}
            className={lang === "en" ? "text-primary" : ""}
          >
            English
          </button>

          <span>/</span>

          <button
            onClick={() => changeLanguage("ja")}
            className={lang === "ja" ? "text-primary" : ""}
          >
            日本語
          </button>
        </div>

        <div className="hidden lg:flex justify-end">
          <div className="w-72 border-b border-border mb-1"></div>
        </div>

        {/* ================= LOGO + NAV ================= */}
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/image/logo.png"
              alt="logo"
              className="w-28 h-28 lg:w-36 lg:h-32 object-contain hover:scale-105 transition-transform pb-10"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-lg font-semibold transition-colors hover:text-primary ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-foreground"
                }`}
              >
                {lang === "ja" ? item.label_ja : item.label_en}
              </Link>
            ))}
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-8 h-6 flex flex-col justify-between">
              <span
                className={`block h-[3px] bg-foreground transition-transform ${
                  isMenuOpen ? "rotate-45 translate-y-3" : ""
                }`}
              />
              <span
                className={`block h-[3px] bg-foreground transition-opacity ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-[3px] bg-foreground transition-transform ${
                  isMenuOpen ? "-rotate-45 -translate-y-3" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* ================= MOBILE NAV ================= */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-3 text-base font-semibold ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {lang === "ja" ? item.label_ja : item.label_en}
              </Link>
            ))}

            <div className="flex items-center gap-2 py-3 border-t pt-4 text-muted-foreground">
              <Globe className="w-5 h-5" />
              <Link
                href="/contact"
                className="hover:text-primary"
              >
                {lang === "ja" ? "お問い合わせ" : "Contact us"}
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;