"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { User } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const { data: session } = useSession();

  const routes = [
    {
      href: "/",
      label: "Inicio",
      active: pathname === "/",
    },
    {
      href: "/services",
      label: "Servicios",
      active: pathname === "/services",
    },
    {
      href: "/collections",
      label: "Colecciones",
      active: pathname === "/collections",
    },
    {
      href: "/about",
      label: "Sobre Nosotros",
      active: pathname === "/about",
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex w-full h-14 items-center">
        <div className="mr-4 min-w-max hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image
              src="/maat.png"
              alt="Maat Logo"
              width={24}
              height={24}
              priority
              className="h-auto w-auto"
            />
          </Link>
        </div>
        <nav className="flex items-center space-x-6 text-sm font-medium justify-center w-full">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`transition-colors duration-300 ease-in-out hover:text-primary ${
                route.active ? "text-primary" : "text-foreground/60"
              }`}
            >
              {route.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center justify-between space-x-2 md:justify-end">
          <ThemeToggle />
          {session?.user ? (
            <Link href="/dashboard">
              <Avatar>
                <AvatarImage src={session.user.image} />
                <AvatarFallback>
                  <User
                    className={pathname === "/dashboard" ? "text-primary" : ""}
                  />
                </AvatarFallback>
              </Avatar>
            </Link>
          ) : (
            <Link href="/login">
              <User
                className={`h-6 w-6 mr-2 ${
                  pathname === "/login" ? "text-primary" : ""
                }`}
              />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
