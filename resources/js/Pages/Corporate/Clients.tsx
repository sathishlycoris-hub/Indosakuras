import Layout from "@/components/layout/Layout";
import Subheader from "@/components/layout/Subheader";
import ContactCTA from "@/components/layout/Contact";
interface ClientSection {
  section_type: "customer" | "alliance" | "contract" | "partner";
  name: string;
}

interface Client {
  id: number;
  description: string;
  sections: ClientSection[];
}

const Clients = ({ client }: { client: Client | null }) => {
  const getCompanies = (type: ClientSection["section_type"]) =>
    client?.sections
      .filter((s) => s.section_type === type)
      .map((s) => s.name) ?? [];

  const renderCompanyList = (companies: string[]) => (
    <div className="grid md:grid-cols-2 gap-x-12 gap-y-2">
      {companies.map((company, index) => (
        <div key={index} className="flex items-center gap-2 py-2">
          <div className="w-2 h-2 bg-primary flex-shrink-0" />
          <span className="text-muted-foreground hover:text-primary transition-colors">
            {company}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <Layout>
      {/* Subheader */}
      <Subheader currentPage="Clients / Biz Partners" />

      {/* Customer Companies */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-primary text-3xl lg:text-4xl font-bold mb-8">
            Customer Company
          </h2>

          {renderCompanyList(getCompanies("customer"))}
        </div>
      </section>

      {/* Alliance Companies */}
      <section className="py-8 bg-section-light">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b border-primary">
            Alliance Companies
          </h2>

          {renderCompanyList(getCompanies("alliance"))}
        </div>
      </section>

      {/* Contract Companies */}
      <section className="py-8 bg-section-light">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b border-primary">
            Product / Service Agency Contract Companies
          </h2>

          {renderCompanyList(getCompanies("contract"))}
        </div>
      </section>

      {/* Partner Companies */}
      <section className="py-8 bg-section-light">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b border-primary">
            Partner Companies
          </h2>

          {renderCompanyList(getCompanies("partner"))}

          {client?.description && (
            <div
              className="prose max-w-none mt-8 text-muted-foreground"
              dangerouslySetInnerHTML={{
                __html: client.description,
              }}
            />
          )}

          <p className="text-sm text-muted-foreground mt-8 text-center">
            *Only companies that have permission to publish are listed.
            (Company names in alphabetical order, honorifics omitted)
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </Layout>
  );
};

export default Clients;
