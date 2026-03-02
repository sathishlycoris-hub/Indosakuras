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

interface Profile {
  id: number;
  sub_title: string;
  sub_title_ja?: string | null;
  content: string;
  content_ja?: string | null;
}

export default function Index({ profiles }: { profiles: Profile[] }) {
  const [mode, setMode] = useState<"add" | "edit" | "view">("add");
  const [current, setCurrent] = useState<Profile | null>(null);
  const [open, setOpen] = useState(false);
  const [activeLang, setActiveLang] = useState<"en" | "ja">("en");
  const { data, setData, post, reset, processing } = useForm<{
    // title: string;
    sub_title: string;
    content: string;
    sub_title_ja?: string;
    content_ja?: string;
  }>({
    // title: "",
    sub_title: "",
    content: "",
    sub_title_ja: "",
    content_ja: "",
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
  const openEdit = (item: Profile) => {
    setMode("edit");
    setCurrent(item);
    setOpen(true);

    setData({
      //   title: item.title,
      sub_title: item.sub_title,
      content: item.content,
      sub_title_ja: item.sub_title_ja || "",
      content_ja: item.content_ja || item.content || "",
    });
  };

  /* ================= OPEN VIEW ================= */
  const openView = (item: Profile) => {
    setMode("view");
    setCurrent(item);
    setOpen(true);
  };

  /* ================= SAVE ================= */
  const submitAdd = () => {
    post(route("admin.profile.store"), {
      onSuccess: () => {
        reset();
        setOpen(false);
      },
    });
  };

  const submitUpdate = () => {
    if (!current) return;

    router.post(
      route("admin.profile.update", current.id),
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
    if (confirm("Delete this profile item?")) {
      router.delete(route("admin.profile.destroy", id));
    }
  };

  return (
    <Authenticated header={<h2 className="font-bold text-xl">Profile</h2>}>
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Profile</h1>

        <Button onClick={openAdd}>
          <Plus className="w-4 h-4 mr-2" />
          Add Profile
        </Button>
      </div>

      {/* ================= SHEET ================= */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent className="w-[90%] sm:max-w-3xl overflow-y-auto">
          <SheetHeader>
            <SheetTitle>
              {mode === "add" && "Add Profile"}
              {mode === "edit" && "Edit Profile"}
              {mode === "view" && "Profile Details"}
            </SheetTitle>
          </SheetHeader>

          {/* ================= VIEW ================= */}
          {mode === "view" && current && (
            <div className="space-y-6 mt-6">
              {/* <p>
                <strong>Title:</strong> {current.title}
              </p> */}

              <p>
                <strong>Title:</strong> {current.sub_title}
              </p>

              <div>
                <strong>Content:</strong>
                <div
                  className="prose max-w-none mt-2"
                  dangerouslySetInnerHTML={{
                    __html: current.content,
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
              {/* <Input
                placeholder="Title"
                value={data.title}
                onChange={(e) => setData("title", e.target.value)}
              /> */}

              <Input
                placeholder="Title"
                value={activeLang === "en" ? data.sub_title : data.sub_title_ja}
                onChange={(e) =>
                  activeLang === "en"
                    ? setData("sub_title", e.target.value)
                    : setData("sub_title_ja", e.target.value)
                }
              />

              <div>
                <label className="text-sm font-medium">Content</label>
                <ReactQuill
                key={activeLang}
                  value={activeLang === "en" ? data.content : data.content_ja}
                  onChange={(v) =>
                    activeLang === "en"
                      ? setData("content", v)
                      : setData("content_ja", v)
                  }
                />
              </div>

              <Button
                className="w-full"
                disabled={processing}
                onClick={mode === "edit" ? submitUpdate : submitAdd}
              >
                {mode === "edit"
                  ? "Update Profile"
                  : "Save Profile"}
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
            {/* <TableHead className="text-white">Title</TableHead> */}
            <TableHead className="text-white">Title</TableHead>
            <TableHead className="text-white">Content</TableHead>
            <TableHead className="text-white text-center">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="bg-white">
          {profiles.map((p, i) => (
            <TableRow key={p.id}>
              <TableCell>{i + 1}</TableCell>
              {/* <TableCell>{p.title}</TableCell> */}
              <TableCell>
                {activeLang === "en"
                  ? p.sub_title
                  : p.sub_title_ja || p.sub_title}
              </TableCell>

              <TableCell className="line-clamp-2 max-w-md">
                <div
                  dangerouslySetInnerHTML={{
                    __html: p.content,
                  }}
                />
              </TableCell>

              <TableCell className="space-x-2 text-center">
                <Button
                  title="View"
                  size="icon"

                  onClick={() => openView(p)}
                >
                  <Eye className="w-4 h-4" />
                </Button>
                <Button
                  title="Edit"
                  size="icon"

                  onClick={() => openEdit(p)}
                >
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
