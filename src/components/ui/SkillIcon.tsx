import {
  Server,
  Users,
  Monitor,
  Globe,
  Network,
  Terminal,
  Router,
  Wifi,
  GitBranch,
  Cable,
  Headphones,
  Download,
  Printer,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  "Active Directory": Users,
  "Windows Server": Server,
  "Windows 10/11": Monitor,
  DNS: Globe,
  DHCP: Network,
  Linux: Terminal,
  Cisco: Router,
  Aruba: Wifi,
  Ruckus: Wifi,
  VLAN: GitBranch,
  "TCP/IP": Cable,
  "Support N1/N2": Headphones,
  WDS: Download,
  Zebra: Printer,
  Toshiba: Printer,
};

interface SkillIconProps {
  name: string;
  size?: number;
}

export function SkillIcon({ name, size = 16 }: SkillIconProps) {
  const Icon = ICONS[name] ?? Server;
  return <Icon size={size} strokeWidth={1.6} aria-hidden="true" />;
}