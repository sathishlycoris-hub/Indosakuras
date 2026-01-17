import Layout from "@/components/layout/Layout";
import ContactCTA from "@/components/layout/Contact";
import Solutionhead from "@/components/layout/Solutionhead";
import { Button } from "@/components/ui/button";
import { Link } from "@inertiajs/react";
import { Head } from "@inertiajs/react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Sparkles,
  FileText,
  RefreshCw,
  Shield,
  Database,
  Cpu,
  ArrowRight
} from "lucide-react";


interface Solution {
  id: number;
  title: string;
  slug: string;
  hero_description: string | null;
}

interface Seo {
  meta_title?: string | null;
  meta_description?: string | null;
  meta_keywords?: string | null;
}

const Solutions = ({
  solutions,
  seo,
}: {
  solutions: Solution[];
  seo?: Seo | null;
}) => {
  const ICONS = [

    Sparkles,
    FileText,
    RefreshCw,
    Shield,
    Database,
    Cpu,
  ];

  const getIconById = (id: number) => {
    return ICONS[id % ICONS.length];
  };

   AOS.init({
        duration: 800,
        easing: "ease-out-cubic",
        once: true,
        offset: 80,
      });

  return (
    <Layout>
       <Head>
    <title>{seo?.meta_title ?? "Solutions | Indo Sakura"}</title>

    {seo?.meta_description && (
      <meta name="description" content={seo.meta_description} />
    )}

    {seo?.meta_keywords && (
      <meta name="keywords" content={seo.meta_keywords} />
    )}
  </Head>
      <Solutionhead />

      {/* Hero */}
      <section className="hero-gradient text-primary-foreground py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8" data-aos="fade-right">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Solutions</h1>
          <p className="text-lg text-primary-foreground/90">
            Transform your business with innovative solutions
          </p>
        </div>
      </section>

      {/* Solutions List */}
      <section className="py-16 bg-section-light text-gray-900">
        <div className="container mx-auto px-4 lg:px-8" data-aos="zoom-in">
          <div className="section-divider mb-4">
            <h2 className="text-2xl font-semibold">Solutions</h2>
          </div>

          <p className="text-muted-foreground mb-12">
            Cutting-edge solutions to solve your business challenges and drive digital transformation
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <div
                key={solution.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow border-t-4 border-t-pink-500"
              >
                <div className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center mb-4">
                    {(() => {
                      const Icon = getIconById(solution.id);
                      return <Icon className="w-6 h-6" />;
                    })()}
                  </div>

                  <h3 className="font-semibold text-lg mb-2">
                    {solution.title}
                  </h3>

                  <div
                    className="text-muted-foreground mb-6 line-clamp-3 prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{
                      __html: solution.hero_description ?? "",
                    }}
                  />

                  <Link href={`/solutions/${solution.slug}`}>
                    <Button variant="viewDetails" className="w-1/2">
                      View Details <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </Layout>
  );
};

export default Solutions;
