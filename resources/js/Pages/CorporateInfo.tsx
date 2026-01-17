import Layout from "@/components/layout/Layout";
import Subheader from "@/components/layout/Subheader";
import { ArrowRight, Building, Clock, Users, Newspaper, Handshake, FileText, MessageSquare, Lightbulb } from "lucide-react";
import ContactCTA from "@/components/layout/Contact";
import { Link } from "@inertiajs/react";
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
  const sections = [
    { icon: <MessageSquare className="w-6 h-6" />, title: "Greetings", path: "/corporate/greetings" },
    { icon: <Lightbulb className="w-6 h-6" />, title: "Corporate Philosophy", path: "/corporate/philosophy" },
    { icon: <Building className="w-6 h-6" />, title: "Corporate Profile", path: "/corporate/profile" },
    { icon: <Clock className="w-6 h-6" />, title: "History", path: "/corporate/history" },
    { icon: <Users className="w-6 h-6" />, title: "Management Team", path: "/corporate/team" },
    { icon: <Newspaper className="w-6 h-6" />, title: "Press Release", path: "/corporate/press-release" },
    { icon: <Handshake className="w-6 h-6" />, title: "Clients/Biz Partners", path: "/corporate/clients" },
    { icon: <FileText className="w-6 h-6" />, title: "Policy Statements", path: "/corporate/policy" },
  ];

  return (
    <Layout>
      <Subheader />

      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8" data-aos="fade-left">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Company Information</h1>
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
                  <div className="text-muted-foreground">{section.icon}</div>
                  <span className="font-semibold">{section.title}</span>
                </div>

                <div className="w-10 h-10 bg-primary flex items-center justify-center text-white rounded">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* Contact CTA */}
      <ContactCTA />
    </Layout>
  );
};

export default CorporateInfo;
