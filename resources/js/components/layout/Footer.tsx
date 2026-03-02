import React from "react";
import { Link, usePage } from "@inertiajs/react";
import {
  Facebook,
  Linkedin,
  Youtube,
  Instagram,
} from "lucide-react";

/* =======================
   Types
======================= */
type NavItem = {
  title: string;
  title_ja?: string;
  slug: string;
};

type PageProps = {
  footerServices?: NavItem[];
  footerSolutions?: NavItem[];
  lang: "en" | "ja";
};

/* =======================
   Component
======================= */
const Footer = () => {
  const { props } = usePage<PageProps>();

  const { lang } = props;
  const services = props.footerServices ?? [];
  const solutions = props.footerSolutions ?? [];
  const getValue = (en?: string | null, ja?: string | null): string => {
    return (lang === "ja" ? ja || en : en) || "";
  };
  const company = [
    {
      name: getValue("About Us", "会社概要"),
      path: "/corporate/greetings",
    },
    {
      name: getValue("Corporate Info", "企業情報"),
      path: "/corporate-info",
    },
    {
      name: getValue("Case Studies", "導入事例"),
      path: "/casestudies",
    },
    {
      name: getValue("Careers", "採用情報"),
      path: "/recruitment",
    },
    {
      name: getValue("Contact", "お問い合わせ"),
      path: "/contact",
    },
  ];

  const resources = [
    {
      name: getValue("Blog", "ブログ"),
      path: "/services/blogs-index",
    },
    {
      name: getValue("Support", "サポート"),
      path: "/contact",
    },
    {
      name: getValue("Privacy Policy", "プライバシーポリシー"),
      path: "/corporate/policy",
    },
    {
      name: getValue("Terms of Service", "利用規約"),
      path: "/usage",
    },
  ];

  return (
    <footer className="bg-[#EFEFF4]">
      <div className="container py-8 md:py-12">

        {/* ================= TOP SECTION ================= */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-1 mb-8 md:mb-12">

          {/* LEFT: ALL CONTENT */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-3">

              {/* Company */}
              <div>
                <h4 className="font-semibold text-black text-sm sm:text-base mb-3 sm:mb-4">
                  {getValue("Company", "会社情報")}
                </h4>
                <ul className="space-y-1.5 sm:space-y-2">
                  {company.map((item) => (
                    <li key={item.path}>
                      <Link
                        href={item.path}
                        className="text-xs sm:text-sm text-gray-700 hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="font-semibold text-black text-sm sm:text-base mb-3 sm:mb-4">
                  {getValue("Resources", "リソース")}
                </h4>
                <ul className="space-y-1.5 sm:space-y-2">
                  {resources.map((item) => (
                    <li key={item.path}>
                      <Link
                        href={item.path}
                        className="text-xs sm:text-sm text-gray-700 hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions */}
              <div>
                <h2 className="font-semibold text-black text-sm sm:text-base mb-3 sm:mb-4">
                  {getValue("Solutions", "ソリューション")}
                </h2>
                <ul className="space-y-1.5 sm:space-y-2">
                  {solutions.map((solution) => (
                    <li key={solution.slug}>
                      <Link
                        href={`/solutions/${solution.slug}`}
                        className="text-xs sm:text-sm text-gray-700 hover:text-primary transition-colors"
                      >
                        {getValue(solution.title, solution.title_ja)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h2 className="font-semibold text-black text-sm sm:text-base mb-3 sm:mb-4">
                  {getValue("Services", "サービス")}
                </h2>
                <ul className="space-y-1.5 sm:space-y-2">
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="text-xs sm:text-sm text-gray-700 hover:text-primary transition-colors"
                      >
                        {getValue(service.title, service.title_ja)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>



            </div>
          </div>

          {/* RIGHT: LOGOS */}
          <div>

            {/* Indo-Sakura Logo */}
            {/* <Link href="/">
          <img
            src="/image/indofooter.png"
            alt="Indo-Sakura logo"
            className="w-28 sm:w-32 lg:w-36 object-contain"
          />
        </Link> */}

            {/* 20 Years Logo */}
            <img
              src="/image/logo20.png"
              alt="20 years of excellence"
              className="w-16 sm:w-20 object-contain"
            />
          </div>
        </div>

        {/* ================= BOTTOM SECTION ================= */}
        <div className="border-t border-gray-600 pt-6">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-4">

            {/* Left */}
            <div className="flex flex-col items-start gap-2 text-sm">
              <p className="text-black">
                {getValue(
                  "© 2026 Indo-Sakura. All rights reserved.",
                  "© 2026 インドサクラ株式会社。無断転載を禁じます。"
                )}
              </p>

              <div className="flex items-center gap-4">
                <Link
                  href="/sitemap"
                  className="hover:text-primary text-black transition-colors"
                >
                  {getValue("Sitemap", "サイトマップ")}
                </Link>
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col items-end gap-3">

              {/* Social Icons */}
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/indosakurasoftwarejapan"
                  className="bg-white rounded-full p-1"
                >
                  <Facebook className="w-5 h-5" />
                </a>

                <a
                  href="https://x.com/IndoSakuraJapan/status/1658354411025104896"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-full p-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-black"
                  >
                    <path d="M18.244 2H21.5l-7.49 8.56L22.5 22h-6.8l-5.35-7.01L4.5 22H1.24l8.04-9.19L1.5 2h6.97l4.84 6.29L18.244 2z" />
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/company/indo-sakura-software-japan/posts/?feedView=all"
                  className="bg-white rounded-full p-1"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href="https://www.youtube.com/@IndoSakura"
                  className="bg-white rounded-full p-1"
                >
                  <Youtube className="w-5 h-5" />
                </a>

                <a
                  href="https://www.instagram.com/indosakurasoftware/"
                  className="bg-white rounded-full p-1"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>

              {/* Locations */}
              <p className="text-sm text-gray-800 text-right">
                {getValue(
                  "Offices in Japan, India & USA",
                  "日本・インド・アメリカに拠点"
                )}
              </p>

            </div>
          </div>
        </div>

      </div>
    </footer>


  );
};

export default Footer;
