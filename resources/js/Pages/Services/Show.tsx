import Layout from "@/components/layout/Layout";
import Serviceshead from "@/components/layout/Serviceshead";
import ContactCTA from "@/components/layout/Contact";
// import { CheckCircle, TrendingUp, Award, Users, Clock } from "lucide-react";
import { useLanguage } from "@/Contexts/LanguageContext";
import {
  CheckCircle,
  TrendingUp,
  Award,
  Users,
  Clock,
  Zap,
  ShieldCheck,
  BarChart3,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";



/* ================= TYPES ================= */

interface Highlight {
  id: number;
  title: string;
  value?: string;
  description?: string;
}

interface Benefit {
  id: number;
  title: string;
  description?: string;
}

interface Industry {
  id: number;
  title: string;
  description?: string;
}

interface Service {
  title: string;
  subtitle?: string;
  hero_description?: string;
  hero_image?: string | null;
  how_it_works?: string;
  highlights: Highlight[];
  benefits: Benefit[];
  industries: Industry[];
}

interface Props {
  service: Service;
}
const BENEFIT_ICONS = [
  CheckCircle,
  TrendingUp,
  Award,
  Users,
  Clock,
  Zap,
  ShieldCheck,
  BarChart3,
];
const getBenefitIcon = (index: number) => {
  return BENEFIT_ICONS[index % BENEFIT_ICONS.length];
};

AOS.init({
  duration: 1000,
  easing: "ease-in-out",
  once: true,
  offset: 120,
  delay: 80,
});
/* ================= COMPONENT ================= */

export default function Show({ service }: Props) {
  const { language } = useLanguage();

  return (
    <Layout>
      <Serviceshead />

      {/* ================= HERO ================= */}
      <section className="hero-gradient text-primary-foreground py-20">
        <div className="container mx-auto px-6 text-white max-w-6xl" data-aos="fade-left">
          {service.hero_description && (
            <div
              className="prose prose-invert max-w-2xl mb-4 "
              dangerouslySetInnerHTML={{
                __html: service.hero_description,
              }}
            />
          )}


          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {service.title}
          </h1>

          {service.subtitle && (
            <p className="text-lg opacity-90 mb-2 max-w-2xl">{service.subtitle}</p>
          )}
        </div>
      </section>

      {/* ================= HIGHLIGHTS ================= */}
      {service.highlights?.length > 0 && (
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-6 max-w-7xl" data-aos="fade-up">

            {/* Title */}
            <h2 className="text-4xl md:text-4xl font-bold text-center text-primary mb-16 tracking-tight">
              Why {service.title}
            </h2>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              {service.highlights.map((h, index) => (
                <div data-aos="fade-up"
                  data-aos-delay={index * 80}
                  key={h.id}
                  className="group relative bg-card/80 backdrop-blur-sm
                       border border-border/50 rounded-2xl p-10
                       shadow-lg hover:shadow-2xl
                       transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Big Value */}
                  {h.value && (
                    <div data-aos="fade-up"
                      data-aos-delay={index * 80} className="text-6xl font-bold text-primary mb-6
                              group-hover:scale-110 transition-transform">
                      {h.value}
                    </div>
                  )}

                  {/* Title */}
                  <h3 data-aos="fade-up"
                  data-aos-delay={index * 80} className="text-xl md:text-2xl font-semibold text-primary mb-6">
                    {h.title}
                  </h3>

                  {/* Description */}
                  {h.description && (
                    <div data-aos="fade-up"
                  data-aos-delay={index * 80}
                      className="text-sm md:text-base text-muted-foreground leading-relaxed
                           prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={{
                        __html: h.description,
                      }}
                    />
                  )}

                  {/* Decorative Bottom Line */}
                  <div
                    className="absolute bottom-0 left-0 w-full h-1 bg-primary
                         rounded-b-2xl opacity-0
                         group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
              ))}
            </div>

          </div>
        </section>
      )}


      {/* ================= BENEFITS ================= */}
      {service.benefits?.length > 0 && (
        <section className="py-20 bg-[#F6F6F6]">
          <div className="container mx-auto px-6">

            {/* Title */}
            <h2 className="text-[32px] font-semibold text-center text-primary mb-6"data-aos="fade-up">
              {language === "en"
                ? `Benefits of ${service.title}`
                : `${service.title} のメリット`}
            </h2>

            {/* Intro */}
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-16 leading-relaxed" data-aos="fade-up">
              {language === "en"
                ? "AI-driven development transforms the development process by incorporating AI, solving traditional issues such as speed limitations, quality variations, and hidden costs."
                : "AI駆動開発はAIを取り入れることで、従来の開発手法が抱える速度・品質・隠れコストなどの課題を根本的に解決します。"}
            </p>

            {/* Benefit Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.benefits.map((b, index) => {
                
                const Icon = getBenefitIcon(index);

                return (
                  <div
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                    key={b.id}
                    className="bg-white p-10 rounded-xl border shadow-sm text-center"
                  >
                    {/* Icon */}
                    <Icon className="w-12 h-12 text-primary mx-auto mb-6" />

                    {/* Title */}
                    <h3 data-aos="fade-up"
                  data-aos-delay={index * 80} className="text-lg font-semibold text-primary mb-2">
                      {b.title}
                    </h3>

                    {/* Subtitle (optional) */}
                    {/* {b.subtitle && (
                <p className="font-semibold mb-4">
                  {b.subtitle}
                </p>
              )} */}

                    {/* Description (HTML) */}
                    {b.description && (
                      <div data-aos="fade-up"
                  data-aos-delay={index * 80}
                        className=" text-gray-600 leading-relaxed prose prose-sm max-w-none mx-auto"
                        dangerouslySetInnerHTML={{
                          __html: b.description,
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>
      )}


      {/* ================= HOW IT WORKS ================= */}
      {service.how_it_works && (
        <section className="py-20 bg-background" data-aos="fade-up">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-primary mb-4">
              How {service.title} Works
            </h2>

            <div
              className="prose max-w-none mx-auto text-center text-muted-foreground mb-12 max-w-3xl"
              dangerouslySetInnerHTML={{
                __html: service.how_it_works,
              }}
            />
          </div>
        </section>
      )}

      {/* ================= INDUSTRIES ================= */}
      {/* {service.industries?.length > 0 && (
        <section className="py-20 bg-section-light">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-3xl font-semibold text-center text-primary mb-16">
              Industries We Serve
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.industries.map((i) => (
                <div
                  key={i.id}
                  className="bg-white rounded-2xl p-8 text-center border hover:shadow-lg transition"
                >
                  <Award className="w-10 h-10 text-primary mx-auto mb-4" />

                  <h3 className="font-semibold mb-2">{i.title}</h3>

                  {i.description && (
                    <div
                      className="text-sm text-muted-foreground"
                      dangerouslySetInnerHTML={{
                        __html: i.description,
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )} */}

      <ContactCTA />
    </Layout>
  );
}
