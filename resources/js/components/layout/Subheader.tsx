import { Link, usePage } from "@inertiajs/react";

interface SubheaderProps {
  currentPage?: string;
}

const Subheader = ({ currentPage }: SubheaderProps) => {
  const { url, props } = usePage<{ lang: "en" | "ja" }>();
  const lang = props.lang;

  const tabs = [
    {
      name_en: "Corporate Info TOP",
      name_ja: "企業情報トップ",
      path: "/corporate-info",
    },
    {
      name_en: "Greetings",
      name_ja: "ご挨拶",
      path: "/corporate/greetings",
    },
    {
      name_en: "Corporate Philosophy",
      name_ja: "企業理念",
      path: "/corporate/philosophy",
    },
    {
      name_en: "Profile",
      name_ja: "会社概要",
      path: "/corporate/profile",
    },
    {
      name_en: "History",
      name_ja: "沿革",
      path: "/corporate/history",
    },
    {
      name_en: "Team",
      name_ja: "チーム",
      path: "/corporate/team",
    },
    {
      name_en: "Press Release",
      name_ja: "プレスリリース",
      path: "/corporate/press-release",
    },
    {
      name_en: "Clients/Biz Partners",
      name_ja: "取引先・ビジネスパートナー",
      path: "/corporate/clients",
    },
    {
      name_en: "Policy Statements",
      name_ja: "ポリシー",
      path: "/corporate/policy",
    },
  ];

  const isActive = (path: string, name: string) =>
    url === path || url.startsWith(path + "/") || currentPage === name;

  return (
    <div className="bg-muted/50 border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex flex-wrap items-center justify-start gap-1 py-3">
          {tabs.map((tab, index) => {
            const label = lang === "ja" ? tab.name_ja : tab.name_en;

            return (
              <div key={tab.path} className="flex items-center">
                <Link
                  href={tab.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                    isActive(tab.path, label)
                      ? "text-primary border-b-2 border-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {label}
                </Link>

                {index < tabs.length - 1 && (
                  <span className="text-muted-foreground/50 mx-1">/</span>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Subheader;