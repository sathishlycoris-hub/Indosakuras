import {
    Sparkles,
    Zap,
    BarChart,
    Brain,
    MessageSquare,
    Shield,
    Briefcase,
    Factory,
    Package,
    ShoppingCart,
    Laptop,
    Cpu,
    Database,
    Globe,
} from "lucide-react";

const ICONS = [
    Sparkles,
    Zap,
    BarChart,
    Brain,
    MessageSquare,
    Shield,
    Briefcase,
    Factory,
    Package,
    ShoppingCart,
    Laptop,
    Cpu,
    Database,
    Globe,
];



import Layout from "@/components/layout/Layout";
import Solutionhead from "@/components/layout/Solutionhead";
import ContactCTA from "@/components/layout/Contact";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

interface Solution {
    id: number;
    title: string;
    subtitle: string | null;
    hero_description: string | null;
    hero_image: string | null;
    features: any[];
    use_cases: any[];
    industries: any[];
    case_studies: any[];
}
AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    offset: 120,
    delay: 80,
});

export default function Show({ solution }: { solution: Solution }) {

    const getIconByIndex = (index: number) => {
        return ICONS[index % ICONS.length];
    };
    return (
        <Layout>
            <Solutionhead />

            {/* HERO */}
            <section className="py-12 lg:py-20 bg-section-light">
                <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center" data-aos="fade-left">

                    <div>
                        <h1 className="text-4xl font-bold mb-3">
                            {solution.title}
                        </h1>

                        {solution.subtitle && (
                            <p className="text-lg text-primary mb-4">
                                {solution.subtitle}
                            </p>
                        )}

                        <div
                            className="text-muted-foreground mb-8 leading-relaxed prose max-w-none"
                            dangerouslySetInnerHTML={{
                                __html: solution.hero_description ?? "",
                            }}
                        />

                        <Button asChild size="lg">
                            <a
                                href="https://www.ibm.com/solutions/artificial-intelligence"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Learn More <ArrowRight className="w-4 h-4 ml-2" />
                            </a>
                        </Button>
                    </div>

                    {solution.hero_image && (
                        <img
                            src={`/storage/${solution.hero_image}`}
                            className="w-full max-w-lg rounded-2xl shadow border"
                        />
                    )}

                </div>
            </section>

            {/* FEATURES */}
            <section className="py-16">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold text-center mb-2" data-aos="fade-up">
                        Key Features of {solution.title}
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto mb-12" />
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {solution.features.map((f, i) => {
                            const Icon = getIconByIndex(i);
                            return (

                                <div key={i} data-aos="fade-up"
                                    data-aos-delay={i * 80} className="bg-card border rounded-lg p-6">
                                    <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center mb-4">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-primary">{f.title}</h3>
                                    <p className="text-muted-foreground">{f.subtitle}</p>
                                    <div
                                        className="prose mt-2"
                                        dangerouslySetInnerHTML={{ __html: f.description ?? "" }}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* USE CASES */}
            {/* USE CASES */}
            {solution.use_cases?.length > 0 && (
                <section className="py-16 bg-section-light">
                    <div className="container mx-auto px-4 lg:px-8" data-aos="fade-up">

                        {/* Header */}
                        <h2 className="text-2xl font-bold text-center mb-2">
                            Use Cases
                        </h2>

                        {/* Underline */}
                        <div className="w-20 h-1 bg-primary mx-auto mb-4" />

                        {/* Intro text */}
                        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                            {solution.title} is designed to address real-world business challenges
                            across industries through practical, AI-driven use cases.
                        </p>

                        {/* Cards */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 " data-aos="fade-up">
                            {solution.use_cases.map((u, i) => (
                                <div
                                    key={i}
                                    className="bg-white rounded-xl shadow-sm border border-border p-6
                       hover:shadow-md transition"
                                >
                                    {/* Title */}
                                    <h3 className="font-semibold text-foreground mb-1">
                                        {u.title}
                                    </h3>

                                    {/* Subtitle */}
                                    {u.subtitle && (
                                        <p className="text-sm text-primary mb-2">
                                            {u.subtitle}
                                        </p>
                                    )}

                                    {/* Description (HTML) */}
                                    <div
                                        className="text-sm text-muted-foreground leading-relaxed prose prose-sm max-w-none"
                                        dangerouslySetInnerHTML={{
                                            __html: u.description ?? "",
                                        }}
                                    />
                                </div>
                            ))}
                        </div>

                    </div>
                </section>
            )}


            {/* INDUSTRIES */}
            {/* INDUSTRIES */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4" data-aos="fade-up">

                    {/* Heading */}
                    <div className="text-center mb-14">
                        <h2 className="text-3xl font-bold text-foreground">
                            Industry We Serve
                        </h2>

                        <div className="w-16 h-1 bg-pink-500 mx-auto mt-3 mb-4 rounded-full" />

                        <p className="text-muted-foreground">
                            Enterprise-grade AI workflows built for multiple industries
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                        {solution.industries.map((ind, i) => {
                            const Icon = getIconByIndex(i + 10);

                            return (
                                <div
                                    data-aos="fade-up"
                                    data-aos-delay={i * 90}
                                    key={i}
                                    className="relative bg-pink-50/40 border border-pink-100 rounded-2xl p-8 text-center hover:shadow-md transition"
                                >
                                    {/* Icon Circle */}
                                    <div className="w-14 h-14 rounded-full bg-white shadow flex items-center justify-center mx-auto mb-5">
                                        <Icon className="w-6 h-6 text-pink-600" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-semibold text-foreground mb-1">
                                        {ind.title}
                                    </h3>

                                    {/* Subtitle */}
                                    <p className="text-sm text-muted-foreground">
                                        {ind.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>


            {/* CASE STUDIES */}
            <section className="py-16 bg-section-light">

                <div className="container mx-auto space-y-6">
                    <div className="section-divider mb-8" data-aos="fade-left">
                        <h2 className="text-2xl font-semibold">Case Studies</h2>
                    </div>
                    {solution.case_studies.map((c, i) => (
                        <div data-aos="fade-left"
                            data-aos-delay={i * 90} key={i} className="bg-card border rounded-lg p-6">
                            <h3 className="font-semibold text-primary">{c.title}</h3>
                            <div
                                className="prose mt-2"
                                dangerouslySetInnerHTML={{ __html: c.summary ?? "" }}
                            />
                            {c.result && (
                                <p className="text-primary mt-3">{c.result}</p>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            <ContactCTA />
        </Layout>
    );
}
