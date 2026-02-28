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
  year_ja?: string | null;
  month: string;
  month_ja?: string | null;
  description: string;
  description_ja?: string | null;
}

export default function Index({ histories }: { histories: History[] }) {
  const [mode, setMode] = useState<"add" | "edit" | "view">("add");
  const [current, setCurrent] = useState<History | null>(null);
  const [open, setOpen] = useState(false);
  const [activeLang, setActiveLang] = useState<"en" | "ja">("ja");
  const { data, setData, post, reset, processing } = useForm<{
    year: string;
    month: string;
    description: string;
    year_ja?: string | null;
    month_ja?: string | null;
    description_ja?: string | null;
  }>({
    year: "",
    month: "",
    description: "",
    year_ja: "",
    month_ja: "",
    description_ja: "",
  });

  /* ================= OPEN ADD ================= */
  const openAdd = () => {
    reset();
    setMode("add");
    setCurrent(null);
    setOpen(true);
    setActiveLang("en");
  };

  /* ================= OPEN EDIT ================= */
  const openEdit = (item: History) => {
    setMode("edit");
    setCurrent(item);
    setOpen(true);
    setActiveLang("en");

    setData({
      year: item.year,
      year_ja: item.year_ja || "",
      month: item.month,
      month_ja: item.month_ja || "",
      description: item.description || item.description_ja || "",
      description_ja: item.description_ja || item.description || "",
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
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant={activeLang === "en" ? "default" : "outline"}
                  onClick={() => setActiveLang("en")}
                >
                  English
                </Button>

                <Button
                  type="button"
                  variant={activeLang === "ja" ? "default" : "outline"}
                  onClick={() => setActiveLang("ja")}
                >
                  Japanese
                </Button>
              </div>
              <Input
                value={
                  activeLang === "en"
                    ? data.year ?? ""
                    : data.year_ja ?? ""
                }
                onChange={(e) =>
                  activeLang === "en"
                    ? setData("year", e.target.value)
                    : setData("year_ja", e.target.value)
                }
              />
              <Input
                value={
                  activeLang === "en"
                    ? data.month ?? ""
                    : data.month_ja ?? ""
                }
                onChange={(e) =>
                  activeLang === "en"
                    ? setData("month", e.target.value)
                    : setData("month_ja", e.target.value)
                }
              />

              <div>
                <label className="text-sm font-medium">
                  Description
                </label>
                <ReactQuill
                  value={
                    activeLang === "en"
                      ? data.description ?? ""
                      : data.description_ja ?? ""
                  }
                  onChange={(v) =>
                    activeLang === "en"
                      ? setData("description", v)
                      : setData("description_ja", v)
                  }
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
              <TableCell>
                {activeLang === "en"
                  ? h.year
                  : h.year_ja || h.year}
              </TableCell>

              <TableCell>
                {activeLang === "en"
                  ? h.month
                  : h.month_ja || h.month}
              </TableCell>

              <TableCell className="line-clamp-2 max-w-md">
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      activeLang === "en"
                        ? h.description
                        : h.description_ja || h.description,
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
