import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/Contexts/LanguageContext";
import { Link } from "@inertiajs/react";
import { useState, useEffect } from "react";
import ContactCTA from "@/components/layout/Contact";
import AOS from "aos";
import "aos/dist/aos.css";

interface CaseStudy {
    id: number;
    slug: string;
    subtitle: string;
    subtitle_ja?: string;
    hero_image?: string;
    tags: string;
}

export default function Casestudies({
    caseStudies,
}: {
    caseStudies: CaseStudy[];
}) {
    const { language } = useLanguage();

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
            offset: 120,
        });
    }, []);

    return (
        <Layout>

            {/* Hero */}
            <section className="relative bg-primary py-20">
                <div
                    className="container mx-auto px-4 relative z-10 text-center text-white"
                    data-aos="fade-right"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-2">CASES</h1>
                </div>
            </section>

            {/* Case Studies Grid */}
            <section className="py-16 bg-section-light">
                <div className="container mx-auto px-4">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {caseStudies.map((study, index) => (

                            <Link
                                key={study.id}
                                href={`/casestudies/${study.slug}`}
                                data-aos="fade-up"
                                data-aos-delay={index * 80}
                                className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow group"
                            >

                                <div className="aspect-video overflow-hidden">

                                    {study.hero_image && (
                                        <img
                                            src={`/storage/${study.hero_image}`}
                                            alt={study.subtitle}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    )}

                                </div>

                                <div className="p-6">

                                    <h3 className="font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-4">
                                        {language === "en"
                                            ? study.subtitle
                                            : study.subtitle_ja || study.subtitle}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {study.tags && (
                                            <span className="text-sm text-primary">
                                                #{study.tags}
                                            </span>
                                        )}
                                    </div>
                                </div>


                            </Link>

                        ))}

                    </div>

                </div>
            </section>

            <ContactCTA />

        </Layout>
    );
}