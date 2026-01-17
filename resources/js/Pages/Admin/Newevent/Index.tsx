import { useState, useMemo } from "react";
import { useForm, router } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Eye } from "lucide-react";

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
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Pencil, Trash2, Plus, Search } from "lucide-react";
import { format } from "date-fns";

interface NewsEvent {
  id: number;
  date: string;
  eventtype: string;
  short: string;
  description: string;
  image?: string | null;
  // pdf?: string | null;
}

interface PageProps {
  events: NewsEvent[];
  eventTypes: string[];
}

export default function Index({ events, eventTypes }: PageProps) {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [editItem, setEditItem] = useState<NewsEvent | null>(null);
  const [existingImage, setExistingImage] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const { data, setData, post, reset, processing } = useForm({
    date: "",
    eventtype: "Press Release",
    short: "",
    description: "",
    image: null as File | null,
    // pdf: null as File | null,
  });

  const fileUrl = (path?: string | null) => {
  if (!path) return null;

  // Already absolute
  if (path.startsWith("http")) return path;

  // Laravel public storage
  return `/storage/${path}`;
};

  /* ================= SEARCH FILTER ================= */
  const filteredEvents = useMemo(() => {
    if (!search) return events;

    const q = search.toLowerCase();

    return events.filter((e) =>
      [
        e.eventtype,
        e.short,
        e.description,
        format(new Date(e.date), "yyyy-MM-dd"),
      ]
        .filter(Boolean)
        .some((field) =>
          field.toLowerCase().includes(q)
        )
    );
  }, [search, events]);

  /* ================= ADD ================= */
  const submitAdd = () => {
    post(route("admin.newsevent.store"), {
      forceFormData: true,
      onSuccess: () => {
        reset();
        setIsAddOpen(false);
      },
    });
  };

  /* ================= EDIT ================= */
  const openEdit = (item: NewsEvent) => {
    setEditItem(item);
    setExistingImage(item.image ?? null);
    setData({
      date: item.date,
      eventtype: item.eventtype,
      short: item.short,
      description: item.description,
      image: null,
      // pdf: null,
    });
  };

  const [viewItem, setViewItem] = useState<NewsEvent | null>(null);


  const submitUpdate = () => {
    if (!editItem) return;

    post(route("admin.newsevent.update", editItem.id), {
      forceFormData: true,
      data: { _method: "PUT" },
      onSuccess: () => {
        setEditItem(null);
        reset();
      },
    });
  };

  /* ================= DELETE ================= */
  const deleteItem = (id: number) => {
    if (confirm("Are you sure you want to delete this record?")) {
      router.delete(route("admin.newsevent.destroy", id));
    }
  };

  return (
    <Authenticated header={<h2 className="font-bold text-xl">Solution Master</h2>}>
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">News / Events</h1>

        <Sheet open={isAddOpen} onOpenChange={setIsAddOpen}>
          <SheetTrigger asChild>
            <Button
              onClick={() => {
                reset();
                setEditItem(null);
              }}
            >
              <Plus className="w-4 h-4 mr-2" />
              Add News
            </Button>
          </SheetTrigger>

          {/* ADD SHEET */}
          <SheetContent side="right" className="w-[90%] sm:max-w-3xl overflow-y-auto">
            <SheetHeader>
              <SheetTitle>Add News</SheetTitle>
            </SheetHeader>

          <div className="space-y-4 mt-6">

  <Label>Short Description *</Label>
  <Textarea
    value={data.short}
    onChange={(e) => setData("short", e.target.value)}
  />

  <Label>Description *</Label>
  <ReactQuill
    theme="snow"
    value={data.description}
    onChange={(value) => setData("description", value)}
    className="bg-white"
  />

  <Label>Event Type *</Label>
  <Select
    value={data.eventtype}
    onValueChange={(v) => setData("eventtype", v)}
  >
    <SelectTrigger>
      <SelectValue />
    </SelectTrigger>
    <SelectContent>
      {eventTypes.map((type) => (
        <SelectItem key={type} value={type}>
          {type}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>

  <Label>Date *</Label>
  <Input
    type="date"
    value={data.date}
    onChange={(e) => setData("date", e.target.value)}
  />

  {/* IMAGE */}
  <Label>Image (optional)</Label>
  <Input
    type="file"
    accept="image/*"
    onChange={(e) => setData("image", e.target.files?.[0] || null)}
  />

  {/* PDF */}
  {/* <Label>PDF (optional)</Label>
  <Input
    type="file"
    accept="application/pdf"
    onChange={(e) => setData("pdf", e.target.files?.[0] || null)}
  />

  <Button
    className="w-full"
    onClick={submitAdd}
    disabled={processing}
  >
    Save
  </Button> */}
</div>

          </SheetContent>
        </Sheet>
      </div>

      {/* 🔍 SEARCH */}
      <div className="mb-4 max-w-sm relative">
        <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search news & events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9 pr-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* TABLE */}
      <Table>
        <TableHeader className="bg-primary">
          <TableRow>
            <TableHead className="text-white">#</TableHead>
            <TableHead className="text-white">Type</TableHead>
            <TableHead className="text-white">Short</TableHead>
            <TableHead className="text-white">Date</TableHead>
            <TableHead className="text-white text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="bg-white">
          {filteredEvents.length === 0 && (
            <TableRow>
              <TableCell colSpan={5} className="text-center py-6">
                No matching records found
              </TableCell>
            </TableRow>
          )}

          {filteredEvents.map((e, i) => (
            <TableRow key={e.id}>
              <TableCell>{i + 1}</TableCell>
              <TableCell>{e.eventtype}</TableCell>
              <TableCell className="max-w-md truncate">{e.short}</TableCell>
              <TableCell>
                {format(new Date(e.date), "yyyy-MM-dd")}
              </TableCell>
              <TableCell className="space-x-2 text-center">
                <Button size="icon" onClick={() => setViewItem(e)}>
                  <Eye className="w-4 h-4" />
                </Button>
                <Button size="icon" onClick={() => openEdit(e)}>
                  <Pencil className="w-4 h-4" />
                </Button>
                <Button
                  size="icon"
                  variant="destructive"
                  onClick={() => deleteItem(e.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* EDIT SHEET (unchanged) */}
      <Sheet
        open={!!editItem}
        onOpenChange={(open) => {
          if (!open) {
            setEditItem(null);
            setExistingImage(null);
            reset();
          }
        }}
      >
        <SheetContent side="right" className="w-[90%] sm:max-w-3xl overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Edit News</SheetTitle>
          </SheetHeader>

          <div className="space-y-4 mt-6">

  <Label>Short *</Label>
  <Textarea
    value={data.short}
    onChange={(e) => setData("short", e.target.value)}
  />

  <Label>Description *</Label>
  <ReactQuill
    theme="snow"
    value={data.description}
    onChange={(value) => setData("description", value)}
    className="bg-white"
  />

  {/* EXISTING IMAGE */}
  {existingImage && (
  <div className="space-y-2">
    <Label>Existing Image</Label>
    <img
      src={fileUrl(existingImage)!}
      alt="Existing"
      className="rounded-md max-h-40 border object-contain"
    />
  </div>
)}


  {/* UPDATE IMAGE */}
  <Label>Replace Image</Label>
  <Input
    type="file"
    accept="image/*"
    onChange={(e) => setData("image", e.target.files?.[0] || null)}
  />

  {/* UPDATE PDF */}
  {/* <Label>Replace PDF</Label>
  <Input
    type="file"
    accept="application/pdf"
    onChange={(e) => setData("pdf", e.target.files?.[0] || null)}
  /> */}

  <Button
    className="w-full"
    onClick={submitUpdate}
    disabled={processing}
  >
    Update
  </Button>
</div>

        </SheetContent>
      </Sheet>
      {/* ================= VIEW SHEET ================= */}
<Sheet
  open={!!viewItem}
  onOpenChange={(open) => {
    if (!open) setViewItem(null);
  }}
>
  <SheetContent side="right" className="w-[90%] sm:max-w-3xl overflow-y-auto">
    <SheetHeader>
      <SheetTitle>News / Event Details</SheetTitle>
    </SheetHeader>

    {viewItem && (
      <div className="space-y-6 mt-6">

        {/* META */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <p><strong>Type:</strong> {viewItem.eventtype}</p>
          <p>
            <strong>Date:</strong>{" "}
            {format(new Date(viewItem.date), "yyyy-MM-dd")}
          </p>
        </div>

        {/* SHORT */}
        <div>
          <h3 className="font-semibold mb-1">Short Description</h3>
          <p className="text-gray-700">{viewItem.short}</p>
        </div>

        {/* DESCRIPTION */}
        <div>
          <h3 className="font-semibold mb-2">Description</h3>
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{
              __html: viewItem.description,
            }}
          />
        </div>

        {/* IMAGE */}
       {viewItem.image && (
  <div>
    <h3 className="font-semibold mb-2">Image</h3>
    <img
      src={fileUrl(viewItem.image)!}
      alt="News"
      className="rounded-md max-h-64 border object-contain"
    />
  </div>
)}


        {/* PDF */}
       {/* {viewItem.pdf && (
  <div>
    <h3 className="font-semibold mb-2">PDF</h3>
    <a
      href={fileUrl(viewItem.pdf)!}
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary underline"
    >
      View PDF
    </a>
  </div>
)} */}


      </div>
    )}
  </SheetContent>
</Sheet>

    </Authenticated>
  );
}
