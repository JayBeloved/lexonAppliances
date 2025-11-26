
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/shop", label: "Shop" },
  { href: "/promotions", label: "Promotions" },
  { href: "/contact", label: "Contact" },
];

const categoryLinks = [
    {
        title: "Small Appliances",
        items: [
          { label: "Irons", href: "#" },
          { label: "Kettles", href: "#" },
          { label: "Toasters", href: "#" },
        ],
      },
      {
        title: "Kitchen",
        items: [
          { label: "Blenders", href: "#" },
          { label: "Mixers", href: "#" },
          { label: "Coffee Makers", href: "#" },
        ],
      },
      {
        title: "Home",
        items: [
          { label: "Vacuums", href: "#" },
          { label: "Fans", href: "#" },
          { label: "Heaters", href: "#" },
        ],
      },
      {
        title: "Accessories",
        items: [
          { label: "Filters", href: "#" },
          { label: "Bags", href: "#" },
          { label: "Parts", href: "#" },
        ],
      },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="flex items-center justify-between h-16 px-4">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Search className="w-6 h-6" />
            <span className="sr-only">Search</span>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <h2 className="text-lg font-semibold">Menu</h2>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="w-6 h-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <div className="flex-1 overflow-y-auto">
                    <div className="p-4">
                        <p className="text-sm text-gray-500">Your trusted appliance partner.</p>
                    </div>
                  <Accordion type="multiple" className="w-full">
                    {categoryLinks.map((category) => (
                      <AccordionItem key={category.title} value={category.title}>
                        <AccordionTrigger>{category.title}</AccordionTrigger>
                        <AccordionContent>
                          <ul className="flex flex-col gap-2">
                            {category.items.map((item) => (
                              <li key={item.label}>
                                <Link href={item.href} className="text-sm text-gray-700 hover:text-primary">
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                  <div className="flex flex-col gap-4 p-4 mt-4 border-t">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium text-gray-700 hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
