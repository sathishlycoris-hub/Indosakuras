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

interface History {
  id: number;
  year: string;
  month: string;
  description: string;
}

export default function Index({ histories }: { histories: History[] }) {
  const [mode, setMode] = useState<"add" | "edit" | "view">("add");
  const [current, setCurrent] = useState<History | null>(null);
  const [open, setOpen] = useState(false);

  const { data, setData, post, reset, processing } = useForm<{
    year: string;
    month: string;
    description: string;
  }>({
    year: "",
    month: "",
    description: "",
  });

  /* ================= OPEN ADD ================= */
  const openAdd = () => {
    reset();
    setMode("add");
    setCurrent(null);
    setOpen(true);
  };

  /* ================= OPEN EDIT ================= */
  const openEdit = (item: History) => {
    setMode("edit");
    setCurrent(item);
    setOpen(true);

    setData({
      year: item.year,
      month: item.month,
      description: item.description,
    });
  };

  /* ================= OPEN VIEW ================= */
  const openView = (item: History) => {
    setMode("view");
    setCurrent(item);
    setOpen(true);
  };

  /* ================= SAVE ================= */
  const submitAdd = () => {
    post(route("admin.history.store"), {
      onSuccess: () => {
        reset();
        setOpen(false);
      },
    });
  };

  const submitUpdate = () => {
    if (!current) return;

    router.post(
      route("admin.history.update", current.id),
      {
        _method: "PUT",
        ...data,
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
    if (confirm("Delete this history record?")) {
      router.delete(route("admin.history.destroy", id));
    }
  };

  return (
    <Authenticated header={<h2 className="font-bold text-xl">History</h2>}>
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Company History</h1>

        <Button onClick={openAdd}>
          <Plus className="w-4 h-4 mr-2" />
          Add History
        </Button>
      </div>

      {/* ================= SHEET ================= */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent className="w-[90%] sm:max-w-3xl overflow-y-auto">
          <SheetHeader>
            <SheetTitle>
              {mode === "add" && "Add History"}
              {mode === "edit" && "Edit History"}
              {mode === "view" && "History Details"}
            </SheetTitle>
          </SheetHeader>

          {/* ================= VIEW ================= */}
          {mode === "view" && current && (
            <div className="space-y-6 mt-6">
              <p>
                <strong>Year:</strong> {current.year}
              </p>

              <p>
                <strong>Month:</strong> {current.month}
              </p>

              <div>
                <strong>Description:</strong>
                <div
                  className="prose max-w-none mt-2"
                  dangerouslySetInnerHTML={{
                    __html: current.description,
                  }}
                />
              </div>
            </div>
          )}

          {/* ================= ADD / EDIT ================= */}
          {mode !== "view" && (
            <div className="space-y-4 mt-6">
              <Input
                placeholder="Year (e.g. 2024)"
                value={data.year}
                onChange={(e) => setData("year", e.target.value)}
              />

              <Input
                placeholder="Month (e.g. January)"
                value={data.month}
                onChange={(e) => setData("month", e.target.value)}
              />

              <div>
                <label className="text-sm font-medium">
                  Description
                </label>
                <ReactQuill
                  theme="snow"
                  value={data.description}
                  onChange={(v) => setData("description", v)}
                />
              </div>

              <Button
                className="w-full"
                disabled={processing}
                onClick={mode === "edit" ? submitUpdate : submitAdd}
              >
                {mode === "edit"
                  ? "Update History"
                  : "Save History"}
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
            <TableHead className="text-white">Year</TableHead>
            <TableHead className="text-white">Month</TableHead>
            <TableHead className="text-white">Description</TableHead>
            <TableHead className="text-white text-center">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="bg-white">
          {histories.map((h, i) => (
            <TableRow key={h.id}>
              <TableCell>{i + 1}</TableCell>
              <TableCell>{h.year}</TableCell>
              <TableCell>{h.month}</TableCell>

              <TableCell className="line-clamp-2 max-w-md">
                <div
                  dangerouslySetInnerHTML={{
                    __html: h.description,
                  }}
                />
              </TableCell>

              <TableCell className="space-x-2 text-center">
                <Button
                  title="View"
                  size="icon"
                  
                  onClick={() => openView(h)}
                >
                  <Eye className="w-4 h-4" />
                </Button>
                <Button
                  title="Edit"
                  size="icon"
                  
                  onClick={() => openEdit(h)}
                >
                  <Pencil className="w-4 h-4" />
                </Button>
                <Button
                  title="Delete"
                  size="icon"
                  variant="destructive"
                  onClick={() => deleteItem(h.id)}
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
