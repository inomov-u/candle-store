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

const navigationItems: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Shop",
    href: "/products",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {

  const pathname = usePathname();//current page user is looking at


  const [open, setOpen] = useState(false);

  return (

    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-xl font-semibold tracking-[0.25em] uppercase text-stone-900"
        >
          Voie du Phare
        </Link>

        <nav
          className="hidden items-center gap-10 md:flex"
          aria-label="Primary Navigation"
        >
          {navigationItems.map((item) => {

            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}

                className={`transition-colors ${
                  isActive
                    ? "text-stone-900"
                    : "text-stone-500 hover:text-stone-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Shopping Cart">
            <ShoppingBag className="h-5 w-5" />
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open Menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right">
              <div className="mt-12 flex flex-col gap-6">
                {navigationItems.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      
                      onClick={() => setOpen(false)}
                      className={`text-lg transition-colors ${
                        isActive
                          ? "text-stone-900"
                          : "text-stone-500 hover:text-stone-900"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}