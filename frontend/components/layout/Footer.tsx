import Link from "next/link";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";



interface NavigationLink {
  label: string;
  href: string;
}


const navigationLinks: NavigationLink[] = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];




const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    icon: Instagram,
  },
  {
    label: "Facebook",
    href: "#",
    icon: Facebook,
  },
];

