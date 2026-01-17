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
}

interface Client {
  id: number;
  description: string;
  sections: {
    section_type: string;
    name: string;
  }[];
}

export default function Index({ clients }: { clients: Client[] }) {
  const [mode, setMode] = useState<"add" | "edit" | "view">("add");
  const [current, setCurrent] = useState<Client | null>(null);
  const [open, setOpen] = useState(false);

  const { data, setData, post, reset, processing } = useForm<{
    description: string;
    sections: ClientSection[];
  }>({
    description: "",
    sections: [],
  });

  /* ================= OPEN ADD ================= */
  const openAdd = () => {
    reset();
    setData({
      description: "",
      sections: [
        { type: "customer", name: "" },
        { type: "alliance", name: "" },
        { type: "contract", name: "" },
        { type: "partner", name: "" },
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
      description: client.description,
      sections: client.sections.map((s) => ({
        type: s.section_type as ClientSection["type"],
        name: s.name,
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
      sections: data.sections.map((s) => ({
        type: s.type,
        name: s.name,
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

      //  explicitly map sections to plain objects
      sections: data.sections.map((s) => ({
        type: s.type,
        name: s.name,
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
    if (confirm("Delete this client record?")) {
      router.delete(route("admin.clients.destroy", id));
    }
  };

  /* ================= SECTION HELPERS ================= */
  const addSection = (type: ClientSection["type"]) => {
    setData("sections", [...data.sections, { type, name: "" }]);
  };

  const updateSection = (index: number, value: string) => {
    const updated = [...data.sections];
    updated[index].name = value;
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
        .map(({ name, i }) => (
          <Input
            key={i}
            disabled={mode === "view"}
            value={name}
            onChange={(e) => updateSection(i, e.target.value)}
            placeholder="Company name"
          />
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

      {/* ================= SHEET ================= */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent className="w-[90%] sm:max-w-3xl overflow-y-auto">
          <SheetHeader>
            <SheetTitle>
              {mode === "add" && "Add Clients"}
              {mode === "edit" && "Edit Clients"}
              {mode === "view" && "Client Details"}
            </SheetTitle>
          </SheetHeader>

          {/* ================= VIEW ================= */}
          {mode === "view" && current && (
            <div className="space-y-6 mt-6">
              {["customer", "alliance", "contract", "partner"].map((type) => (
                <div key={type}>
                  <strong>{type.toUpperCase()} COMPANIES</strong>
                  <ul className="list-disc ml-5 mt-2">
                    {current.sections
                      .filter((s) => s.section_type === type)
                      .map((s, i) => (
                        <li key={i}>{s.name}</li>
                      ))}
                  </ul>
                </div>
              ))}

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
            <div className="space-y-6 mt-6">
              {renderSection("customer", "Customer Companies")}
              {renderSection("alliance", "Alliance Companies")}
              {renderSection("contract", "Contract Companies")}
              {renderSection("partner", "Partner Companies")}

              <div>
                <label className="text-sm font-medium">Description</label>
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
                  ? "Update Clients"
                  : "Save Clients"}
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
            <TableHead className="text-white">Customer</TableHead>
            <TableHead className="text-white">Alliance</TableHead>
            <TableHead className="text-white">Contract</TableHead>
            <TableHead className="text-white">Partner</TableHead>
            <TableHead className="text-white text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="bg-white">
          {clients.map((c, i) => (
            <TableRow key={c.id}>
              <TableCell>{i + 1}</TableCell>
              {["customer", "alliance", "contract", "partner"].map((type) => (
                 
                <TableCell key={type} className="w-50 max-w-48">
  <div className="line-clamp-2">
    {c.sections
      .filter((s) => s.section_type === type)
      .map((s) => s.name)
      .join(", ") || "-"}
  </div>
</TableCell>
              ))}
              <TableCell className="space-x-2 text-center">
                <Button title="View" size="icon" onClick={() => openView(c)}>
                  <Eye className="w-4 h-4" />
                </Button>
                <Button title="Edit" size="icon" onClick={() => openEdit(c)}>
                  <Pencil className="w-4 h-4" />
                </Button>
                <Button
                  title="Delete"
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
