import { Link, usePage } from "@inertiajs/react";
import { useLanguage } from "@/Contexts/LanguageContext";

type ServiceNavItem = {
  title: string;
  slug: string;
};

type PageProps = {
  serviceNav?: ServiceNavItem[];
};

const Serviceshead = () => {
  const { url, props } = usePage<PageProps>();
  const { language } = useLanguage();

 
  const serviceNav = props.serviceNav ?? [];

  const navItems = [
    {
      path: "/services",
      label: language === "en" ? "Services TOP" : "サービスTOP",
      exact: true,
    },

    ...serviceNav.map((service) => ({
      path: `/services/${service.slug}`,
      label: service.title,
    })),

    {
      path: "/services/seminars-index",
      label: language === "en" ? "Seminar (Events)" : "セミナー",
      exact: true,
    },
    {
      path: "/services/blogs-index",
      label: language === "en" ? "Blogs" : "ブログ",
      exact: true,
    },
  ];

  const isActive = (item: { path: string; exact?: boolean }) => {
    if (item.exact) return url === item.path;
    return url === item.path || url.startsWith(item.path + "/");
  };

  return (
    <div className="bg-muted/30 border-b border-border">
      <div className="container mx-auto px-4">
        <nav className="flex flex-wrap items-center justify-start md:justify-center gap-1 py-3">
          {navItems.map((item, index) => (
            <div key={item.path} className="flex items-center">
              <Link
                href={item.path}
                className={`px-1 py-2 text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item)
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>

              {index < navItems.length - 1 && (
                <span className="text-muted-foreground/50 mx-1">/</span>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Serviceshead;
