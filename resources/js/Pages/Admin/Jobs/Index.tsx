import { useState, useMemo } from "react";
import { useForm, router } from "@inertiajs/react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Pencil, Trash2, Plus, Eye, Search, Link as LinkIcon } from "lucide-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface Job {
  id: number;
  title?: string;
  title_ja?: string;

  department?: string;
  department_ja?: string;

  location?: string;
  location_ja?: string;

  employment_type?: string;
  employment_type_ja?: string;

  experience?: string;
  experience_ja?: string;

  salary?: string;
  salary_ja?: string;

  short_description?: string;
  short_description_ja?: string;

  about_role?: string;
  about_role_ja?: string;

  status: "published" | "draft";

  sections: {
    section_type: string;
    content?: string;
    content_ja?: string;
  }[];
}

export default function Index({ jobs }: { jobs: Job[] }) {
  const [mode, setMode] = useState<"add" | "edit" | "view">("add");
  const [activeLang, setActiveLang] = useState<"en" | "ja">("en");
  const [current, setCurrent] = useState<Job | null>(null);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const { data, setData, post, reset, processing } = useForm({
    title: "",
    department: "",
    location: "",
    employment_type: "",
    experience: "",
    salary: "",
    short_description: "",
    about_role: "",

    status: "draft" as "draft" | "published",
    sections: [] as { type: string; content: string; content_ja: string; }[],
    title_ja: "",
    department_ja: "",
    location_ja: "",
    employment_type_ja: "",
    experience_ja: "",
    salary_ja: "",
    short_description_ja: "",
    about_role_ja: "",
  });

  /* ================= SEARCH FILTER ================= */
  const filteredJobs = useMemo(() => {
    if (!search) return jobs;

    const q = search.toLowerCase();

    return jobs.filter((job) =>
      [
        job.title_ja,
        job.department_ja,
        job.location_ja,
        job.employment_type_ja,
        job.status,
      ]
        .filter((field): field is string => typeof field === "string")
        .some((field) => field.toLowerCase().includes(q))
    );
  }, [search, jobs]);

  /* ================= OPEN ADD ================= */
  const openAdd = () => {
    reset();
    setData({
      title: "",
      department: "",
      location: "",
      employment_type: "",
      experience: "",
      salary: "",
      short_description: "",
      about_role: "",
      status: "published",
      sections: [
        { type: "responsibilities", content: "", content_ja: "" },
        { type: "requirements", content: "", content_ja: "" },
        { type: "preferred", content: "", content_ja: "" },
        { type: "offer", content: "", content_ja: "" },
      ],

      title_ja: "",
      department_ja: "",
      location_ja: "",
      employment_type_ja: "",
      experience_ja: "",
      salary_ja: "",
      short_description_ja: "",
      about_role_ja: "",
    });
    setMode("add");
    setCurrent(null);
    setOpen(true);
  };

  /* ================= OPEN EDIT ================= */
  const openEdit = (job: Job) => {
    setMode("edit");
    setCurrent(job);
    setOpen(true);

    setData({
      title: job.title ?? "",
      department: job.department ?? "",
      location: job.location ?? "",
      employment_type: job.employment_type ?? "",
      experience: job.experience ?? "",
      salary: job.salary ?? "",
      short_description: job.short_description ?? "",
      about_role: job.about_role ?? "",
      status: job.status,
      sections: job.sections.map((s) => ({
        type: s.section_type,
        content: s.content ?? "",
        content_ja: s.content_ja ?? "",
      })),

      title_ja: job.title_ja ?? "",
      department_ja: job.department_ja ?? "",
      location_ja: job.location_ja ?? "",
      employment_type_ja: job.employment_type_ja ?? "",
      experience_ja: job.experience_ja ?? "",
      salary_ja: job.salary_ja ?? "",
      short_description_ja: job.short_description_ja ?? "",
      about_role_ja: job.about_role_ja ?? "",
    });
  };

  /* ================= OPEN VIEW ================= */
  const openView = (job: Job) => {
    setCurrent(job);
    setMode("view");
    setOpen(true);
  };

  /* ================= SAVE ================= */
  const submitAdd = () => {
    post(route("admin.jobs.store"), {
      onSuccess: () => {
        reset();
        setOpen(false);
      },
    });
  };

  const submitUpdate = () => {
    if (!current) return;
    router.post(
      route("admin.jobs.update", current.id),
      { _method: "PUT", ...data },
      {
        onSuccess: () => {
          reset();
          setOpen(false);
        },
      }
    );
  };

  /* ================= DELETE ================= */
  const deleteItem = (id: number) => {
    if (confirm("Delete this job?")) {
      router.delete(route("admin.jobs.destroy", id));
    }
  };

  /* ================= BULLET HELPERS ================= */
  const addSection = (type: string) => {
    setData("sections", [
      ...data.sections,
      { type, content: "", content_ja: "" },
    ]);
  };

  const updateSection = (index: number, value: string) => {
    const updated = [...data.sections];
    updated[index].content = value;
    setData("sections", updated);
  };
  const removeSectionPoint = (index: number) => {
    const updated = [...data.sections];
    updated.splice(index, 1);
    setData("sections", updated);
  };

  const renderSection = (type: string, title: string) => (
    <div className="space-y-3">
      <h4 className="font-semibold">{title}</h4>

      {data.sections
        .map((s, i) => ({ ...s, i }))
        .filter((s) => s.type === type)
        .map(({ content, content_ja, i }) => (
          <div key={i} className="flex gap-2 items-center">
            <Input
              disabled={mode === "view"}
              value={activeLang === "en" ? content : content_ja}
              onChange={(e) => {
                const updated = [...data.sections];

                if (activeLang === "en") {
                  updated[i].content = e.target.value;
                } else {
                  updated[i].content_ja = e.target.value;
                }

                setData("sections", updated);
              }}
              placeholder="Enter point"
            />

            {mode !== "view" && (
              <Button
                type="button"
                variant="destructive"
                size="icon"
                onClick={() => removeSectionPoint(i)}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            )}
          </div>
        ))}

      {mode !== "view" && (
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() =>
            setData("sections", [
              ...data.sections,
              { type, content: "", content_ja: "" },
            ])
          }
        >
          + Add Point
        </Button>
      )}
    </div>
  );
  return (
    <Authenticated header={<h2 className="font-bold text-xl">Jobs</h2>}>

      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Recruitments</h1>

        <Button onClick={openAdd}>
          <Plus className="w-4 h-4 mr-2" />
          Add Job
        </Button>
      </div>

      {/* 🔍 SEARCH */}
      <div className="mb-4 max-w-sm relative">
        <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search jobs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* ================= SHEET ================= */}
      {/* ================= SHEET ================= */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent className="w-[90%] sm:max-w-3xl overflow-y-auto">
          <SheetHeader>
            <SheetTitle>
              {mode === "add" && "Add Job"}
              {mode === "edit" && "Edit Job"}
              {mode === "view" && "Job Details"}
            </SheetTitle>
          </SheetHeader>

          {/* ================= VIEW MODE ================= */}
          {mode === "view" && current && (
            <div className="space-y-6 mt-6">

              {/* BASIC INFO */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <p><strong>Title:</strong> {current.title_ja || "No title available"}</p>
                <p><strong>Department:</strong> {current.department}</p>
                <p><strong>Location:</strong> {current.location}</p>
                <p><strong>Employment Type:</strong> {current.employment_type}</p>
                <p><strong>Experience:</strong> {current.experience}</p>
                <p><strong>Status:</strong> {current.status}</p>
                {current.salary && <p><strong>Salary:</strong> {current.salary}</p>}
              </div>

              {/* SHORT DESCRIPTION */}
              {/* {current.short_description_ja && (
                <div>
                  <h3 className="font-semibold mb-1">Short Description</h3>
                  <p>{current.short_description_ja}</p>
                </div>
              )} */}

              {/* ABOUT ROLE */}
              <div>
                <h3 className="font-semibold mb-2">About Role</h3>

                {current.about_role_ja ? (
                  <div
                    className="prose max-w-none"
                    dangerouslySetInnerHTML={{
                      __html: current.about_role_ja,
                    }}
                  />
                ) : (
                  <p>No details available</p>
                )}
              </div>

              {/* SECTIONS */}
              {current.sections?.length > 0 && (
                <div className="space-y-5">
                  {current.sections.map((section, i) => {
                    const titles: Record<string, string> = {
                      responsibilities: "Responsibilities",
                      requirements: "Requirements",
                      preferred: "Preferred Skills",
                      offer: "What We Offer",
                    };

                    return (
                      <div key={i}>
                        <h3 className="font-semibold mb-2">
                          {titles[section.section_type] ?? section.section_type}
                        </h3>

                        <ul className="list-disc pl-6 space-y-1">
                          <li>{section.content_ja || "No content available"}</li>
                        </ul>
                      </div>
                    );
                  })}
                </div>
              )}

            </div>
          )}


          {/* ================= ADD / EDIT MODE ================= */}
          {mode !== "view" && (
            <div className="space-y-5 mt-6">

              <div className="flex gap-3 mb-6">
                <Button
                  type="button"
                  variant={activeLang === "ja" ? "default" : "outline"}
                  onClick={() => setActiveLang("ja")}
                >
                  Japanese
                </Button>

                <Button
                  type="button"
                  variant={activeLang === "en" ? "default" : "outline"}
                  onClick={() => setActiveLang("en")}
                >
                  English
                </Button>
              </div>
              {/* Job Title */}
              <div className="space-y-1">
                <label className="text-sm font-medium">Job Title</label>
                <Input
                  value={activeLang === "en" ? data.title : data.title_ja}
                  onChange={(e) =>
                    activeLang === "en"
                      ? setData("title", e.target.value)
                      : setData("title_ja", e.target.value)
                  }
                />
              </div>

              {/* Department */}
              <div className="space-y-1">
                <label className="text-sm font-medium">Department</label>
                <Input
                  value={activeLang === "en" ? data.department : data.department_ja}
                  onChange={(e) =>
                    activeLang === "en"
                      ? setData("department", e.target.value)
                      : setData("department_ja", e.target.value)
                  }
                />
              </div>

              {/* Location */}
              <div className="space-y-1">
                <label className="text-sm font-medium">Location</label>
                <Input
                  value={activeLang === "en" ? data.location : data.location_ja}
                  onChange={(e) =>
                    activeLang === "en"
                      ? setData("location", e.target.value)
                      : setData("location_ja", e.target.value)
                  }
                />
              </div>

              {/* Employment Type */}
              <div className="space-y-1">
                <label className="text-sm font-medium">Employment Type</label>
                <Input
                  value={
                    activeLang === "en"
                      ? data.employment_type
                      : data.employment_type_ja
                  }
                  onChange={(e) =>
                    activeLang === "en"
                      ? setData("employment_type", e.target.value)
                      : setData("employment_type_ja", e.target.value)
                  }
                />
              </div>

              {/* Experience */}
              <div className="space-y-1">
                <label className="text-sm font-medium">Experience</label>
                <Input
                  value={activeLang === "en"
                    ? data.experience
                    : data.experience_ja}
                  onChange={(e) =>
                    activeLang === "en"
                      ? setData("experience", e.target.value)
                      : setData("experience_ja", e.target.value)
                  }
                /></div>

              {/* Salary */}
              <div className="space-y-1">
                <label className="text-sm font-medium">Salary</label>
                <Input
                  value={
                    activeLang === "en"
                      ? data.salary
                      : data.salary_ja
                  }
                  onChange={(e) =>
                    activeLang === "en"
                      ? setData("salary", e.target.value)
                      : setData("salary_ja", e.target.value)
                  }
                />
              </div>

              {/* Short Description */}
              <div className="space-y-1">
                <label className="text-sm font-medium">Short Description</label>
                <Input
                  placeholder="Short description"
                  value={activeLang === "en" ? data.short_description : data.short_description_ja}
                  onChange={(e) =>
                    activeLang === "en"
                      ? setData("short_description", e.target.value)
                      : setData("short_description_ja", e.target.value)
                  }
                />
              </div>

              {/* Language */}
              {/* <div className="space-y-1">
      <label className="text-sm font-medium">Language</label>
      <Select
        value={data.language}
        onValueChange={(v) => setData("language", v as "en" | "ja")}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select language" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="ja">Japanese</SelectItem>
        </SelectContent>
      </Select>
    </div> */}

              {/* Status */}
              <div className="space-y-1">
                <label className="text-sm font-medium">Status</label>
                <Select
                  value={data.status}
                  onValueChange={(v) =>
                    setData("status", v as "draft" | "published")
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="published">Published</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                    
                  </SelectContent>
                </Select>
              </div>

              {/* About Role */}
              <div className="space-y-2">
                <label className="text-sm font-medium">About Role</label>
                <ReactQuill
                  key={activeLang}
                  theme="snow"
                  style={{ height: "200px", marginBottom: "50px" }}
                  value={activeLang === "en" ? data.about_role : data.about_role_ja}
                  onChange={(value) => activeLang === "en" ? setData("about_role", value) : setData("about_role_ja", value)}
                />
              </div>

              {/* Sections */}
              <div className="space-y-6">
                {renderSection("responsibilities", "Responsibilities")}
                {renderSection("requirements", "Requirements")}
                {renderSection("preferred", "Preferred Skills")}
                {renderSection("offer", "What We Offer")}
              </div>

              {/* Submit */}
              <Button
                className="w-full mt-4"
                disabled={processing}
                onClick={mode === "edit" ? submitUpdate : submitAdd}
              >
                {mode === "edit" ? "Update Job" : "Save Job"}
              </Button>
            </div>
          )}

        </SheetContent>
      </Sheet>


      {/* ================= TABLE ================= */}
      <Table>
        <TableHeader className="bg-primary">
          <TableRow>
            <TableHead className="text-white">#</TableHead>
            <TableHead className="text-white">Title</TableHead>
            <TableHead className="text-white">Department</TableHead>
            <TableHead className="text-white">Status</TableHead>
             <TableHead className="text-white">Applications</TableHead>
            <TableHead className="text-white text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="bg-white">
          {filteredJobs.length === 0 && (
            <TableRow>
              <TableCell colSpan={5} className="text-center py-6 text-gray-500">
                No jobs found
              </TableCell>
            </TableRow>
          )}

          {filteredJobs.map((job, i) => (
            <TableRow key={job.id}>
              <TableCell>{i + 1}</TableCell>
              <TableCell>{job.title ?? "-"}</TableCell>
              <TableCell>{job.department ?? "-"}</TableCell>
              <TableCell>{job.status}</TableCell>
              <TableCell className="text-start">
  <button
    onClick={() =>
      router.visit(route("admin.job-applications.index", { job: job.id }))
    }
    className="text-pink-600 hover:underline font-medium"
  >
    View Applications
  </button>
</TableCell>
              <TableCell className="space-x-2 text-center">
                {/* <Button title="View" size="icon" onClick={() => openView(job)}>
                  <Eye className="w-4 h-4" />
                </Button> */}

               
                <Button title="Edit" size="icon" onClick={() => openEdit(job)}>
                  <Pencil className="w-4 h-4" />
                </Button>
                <Button
                  title="Delete"
                  size="icon"
                  variant="destructive"
                  onClick={() => deleteItem(job.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Authenticated>
  );
}
