import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/Contexts/LanguageContext";
import { Link } from "@inertiajs/react";
import { AlertCircle, CheckCircle } from "lucide-react";

interface CaseStudy {
    title: string;
    title_ja?: string;

    subtitle?: string;
    subtitle_ja?: string;

    slug: string;

    tags?: string;

    hero_description?: string;
    hero_description_ja?: string;

    content?: string;
    content_ja?: string;

    benefit?: string;
    benefit_ja?: string;

    implementation?: string;
    implementation_ja?: string;

    hero_image?: string | null;
    secondary_image?: string | null;
}

export default function Show({
    caseStudy,
    relatedCases,
}: {
    caseStudy: CaseStudy;
    relatedCases: CaseStudy[];
}) {
    const { language } = useLanguage();

    return (
        <Layout>

            {/* HERO */}
            <section className="relative bg-primary py-10">
                <div className="container mx-auto px-4 text-white">
                    {/* Main Heading */}
                    <h1 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">
                        {language === "en" ? caseStudy.title : caseStudy.title_ja}
                    </h1>

                    {/* Subtitle */}
                    {/* {(caseStudy.subtitle || caseStudy.subtitle_ja) && (
                        <p className="text-lg text-muted-foreground mb-4">
                            {language === "en" ? caseStudy.subtitle : caseStudy.subtitle_ja}
                        </p>
                    )} */}


                </div>
            </section>

            {/* MAIN CONTENT */}
            <article className="py-16 bg-background">
                <div className="mx-auto px-4 max-w-7xl">

                    {/* Main Heading */}
                    <h1 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
                        {language === "en" ? caseStudy.subtitle : caseStudy.subtitle_ja}
                    </h1>

                    {/* Hero Image */}
                    {/* {caseStudy.hero_image && (
            <img
              src={`/storage/${caseStudy.hero_image}`}
              className="w-full rounded-lg mb-10"
            />
          )} */}
                    {  /* Tags */}
                    <div className="mb-4">
                        {caseStudy.tags && (
                            <p className="text-lg font-medium text-primary">
                                {caseStudy.tags}
                            </p>
                        )}
                    </div>

                    {/* Intro Paragraph */}
                    <div
                        className="prose prose-lg max-w-none mb-12"
                        dangerouslySetInnerHTML={{
                            __html:
                                language === "en"
                                    ? caseStudy.hero_description || ""
                                    : caseStudy.hero_description_ja || "",
                        }}
                    />

                    {/* SUBJECT + EFFECT */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

                        {/* Subject */}
                        <div className="bg-pink-50 border border-pink-200 rounded-lg p-6">

                            <h3 className="font-bold text-pink-600 mb-4 flex items-center gap-2">
                                <AlertCircle className="w-5 h-5" />
                                {language === "en" ? "Subject" : "課題"}
                            </h3>

                            <div
                                className="text-sm text-muted-foreground"
                                dangerouslySetInnerHTML={{
                                    __html:
                                        language === "en"
                                            ? caseStudy.benefit || ""
                                            : caseStudy.benefit_ja || "",
                                }}
                            />

                        </div>

                        {/* Implementation Effect */}
                        <div className="bg-pink-50 border border-pink-200 rounded-lg p-6">

                            <h3 className="font-bold text-pink-600 mb-4 flex items-center gap-2">
                                <CheckCircle className="w-5 h-5" />
                                {language === "en"
                                    ? "Implementation Effect"
                                    : "導入効果"}
                            </h3>

                            <div
                                className="text-sm text-muted-foreground"
                                dangerouslySetInnerHTML={{
                                    __html:
                                        language === "en"
                                            ? caseStudy.implementation || ""
                                            : caseStudy.implementation_ja || "",
                                }}
                            />

                        </div>

                        

                    </div>

                      {/* SECONDARY IMAGE */}
                    {caseStudy.secondary_image && (
                        <div className="mt-12 flex justify-center">
                            <img
                                src={`/storage/${caseStudy.secondary_image}`}
                                className="w-2/3 rounded-lg shadow-md"
                            />
                        </div>
                    )}


                    {/* MAIN CONTENT */}
                    {(caseStudy.content || caseStudy.content_ja) && (
                        <div
                            className="prose prose-lg max-w-none mt-10"
                            dangerouslySetInnerHTML={{
                                __html:
                                    language === "en"
                                        ? caseStudy.content || ""
                                        : caseStudy.content_ja || "",
                            }}
                        />
                    )}

                  
                </div>
            </article>

            {/* RELATED SECTION */}
            <div className="bg-section-light">
                <section className="py-10 container mx-auto px-4 max-w-7xl">

                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="w-1 h-6 bg-primary rounded"></span>
                        {language === "en"
                            ? "Refer other case studies"
                            : "他の事例を見る"}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {relatedCases.map((item) => (
                            <Link
                                key={item.slug}
                                href={`/casestudies/${item.slug}`}
                                className="group"
                            >

                                <div className="aspect-video rounded-lg overflow-hidden mb-3">

                                    <img
                                        src={`/storage/${item.hero_image}`}
                                        alt={language === "en" ? item.title : item.title_ja}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                                    />

                                </div>

                                <h3 className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">
                                    {language === "en" ? item.title : item.title_ja}
                                </h3>

                            </Link>
                        ))}

                    </div>

                    <div className="text-center mt-12">
                        <Link
                            href="/casestudies"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded hover:bg-primary/90 transition-colors"
                        >
                            {language === "en"
                                ? "List of Case Studies"
                                : "事例一覧"}
                        </Link>
                    </div>

                </section>
            </div>
        </Layout>
    );
}