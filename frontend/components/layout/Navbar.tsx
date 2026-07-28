"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ShoppingBag} from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/Button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

interface NavigationItem {
  label: string;
  href: string;
}

