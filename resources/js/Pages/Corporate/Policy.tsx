import Layout from "@/components/layout/Layout";
import Subheader from "@/components/layout/Subheader";
import ContactCTA from "@/components/layout/Contact";
import { ChevronRight } from "lucide-react";
import { router } from "@inertiajs/react";

interface PolicySection {
  title: string;
  description: string;
}

interface Policy {
  id: number;
  title: string;
  slug: string;
  intro: string;
  sections: PolicySection[];
}

export default function PolicyPage({
  policies = [],
  activePolicy = null,
}: {
  policies?: Policy[];
  activePolicy?: Policy | null;
}) {
  // 🚨 CRITICAL GUARD (prevents crash)
  if (!policies.length || !activePolicy) {
    return (
      <Layout>
        <Subheader currentPage="Policy Statements" />
        <div className="container mx-auto px-4 py-12">
          <p className="text-muted-foreground">
            No policy content available.
          </p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Subheader currentPage="Policy Statements" />

      <section className="py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* SIDEBAR */}
            <aside className="lg:w-64">
              <nav className="space-y-1">
                {policies.map((policy) => (
                  <button
                    key={policy.id}
                    onClick={() =>
                      router.get(route("policy.show", policy.slug))
                    }
                    className={`w-full flex items-center justify-between px-4 py-3 text-sm border-l-2 transition
                      ${
                        activePolicy.id === policy.id
                          ? "border-primary text-primary bg-primary/5 font-medium"
                          : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                  >
                    <span className="flex-1 text-left">
                      {policy.title}
                    </span>
                    {activePolicy.id === policy.id && (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </button>
                ))}
              </nav>
            </aside>

            {/* CONTENT */}
            <main className="flex-1 bg-section-light p-6 rounded-lg">
              <div className="border-b border-primary mb-6" />

              <h1 className="text-primary text-2xl lg:text-3xl font-bold mb-4">
                {activePolicy.title}
              </h1>

              <div
                className="prose max-w-none mb-8"
                dangerouslySetInnerHTML={{
                  __html: activePolicy.intro,
                }}
              />

              <div className="space-y-6">
                {activePolicy.sections.map((section, index) => (
                  <div key={index}>
                    <h2 className="font-bold flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 bg-primary" />
                      {section.title}
                    </h2>

                    <div
                      className="prose max-w-none text-muted-foreground"
                      dangerouslySetInnerHTML={{
                        __html: section.description,
                      }}
                    />
                  </div>
                ))}
              </div>
            </main>

          </div>
        </div>
      </section>

      <ContactCTA />
    </Layout>
  );
}
