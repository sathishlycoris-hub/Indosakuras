import { useState } from "react";
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
import { Plus, Eye, Pencil, Trash2 } from "lucide-react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

/* ================= TYPES ================= */

interface PolicySection {
  title: string;
  description: string;
}

interface Policy {
  id: number;
  title: string;
  slug: string;
  intro: string;
  sections: {
    title: string;
    description: string;
  }[];
}

/* ================= COMPONENT ================= */

export default function Index({ policies }: { policies: Policy[] }) {
  const [mode, setMode] = useState<"add" | "edit" | "view">("add");
  const [current, setCurrent] = useState<Policy | null>(null);
  const [open, setOpen] = useState(false);

  const { data, setData, post, reset, processing } = useForm<{
    title: string;
    slug: string;
    intro: string;
    sections: PolicySection[];
  }>({
    title: "",
    slug: "",
    intro: "",
    sections: [],
  });

  /* ================= OPEN ADD ================= */
  const openAdd = () => {
    reset();
    setData({
      title: "",
      slug: "",
      intro: "",
      sections: [{ title: "", description: "" }],
    });
    setMode("add");
    setCurrent(null);
    setOpen(true);
  };

  /* ================= OPEN EDIT ================= */
  const openEdit = (policy: Policy) => {
    setMode("edit");
    setCurrent(policy);
    setOpen(true);

    setData({
      title: policy.title,
      slug: policy.slug,
      intro: policy.intro,
      sections: policy.sections.map((s) => ({
        title: s.title,
        description: s.description,
      })),
    });
  };

  /* ================= OPEN VIEW ================= */
  const openView = (policy: Policy) => {
    setMode("view");
    setCurrent(policy);
    setOpen(true);
  };

  /* ================= SAVE ================= */
  const submitAdd = () => {
    post(route("admin.policy.store"), {
      data: {
        title: data.title,
        slug: data.slug,
        intro: data.intro,
        sections: data.sections.map((s) => ({
          title: s.title,
          description: s.description,
        })),
      },
      onSuccess: () => {
        reset();
        setOpen(false);
      },
    });
  };

  const submitUpdate = () => {
    if (!current) return;

    router.post(
      route("admin.policy.update", current.id),
      {
        _method: "PUT",
        title: data.title,
        slug: data.slug,
        intro: data.intro,
        sections: data.sections.map((s) => ({
          title: s.title,
          description: s.description,
        })),
      },
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
    if (confirm("Delete this policy?")) {
      router.delete(route("admin.policy.destroy", id));
    }
  };

  /* ================= SECTION HELPERS ================= */
  const addSection = () => {
    setData("sections", [
      ...data.sections,
      { title: "", description: "" },
    ]);
  };

  const updateSection = (
    index: number,
    field: "title" | "description",
    value: string
  ) => {
    const updated = [...data.sections];
    updated[index][field] = value;
    setData("sections", updated);
  };

  const removeSection = (index: number) => {
    const updated = [...data.sections];
    updated.splice(index, 1);
    setData("sections", updated);
  };

  return (
    <Authenticated header={<h2 className="font-bold text-xl">Policies</h2>}>
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Policies</h1>

        <Button onClick={openAdd}>
          <Plus className="w-4 h-4 mr-2" />
          Add Policy
        </Button>
      </div>

      {/* ================= SHEET ================= */}
      <Sheet open={open} onOpenChange={setOpen}>
  <SheetContent className="w-[90%] sm:max-w-4xl overflow-y-auto">
    <SheetHeader>
      <SheetTitle>
        {mode === "add" && "Add Policy"}
        {mode === "edit" && "Edit Policy"}
        {mode === "view" && "Policy Details"}
      </SheetTitle>
    </SheetHeader>

    {/* ================= VIEW ================= */}
    {mode === "view" && current && (
      <div className="space-y-6 mt-6">
        <div>
          <strong>Title</strong>
          <p className="mt-1">{current.title}</p>
        </div>

        <div>
          <strong>Slug</strong>
          <p className="mt-1">{current.slug}</p>
        </div>

        <div>
          <strong>Intro</strong>
          <div
            className="prose max-w-none mt-2"
            dangerouslySetInnerHTML={{ __html: current.intro }}
          />
        </div>

        <div>
          <strong>Sections</strong>
          <div className="space-y-6 mt-4">
            {current.sections.map((s, i) => (
              <div key={i}>
                <h4 className="font-semibold">{s.title}</h4>
                <div
                  className="prose max-w-none mt-2"
                  dangerouslySetInnerHTML={{
                    __html: s.description,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    )}

    {/* ================= ADD / EDIT ================= */}
    {mode !== "view" && (
      <div className="space-y-6 mt-6">

        {/* Policy Title */}
        <div className="space-y-1">
          <label className="font-medium">Policy Title</label>
          <Input
            placeholder="Policy Title"
            value={data.title}
            onChange={(e) => setData("title", e.target.value)}
          />
        </div>

        {/* Slug */}
        <div className="space-y-1">
          <label className="font-medium">Slug</label>
          <Input
            placeholder="privacy-policy"
            value={data.slug}
            onChange={(e) => setData("slug", e.target.value)}
          />
        </div>

        {/* Intro */}
        <div className="space-y-2">
          <label className="font-medium">Intro</label>
          <ReactQuill
            theme="snow"
            value={data.intro}
            onChange={(v) => setData("intro", v)}
          />
        </div>

        {/* Sections */}
        <div className="space-y-3">
          <label className="font-medium">Sections</label>

          <div className="space-y-6">
            {data.sections.map((section, i) => (
              <div
                key={i}
                className="border rounded-md p-4 space-y-3"
              >
                <div className="space-y-1">
                  <label className="font-medium">
                    Section Title
                  </label>
                  <Input
                    placeholder="Section Title"
                    value={section.title}
                    onChange={(e) =>
                      updateSection(i, "title", e.target.value)
                    }
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-medium">
                    Section Description
                  </label>
                  <ReactQuill
                    theme="snow"
                    value={section.description}
                    onChange={(v) =>
                      updateSection(i, "description", v)
                    }
                  />
                </div>

                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => removeSection(i)}
                >
                  Remove Section
                </Button>
              </div>
            ))}
          </div>

          <Button
            type="button"
            variant="outline"
            className="mt-4"
            onClick={addSection}
          >
            + Add Section
          </Button>
        </div>

        {/* Submit */}
        <Button
          className="w-full"
          disabled={processing}
          onClick={mode === "edit" ? submitUpdate : submitAdd}
        >
          {mode === "edit"
            ? "Update Policy"
            : "Save Policy"}
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
            <TableHead className="text-white">Slug</TableHead>
           
            <TableHead className="text-white text-center">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="bg-white">
          {policies.map((p, i) => (
            <TableRow key={p.id}>
              <TableCell>{i + 1}</TableCell>
              <TableCell>{p.title}</TableCell>
              <TableCell>{p.slug}</TableCell>
              
              <TableCell className="space-x-2 text-center">
                <Button title="View" size="icon" onClick={() => openView(p)}>
                  <Eye className="w-4 h-4" />
                </Button>
                <Button title="Edit" size="icon"  onClick={() => openEdit(p)}>
                  <Pencil className="w-4 h-4" />
                </Button>
                <Button
                  title="Delete"
                  size="icon"
                  variant="destructive"
                  onClick={() => deleteItem(p.id)}
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
