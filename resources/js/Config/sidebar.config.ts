import { LucideIcon } from "lucide-react";
import {
  Phone,
  Briefcase,
  FilePlus,
  Newspaper,
  Users,
  Calendar,
  PenSquare,
  HelpCircle,
  MessageSquare,
  Lightbulb,
  IdCard,
  Clock,
  Handshake,
  ShieldCheck,
  Puzzle,
  Settings,
  Factory,
  Search,
} from "lucide-react";

export type SidebarItem = {
  label: string;
  icon: LucideIcon;
  href?: string;
  role?: string[];
  children?: SidebarItem[];
};

export const sidebarItems: SidebarItem[] = [
  {
    label: "Contacts List",
    icon: Phone,
    href: route("admin.contacts.index"),
    role: ["admin"],
  },
  {
    label: "Job Applications",
    icon: Briefcase,
    href: route("admin.job-applications.index"),
    role: ["admin"],
  },
  {
    label: "Add Jobs",
    icon: FilePlus,
    href: route("admin.jobs.index"),
    role: ["admin"],
  },
  {
    label: "News Event",
    icon: Newspaper,
    href: route("admin.newsevent.index"),
    role: ["admin"],
  },
  {
    label: "Team",
    icon: Users,
    href: route("admin.team.index"),
    role: ["admin"],
  },
  {
    label: "Seminar",
    icon: Calendar,
    href: route("admin.seminars.index"),
    role: ["admin"],
  },
  {
    label: "Blogs",
    icon: PenSquare,
    href: route("admin.blogs.index"),
    role: ["admin"],
  },
  {
    label: "FAQs",
    icon: HelpCircle,
    href: route("admin.faqs.index"),
    role: ["admin"],
  },
  {
    label: "Greetings",
    icon: MessageSquare,
    href: route("admin.greetings.index"),
    role: ["admin"],
  },
  {
    label: "Philosophy",
    icon: Lightbulb,
    href: route("admin.philosophy.index"),
    role: ["admin"],
  },
  {
    label: "Profile",
    icon: IdCard,
    href: route("admin.profile.index"),
    role: ["admin"],
  },
  {
    label: "History",
    icon: Clock,
    href: route("admin.history.index"),
    role: ["admin"],
  },
  {
    label: "Client & Partners",
    icon: Handshake,
    href: route("admin.clients.index"),
    role: ["admin"],
  },
  {
    label: "Policy",
    icon: ShieldCheck,
    href: route("admin.policy.index"),
    role: ["admin"],
  },
  {
    label: "Solutions",
    icon: Puzzle,
    href: route("admin.solutions.index"),
    role: ["admin"],
  },
  {
    label: "Services",
    icon: Settings,
    href: route("admin.services.index"),
    role: ["admin"],
  },
  {
    label: "Services Industry",
    icon: Factory,
    href: route("admin.service-industries.index"),
    role: ["admin"],
  },
  {
    label: "SEO",
    icon: Search,
    href: route("admin.seo.index"),
    role: ["admin"],
  },
];
