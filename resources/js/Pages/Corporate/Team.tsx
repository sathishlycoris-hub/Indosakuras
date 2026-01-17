import { usePage } from "@inertiajs/react";
import { PageProps } from "@/types";
import Layout from "@/components/layout/Layout";
import Subheader from "@/components/layout/Subheader";
import ContactCTA from "@/components/layout/Contact";


/* =========================
   TYPES
   ========================= */

type TeamMember = {
  name: string;
  designation: string;
  description: string;
  image: string | null;
};

type TeamPageProps = {
  managementTeam: TeamMember[];
  technologyLeadership: TeamMember[];
  regionalLeadership: TeamMember[];
  advisoryBoard: TeamMember[];
  strategicAlliancePartners: TeamMember[];
};
/* =========================
   PAGE
   ========================= */

export default function Team() {
  const {
    managementTeam,
    technologyLeadership,
    regionalLeadership,
    advisoryBoard,
    strategicAlliancePartners,
  } = usePage<PageProps<TeamPageProps>>().props;

  /* =========================
     REUSABLE CARD
     ========================= */

  const ProfileCard = ({ member }: { member: TeamMember }) => (
    <div className="bg-card border border-border rounded-xl p-6 flex flex-col md:flex-row gap-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-full md:w-36 h-36 rounded-lg overflow-hidden bg-muted flex justify-center items-center flex-shrink-0">
        {member.image ? (
          <img
            src={`/storage/${member.image}`}
            alt={member.name}
            className="h-full w-auto object-cover"
          />
        ) : (
          <div className="text-sm text-muted-foreground">No Image</div>
        )}
      </div>

      <div className="flex-1">
        <h3 className="font-bold text-lg mb-1">{member.name}</h3>
        <p className="text-primary font-medium text-sm mb-2">
          {member.designation}
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {member.description}
        </p>
      </div>
    </div>
  );

  /* =========================
     REUSABLE SECTION
     ========================= */

  const SectionBlock = ({
    title,
    items,
    noMarginBottom = false,
  }: {
    title: string;
    items: TeamMember[];
    noMarginBottom?: boolean;
  }) => {
    if (!items || items.length === 0) return null;

    return (
      <div className={noMarginBottom ? "mb-0" : "mb-12"}>
        <h3 className="text-xl font-semibold text-foreground mb-6 inline-block bg-white px-6 py-3 border-l-4 border-primary pl-4">
          {title}
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <ProfileCard key={index} member={item} />
          ))}
        </div>
      </div>
    );
  };

  /* =========================
     RENDER
     ========================= */

  return (
    <Layout>
      <Subheader currentPage="Management Team" />

      {/* Hero */}
      <section className="py-12 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-primary text-3xl lg:text-4xl font-bold mb-2">
            Our Team
          </h1>
          <p className="text-muted-foreground">
            Our team is the heart of our success
          </p>
        </div>
      </section>

      {/* Executive Leadership */}
      <section className="py-12 bg-section-light">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 lg:p-12">
            <h2 className="text-primary text-3xl font-bold mb-2 text-center">
              Executive Leadership
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Experienced Leaders Shaping Our Future Leading with Vision,
              Integrity and Purpose
            </p>

            <SectionBlock title="Management Team" items={managementTeam} />
            <SectionBlock
            
              title="Technology & Innovation Leadership"
              items={technologyLeadership}
            />
            <SectionBlock
              title="Regional Leadership"
              items={regionalLeadership}
            />
            <SectionBlock
              title="Advisory Board"
              items={advisoryBoard}
              noMarginBottom
            />
          </div>
        </div>
      </section>

      {/* Our Ecosystem */}
      <section className="bg-section-light py-6 -mt-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-section-light rounded-xl p-8 lg:p-12 pt-0">
            <h2 className="text-primary text-3xl font-bold mb-2 text-center">
              Our Ecosystem
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Strategic Alliances Enabling Innovation and Growth
            </p>

            <SectionBlock
              title="Strategic Alliance Partners"
              items={strategicAlliancePartners}
            />
          </div>
        </div>
      </section>

      <ContactCTA />
    </Layout>
  );
}
