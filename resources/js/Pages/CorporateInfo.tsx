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

  const sections = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: lang === "en" ? "Greetings" : "ご挨拶",
      path: "/corporate/greetings",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: lang === "en" ? "Corporate Philosophy" : "企業理念",
      path: "/corporate/philosophy",
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: lang === "en" ? "Corporate Profile" : "会社概要",
      path: "/corporate/profile",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: lang === "en" ? "History" : "沿革",
      path: "/corporate/history",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: lang === "en" ? "Management Team" : "経営陣",
      path: "/corporate/team",
    },
    {
      icon: <Newspaper className="w-6 h-6" />,
      title: lang === "en" ? "Press Release" : "プレスリリース",
      path: "/corporate/press-release",
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      title: lang === "en" ? "Clients / Business Partners" : "主要取引先",
      path: "/corporate/clients",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: lang === "en" ? "Policy Statements" : "各種方針",
      path: "/corporate/policy",
    },
  ];

  return (
    <Layout>
      <Subheader />

      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8" data-aos="fade-right">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            {lang === "en" ? "Company Information" : "企業情報"}
          </h1>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-16 bg-section-light">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-4">
            {sections.map((section, index) => (
              <Link
                data-aos="fade-up"
                data-aos-delay={index * 80}
                key={index}
                href={section.path}
                className="flex items-center justify-between p-6 bg-card border border-border rounded-lg hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="text-muted-foreground">
                    {section.icon}
                  </div>
                  <span className="font-semibold">
                    {section.title}
                  </span>
                </div>

                <div className="w-10 h-10 bg-primary flex items-center justify-center text-white rounded">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </Layout>
  );
};

export default CorporateInfo;