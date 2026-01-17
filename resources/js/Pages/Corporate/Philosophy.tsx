import Layout from "@/components/layout/Layout";
import Subheader from "@/components/layout/Subheader";
import ContactCTA from "@/components/layout/Contact";
interface Philosophy {
  id: number;
  title: string;
  content: string;
  description: string;
  image?: string | null;
}

export default function Philosophy({
  philosophies,
}: {
  philosophies: Philosophy[];
}) {
  return (
    <Layout>
      {/* Subheader */}
      <Subheader currentPage="Corporate Philosophy" />

      {/* Philosophy Sections */}
      {philosophies.map((item, index) => (
        <section
         
          key={item.id}
          className={`py-20 ${index % 2 === 0 ? "bg-section-light" : "bg-primary/5"
            }`}
        >
          <div>
            <h2 className="text-3xl font-bold text-center text-primary mb-2">
              {item.title}
            </h2>

            <div
              
                  
              className="text-center text-muted-foreground mb-12 prose max-w-3xl mx-auto"
              dangerouslySetInnerHTML={{ __html: item.content }}
            />

            <div 
             className="grid md:grid-cols-2 gap-8 items-center">
              {/* Image */}
              {item.image && (
                <div className="flex justify-center">
                  <img
                    src={`/storage/${item.image}`}
                    alt={item.title}
                    className="w-80 rounded-lg shadow-md"
                  />
                </div>
              )}

              {/* Description */}
              <div 
                className="text-muted-foreground leading-relaxed prose max-w-3xl"
                dangerouslySetInnerHTML={{
                  __html: item.description,
                }}
              />
            </div>
          </div>
        </section>
      ))}

      {/* Contact CTA */}
      <ContactCTA />
    </Layout>
  );
}
