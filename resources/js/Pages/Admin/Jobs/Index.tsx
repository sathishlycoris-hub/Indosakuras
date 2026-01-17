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
import { Pencil, Trash2, Plus, Eye, Search } from "lucide-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  employment_type: string;
  experience: string;
  salary?: string;
  short_description?: string;
  about_role: string;
  language: "en" | "ja";
  status: "published" | "draft";
  sections: {
    section_type: string;
    content: string;
  }[];
}

export default function Index({ jobs }: { jobs: Job[] }) {
  const [mode, setMode] = useState<"add" | "edit" | "view">("add");
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
    language: "en" as "en" | "ja",
    status: "draft" as "draft" | "published",
    sections: [] as { type: string; content: string }[],
  });

  /* ================= SEARCH FILTER ================= */
  const filteredJobs = useMemo(() => {
    if (!search) return jobs;

    const q = search.toLowerCase();

    return jobs.filter((job) =>
      [
        job.title,
        job.department,
        job.location,
        job.employment_type,
        job.status,
      ]
        .filter(Boolean)
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
      language: "en",
      status: "draft",
      sections: [
        { type: "responsibilities", content: "" },
        { type: "requirements", content: "" },
        { type: "preferred", content: "" },
        { type: "offer", content: "" },
      ],
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
      title: job.title,
      department: job.department,
      location: job.location,
      employment_type: job.employment_type,
      experience: job.experience,
      salary: job.salary || "",
      short_description: job.short_description || "",
      about_role: job.about_role,
      language: job.language,
      status: job.status,
      sections: job.sections.map((s) => ({
        type: s.section_type,
        content: s.content,
      })),
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
    setData("sections", [...data.sections, { type, content: "" }]);
  };

  const updateSection = (index: number, value: string) => {
    const updated = [...data.sections];
    updated[index].content = value;
    setData("sections", updated);
  };

  const renderSection = (type: string, title: string) => (
    <div className="space-y-2">
      <h4 className="font-semibold">{title}</h4>

      {data.sections
        .map((s, i) => ({ ...s, i }))
        .filter((s) => s.type === type)
        .map(({ content, i }) => (
          <Input
            key={i}
            disabled={mode === "view"}
            value={content}
            onChange={(e) => updateSection(i, e.target.value)}
            placeholder="Enter point"
          />
        ))}

      {mode !== "view" && (
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => addSection(type)}
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
      <p><strong>Title:</strong> {current.title}</p>
      <p><strong>Department:</strong> {current.department}</p>
      <p><strong>Location:</strong> {current.location}</p>
      <p><strong>Employment Type:</strong> {current.employment_type}</p>
      <p><strong>Experience:</strong> {current.experience}</p>
      <p><strong>Status:</strong> {current.status}</p>
      {current.salary && <p><strong>Salary:</strong> {current.salary}</p>}
    </div>

    {/* SHORT DESCRIPTION */}
    {current.short_description && (
      <div>
        <h3 className="font-semibold mb-1">Short Description</h3>
        <p className="text-gray-700">{current.short_description}</p>
      </div>
    )}

    {/* ABOUT ROLE */}
    <div>
      <h3 className="font-semibold mb-2">About Role</h3>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: current.about_role }}
      />
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
                <li className="text-gray-700">{section.content}</li>
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

    {/* Job Title */}
    <div className="space-y-1">
      <label className="text-sm font-medium">Job Title</label>
      <Input
        placeholder="Job Title"
        value={data.title}
        onChange={(e) => setData("title", e.target.value)}
      />
    </div>

    {/* Department */}
    <div className="space-y-1">
      <label className="text-sm font-medium">Department</label>
      <Input
        placeholder="Department"
        value={data.department}
        onChange={(e) => setData("department", e.target.value)}
      />
    </div>

    {/* Location */}
    <div className="space-y-1">
      <label className="text-sm font-medium">Location</label>
      <Input
        placeholder="Location"
        value={data.location}
        onChange={(e) => setData("location", e.target.value)}
      />
    </div>

    {/* Employment Type */}
    <div className="space-y-1">
      <label className="text-sm font-medium">Employment Type</label>
      <Input
        placeholder="Full-time, Contract"
        value={data.employment_type}
        onChange={(e) => setData("employment_type", e.target.value)}
      />
    </div>

    {/* Experience */}
    <div className="space-y-1">
      <label className="text-sm font-medium">Experience</label>
      <Input
        placeholder="e.g. 3+ years"
        value={data.experience}
        onChange={(e) => setData("experience", e.target.value)}
      />
    </div>

    {/* Salary */}
    <div className="space-y-1">
      <label className="text-sm font-medium">Salary</label>
      <Input
        placeholder="Optional"
        value={data.salary}
        onChange={(e) => setData("salary", e.target.value)}
      />
    </div>

    {/* Short Description */}
    <div className="space-y-1">
      <label className="text-sm font-medium">Short Description</label>
      <Input
        placeholder="Short description"
        value={data.short_description}
        onChange={(e) => setData("short_description", e.target.value)}
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
          <SelectItem value="draft">Draft</SelectItem>
          <SelectItem value="published">Published</SelectItem>
        </SelectContent>
      </Select>
    </div>

    {/* About Role */}
    <div className="space-y-2">
      <label className="text-sm font-medium">About Role</label>
      <ReactQuill
        theme="snow"
        value={data.about_role}
        onChange={(value) => setData("about_role", value)}
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
              <TableCell>{job.title}</TableCell>
              <TableCell>{job.department}</TableCell>
              <TableCell>{job.status}</TableCell>
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
