import Layout from "@/components/layout/Layout";
import Subheader from "@/components/layout/Subheader";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@inertiajs/react";


interface NewsEvent {
  id: number;
  date: string;
  eventtype: string;
  short: string;
  description: string;
}

interface PageProps {
  news: NewsEvent[];
  filters: string[];
}


export default function Pressrelease({ news = [], filters = [] }: PageProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredNews =
    activeFilter === "All"
      ? news
      : news.filter((item) => item.eventtype === activeFilter);

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("en-GB");

  return (
    <Layout>
      <Subheader currentPage="Press Release" />

      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-primary text-3xl lg:text-4xl font-bold mb-8">
            News
          </h1>

          {/* FILTER TABS */}
          <div className="flex flex-wrap gap-2 mb-8">
            {filters.map((filter, index) => (
              <button
             
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                  activeFilter === filter
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-muted-foreground border-border hover:border-primary hover:text-primary"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* NEWS LIST */}
          {filteredNews.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              No news found
            </div>
          ) : (
            filteredNews.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-1 md:grid-cols-[120px_160px_1fr_100px] items-center gap-4 py-4 border-b border-border hover:bg-muted/50 transition-colors"
              >
                {/* DATE */}
                <div className="text-md text-muted-foreground">
                  {formatDate(item.date)}
                </div>

                {/* TYPE */}
                <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium w-fit">
                  {item.eventtype}
                </div>

                {/* TITLE */}
                <div className="text-foreground">
                  {item.short}
                </div>

                {/* LINK */}
                <Link
                  href={route("news.show", item.id)}
                  className="justify-self-start"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-primary border-primary hover:bg-primary hover:text-white whitespace-nowrap"
                  >
                    View
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
            ))
          )}
        </div>
      </section>
    </Layout>
  );
}
