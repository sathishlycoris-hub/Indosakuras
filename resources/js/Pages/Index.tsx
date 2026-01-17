import Layout from "@/components/layout/Layout";
import ContactCTA from "@/components/layout/Contact";
import { Button } from "@/components/ui/button";
import { Link } from '@inertiajs/react';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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
  slug: string;
  hero_description?: string | null;
}

interface Solution {
  id: number;
  title: string;
  slug: string;
  hero_description?: string | null;
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


const Index = ({ seo = null, updates = [], services = [], solutions = [], }: IndexProps) => {
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
        <title>{seo?.meta_title ?? "Indo Sakura Software Japan"}</title>

        {seo?.meta_description && (
          <meta name="description" content={seo.meta_description} />
        )}

        {seo?.meta_keywords && (
          <meta name="keywords" content={seo.meta_keywords} />
        )}
      </Head>
      {/* Hero Section */}
      <section className="relative hero-gradient text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 py-24 lg:py-40">

          <div className="flex flex-col lg:flex-row items-start gap-10" data-aos="fade-right">


            {/* LEFT COLUMN */}
            <div className="flex-1">



              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
                20+ Years of Trusted <br className="hidden lg:block" /> Japanese IT Excellence
              </h1>


              <p className="text-primary-foreground/90 text-sm lg:text-base mb-6 max-w-xl leading-relaxed">
                For over two decades, we’ve built resilient IT infrastructure, intelligent automation,
                and collaborative global solutions powered by precision, passion, and a heart–driven
                promise of quality.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="px-6 py-3 border border-primary-foreground rounded-full text-lg font-medium hover:scale-105 transition-all flex items-center"
                >
                  Get Started
                  <span className="ml-2">→</span>
                </Link>
              </div>

            </div>


            {/* RIGHT COLUMN */}
            <div className="flex-1 flex flex-col items-end">
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 mb-4 shadow-lg w-full lg:w-auto">
                <h2 className="text-3xl lg:text-4xl font-bold mb-2">Indo Sakura 20 Years of Innovation</h2>
                <p className="text-primary-foreground/90 text-sm lg:text-base mb-6 max-w-xl leading-relaxed">Since 2005, Indo-Sakura has been at the forefront of IT innovation, delivering cutting-edge solutions that empower businesses worldwide.</p>
                <p className="text-xl">India ✦ Japan ✦ USA ✦ UAE and beyond — Connected by Technology</p>
              </div>


              {/* <div className="bg-card text-card-foreground rounded-xl p-5 shadow-lg max-w-sm border border-border text-right">
<h3 className="font-semibold mb-2 flex items-center gap-2 justify-end text-lg">
Transforming businesses with Gen AI and Cybersecurity for a safer future
</h3>
<p className="text-sm  text-muted-foreground leading-snug">
Fostering Japan-India synergies to boost Japanese businesses with cutting-edge IT solutions and digital transformation services.
</p>
</div> */}
            </div>


          </div>
        </div>


        {/* SERVICE FLOATING TAGS */}
        {/* <div className="absolute bottom-0 right-8 flex flex-wrap gap-2 transform translate-y-1/2">
<span className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-medium shadow-lg">
AI Driven Development → 未来をやさしく導く、AIの創造力
</span>
<span className="bg-card text-card-foreground px-5 py-2 rounded-full text-sm font-medium shadow-lg border border-border">
AI Driven → こころ動くスマートな技術
•
</span>
</div> */}


      </section>

      {/* Service Banner */}
      {/* <div className="bg-muted py-4 mt-8">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground">SERVICE</h2>
        </div>
      </div> */}

      {/* Core Services */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8" data-aos="fade-up">

          <div className="section-divider mb-8">
            <h2 className="text-2xl font-semibold">Case Studies</h2>
          </div>

          <p className="text-muted-foreground mb-8">
            We provide cutting-edge IT solutions and digital transformation services to businesses worldwide.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow-sm border border-border hover:shadow-lg transition-shadow bg-white"
              >
                {/* Image */}
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover"
                />

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    {study.title}
                  </h3>

                  {/* Tags */}
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {(study.tags ?? []).join(", ")}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* Updates */}
      <section className="py-16 ">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div className="section-divider">
              <h2 className="text-2xl font-semibold">Information</h2>
            </div>
            {/* <Link to="" className="text-primary text-sm font-medium hover:underline">View All</Link> */}
          </div>
          <p className="text-muted-foreground mb-8">
            Stay updated with our latest news, announcements, and industry insights.
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
                    {update.short}
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
      <section className="py-20 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">

          {/* LABEL */}
          <div className="section-divider mb-8 border-white/80">
            <h2 className="text-2xl font-semibold text-white">Corporate Info</h2>
          </div>

          <div className="grid lg:grid-cols-[65%_35%] gap-12">

            {/* LEFT — WIDER CONTENT */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold leading-snug mb-6">
                Delivering Excellence Across Continents
              </h2>

              <p className="text-primary-foreground/80 mb-4 leading-relaxed">
                With two decades of experience spanning Japan, India, and the USA, Indo-Sakura has
                established itself as a trusted partner for businesses seeking innovative IT solutions.
                Our global presence combined with local expertise enables us to deliver world-class
                services tailored to diverse markets.
              </p>

              <p className="text-primary-foreground/80 mb-8 leading-relaxed">
                We serve 55 customers worldwide with a dedicated team of over 150 IT experts, focusing
                on five key industry sectors where we bring deep domain knowledge and technical excellence.
              </p>

              <Button
                asChild
                variant="heroOutline"
                className="mb-12 bg-white text-pink-600 border-white hover:bg-white/90 hover:text-pink-700"
              >
                <Link href="/corporate-info">
                  About Indo-Sakura
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>

            {/* RIGHT — SMALLER CARDS */}
            <div className="grid grid-cols-2 gap-4" data-aos="zoom-in">
              <div className="bg-primary-foreground/15 rounded-xl p-5">
                <div className="text-3xl font-bold mb-1">20</div>
                <p className="font-medium text-primary-foreground/90">Years of Excellence</p>
                <p className="text-sm text-primary-foreground/90">Japan, India, USA</p>
              </div>

              <div className="bg-primary-foreground/15 rounded-xl p-5">
                <div className="text-3xl font-bold mb-1">155</div>
                <p className="font-medium text-primary-foreground/90">Customers</p>
                <p className="text-sm text-primary-foreground/0">Worldwide</p>
              </div>

              <div className="bg-primary-foreground/15 rounded-xl p-5">
                <div className="text-3xl font-bold mb-1">130</div>
                <p className="font-medium text-primary-foreground/90">IT Experts</p>
                <p className="text-sm text-primary-foreground/90">Dedicated Team</p>
              </div>

              <div className="bg-primary-foreground/15 rounded-xl p-5">
                <div className="text-3xl font-bold mb-1">8</div>
                <p className="font-medium text-primary-foreground/90">Target Industry</p>
                <p className="text-sm text-primary-foreground/90">Key Sectors</p>
              </div>
            </div>

          </div>

          {/* FULL-WIDTH FEATURE CARDS (BOTTOM) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16" data-aos="zoom-in">
            <div className="bg-primary-foreground/10 rounded-lg p-6 text-center">
              <Globe className="w-6 h-6 mx-auto mb-3" />
              <p className="font-medium">Global Reach</p>
              <p className="text-sm text-primary-foreground/70">Operations in 3 continents</p>
            </div>

            <div className="bg-primary-foreground/10 rounded-lg p-6 text-center">
              <Users className="w-6 h-6 mx-auto mb-3" />
              <p className="font-medium">Expert Team</p>
              <p className="text-sm text-primary-foreground/70">150+ certified professionals</p>
            </div>

            <div className="bg-primary-foreground/10 rounded-lg p-6 text-center">
              <CheckCircle className="w-6 h-6 mx-auto mb-3" />
              <p className="font-medium">Quality Focus</p>
              <p className="text-sm text-primary-foreground/70">ISO certified processes</p>
            </div>

            <div className="bg-primary-foreground/10 rounded-lg p-6 text-center">
              <ArrowRight className="w-6 h-6 mx-auto mb-3" />
              <p className="font-medium">Growth Partner</p>
              <p className="text-sm text-primary-foreground/70">Long-term client relationships</p>
            </div>
          </div>

        </div>
      </section>



      {/* Services */}
      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">

          <div className="section-divider mb-8">
            <h2 className="text-2xl font-semibold">Services</h2>
          </div>

          <p className="text-muted-foreground mb-8">
            Comprehensive IT solutions with cutting-edge technology expertise. Our digital transformation
            services help organizations modernize their infrastructure and processes.
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

                  <h3 className="font-semibold mb-2 text-lg">
                    {service.title}
                  </h3>

                  <div
                    className="text-muted-foreground mb-4 line-clamp-3 prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{
                      __html: service.hero_description || "Learn more about this service",
                    }}
                  />

                  <Link
                    href={`/services/${service.slug}`}
                    className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1 mt-auto"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
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
        <div className="container mx-auto px-4 lg:px-8">

          <div className="section-divider mb-4">
            <h2 className="text-2xl font-semibold">Solutions</h2>
          </div>

          <p className="text-muted-foreground mb-12">
            Cutting-edge solutions to solve your business challenges and drive digital transformation
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
                      {solution.title}
                    </h3>

                    {/* DESCRIPTION (HTML-safe) */}
                    <div
                      className="text-muted-foreground mb-6 line-clamp-3 prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={{
                        __html: solution.hero_description || "",
                      }}
                    />

                    {/* EXACT EXISTING BUTTON */}
                    <Link href={`/solutions/${solution.slug}`} className="mt-auto">
                      <Button variant="viewDetails" className="w-full">
                        View Details <ArrowRight className="w-4 h-4 ml-1" />
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
                  Need a Custom Solution?
                </h3>
                <p className="opacity-90 mb-6">
                  Our team of experts can design and implement the perfect solution tailored to your unique business needs.
                </p>
              </div>

              <Link href="/contact">
                <Button className="bg-white text-pink-600 hover:bg-gray-100">
                  Contact Us <ArrowRight className="w-4 h-4 ml-1" />
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
