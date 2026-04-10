import { Link, usePage } from "@inertiajs/react";

interface InsightNavItem {
  title: string;
  title_ja?: string;
  slug: string;
}

export default function Insightshead() {
  const { url, props } = usePage<{
    insightNav?: InsightNavItem[];
    lang: "en" | "ja";
  }>();

  const { lang } = props;

  const getValue = (en?: string, ja?: string) => {
    return lang === "ja" ? ja || en : en;
  };

  const tabs = [
    {
      label: getValue("Blogs", "ブログ"),
      path: "/blogs", // Removed trailing slash for consistent matching
    },
    {
      label: getValue("Case Studies", "事例紹介"),
      path: "/blogs/casestudies",
    },
    {
      label: getValue("Infographics", "インフォグラフィックス"),
      path: "/blogs/infographics",
    },
    {
      label: getValue("Seminar (Events)", "セミナー"),
      path: "/blogs/seminars-index",
    },
  ];

/* ================= ACTIVE LINK LOGIC ================= */
  /* ================= ACTIVE LINK LOGIC ================= */
/* ================= ACTIVE LINK LOGIC ================= */
const isActive = (path: string) => {
  const currentUrl = url.replace(/\/$/, "") || "/";
  const targetPath = path.replace(/\/$/, "");

  // 1. Special Case for Seminars (because index and show paths differ)
  if (targetPath === "/blogs/seminars-index") {
    return currentUrl === "/blogs/seminars-index" || currentUrl.startsWith("/blogs/seminars/");
  }

  // 2. Handle the "Blogs" (General) tab
  if (targetPath === "/blogs") {
    const isOtherTab = tabs.some(tab => {
      if (tab.path === "/blogs") return false;
      // Also check against the /blogs/seminars base for the exclusion
      if (tab.path === "/blogs/seminars-index") {
        return currentUrl.startsWith("/blogs/seminars");
      }
      return currentUrl.startsWith(tab.path.replace(/\/$/, ""));
    });
    
    return (currentUrl === "/blogs" || currentUrl.startsWith("/blogs/")) && !isOtherTab;
  }

  // 3. For standard sub-categories (Case Studies, Infographics)
  return currentUrl === targetPath || currentUrl.startsWith(`${targetPath}/`);
};
  return (
    <div className="bg-muted/30 border-b border-border">
      <div className="container mx-auto px-4">
        <nav className="flex flex-wrap items-center gap-1 py-3">
          {tabs.map((item, index) => (
            <div key={item.path} className="flex items-center">
              <Link
                href={item.path}
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.path)
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>

              {index < tabs.length - 1 && (
                <span className="text-muted-foreground/50 mx-1">/</span>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}