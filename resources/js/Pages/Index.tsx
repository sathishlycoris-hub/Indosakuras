import Layout from "@/components/layout/Layout";
import ContactCTA from "@/components/layout/Contact";
import { Button } from "@/components/ui/button";
import { Link } from '@inertiajs/react';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { usePage } from "@inertiajs/react";
import { Head } from "@inertiajs/react";
import { ArrowRight, ChevronDown, Cpu, Shield, Users, Sparkles, FileText, RefreshCw, Globe, Code, Database, Cloud, CheckCircle, MapPin, Phone, Mail, Building } from "lucide-react";
// import { Link } from "react-router-dom";
interface Seo {
  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string;
}
interface NewsEvent {
  id: number;
  date: string;
  eventtype: string;
  short: string;
  short_ja?: string | null;
}

interface IndexProps {
  seo?: Seo | null;
  updates?: NewsEvent[];
  services: Service[];
  solutions?: Solution[];

}

interface Service {
  id: number;
  title: string;
  title_ja?: string | null;
  slug: string;
  hero_description?: string | null;
  hero_description_ja?: string | null;
}

interface Solution {
  id: number;
  title: string;
  title_ja?: string | null;
  slug: string;
  hero_description?: string | null;
  hero_description_ja?: string | null;
}



const serviceIcons = [Cpu, Database, Building, Code, Cloud];
const serviceColors = ["blue", "purple", "green", "pink", "orange"];

const getServiceMeta = (index: number) => ({
  Icon: serviceIcons[index % serviceIcons.length],
  color: serviceColors[index % serviceColors.length],
});

const solutionIcons = [
  Sparkles,
  FileText,
  RefreshCw,
  Shield,
  Database,
];

const solutionColors = ["pink", "blue", "purple", "green", "orange"];

const getSolutionMeta = (index: number) => ({
  Icon: solutionIcons[index % solutionIcons.length],
  color: solutionColors[index % solutionColors.length],
});


const Index = ({ seo = null, updates = [], services = [], solutions = [] }: IndexProps) => {

  const { lang } = usePage<{ lang: "en" | "ja" }>().props;

  useEffect(() => {

    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);
  const safeServices = Array.isArray(services) ? services : [];
  const safeUpdates = Array.isArray(updates) ? updates : [];
  const safeSolutions = Array.isArray(solutions) ? solutions : [];
  const caseStudies = [
    {
      image: "/image/case1.jpg",
      title: "Over 20 years of experience in developing and operating core systems",
      tags: ["Application Development", "Services"]
    },
    {
      image: "/image/case2.jpg",
      title: "Migrating a complex big data infrastructure to Snowflake, enabling rapid analysis and cost reduction",
      tags: ["Bigdata", "BI", "DX", "Snowflake", "Kansai Office"]
    },
    {
      image: "/image/case3.jpg",
      title: "Responsible for cloud development and functionality improvement of DigiOn's IoT device management solution \"DiXiM IoT Platform\"",
      tags: ["#DX", "#Application Development", "#Cloud"]
    },
    {
      image: "/image/case4.jpg",
      title: "Digital transformation of manufacturing workflows through custom automation solutions",
      tags: ["DX", "Automation", "Manufacturing", "Consulting"]
    }
  ];









  // const services = [
  //   {
  //     icon: <Cpu className="w-8 h-8" />,
  //     title: "AI Driven Development",
  //     description: "Leveraging artificial intelligence to create innovative solutions that transform business processes.",
  //     color: "blue",
  //   },
  //   {
  //     icon: <Database className="w-8 h-8" />,
  //     title: "AI Driven Modernization",
  //     description: "Automate complex data processes with intelligent algorithms and machine learning.",
  //     color: "purple",
  //   },
  //   {
  //     icon: <Building className="w-8 h-8" />,
  //     title: "Enterprise Applications Development",
  //     description: "Build scalable enterprise applications to streamline operations and boost productivity.",
  //     color: "green",
  //   },
  //   {
  //     icon: <Code className="w-8 h-8" />,
  //     title: "Custom Software Development",
  //     description: "Create tailored software solutions designed specifically for your business needs.",
  //     color: "pink",
  //   },
  //   {
  //     icon: <Cloud className="w-8 h-8" />,
  //     title: "Infra Managed Services",
  //     description: "Comprehensive HR solutions including payroll, compliance, and employee management.",
  //     color: "orange",
  //   },

  // ];

  // const products = [
  //   {
  //     icon: <Sparkles className="w-6 h-6" />,
  //     title: "SOURCEBYTES.AI",
  //     description: "AI-powered document analysis and automation platform for intelligent data extraction and processing",
  //     color: "pink",
  //     link: "/solutions/sourcebytes-ai",
  //   },
  //   {
  //     icon: <FileText className="w-6 h-6" />,
  //     title: "BlueprintOffice.AI",
  //     description: "Digital blueprint management system with AI-powered document control and workflow automation",
  //     color: "pink",
  //     link: "/solutions/blueprint-ai",
  //   },
  //   {
  //     icon: <RefreshCw className="w-6 h-6" />,
  //     title: "SmartSync.AI",
  //     description: "Intelligent synchronization platform for seamless data management and real-time collaboration seamlessly connects enterprise systems, eliminating data silos and ensuring real-time accuracy across applications, databases, and cloud environments with automated AI-driven conflict resolution.",
  //     color: "pink",
  //     link: "/solutions/smartsynch-ai",
  //   },
  //   {
  //     icon: <Shield className="w-6 h-6" />,
  //     title: "Cybersecurity Solutions",
  //     description: "Enterprise-grade security solutions protecting your digital assets with 24/7 monitoring and threat detection",
  //     color: "pink",
  //     link: "/solutions/cybersecurity",
  //   },
  //   {
  //     icon: <Database className="w-6 h-6" />,
  //     title: "BRMS Solutions",
  //     description: "Business Rules Management System for optimized decision-making processes and workflow automation",
  //     color: "pink",
  //     link: "/solutions/brmssolutions",
  //   },
  // ];
  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string }> = {
      blue: { bg: "bg-pink-50", text: "text-pink-600", border: "border-t-pink-500" },
      pink: { bg: "bg-pink-50", text: "text-pink-600", border: "border-t-pink-500" },
      green: { bg: "bg-pink-50", text: "text-pink-600", border: "border-t-pink-500" },
      orange: { bg: "bg-pink-50", text: "text-pink-600", border: "border-t-pink-500" },
      purple: { bg: "bg-pink-50", text: "text-pink-600", border: "border-t-pink-500" },
    };
    return colors[color] || colors.blue;
  };
  //   const solutions = [
  //   {
  //     icon: <Database className="w-6 h-6" />,
  //     title: "BlueprintEditor.AI",
  //     tag: "Document Management",
  //     description: "Digital blueprint management system for efficient office operations and document control."
  //   },
  //   {
  //     icon: <Cpu className="w-6 h-6" />,
  //     title: "SourceBytes.AI",
  //     tag: "AI Analytics",
  //     description: "AI-powered analytics platform that delivers actionable insights from complex data."
  //   },
  //   {
  //     icon: <Users className="w-6 h-6" />,
  //     title: "SmartSynch.AI",
  //     tag: "Quality Control",
  //     description: "Intelligent inspection and quality control system powered by computer vision."
  //   },
  //   {
  //     icon: <Shield className="w-6 h-6" />,
  //     title: "Cybersecurity",
  //     tag: "Data Management",
  //     description: "Business Data Management System for enterprise-wide data governance and integration."
  //   },
  //    {
  //     icon: <Shield className="w-6 h-6" />,
  //     title: "BRMS Solution",
  //     tag: "Accuracy & Compliance",
  //     description: "Business Data Management System for enterprise-wide data governance and integration."
  //   },


  // ];


  return (
    <Layout>
      <Head>
        <title>
          {seo?.meta_title ??
            (lang === "en"
              ? "Indo Sakura Software Japan"
              : "インドサクラソフトウェアジャパン")}
        </title>

        {seo?.meta_description && (
          <meta name="description" content={seo.meta_description} />
        )}

        {seo?.meta_keywords && (
          <meta name="keywords" content={seo.meta_keywords} />
        )}
      </Head>
      {/* Hero Section */}
      {/* Hero Section with Background Image */}
      <section
        className="
    relative text-primary-foreground overflow-hidden
    min-h-[380px] sm:min-h-[420px] md:min-h-[460px] lg:min-h-[520px]
  "
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="/image/osaka.jpg"
            alt="Indo Sakura Software Japan"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
        </div>

        <div
          className="
      container relative z-10 mx-auto
      px-4 sm:px-6 lg:px-8
      py-10 sm:py-12 md:py-14 lg:py-16
    "
        >
          <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">

            {/* RIGHT COLUMN - Info Card */}
            <div className="flex-1 w-full lg:w-auto flex flex-col items-center lg:items-start mt-6 lg:mt-0">
              <div
                className="
            relative
            rounded-xl
            p-4 sm:p-5 md:p-6 lg:p-4
            w-full sm:w-2/3 lg:w-1/3
            max-w-sm
            shadow-2xl
            backdrop-blur-sm
            border border-white/30
            bg-black/40
          "
              >
                {/* subtle inner overlay */}
                <div className="absolute inset-0 rounded-xl bg-black/30 pointer-events-none" />

                {/* content */}
                <div className="relative z-10">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 text-white">
                    {lang === "en"
                      ? "20 Years of Legacy Delivering"
                      : "20年の実績と信頼"} <br className="hidden md:block" />

                  </h2>

                  <p className="text-sm sm:text-base md:text-lg text-white/90 mb-3 sm:mb-4 leading-relaxed">
                    {lang === "en"
                      ? "Since 2005, Indo-Sakura has been at the forefront of IT innovation, delivering cutting-edge solutions that empower businesses worldwide."
                      : "2005年の創業以来、インドサクラはIT革新の最前線で、世界中の企業に最先端のソリューションを提供してきました。"}
                  </p>

                  <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white">
                    {lang === "en"
                      ? "Japanese Quality ✦ Indian Capability ✦ Global Innovation"
                      : "日本品質 ✦ インドの技術力 ✦ グローバルイノベーション"}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Decorative bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 bg-gradient-to-t from-background/20 to-transparent" />
      </section>


      {/* Service Banner */}
      {/* <div className="bg-muted py-4 mt-8">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground">SERVICE</h2>
        </div>
      </div> */}

      {/* Core Services */}
      {/* Case Studies Section */}
      <section className="py-16 relative overflow-hidden">
        {/* Dot pattern background */}


        <div className="max-w-6xl mx-auto px-4 lg:px-8 relative z-10 pt-8">
          <div
            className="container absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: 'url(/image/dot.jpg)',
              backgroundRepeat: 'repeat',
              backgroundSize: '200px auto',
              backgroundPosition: 'center top'
            }}
          />

          {/* Header with line divider matching reference */}
          <div className="flex items-center gap-6 mb-10 section-divider">
            <h2 className="text-2xl font-semibold text-foreground uppercase tracking-wide whitespace-nowrap">
             {lang === "en" ? "CASE STUDIES" : "導入事例"}
            </h2>
            {/* <div className="flex-1 h-px bg-gradient-to-r from-border via-border to-transparent"></div> */}
          </div>

          {/* Case Study Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="group cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {study.tags.join(" • ")}
                  </p>
                </div>

                {/* Arrow indicator on hover */}
                <div className="mt-3 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">{lang === "en" ? "View Details" : "詳細を見る"}</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>


      {/* Updates */}
      <section className="py-16 ">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div className="section-divider">
              <h2 className="text-2xl font-semibold">{lang === "en" ? "Information" : "お知らせ"}</h2>
            </div>
            {/* <Link to="" className="text-primary text-sm font-medium hover:underline">View All</Link> */}
          </div>
          <p className="text-muted-foreground mb-8">
            {lang === "en"
              ? "Stay updated with our latest news, announcements, and industry insights."
              : "最新ニュースやお知らせ、業界情報をご確認ください。"}
          </p>
          <div className="space-y-4">
            {safeUpdates.map((update, index) => (
              <Link
                key={update.id}
                href={route('news.show', update.id)}
                className="block"
              >
                <div
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                  className="grid grid-cols-[120px_160px_1fr_30px] items-center py-4 border-b border-border hover:bg-muted/50 transition-colors"
                >
                  {/* DATE */}
                  <span className="text-md text-muted-foreground">
                    {update.date}
                  </span>

                  {/* EVENT TYPE */}
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium w-fit">
                    {update.eventtype}
                  </span>

                  {/* TITLE (SHORT) */}
                  <p className="text-foreground overflow-hidden line-clamp-1">
                    {lang === "en" ? update.short : update.short_ja || update.short}
                  </p>

                  {/* ARROW */}
                  <span className="justify-self-end text-muted-foreground hover:text-primary transition-colors">
                    <ChevronDown className="w-5 h-5 -rotate-90" />
                  </span>
                </div>
              </Link>
            ))}
          </div>


        </div>
      </section>

      {/* Corporate Section */}
     <section className="py-20 bg-accent-pink text-primary-foreground">
  <div className="container mx-auto px-4 lg:px-8">

    {/* LABEL */}
    <div className="section-divider mb-8 border-white/80">
      <h2 className="text-2xl font-semibold text-white">
        {lang === "en" ? "Corporate Info" : "企業情報"}
      </h2>
    </div>

    <div className="container grid lg:grid-cols-[65%_35%] gap-12">

      {/* LEFT */}
      <div>
        <h2 className="text-3xl lg:text-4xl font-bold leading-snug mb-6">
          {lang === "en"
            ? "Delivering Excellence Across Continents"
            : "世界をつなぐ卓越したITサービス"}
        </h2>

        <p className="mb-4 font-bold leading-relaxed">
          {lang === "en"
            ? "With two decades of experience spanning Japan, India, and the USA, Indo-Sakura has established itself as a trusted partner for businesses seeking innovative IT solutions. Our global presence combined with local expertise enables us to deliver world-class services tailored to diverse markets."
            : "日本・インド・アメリカにまたがる20年以上の実績を持つインドサクラは、革新的なITソリューションを求める企業にとって信頼できるパートナーとして成長してきました。グローバルな展開と地域密着型の専門知識を融合し、多様な市場に最適化された世界水準のサービスを提供しています。"}
        </p>

        <p className="mb-8 leading-relaxed">
          {lang === "en"
            ? "We serve 55 customers worldwide with a dedicated team of over 150 IT experts, focusing on five key industry sectors where we bring deep domain knowledge and technical excellence."
            : "専門性の高いITエキスパートチームとともに、世界中のお客様へサービスを提供しています。重点分野において豊富な業界知識と高度な技術力を発揮しています。"}
        </p>

        <Button
          asChild
          variant="heroOutline"
          className="mb-12 bg-white text-pink-600 border-white hover:bg-white/90 hover:text-pink-700"
        >
          <Link href="/corporate-info">
            {lang === "en" ? "About Indo-Sakura" : "インドサクラについて"}
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </Button>
      </div>

      {/* RIGHT — STATS CARDS */}
      <div className="grid grid-cols-2 gap-4" data-aos="zoom-in">

        <div className="bg-primary rounded-xl p-5">
          <div className="text-3xl font-bold mb-1">20</div>
          <p className="font-medium text-primary-foreground/90">
            {lang === "en" ? "Years of Excellence" : "20年の実績"}
          </p>
          <p className="text-sm text-primary-foreground/90">
            {lang === "en" ? "Japan, India, USA" : "日本・インド・アメリカ"}
          </p>
        </div>

        <div className="bg-primary rounded-xl p-5">
          <div className="text-3xl font-bold mb-1">155</div>
          <p className="font-medium text-primary-foreground/90">
            {lang === "en" ? "Customers" : "取引企業数"}
          </p>
          <p className="text-sm">
            {lang === "en" ? "Worldwide" : "世界各国"}
          </p>
        </div>

        <div className="bg-primary rounded-xl p-5">
          <div className="text-3xl font-bold mb-1">130</div>
          <p className="font-medium text-primary-foreground/90">
            {lang === "en" ? "IT Experts" : "ITエキスパート"}
          </p>
          <p className="text-sm text-primary-foreground/90">
            {lang === "en" ? "Dedicated Team" : "専門チーム"}
          </p>
        </div>

        <div className="bg-primary rounded-xl p-5">
          <div className="text-3xl font-bold mb-1">8</div>
          <p className="font-medium text-primary-foreground/90">
            {lang === "en" ? "Target Industry" : "主要業界"}
          </p>
          <p>
            {lang === "en" ? "Key Sectors" : "重点分野"}
          </p>
        </div>

      </div>
    </div>

    {/* FEATURE CARDS */}
    <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16" data-aos="zoom-in">

      <div className="bg-primary rounded-lg p-6 text-center">
        <Globe className="w-6 h-6 mx-auto mb-3" />
        <p className="font-medium">
          {lang === "en" ? "Global Reach" : "グローバル展開"}
        </p>
        <p>
          {lang === "en" ? "Operations in 3 continents" : "3大陸で事業展開"}
        </p>
      </div>

      <div className="bg-primary rounded-lg p-6 text-center">
        <Users className="w-6 h-6 mx-auto mb-3" />
        <p className="font-medium">
          {lang === "en" ? "Expert Team" : "専門チーム"}
        </p>
        <p>
          {lang === "en" ? "150+ certified professionals" : "150名以上の専門家"}
        </p>
      </div>

      <div className="bg-primary rounded-lg p-6 text-center">
        <CheckCircle className="w-6 h-6 mx-auto mb-3" />
        <p className="font-medium">
          {lang === "en" ? "Quality Focus" : "品質重視"}
        </p>
        <p>
          {lang === "en" ? "ISO certified processes" : "ISO認証プロセス"}
        </p>
      </div>

      <div className="bg-primary rounded-lg p-6 text-center">
        <ArrowRight className="w-6 h-6 mx-auto mb-3" />
        <p className="font-medium">
          {lang === "en" ? "Growth Partner" : "成長パートナー"}
        </p>
        <p>
          {lang === "en" ? "Long-term client relationships" : "長期的なパートナーシップ"}
        </p>
      </div>

    </div>

  </div>
</section>



      {/* Services */}
      {/* Services */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">

          <div className="section-divider mb-8">
            <h2 className="text-2xl font-semibold">{lang === "en" ? "Services" : "サービス"}</h2>
          </div>

          <p className="text-muted-foreground mb-8">
            {lang === "en"
              ? "Comprehensive IT solutions with cutting-edge technology expertise..."
              : "最先端技術を活用した包括的なITソリューションを提供します。"}
          </p>


          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {safeServices.map((service, index) => {
              const { Icon, color } = getServiceMeta(index);

              return (
                <div
                  key={service.id}
                  data-aos="flip-up"
                  data-aos-delay={index * 100}
                  className={`bg-card rounded-lg p-6 shadow-sm border border-border card-accent-${color} flex flex-col h-full`}
                >
                  <div className={`icon-box icon-box-${color} mb-4`}>
                    <Icon className="w-8 h-8" />
                  </div>

                  <h2 className="font-semibold mb-2 text-lg">
                    {lang === "en"
                      ? service.title
                      : service.title_ja || service.title}
                  </h2>

                  <div
                    className="text-muted-foreground mb-4 line-clamp-3 prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{
                      __html:
                        lang === "en"
                          ? service.hero_description || ""
                          : service.hero_description_ja || service.hero_description || "",
                    }}
                  />

                  <Link
                    href={`/services/${service.slug}`}
                    className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1 mt-auto"
                  >
                    {lang === "en" ? "Learn More" : "詳しく見る"} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}

          </div>



        </div>
      </section>


      {/* Solutions */}
      {/* <section className="py-16">
  <div className="container mx-auto px-4 lg:px-8">

    <div className="section-divider mb-8">
      <h2 className="text-xl font-semibold text-gray-900">Solutions</h2>
    </div>

    <p className="text-gray-700 mb-8">
      Innovative software solutions designed to solve real-world business challenges and drive operational excellence
    </p> */}

      {/* SOLUTION CARDS */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {solutions.map((item, index) => (
    <div
      key={index}
      className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col"
    > */}
      {/* ICON */}
      {/* <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white text-xl mb-4 mx-auto">
        {item.icon}
      </div> */}

      {/* TAG */}
      {/* <span className="inline-block bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full mb-3 mx-auto">
        {item.tag}
      </span> */}

      {/* TITLE */}
      {/* <h3 className="font-semibold text-gray-900 text-lg mb-2 text-center">
        {item.title}
      </h3> */}

      {/* DESCRIPTION */}
      {/* <p className="text-sm text-gray-600 mb-4 text-center">
        {item.description}
      </p> */}

      {/* EXPLORE LINK */}
      {/* <Link
        to="#"
        className="text-blue-600 text-sm font-medium hover:underline inline-flex items-center gap-1 mt-auto mx-auto"
      >
        Explore <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  ))}
</div>

  </div>
</section> */}


      {/* Solutions */}
      <section className="py-16 bg-section-light text-gray-900">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">

          <div className="section-divider mb-4">
            <h2 className="text-2xl font-semibold">{lang === "en" ? "Solutions" : "ソリューション"}</h2>
          </div>

          <p className="text-muted-foreground mb-12">
            {lang === "en"
              ? "Cutting-edge solutions to solve your business challenges and drive digital transformation"
              : "ビジネス課題を解決し、デジタルトランスフォーメーションを推進する最先端ソリューション"}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="zoom-in">
            {safeSolutions.map((solution, index) => {
              const { Icon, color } = getSolutionMeta(index);
              const colorClasses = getColorClasses(color);

              return (
                <div
                  key={solution.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className={`bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow border-t-4 ${colorClasses.border}`}
                >
                  <div className="p-6 flex flex-col h-full">
                    {/* ICON */}
                    <div
                      className={`w-12 h-12 rounded-xl ${colorClasses.bg} ${colorClasses.text} flex items-center justify-center mb-4`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* TITLE */}
                    <h3 className="font-semibold text-lg mb-2">
                      {lang === "en"
                        ? solution.title
                        : solution.title_ja || solution.title}
                    </h3>

                    {/* DESCRIPTION (HTML-safe) */}
                    <div
                      className="text-muted-foreground mb-6 line-clamp-3 prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={{
                        __html:
                          lang === "en"
                            ? solution.hero_description || ""
                            : solution.hero_description_ja || solution.hero_description || "",
                      }}
                    />

                    {/* EXACT EXISTING BUTTON */}
                    <Link href={`/solutions/${solution.slug}`} className="mt-auto">
                      <Button variant="viewDetails" className="w-full">
                        {lang === "en" ? "View Details" : "詳細を見る"} <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}

            {/* LAST STATIC CARD — unchanged */}
            <div className="rounded-lg p-6 hero-gradient text-white flex flex-col justify-between shadow-lg">
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  {lang === "en" ? "Need a Custom Solution?" : "カスタムソリューションが必要ですか？"}
                </h3>
                <p className="opacity-90 mb-6">
                  Our team of experts can design and implement the perfect solution tailored to your unique business needs.
                </p>
              </div>

              <Link href="/contact">
                <Button className="bg-white text-pink-600 hover:bg-gray-100">
                  {lang === "en" ? "Contact Us" : "お問い合わせ"} <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </section>






      {/* Security Section */}
      {/* <section className="py-16 bg-section-light text-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-center text-gray-700 text-sm mb-4">
            Comprehensive cybersecurity solutions to protect your digital assets and ensure business continuity
          </p>

          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Safeguard Your Business in the Digital Age
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 mb-8">
                In today's interconnected world, cybersecurity is a critical business requirement.
                Our comprehensive security solutions protect your organization from evolving cyber threats
                while maintaining compliance and operational efficiency.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-gray-900">99.9%</div>
                  <p className="text-sm text-gray-500">Uptime Guarantee</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">24/7</div>
                  <p className="text-sm text-gray-500">Security Monitoring</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">&lt;15min</div>
                  <p className="text-sm text-gray-500">Response Time</p>
                </div>
              </div>

              <Button variant="hero" className="text-gray-900">
                Explore Solutions <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary-foreground/5 rounded-xl p-6">
                <Shield className="w-8 h-8 text-pink-600 mb-3" />
                <h3 className="font-semibold mb-2 text-gray-900">Threat Detection</h3>
                <p className="text-sm text-gray-600">Advanced AI-powered threat detection and response.</p>
              </div>

              <div className="bg-primary-foreground/5 rounded-xl p-6">
                <Database className="w-8 h-8 text-pink-600 mb-3" />
                <h3 className="font-semibold mb-2 text-gray-900">Data Protection</h3>
                <p className="text-sm text-gray-600">Comprehensive data encryption and backup solutions.</p>
              </div>

              <div className="bg-primary-foreground/5 rounded-xl p-6">
                <Users className="w-8 h-8 text-pink-600 mb-3" />
                <h3 className="font-semibold mb-2 text-gray-900">Identity Management</h3>
                <p className="text-sm text-gray-600">Secure access control and authentication.</p>
              </div>

              <div className="bg-primary-foreground/5 rounded-xl p-6">
                <CheckCircle className="w-8 h-8 text-pink-600 mb-3" />
                <h3 className="font-semibold mb-2 text-gray-900">Compliance & Auditing</h3>
                <p className="text-sm text-gray-600">Meet regulatory requirements with automated compliance.</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}


      {/* Contact Form CTA */}
      {/* <section className="py-16 bg-section-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground">Ready to transform your business? Get in touch with our team today.</p>
            <Button variant="heroOutline">
              Request a Consultation <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </section> */}

      {/* Contact Form */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-block border border-border rounded-full px-4 py-1 text-sm mb-4">Contact Form</span>
            <p className="text-muted-foreground">
              Fill out the form below to get in touch with our sales team for a quote or consultation.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="font-semibold mb-4">Get in Touch</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Tokyo Office</p>
                      <p className="text-muted-foreground">Tokyo, Japan<br />ZIP 150-0012</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">+81-3-XXXX-XXXX</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">info@indosakura.co.jp</span>
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="font-medium mb-2">Office Hours</h4>
                  <p className="text-sm text-muted-foreground">Monday - Friday<br />9:00 AM - 6:00 PM JST</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">First Name</label>
                    <input type="text" className="w-full px-4 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Last Name</label>
                    <input type="text" className="w-full px-4 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Company Name</label>
                    <input type="text" className="w-full px-4 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea rows={4} className="w-full px-4 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none" placeholder="Tell us about your project or inquiry..." />
                </div>
                <Button className="w-full">
                  Submit Inquiry <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  * We will get back to you within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact CTA */}
      <ContactCTA />

    </Layout>
  );
};

export default Index;
