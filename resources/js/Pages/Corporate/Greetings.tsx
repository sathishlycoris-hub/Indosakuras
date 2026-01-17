import Layout from "@/components/layout/Layout";
import Subheader from "@/components/layout/Subheader";
import ContactCTA from "@/components/layout/Contact";
interface Greeting {
  id: number;
  title: string;
  description: string;
  image?: string | null;
}

export default function Greetings({ greeting }: { greeting: Greeting | null }) {
  return (
    <Layout>
      {/* Subheader */}
      <Subheader currentPage="Greetings" />

      {/* Main Content */}
      <section className="py-12 lg:py-16 bg-section-light">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-3xl lg:text-4xl font-bold text-primary">
                {greeting?.title ?? "Message from the President"}
              </h1>

              <div
                className="space-y-4 text-muted-foreground leading-relaxed prose max-w-none"
                dangerouslySetInnerHTML={{
                  __html:
                    greeting?.description ??
                    "<p>No greeting message available.</p>",
                }}
              />

              {/* Signature */}
              {/* <div className="pt-6 border-t border-border">
                <p className="text-muted-foreground mb-2">
                  Indo-Sakura Software Japan K.K.
                </p>
                <p className="text-muted-foreground mb-4">
                  Founder & CEO
                </p>
                <p className="text-2xl font-bold text-foreground">
                  Atul Paswan
                </p>
              </div> */}
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-80 h-96 rounded-lg overflow-hidden bg-muted">
                <img
                  src={
                    greeting?.image
                      ? `/storage/${greeting.image}`
                      : "/image/founder.webp"
                  }
                  alt="President Message"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </Layout>
  );
}
