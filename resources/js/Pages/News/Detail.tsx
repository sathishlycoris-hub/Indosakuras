import { usePage } from "@inertiajs/react";
import Layout from "@/components/layout/Layout";
import Subheader from "@/components/layout/Subheader";

export default function NewsDetail() {
  const { news } = usePage().props as any;

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <Layout>
      <Subheader currentPage="News" />

      <article className="py-12 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-primary mb-4">
          {news.short}
        </h1>

        <p className="text-sm mb-4">{formatDate(news.date)}</p>

        {news.image && (
          <img
            src={`/storage/${news.image}`}
            className="rounded-lg mb-6 justify-center mx-auto"
          />
        )}

        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: news.description }}
        />

        {news.pdf && (
          <a
            href={`/storage/${news.pdf}`}
            target="_blank"
            className="block mt-6 text-primary underline"
          >
            Download PDF
          </a>
        )}
      </article>
    </Layout>
  );
}
