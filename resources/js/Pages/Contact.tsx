import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { router } from "@inertiajs/react";

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name_en: "",
    email: "",
    telephone: "",
    address: "",
    requests: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Handle input change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    // clear error on typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  // Validation
  const validateForm = () => {
    const newErrors: any = {};

    if (!formData.name_en.trim()) {
      newErrors.name_en = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.telephone.trim()) {
      newErrors.telephone = "Phone number is required";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Location is required";
    }

    if (!formData.requests.trim()) {
      newErrors.requests = "Project requirement is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fill all required fields correctly.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    router.post(
      route("contact.store"),
      {
        ...formData,
      },
      {
        onSuccess: () => {
          setSubmitted(true);
        },
        onError: () => {
          toast({
            title: "Error",
            description: "Something went wrong. Please try again.",
            variant: "destructive",
          });
        },
        onFinish: () => {
          setIsSubmitting(false);
        },
      }
    );
  };

  return (
    <Layout>
      {/* Success Message */}
      {submitted ? (
        <section className="py-20">
          <div className="container mx-auto px-4 text-center max-w-lg">
            <h2 className="text-2xl font-bold mb-4">
              Thank you for contacting us!
            </h2>
            <p className="text-muted-foreground mb-6">
              We will get back to you shortly.
            </p>

            <Button onClick={() => setSubmitted(false)}>
              Submit Another Response
            </Button>
          </div>
        </section>
      ) : (
        <form onSubmit={handleSubmit}>
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4 flex justify-center">
              <div className="w-full max-w-lg border border-border rounded-2xl p-6 shadow-sm bg-background">

                <h2 className="text-xl font-semibold mb-6 text-center">
                  Contact Us
                </h2>

                {/* Full Name */}
                <div className="mb-4">
                  <label className="text-sm font-medium">Full Name *</label>
                  <Input
                    name="name_en"
                    value={formData.name_en}
                    onChange={handleInputChange}
                  />
                  {errors.name_en && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name_en}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label className="text-sm font-medium">Email *</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className="mb-4">
                  <label className="text-sm font-medium">Phone Number *</label>
                  <Input
                    name="phone"
                    value={formData.telephone}
                    onChange={handleInputChange}
                  />
                  {errors.telephone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.telephone}
                    </p>
                  )}
                </div>

                {/* Location */}
                <div className="mb-4">
                  <label className="text-sm font-medium">Location *</label>
                  <Input
                    name="location"
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                  {errors.address && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.address}
                    </p>
                  )}
                </div>

                {/* Requirement */}
                <div className="mb-4">
                  <label className="text-sm font-medium">
                    Project Requirement *
                  </label>
                  <Textarea
                    name="requirement"
                    value={formData.requests}
                    onChange={handleInputChange}
                    rows={4}
                  />
                  {errors.requests && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.requests}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  className="w-full mt-4"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>

              </div>
            </div>
          </section>
        </form>
      )}
    </Layout>
  );
};

export default Contact;