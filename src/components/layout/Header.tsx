
"use client";

import Link from "next/link";
import {
  Menu,
  Search,
  ChevronDown,
  ShoppingBag,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/Logo";
import { useMobile } from "@/hooks/use-mobile";
import MobileMenu from "./MobileMenu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/shop", label: "Shop" },
  { href: "/promotions", label: "Promotions" },
];

const categoryLinks = [
  { label: "Cooling", href: "#" },
  { label: "Home Appliances", href: "#" },
  { label: "Kitchen Appliances", href: "#" },
  { label: "Televisions", href: "#" },
  { label: "Power Solutions", href: "#" },
  { label: "Grooming", href: "#" },
];

export default function Header() {
  const isMobile = useMobile();

  if (isMobile) {
    return <MobileMenu />;
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      {/* Top bar with contact, search, and account */}
      <div className="flex items-center justify-between h-16 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Logo />
        </div>

        <div className="flex items-center justify-end flex-1 gap-4">
          <div className="relative w-full max-w-md">
            <Search className="absolute top-1/2 left-3 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for products"
              className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <Button variant="outline" className="hidden sm:flex">
            Contact
          </Button>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <User className="w-6 h-6" />
              <span className="sr-only">Account</span>
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingBag className="w-6 h-6" />
              <span className="sr-only">Cart</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <nav className="border-t border-gray-200 bg-gray-50">
        <div className="flex items-center justify-between px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  <Menu className="w-5 h-5" />
                  <span>All Categories</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {categoryLinks.map((link) => (
                  <DropdownMenuItem key={link.label} asChild>
                    <Link href={link.href}>{link.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="hidden lg:flex items-center gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden lg:flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  <span>English</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <span>English</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Español</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
    </header>
  );
}
