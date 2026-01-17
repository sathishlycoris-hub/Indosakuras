import { useState } from "react";
import { useForm } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Upload } from "lucide-react";
// import ReCAPTCHA from "react-google-recaptcha";

interface JobApplicationFormProps {
  jobId: number;
}

const JobApplicationForm = ({ jobId }: JobApplicationFormProps) => {
  //  local frontend validation error (NO browser alert)
  const [localError, setLocalError] = useState<string | null>(null);

  const { data, setData, post, processing, errors, reset } = useForm({
    full_name: "",
    email: "",
    confirm_email: "",
    phone: "",
    cover_letter: "",
    resume: null as File | null,
    agree_terms: false,
    // recaptcha: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError(null);

    if (!data.agree_terms) {
      setLocalError(
        "You must agree to the privacy policy and terms of service."
      );
      return;
    }

    // if (!data.recaptcha) {
    //   setLocalError("Please verify you are not a robot.");
    //   return;
    // }

    if (data.email !== data.confirm_email) {
      setLocalError("Email and Confirm Email must match.");
      return;
    }

    post(route("job.apply", jobId), {
      forceFormData: true,
      onSuccess: () => {
        reset();
        // window.grecaptcha?.reset();
        setLocalError(null);
      },
    });
  };

  return (
    <div className="sticky top-24 bg-card border border-border rounded-lg p-6">
      <h3 className="font-semibold mb-4">Apply for this Position</h3>

      {/*  Inline designed alert (frontend validation) */}

      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Full Name *
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={data.full_name}
            onChange={(e) => setData("full_name", e.target.value)}
            className="w-full px-4 py-2 border border-input rounded-lg bg-background text-sm"
          />
          {errors.full_name && (
            <p className="text-xs text-red-500 mt-1">
              {errors.full_name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Email *
          </label>
          <input
            type="email"
            placeholder="example@gmail.com"
            value={data.email}
            onChange={(e) => setData("email", e.target.value)}
            className="w-full px-4 py-2 border border-input rounded-lg bg-background text-sm"
          />
          {errors.email && (
            <p className="text-xs text-red-500 mt-1">
              {errors.email}
            </p>
          )}
        </div>

        {/* Confirm Email */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Email (Confirm) *
          </label>
          <input
            type="email"
            placeholder="example@gmail.com"
            value={data.confirm_email}
            onChange={(e) =>
              setData("confirm_email", e.target.value)
            }
            className="w-full px-4 py-2 border border-input rounded-lg bg-background text-sm"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            value={data.phone}
            onChange={(e) => setData("phone", e.target.value)}
            className="w-full px-4 py-2 border border-input rounded-lg bg-background text-sm"
          />
          {errors.phone && (
            <p className="text-xs text-red-500 mt-1">
              {errors.phone}
            </p>
          )}
        </div>

        {/* Resume */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Resume / CV *
          </label>

          <label className="border-2 border-dashed border-input rounded-lg p-6 text-center cursor-pointer hover:border-primary transition-colors block">
            <Upload className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
            <p className="text-sm text-muted-foreground">
              Click to upload or drag and drop
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              PDF, DOC, DOCX (Max 5MB)
            </p>

            <input
              type="file"
              className="hidden"
              onChange={(e) =>
                setData("resume", e.target.files?.[0] || null)
              }
            />
          </label>

          {errors.resume && (
            <p className="text-xs text-red-500 mt-1">
              {errors.resume}
            </p>
          )}
        </div>

        {/* Cover Letter */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Cover Letter
          </label>
          <textarea
            rows={4}
            placeholder="Tell us why you're interested in this position..."
            value={data.cover_letter}
            onChange={(e) =>
              setData("cover_letter", e.target.value)
            }
            className="w-full px-4 py-2 border border-input rounded-lg bg-background text-sm resize-none"
          />
        </div>
        {localError && (
          <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-800 text-sm">
            {localError}
          </div>
        )}
        {/* Agree Terms */}
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            checked={data.agree_terms}
            onChange={(e) =>
              setData("agree_terms", e.target.checked)
            }
            className="mt-1"
          />

          <label className="text-xs text-muted-foreground mt-1">
            I agree to the{" "}
            <a
              href="/policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              privacy policy
            </a>{" "}
            and{" "}
            <a
              href="/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              terms of service
            </a>
          </label>
        </div>



        {/* reCAPTCHA */}
        {/* <ReCAPTCHA
          sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
          onChange={(token) =>
            setData("recaptcha", token || "")
          }
        /> */}

        {/* Submit */}
        <Button className="w-full" type="submit" disabled={processing}>
          Submit Application <ArrowRight className="w-4 h-4 ml-1" />
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          Our platform accepts resumes to submit your career passport.
          Start today and unlock your full potential.
        </p>
      </form>
    </div>
  );
};

export default JobApplicationForm;
