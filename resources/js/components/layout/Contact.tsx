import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, usePage } from "@inertiajs/react";

export default function ContactCTA() {
  const { lang } = usePage<{ lang: "en" | "ja" }>().props;

  return (
    <section className="py-8 text-black/80 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">

        <div className="flex justify-center bg-[#eeeded] rounded-xl p-8 max-w-8xl mx-auto text-center">
          <div className="text-center max-w-xl">

            <div className="w-14 h-14 bg-white/60 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-primary" />
            </div>

            {/* TITLE */}
            <h2 className="text-2xl font-semibold mb-2">
              {lang === "en" ? "Contact Form" : "お問い合わせフォーム"}
            </h2>

            {/* DESCRIPTION */}
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              {lang === "en"
                ? "Have questions about our solutions or need a quote? Get in touch with our team today."
                : "ソリューションについてのご質問やお見積りのご依頼は、お気軽にお問い合わせください。"}
            </p>

            {/* BUTTON */}
            <Link href="/contact">
              <Button className="hover:bg-primary">
                {lang === "en" ? "Contact Us" : "お問い合わせ"}
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
}