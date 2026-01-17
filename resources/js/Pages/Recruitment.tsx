import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  MapPin,
  Clock,
  Calendar,
  DollarSign,
  Code,
} from "lucide-react";
import { Link } from "@inertiajs/react";
import Recruitmenthead from "@/components/layout/Recruitmenthead";
import ContactCTA from "@/components/layout/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  employment_type: string;
  experience: string;
  salary?: string;
   slug: string; 
}
 AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 120,
      delay: 80,
    });
export default function Recruitment({ jobs }: { jobs: Job[] }) {
  const stats = [
    { value: "150+", label: "Team Members" },
    { value: "20+", label: "Years Experience" },
    { value: "3", label: "Global Offices" },
  ];

  const benefits = [
    "Work on innovative AI and enterprise solutions",
    "Collaborate with global teams across three continents",
    "Competitive compensation and benefits package",
    "Continuous learning and career development opportunities",
    "Flexible work arrangements and work-life balance",
    "Modern office spaces with latest technology",
  ];

  const getColorClasses = () => ({
    bg: "bg-pink-50",
    text: "text-pink-600",
    border: "border-l-pink-500",
  });

  return (
    <Layout>
    <Recruitmenthead
  jobs={jobs.map(({ id, title, slug }) => ({ id, title, slug }))}
/>


      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center" data-aos="fade-left">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Join Our Team
          </h1>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Shape the future of technology with Indo-Sakura. We're looking
            for talented individuals who are passionate about innovation
            and making a real impact.
          </p>
          <div className="flex justify-center gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Why Join Indo-Sakura?
              </h2>
              <p className="text-muted-foreground mb-6">
                At Indo-Sakura, we believe in fostering a culture of innovation, collaboration, and continuous learning. Our team works on cutting-edge projects that impact businesses globally across Japan, India, and the USA.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="/image/job1.jpg"
                className="rounded-lg object-cover w-full h-80"
              />
              <img
                src="/image/job2.jpg"
                className="rounded-lg object-cover w-full h-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings (DYNAMIC) */}
      <section className="py-16 bg-section-light">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="section-divider mb-4">
            <h2 className="text-xl font-semibold">
              Current Openings
            </h2>
          </div>
          <p className="text-muted-foreground mb-8">
            Explore our available positions and find your perfect role
          </p>

          {jobs.length === 0 && (
            <p className="text-muted-foreground">
              No openings available at the moment.
            </p>
          )}

          <div className="space-y-4">
            {jobs.map((job, index) => {
              const colorClasses = getColorClasses();

              return (
                <div
               
                  key={job.id}
                  className={`bg-card rounded-lg border border-border border-l-4 ${colorClasses.border}`}
                >
                  <div className="p-6 flex flex-col lg:flex-row lg:items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl ${colorClasses.bg} ${colorClasses.text} flex items-center justify-center`}
                    >
                      <Code className="w-6 h-6" />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">
                        {job.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {job.department}
                      </p>

                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
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

                    <Link
                      href={`/recruitment/${job.slug}`}
                    >
                      <Button variant="viewDetails">
                        View Details & Apply
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* General Application */}
      {/* <section className="py-16 text-center">
        <h3 className="text-xl font-semibold mb-2">
          Don't See the Right Position?
        </h3>
        <p className="text-muted-foreground mb-6">
          Send us your resume and we’ll keep you in mind.
        </p>
        <Button>
          Submit General Application
          <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </section> */}
      <ContactCTA />
    </Layout>
  );
}
