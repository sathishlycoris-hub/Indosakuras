import Layout from "@/components/layout/Layout";
import { usePage } from "@inertiajs/react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  MapPin,
  Clock,
  Calendar,
  DollarSign,
  CheckCircle,
} from "lucide-react";
import JobApplicationForm from "@/components/job/JobApplicationForm";
import Recruitmenthead from "@/components/layout/Recruitmenthead";


interface JobSection {
  section_type: "responsibilities" | "requirements" | "preferred" | "offer";
  content: string;
}

interface Job {
    id: number;
  title: string;
  department: string;
  location: string;
  employment_type: string;
  experience: string;
  salary?: string;
  about_role: string;
  sections: JobSection[];
   slug: string;
}
AOS.init({
  duration: 1000,
  easing: "ease-in-out",
  once: true,
  offset: 120,
  delay: 80,
});

export default function JobDetail({ job }: { job: Job }) {
  const getSection = (type: JobSection["section_type"]) =>
    job.sections.filter((s) => s.section_type === type);
    const { jobs } = usePage<{ jobs: Job[] }>().props;


  return (
   
      
      <Layout>
      <Recruitmenthead
        jobs={jobs}
        currentSlug={job.slug}
      />
      {/* Job Header */}
      <section className="hero-gradient text-primary-foreground py-12">
        <div className="container mx-auto px-4 lg:px-8" data-aos="fade-left">
          <p className="text-sm text-primary-foreground/80 mb-2">
            {job.department}
          </p>

          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            {job.title}
          </h1>

          <div className="flex flex-wrap gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {job.location}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {job.employment_type}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {job.experience}
            </span>
            {job.salary && (
              <span className="flex items-center gap-1">
                <DollarSign className="w-4 h-4" />
                {job.salary}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* LEFT */}
            <div className="lg:col-span-2 space-y-12">
              {/* About */}
              <div>
                <h2 className="text-xl font-semibold mb-4">
                  About the Role
                </h2>
                <div
                  className="prose max-w-none"
                  dangerouslySetInnerHTML={{
                    __html: job.about_role,
                  }}
                />
              </div>

              {/* Sections */}
              {[
                ["responsibilities", "Key Responsibilities"],
                ["requirements", "Requirements"],
                ["preferred", "Preferred Qualifications"],
                ["offer", "What We Offer"],
              ].map(([type, title]) => {
                const items = getSection(
                  type as JobSection["section_type"]
                );
                if (!items.length) return null;

                return (
                  <div key={type}>
                    <h2 className="text-xl font-semibold mb-4">
                      {title}
                    </h2>
                    <ul className="space-y-2">
                      {items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                          <span className="text-muted-foreground">
                            {item.content}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-1">
              <JobApplicationForm jobId={job.id} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
