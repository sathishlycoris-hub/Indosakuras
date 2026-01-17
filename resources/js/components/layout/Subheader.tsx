import { Link, usePage } from "@inertiajs/react";

interface SubheaderProps {
  currentPage?: string;
}

const Subheader = ({ currentPage }: SubheaderProps) => {
  const { url } = usePage(); // replaces useLocation

  const tabs = [
    { name: "Corporate Info TOP", path: "/corporate-info" },
    { name: "Greetings", path: "/corporate/greetings" },
    { name: "Corporate Philosophy", path: "/corporate/philosophy" },
    { name: "Profile", path: "/corporate/profile" },
    { name: "History", path: "/corporate/history" },
    { name: "Team", path: "/corporate/team" },
    { name: "Press Release", path: "/corporate/press-release" },
    { name: "Clients/Biz Partners", path: "/corporate/clients" },
    { name: "Policy Statements", path: "/corporate/policy" },
  ];

  const isActive = (path: string, name: string) =>
    url === path || url.startsWith(path + "/") || currentPage === name;

  return (
    <div className="bg-muted/50 border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex flex-wrap items-center justify-start gap-1 py-3">
          {tabs.map((tab, index) => (
            <div key={tab.path} className="flex items-center">
              <Link
                href={tab.path}
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                  isActive(tab.path, tab.name)
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground"
                }`}
              >
                {tab.name}
              </Link>

              {/* Slash separator */}
              {index < tabs.length - 1 && (
                <span className="text-muted-foreground/50 mx-1">/</span>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Subheader;
