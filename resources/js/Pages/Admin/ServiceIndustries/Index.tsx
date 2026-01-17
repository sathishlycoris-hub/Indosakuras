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

interface Industry {
  id: number;
  title: string;
  description: string;
  sort_order?: number | null;
}

export default function Index({ industries }: { industries: Industry[] }) {
  const [mode, setMode] = useState<"add" | "edit" | "view">("add");
  const [current, setCurrent] = useState<Industry | null>(null);
  const [open, setOpen] = useState(false);

  const { data, setData, post, reset, processing } = useForm({
    title: "",
    description: "",
    sort_order: "0",
  });

  /* ================= OPEN ADD ================= */
  const openAdd = () => {
    reset();
    setMode("add");
    setCurrent(null);
    setOpen(true);
  };

  /* ================= OPEN EDIT ================= */
  const openEdit = (industry: Industry) => {
    setMode("edit");
    setCurrent(industry);
    setOpen(true);

    setData({
      title: industry.title,
      description: industry.description,
      sort_order:
        industry.sort_order !== null && industry.sort_order !== undefined
          ? String(industry.sort_order)
          : "",
    });
  };

  /* ================= OPEN VIEW ================= */
  const openView = (industry: Industry) => {
    setMode("view");
    setCurrent(industry);
    setOpen(true);
  };

  /* ================= SAVE ================= */
  const submitAdd = () => {
    post(route("admin.service-industries.store"), {
      onSuccess: () => {
        reset();
        setOpen(false);
      },
    });
  };

  const submitUpdate = () => {
    if (!current) return;

    router.post(
      route("admin.service-industries.update", current.id),
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
    if (confirm("Delete this industry?")) {
      router.delete(route("admin.service-industries.destroy", id));
    }
  };

  return (
    <Authenticated header={<h2 className="font-bold text-xl">Service Industries</h2>}>
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Service Industries</h1>

        <Button onClick={openAdd}>
          <Plus className="w-4 h-4 mr-2" />
          Add Industry
        </Button>
      </div>

      {/* ================= SHEET ================= */}
    <Sheet open={open} onOpenChange={setOpen}>
  <SheetContent className="w-[90%] sm:max-w-3xl overflow-y-auto">
    <SheetHeader>
      <SheetTitle>
        {mode === "add" && "Add Industry"}
        {mode === "edit" && "Edit Industry"}
        {mode === "view" && "Industry Details"}
      </SheetTitle>
    </SheetHeader>

    {/* ================= VIEW ================= */}
    {mode === "view" && current && (
      <div className="space-y-6 mt-6">

        <div className="space-y-1">
          <strong>Title</strong>
          <p>{current.title}</p>
        </div>

        <div className="space-y-1">
          <strong>Description</strong>
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{
              __html: current.description ?? "",
            }}
          />
        </div>

      </div>
    )}

    {/* ================= ADD / EDIT ================= */}
    {mode !== "view" && (
      <div className="space-y-5 mt-6">

        {/* Title */}
        <div className="space-y-1">
          <label className="font-medium">Title</label>
          <Input
            placeholder="Industry title"
            value={data.title}
            onChange={(e) => setData("title", e.target.value)}
          />
        </div>

        {/* Description */}
        <div className="space-y-1">
          <label className="font-medium">Description</label>
          <ReactQuill
            theme="snow"
            value={data.description}
            onChange={(val) => setData("description", val)}
          />
        </div>

        {/* Submit */}
        <Button
          className="w-full"
          disabled={processing}
          onClick={mode === "edit" ? submitUpdate : submitAdd}
        >
          {mode === "edit" ? "Update Industry" : "Save Industry"}
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
            <TableHead className="text-white">Description</TableHead>
            <TableHead className="text-white text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="bg-white">
          {industries.map((industry, i) => (
            <TableRow key={industry.id}>
              <TableCell>{industry.sort_order ?? i + 1}</TableCell>
              <TableCell>{industry.title}</TableCell>
              <TableCell className="line-clamp-2 max-w-xl">
                <div
                  dangerouslySetInnerHTML={{ __html: industry.description }}
                />
              </TableCell>
              <TableCell className="space-x-2 text-center">
                <Button title="View" size="icon"  onClick={() => openView(industry)}>
                  <Eye className="w-4 h-4" />
                </Button>
                <Button  title="Edit" size="icon"  onClick={() => openEdit(industry)}>
                  <Pencil className="w-4 h-4" />
                </Button>
                <Button
                  title="Delete"
                  size="icon"
                  variant="destructive"
                  onClick={() => deleteItem(industry.id)}
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
