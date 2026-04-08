import { useState } from "react";
import { router } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  X,
  Send,
  User,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  CheckCircle,
  Rocket,
  FileText,
} from "lucide-react";

interface ContactPopupProps {
  open: boolean;
  onClose: () => void;
}

export default function ContactPopup({ open, onClose }: ContactPopupProps) {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name_en: "",
    email: "",
    telephone: "",
    address: "",
    productService: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name_en.trim()) newErrors.name_en = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.telephone.trim()) newErrors.telephone = "Phone number is required";
    if (!formData.address.trim()) newErrors.address = "Location is required";
    if (!formData.productService.trim())
      newErrors.productService = "Project details are required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    router.post(route("contact.store"), formData, {
      onSuccess: () => {
        setSubmitted(true);
        setFormData({
          name_en: "",
          email: "",
          telephone: "",
          address: "",
          productService: "",
        });
        setErrors({});
      },
      onError: () => {
        toast({
          title: "Submission failed",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      },
      onFinish: () => setIsSubmitting(false),
    });
  };

  const steps = [
    {
      icon: CheckCircle,
      title: "Contact Us",
      desc: "Fill out the form to schedule a personalized consultation with our experts.",
    },
    {
      icon: Rocket,
      title: "Project Kickoff",
      desc: "Sign the contract and form a partnership with us to kick-start your project.",
    },
    {
      icon: FileText,
      title: "Get A Quotation",
      desc: "Based on your project, we will share a proposal for cost and timeline estimates.",
    },
  ];

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Modal */}
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-primary transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* ── LEFT PANEL ── */}
        <div
          className="md:w-[42%] p-8 flex flex-col justify-between text-white"
          style={{
            background:
              "linear-gradient(135deg, #D83377 0%, #D83377 40%, #D83377 100%)",
          }}
        >
          <div>
            <h2 className="text-2xl font-bold leading-snug mb-6">
              Let's Spark A Transformative Conversation
            </h2>

            <div className="space-y-5">
              {steps.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-3">
                  <Icon className="w-5 h-5 mt-0.5 flex-shrink-0 text-white-300" />
                  <div>
                    <p className="font-semibold text-sm">{title}</p>
                    <p className="text-sm ">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-white/80">
            <Phone className="w-4 h-4" />
            <span>tel:0356337776</span>
          </div>
        </div>

        {/* ── RIGHT PANEL ── */}
        <div className="flex-1 p-8 overflow-y-auto max-h-[90vh]">
          {submitted ? (
            /* Success state */
            <div className="flex flex-col items-center justify-center h-full py-12 text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Message Sent!
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Thank you for reaching out. Our team will get back to you within
                24 hours.
              </p>
              <Button onClick={onClose} variant="outline">
                Close
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Send us a message
              </h3>

              {/* Full Name */}
              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground flex items-center gap-1">
                  <User className="w-3 h-3" /> Full Name{" "}
                  <span className="text-red-500">*</span>
                </label>
                <Input
                  name="name_en"
                  placeholder="Full Name"
                  value={formData.name_en}
                  onChange={handleChange}
                  className={`border-0 border-b rounded-none focus-visible:ring-0 px-0 ${
                    errors.name_en ? "border-red-500" : "border-border"
                  }`}
                />
                {errors.name_en && (
                  <p className="text-red-500 text-xs">{errors.name_en}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground flex items-center gap-1">
                  <Mail className="w-3 h-3" /> Email{" "}
                  <span className="text-red-500">*</span>
                </label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`border-0 border-b rounded-none focus-visible:ring-0 px-0 ${
                    errors.email ? "border-red-500" : "border-border"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground flex items-center gap-1">
                  <Phone className="w-3 h-3" /> Phone Number{" "}
                  <span className="text-red-500">*</span>
                </label>
                <Input
                  name="telephone"
                  placeholder="+1 (555) 000-0000"
                  value={formData.telephone}
                  onChange={handleChange}
                  className={`border-0 border-b rounded-none focus-visible:ring-0 px-0 ${
                    errors.telephone ? "border-red-500" : "border-border"
                  }`}
                />
                {errors.telephone && (
                  <p className="text-red-500 text-xs">{errors.telephone}</p>
                )}
              </div>

              {/* Location */}
              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> Location{" "}
                  <span className="text-red-500">*</span>
                </label>
                <Input
                  name="address"
                  placeholder="City, Country"
                  value={formData.address}
                  onChange={handleChange}
                  className={`border-0 border-b rounded-none focus-visible:ring-0 px-0 ${
                    errors.address ? "border-red-500" : "border-border"
                  }`}
                />
                {errors.address && (
                  <p className="text-red-500 text-xs">{errors.address}</p>
                )}
              </div>

              {/* Project Details */}
              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground flex items-center gap-1">
                  <MessageSquare className="w-3 h-3" /> Tell Us More About Your
                  Project
                </label>
                <Textarea
                  name="productService"
                  placeholder="Describe your idea to help us assign the relevant consultation expert."
                  value={formData.productService}
                  onChange={handleChange}
                  rows={3}
                  className={`border-0 border-b rounded-none focus-visible:ring-0 px-0 resize-none ${
                    errors.productService ? "border-red-500" : "border-border"
                  }`}
                />
                {errors.productService && (
                  <p className="text-red-500 text-xs">{errors.productService}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full rounded-xl font-semibold mt-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send request <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}