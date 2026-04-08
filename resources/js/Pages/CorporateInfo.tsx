import Layout from "@/components/layout/Layout";
import Subheader from "@/components/layout/Subheader";
import {
  ArrowRight,
  Building,
  Clock,
  Users,
  Newspaper,
  Handshake,
  FileText,
  MessageSquare,
  Lightbulb,
} from "lucide-react";
import ContactCTA from "@/components/layout/Contact";
import { Link, usePage } from "@inertiajs/react";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
  easing: "ease-in-out",
  once: true,
  offset: 120,
  delay: 80,
});

const CorporateInfo = () => {
  const { lang } = usePage<{ lang: "en" | "ja" }>().props;

  type CorporateItem = {
    id: number;
    title?: string;
    title_ja?: string;
    path?: string;
    image?: string | null;
  };

  const { props } = usePage<{ items: CorporateItem[] }>();

  const sections = props.items || [];

  // const sections = [
  //   {
  //     icon: <MessageSquare className="w-6 h-6" />,
  //     title: lang === "en" ? "Greetings" : "ご挨拶",
  //     path: "/corporate/greetings",
  //   },
  //   {
  //     icon: <Lightbulb className="w-6 h-6" />,
  //     title: lang === "en" ? "Corporate Philosophy" : "企業理念",
  //     path: "/corporate/philosophy",
  //   },
  //   {
  //     icon: <Building className="w-6 h-6" />,
  //     title: lang === "en" ? "Corporate Profile" : "会社概要",
  //     path: "/corporate/profile",
  //   },
  //   {
  //     icon: <Clock className="w-6 h-6" />,
  //     title: lang === "en" ? "History" : "沿革",
  //     path: "/corporate/history",
  //   },
  //   {
  //     icon: <Users className="w-6 h-6" />,
  //     title: lang === "en" ? "Management Team" : "経営陣",
  //     path: "/corporate/team",
  //   },
  //   {
  //     icon: <Newspaper className="w-6 h-6" />,
  //     title: lang === "en" ? "Press Release" : "プレスリリース",
  //     path: "/corporate/press-release",
  //   },
  //   {
  //     icon: <Handshake className="w-6 h-6" />,
  //     title: lang === "en" ? "Clients / Business Partners" : "主要取引先",
  //     path: "/corporate/clients",
  //   },
  //   {
  //     icon: <FileText className="w-6 h-6" />,
  //     title: lang === "en" ? "Policy Statements" : "各種方針",
  //     path: "/corporate/policy",
  //   },
  // ];

  return (
    <Layout>
       <div className="sticky top-[102px] z-40 bg-white">
        <Subheader />
      </div>

      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            {lang === "en" ? "Company Information" : "企業情報"}
          </h1>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-16 bg-section-light">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
        {sections.map((section) => {
  const hasImage = !!section.image;

  return hasImage ? (
    // With Image Card
    <Link
      key={section.id}
      href={section.path || "#"}
      className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all flex flex-col"
    >
      <div className="relative w-full h-56 overflow-hidden">
        <img
          src={`/storage/${section.image}`}
          alt={section.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="flex items-center justify-between bg-white border-t min-h-[78px]">
        <div className="flex items-center gap-3 px-5 py-5">
          <Building className="w-5 h-5 text-gray-400" />
          <span className="font-medium text-[17px] text-primary font-semibold">
            {lang === "ja" ? section.title_ja ?? section.title : section.title ?? section.title_ja}
          </span>
        </div>
        <div className="bg-pink-600 w-[78px] h-full flex items-center justify-center group-hover:bg-pink-700 transition">
          <ArrowRight className="w-6 h-6 text-white" />
        </div>
      </div>
    </Link>
  ) : (
    // NO IMAGE - Compact Card (Final Version)
    <Link
      key={section.id}
      href={section.path || "#"}
      className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all flex items-center h-[82px]"
    >
      <div className="flex-1 flex items-center gap-4 px-6">
        <div className="text-gray-400">
          <Building className="w-5 h-5" />
        </div>
        <span className="font-medium text-[17px] text-primary font-semibold">
          {lang === "ja" ? section.title_ja ?? section.title : section.title ?? section.title_ja}
        </span>
      </div>

      <div className="bg-pink-600 w-[78px] h-full flex items-center justify-center group-hover:bg-pink-700 transition">
        <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition" />
      </div>
    </Link>
  );
})}
          </div>
        </div>
      </section>

      <ContactCTA />
    </Layout>
  );
};

export default CorporateInfo; 