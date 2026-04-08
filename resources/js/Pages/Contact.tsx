import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { router } from "@inertiajs/react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  User, 
  MessageSquare,
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  
  const initialFormState = {
    name_en: "",
    email: "",
    telephone: "",
    address: "",
    productService: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors: any = {};
    if (!formData.name_en.trim()) newErrors.name_en = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.telephone.trim()) newErrors.telephone = "Phone number is required";
    if (!formData.address.trim()) newErrors.address = "Location is required";
    if (!formData.productService.trim()) newErrors.productService = "Project requirement is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      toast({
        title: "Check your fields",
        description: "Please fix the highlights errors before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    router.post(route("contact.store"), { ...formData }, {
      onSuccess: () => {
        // ✅ Show Toast
        toast({
          title: "Message Sent!",
          description: "Thank you for contacting Indo Sakura. We will get back to you shortly.",
          variant: "default", // or "success" if your theme supports it
        });

        // ✅ Reset the form to its original empty state
        setFormData(initialFormState);
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

  const getInputClass = (errorKey: string) => {
    return `rounded-xl focus-visible:ring-primary focus-visible:border-primary ${
      errors[errorKey] ? "border-red-500" : "border-border"
    }`;
  };

  return (
    <Layout>
      <div className="min-h-screen bg-slate-50/50 dark:bg-zinc-950">
        <section className="py-20">
          <div className="container mx-auto px-4">
            
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h1 className="text-4xl font-bold tracking-tight mb-4 sm:text-5xl">
                Let's build something <span className="text-primary">together.</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Reach Out and Connect with Indo Sakura for innovative technology solutions.
              </p>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-stretch">
              
              {/* Sidebar */}
              <div className="lg:col-span-2 space-y-8 bg-primary p-8 rounded-3xl text-primary-foreground shadow-xl">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                  <p className="opacity-80 mb-8">Fill up the form and our team will get back to you within 24 hours.</p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-3 rounded-xl"><Phone className="w-5 h-5" /></div>
                    <p>03-5633-7776</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-3 rounded-xl"><Mail className="w-5 h-5" /></div>
                    <p>info.japan@indosakura.com</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-3 rounded-xl"><MapPin className="w-5 h-5" /></div>
                    <p>5-30-13 Toyo, Edogawa-ku, Tokyo</p>
                  </div>
                    <div className="pt-8 border-t border-white/10">
                  <p className="text-sm opacity-80 font-medium tracking-wide text-center lg:text-left">
                    Trusted Indo-Sakura Partner
                  </p>
                </div>
                </div>
              </div>

              {/* Form Content - Always visible */}
              <div className="lg:col-span-3">
                <form onSubmit={handleSubmit} className="bg-background border border-border rounded-3xl p-8 shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                      <label className="text-md font-semibold flex items-center gap-2">
                        <User className="w-4 h-4 text-muted-foreground" /> Full Name
                      </label>
                      <Input
                        name="name_en"
                        placeholder="John Doe"
                        value={formData.name_en}
                        onChange={handleInputChange}
                        className={getInputClass("name_en")}
                      />
                      {errors.name_en && <p className="text-red-500 text-xs">{errors.name_en}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-md font-semibold flex items-center gap-2">
                        <Mail className="w-4 h-4 text-muted-foreground" /> Email Address
                      </label>
                      <Input
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={getInputClass("email")}
                      />
                      {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                      <label className="text-md font-semibold flex items-center gap-2">
                        <Phone className="w-4 h-4 text-muted-foreground" /> Phone Number
                      </label>
                      <Input 
                        name="telephone"
                        placeholder="090-0000-0000"
                        value={formData.telephone}
                        onChange={handleInputChange}
                        className={getInputClass("telephone")}
                      />
                      {errors.telephone && <p className="text-red-500 text-xs">{errors.telephone}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-md font-semibold flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-muted-foreground" /> Location
                      </label>
                      <Input
                        name="address"
                        placeholder="Tokyo, Japan"
                        value={formData.address}
                        onChange={handleInputChange}
                        className={getInputClass("address")}
                      />
                      {errors.address && <p className="text-red-500 text-xs">{errors.address}</p>}
                    </div>
                  </div>

                  <div className="space-y-2 mb-8">
                    <label className="text-md font-semibold flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-muted-foreground" /> Project Details
                    </label>
                    <Textarea
                      name="productService"
                      placeholder="How can we help you?"
                      value={formData.productService}
                      onChange={handleInputChange}
                      rows={5}
                      className={`${getInputClass("productService")} resize-none`}
                    />
                    {errors.productService && <p className="text-red-500 text-xs">{errors.productService}</p>}
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 rounded-xl text-md font-semibold transition-all hover:opacity-90 active:scale-[0.98]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending Message..." : <>Send Message <Send className="w-4 h-4 ml-2" /></>}
                  </Button>
                </form>
              </div>

            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;