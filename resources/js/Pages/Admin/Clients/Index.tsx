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

interface ClientSection {
  type: "customer" | "alliance" | "contract" | "partner";
  name: string;
  name_ja: string;
}

interface Client {
  id: number;
  description: string;
  description_ja?: string;
  sections: {
    section_type: string;
    name: string;
    name_ja?: string;
  }[];
}

export default function Index({ clients }: { clients: Client[] }) {
  const [mode, setMode] = useState<"add" | "edit" | "view">("add");
  const [current, setCurrent] = useState<Client | null>(null);
  const [open, setOpen] = useState(false);
  const [activeLang, setActiveLang] = useState<"en" | "ja">("en");

  const { data, setData, post, reset, processing } = useForm<{
    description: string;
    description_ja: string;
    sections: ClientSection[];
  }>({
    description: "",
    description_ja: "",
    sections: [],
  });

  /* ================= OPEN ADD ================= */
  const openAdd = () => {
    reset();
    setData({
      description: "",
      description_ja: "",
      sections: [
        { type: "customer", name: "", name_ja: "" },
        { type: "alliance", name: "", name_ja: "" },
        { type: "contract", name: "", name_ja: "" },
        { type: "partner", name: "", name_ja: "" },
      ],
    });
    setMode("add");
    setCurrent(null);
    setOpen(true);
  };

  /* ================= OPEN EDIT ================= */
  const openEdit = (client: Client) => {
    setMode("edit");
    setCurrent(client);
    setOpen(true);

    setData({
      description: client.description ?? "",
      description_ja: client.description_ja ?? "",
      sections: client.sections.map((s) => ({
        type: s.section_type as ClientSection["type"],
        name: s.name ?? "",
        name_ja: s.name_ja ?? "",
      })),
    });
  };

  /* ================= OPEN VIEW ================= */
  const openView = (client: Client) => {
    setMode("view");
    setCurrent(client);
    setOpen(true);
  };

  /* ================= SAVE ================= */
const submitAdd = () => {
  post(route("admin.clients.store"), {
    data: {
      description: data.description,
      description_ja: data.description_ja,
      sections: data.sections.map((s) => ({
        type: s.type,
        name: s.name,
        name_ja: s.name_ja,
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
    route("admin.clients.update", current.id),
    {
      _method: "PUT",
      description: data.description,
      description_ja: data.description_ja,
      sections: data.sections.map((s) => ({
        type: s.type,
        name: s.name,
        name_ja: s.name_ja,
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

const removeSectionItem = (index: number) => {
  const updated = [...data.sections];
  updated.splice(index, 1);
  setData("sections", updated);
};

  /* ================= DELETE ================= */
  const deleteItem = (id: number) => {
    if (confirm("Delete this client record?")) {
      router.delete(route("admin.clients.destroy", id));
    }
  };

  /* ================= SECTION HELPERS ================= */
  const addSection = (type: ClientSection["type"]) => {
    setData("sections", [
      ...data.sections,
      { type, name: "", name_ja: "" },
    ]);
  };

  const updateSection = (
    index: number,
    field: "name" | "name_ja",
    value: string
  ) => {
    const updated = [...data.sections];
    updated[index][field] = value;
    setData("sections", updated);
  };

 const renderSection = (
  type: ClientSection["type"],
  title: string
) => (
  <div className="space-y-2">
    <h4 className="font-semibold">{title}</h4>

    {data.sections
      .map((s, i) => ({ ...s, i }))
      .filter((s) => s.type === type)
      .map(({ i }) => (
        <div key={i} className="flex gap-2 items-center">
          <Input
            disabled={mode === "view"}
            value={
              activeLang === "en"
                ? data.sections[i].name
                : data.sections[i].name_ja
            }
            onChange={(e) =>
              activeLang === "en"
                ? updateSection(i, "name", e.target.value)
                : updateSection(i, "name_ja", e.target.value)
            }
            placeholder="Company name"
          />

          {mode !== "view" && (
            <Button
              type="button"
              size="icon"
              variant="destructive"
              onClick={() => removeSectionItem(i)}
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
        onClick={() => addSection(type)}
      >
        + Add Company
      </Button>
    )}
  </div>
);

  return (
    <Authenticated header={<h2 className="font-bold text-xl">Clients</h2>}>
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Clients</h1>
        <Button onClick={openAdd}>
          <Plus className="w-4 h-4 mr-2" />
          Add Clients
        </Button>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent className="w-[90%] sm:max-w-3xl overflow-y-auto">
          <SheetHeader>
            <SheetTitle>
              {mode === "add" && "Add Clients"}
              {mode === "edit" && "Edit Clients"}
              {mode === "view" && "Client Details"}
            </SheetTitle>
          </SheetHeader>

          {mode !== "view" && (
            <div className="space-y-6 mt-6">
              {/* Language Toggle */}
              <div className="flex gap-2 mb-2">
                 <Button
                  type="button"
                  size="sm"
                  variant={activeLang === "ja" ? "default" : "outline"}
                  onClick={() => setActiveLang("ja")}
                >
                  Japanese
                </Button>
                <Button
                  type="button"
                  size="sm"
                  variant={activeLang === "en" ? "default" : "outline"}
                  onClick={() => setActiveLang("en")}
                >
                  English
                </Button>
               
              </div>

              {renderSection("customer", "Customer Companies")}
              {renderSection("alliance", "Alliance Companies")}
              {renderSection("contract", "Contract Companies")}
              {renderSection("partner", "Partner Companies")}

              <div>
                <label className="text-sm font-medium">Description</label>
                <ReactQuill
                key={activeLang}
                  theme="snow"
                  style={{ height: "200px", marginBottom: "50px" }}
                  value={
                    activeLang === "en"
                      ? data.description
                      : data.description_ja
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
                  ? "Update Clients"
                  : "Save Clients"}
              </Button>
            </div>
          )}
        </SheetContent>
      </Sheet>

      {/* TABLE */}
      <Table>
        <TableHeader className="bg-primary">
          <TableRow>
            <TableHead className="text-white">#</TableHead>
            <TableHead className="text-white">Customer</TableHead>
            <TableHead className="text-white">Alliance</TableHead>
            <TableHead className="text-white">Contract</TableHead>
            <TableHead className="text-white">Partner</TableHead>
            <TableHead className="text-white text-center">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="bg-white">
          {clients.map((c, i) => (
            <TableRow key={c.id}>
              <TableCell>{i + 1}</TableCell>
              {["customer", "alliance", "contract", "partner"].map(
                (type) => (
                  <TableCell key={type}>
                    {c.sections
                      .filter((s) => s.section_type === type)
                      .map((s) => s.name)
                      .join(", ") || "-"}
                  </TableCell>
                )
              )}
              <TableCell className="space-x-2 text-center">
                <Button size="icon" onClick={() => openEdit(c)}>
                  <Pencil className="w-4 h-4" />
                </Button>
                <Button
                  size="icon"
                  variant="destructive"
                  onClick={() => deleteItem(c.id)}
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