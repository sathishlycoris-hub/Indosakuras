import { useState } from "react";
import { useForm, router, usePage } from "@inertiajs/react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eye, Pencil, Trash2, Plus, Search } from "lucide-react";

const teamCategories = [
  "Executive Leadership",
  "Management Team",
  "Technology & Innovation Leadership",
  "Regional Leadership",
  "Advisory Board",
  "Strategic Alliance Partners",
];

export default function Index() {
  const { teams } = usePage().props as any;

  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"add" | "edit" | "view">("add");
  const [current, setCurrent] = useState<any>(null);
  const [search, setSearch] = useState("");

  const { data, setData, post, reset } = useForm({
    language: "en",
    name: "",
    designation: "",
    category: "",
    description: "",
    image: null as File | null,
  });

  /* ================= SEARCH FILTER ================= */

  const filteredTeams = teams.filter((t: any) => {
    if (!search) return true;

    const q = search.toLowerCase();

    return (
      t.name?.toLowerCase().includes(q) ||
      t.designation?.toLowerCase().includes(q) ||
      t.category?.toLowerCase().includes(q)
    );
  });

  /* ================= CRUD ================= */

  const openAdd = () => {
    reset();
    setMode("add");
    setCurrent(null);
    setOpen(true);
  };

  const openEdit = (item: any) => {
    setCurrent(item);
    setMode("edit");
    setOpen(true);
    setData({
      language: item.language,
      name: item.name,
      designation: item.designation,
      category: item.category,
      description: item.description,
      image: null,
    });
  };

  const openView = (item: any) => {
    setCurrent(item);
    setMode("view");
    setOpen(true);
  };

  const submit = () => {
    if (mode === "add") {
      post(route("admin.team.store"), { forceFormData: true });
    } else {
      post(route("admin.team.update", current.id), {
        forceFormData: true,
        data: { _method: "PUT" },
      });
    }
    setOpen(false);
  };

  return (
    <Authenticated header={<h2 className="text-xl font-bold">Team List</h2>}>
      {/* HEADER */}
    <div className="mb-5">
  <div className="flex items-center justify-between mb-4">
    <h1 className="text-2xl font-bold">Team Members</h1>

    <Button onClick={openAdd}>
      <Plus className="w-4 h-4 mr-2" />
      Add Member
    </Button>
  </div>

  {/* SEARCH FILTER */}
 <div className="mb-4 max-w-sm relative">
        <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search team members..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9 pr-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
</div>


      {/* TABLE */}
      <Table>
        <TableHeader className="bg-primary">
          <TableRow>
            <TableHead className="text-white">Name</TableHead>
            <TableHead className="text-white">Designation</TableHead>
            <TableHead className="text-white">Category</TableHead>
            <TableHead className="text-white text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="bg-white">
          {filteredTeams.length === 0 && (
            <TableRow>
              <TableCell colSpan={4} className="text-center py-6">
                No records found
              </TableCell>
            </TableRow>
          )}

          {filteredTeams.map((t: any) => (
            <TableRow key={t.id}>
              <TableCell>{t.name}</TableCell>
              <TableCell>{t.designation}</TableCell>
              <TableCell>{t.category}</TableCell>
              <TableCell className="space-x-2 text-center">
                <Button title="View" size="icon" onClick={() => openView(t)}>
                  <Eye className="w-4 h-4" />
                </Button>
                <Button title="Edit" size="icon" onClick={() => openEdit(t)}>
                  <Pencil className="w-4 h-4" />
                </Button>
                <Button
                  title="Delete"
                  size="icon"
                  variant="destructive"
                  onClick={() =>
                    router.delete(route("admin.team.destroy", t.id))
                  }
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* RIGHT DRAWER */}
     <Sheet open={open} onOpenChange={setOpen}>
  <SheetContent side="right" className="w-[90%] sm:max-w-3xl overflow-y-auto">
    <SheetHeader>
      <SheetTitle>
        {mode === "add" && "Add Team Member"}
        {mode === "edit" && "Edit Team Member"}
        {mode === "view" && "Team Details"}
      </SheetTitle>
    </SheetHeader>

    {/* ================= VIEW ================= */}
    {mode === "view" ? (
      <div className="space-y-4 mt-6">
        <p><strong>Name:</strong> {current?.name}</p>
        <p><strong>Designation:</strong> {current?.designation}</p>
        <p><strong>Category:</strong> {current?.category}</p>

        {current?.description && (
          <div>
            <strong>Description:</strong>
            <p className="mt-1">{current.description}</p>
          </div>
        )}

        {current?.image && (
          <div>
            <strong>Image:</strong>
            <img
              src={`/storage/${current.image}`}
              className="mt-2 h-32 rounded-md border object-contain"
            />
          </div>
        )}
      </div>
    ) : (
      /* ================= ADD / EDIT ================= */
      <div className="space-y-5 mt-6">

        {/* Name */}
        <div className="space-y-1">
          <label className="font-medium">Name</label>
          <Input
            placeholder="Name"
            value={data.name}
            onChange={(e) => setData("name", e.target.value)}
          />
        </div>

        {/* Designation */}
        <div className="space-y-1">
          <label className="font-medium">Designation</label>
          <Input
            placeholder="Designation"
            value={data.designation}
            onChange={(e) => setData("designation", e.target.value)}
          />
        </div>

        {/* Category */}
        <div className="space-y-1">
          <label className="font-medium">Category</label>
          <Select
            value={data.category}
            onValueChange={(v) => setData("category", v)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              {teamCategories.map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Description */}
        <div className="space-y-1">
          <label className="font-medium">Description</label>
          <Textarea
            placeholder="Description"
            value={data.description}
            onChange={(e) => setData("description", e.target.value)}
          />
        </div>

        {/* Existing Image (EDIT ONLY) */}
        {mode === "edit" && current?.image && (
          <div className="space-y-2">
            <label className="font-medium">Existing Image</label>
            <img
              src={`/storage/${current.image}`}
              className="h-32 rounded-md border object-contain"
            />
          </div>
        )}

        {/* Upload Image */}
        <div className="space-y-1">
          <label className="font-medium">
            {mode === "edit" ? "Replace Image" : "Upload Image"}
          </label>
          <Input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setData("image", e.target.files?.[0] || null)
            }
          />
        </div>

        {/* Submit */}
        <Button onClick={submit} className="w-full">
          {mode === "add" ? "Add" : "Update"}
        </Button>
      </div>
    )}
  </SheetContent>
</Sheet>

    </Authenticated>
  );
}
