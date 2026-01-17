import { usePage } from "@inertiajs/react";
import Layout from "@/components/layout/Layout";
import Serviceshead from "@/components/layout/Serviceshead";
import { useLanguage } from "@/Contexts/LanguageContext";

export default function SeminarDetail() {
  const { seminar } = usePage().props as any;
  const { language } = useLanguage();

  const getTitle = () =>
    language === "en"
      ? seminar.title
      : seminar.title_ja || seminar.title;

  const getDescription = () =>
    language === "en"
      ? seminar.description
      : seminar.description_ja || seminar.description;

  const getLocation = () =>
    language === "en"
      ? seminar.location
      : seminar.location_ja || seminar.location;

  const formatDate = (d: string) => {
    const date = new Date(d);
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${y}-${m}-${day}`;
  };

  const eventData = [
    {
      label_en: "Schedule",
      label_jp: "日時",
      value: [`${formatDate(seminar.date)} (${seminar.time})`],
    },
    {
      label_en: "Venue",
      label_jp: "会場",
      value: [getLocation()],
    },
    ...(seminar.participation_fee
      ? [
        {
          label_en: "Participation Fee",
          label_jp: "参加費",
          value: [
            language === "en"
              ? seminar.participation_fee
              : seminar.participation_fee_ja ||
              seminar.participation_fee,
          ],
        },
      ]
      : []),
    ...(seminar.organizer
      ? [
        {
          label_en: "Organizer",
          label_jp: "主催",
          value: [
            language === "en"
              ? seminar.organizer
              : seminar.organizer_ja || seminar.organizer,
          ],
        }, 
      ]
      : []),
    ...(seminar.sponsorship
      ? [
        {
          label_en: "Sponsorship",
          label_jp: "協賛",
          value: [
            language === "en"
              ? seminar.sponsorship
              : seminar.sponsorship_ja || seminar.sponsorship,
          ],
        },
      ]
      : []),
    ...(seminar.cooperation
      ? [
        {
          label_en: "Cooperation",
          label_jp: "協力",
          value: [
            language === "en"
              ? seminar.cooperation
              : seminar.cooperation_ja || seminar.cooperation,
          ],
        },
      ]
      : []),
  ];

  return (
    <Layout>
      <Serviceshead />

      {/* HERO */}
      <section className="bg-primary py-24 text-white">
        <div className="container mx-auto px-4">
          {seminar.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {seminar.tags.map((tag: string, i: number) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-section-light text-black rounded text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {getTitle()}
          </h1>
          <p className="text-lg opacity-90 max-w-3xl">
            {getDescription()}
          </p>
        </div>
      </section>

      {/* DETAILS */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">
            {language === "en" ? "Details" : "イベント概要"}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />

          <div className="max-w-7xl mx-auto bg-white shadow-md border border-border rounded-xl overflow-hidden">
            {eventData.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 ${index !== eventData.length - 1
                    ? "border-b border-border"
                    : ""
                  }`}
              >
                <div className="bg-section-light p-6 font-semibold text-gray-700 text-center">
                  {language === "en"
                    ? item.label_en
                    : item.label_jp}
                </div>

                <div className="col-span-2 p-6 text-gray-600">
                  {item.value.map((line: string, i: number) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
