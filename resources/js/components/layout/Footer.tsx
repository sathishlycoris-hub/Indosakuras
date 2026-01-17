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
  slug: string;
};

type PageProps = {
  footerServices?: NavItem[];
  footerSolutions?: NavItem[];
};

/* =======================
   Component
======================= */
const Footer = () => {
  const { props } = usePage<PageProps>();

  const services = props.footerServices ?? [];
  const solutions = props.footerSolutions ?? [];

  const company = [
    { name: "About Us", path: "/corporate/greetings" },
    { name: "Corporate Info", path: "/corporate-info" },
    { name: "Case Studies", path: "/casestudies" },
    { name: "Careers", path: "/recruitment" },
    { name: "Contact", path: "/contact" },
  ];

  const resources = [
    { name: "Blog", path: "/services/blogs-index" },
    // { name: "Documentation", path: "/services" },
    { name: "Support", path: "/contact" },
    { name: "Privacy Policy", path: "/corporate/policy" },
    { name: "Terms of Service", path: "/usage" },
  ];

  return (
    <footer className="bg-[#EFEFF4]">
      <div className="container mx-auto px-4 lg:px-8 py-12">

        {/* ================= TOP SECTION ================= */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-12">

          {/* Logo */}
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center mb-4">
              <img
                src="/image/indofooter.png"
                alt="Indo-Sakura logo"
                className="w-32 h-auto object-contain"
              />
            </Link>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16 flex-1">

            {/* ===== Solutions (Dynamic) ===== */}
            <div>
              <h4 className="font-semibold text-black mb-4">Solutions</h4>
              <ul className="space-y-2">
                {solutions.map((solution) => (
                  <li key={solution.slug}>
                    <Link
                      href={`/solutions/${solution.slug}`}
                      className="text-sm hover:text-primary transition-colors"
                    >
                      {solution.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ===== Services (Dynamic) ===== */}
            <div>
              <h4 className="font-semibold text-black mb-4">Services</h4>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-sm hover:text-primary transition-colors"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ===== Company ===== */}
            <div>
              <h4 className="font-semibold text-black mb-4">Company</h4>
              <ul className="space-y-2">
                {company.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className="text-sm hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ===== Resources ===== */}
            <div>
              <h4 className="font-semibold text-black mb-4">Resources</h4>
              <ul className="space-y-2">
                {resources.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className="text-sm hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* 20 Years Logo */}
          <div className="flex items-start">
            <Link href="/" className="flex items-center">
              <img
                src="/image/logo20.png"
                alt="20 years logo"
                className="w-20 h-20 object-contain"
              />
            </Link>
          </div>

        </div>

        {/* ================= BOTTOM SECTION ================= */}
        <div className="border-t border-gray-600 pt-6">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-4">

            {/* Left */}
            <div className="flex flex-col items-start gap-2 text-sm">
              <p className="text-black">
                © 2025 Indo-Sakura. All rights reserved.
              </p>

              <div className="flex items-center gap-4">
                <Link
                  href="/sitemap"
                  className="hover:text-primary text-black transition-colors"
                >
                  Sitemap
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
                Offices in Japan, India & USA
              </p>

            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
