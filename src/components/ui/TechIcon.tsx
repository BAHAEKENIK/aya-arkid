import {
  Server,
  Users,
  Monitor,
  Globe,
  Network,
  Terminal,
  Wifi,
  GitBranch,
  Cable,
  Headphones,
  Download,
  Printer,
  Shield,
  Router,
  type LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  "Windows Server": Server,
  "Active Directory": Users,
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
  "Wi-Fi": Wifi,
  Sécurité: Shield,
};

interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
}

export function TechIcon({ name, size = 14, className }: TechIconProps) {
  const Icon = ICON_MAP[name] ?? Server;
  return (
    <Icon
      size={size}
      className={className}
      aria-hidden="true"
      strokeWidth={1.75}
    />
  );
}