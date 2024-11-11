// components/layout/main-nav.tsx
"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
// import { UserNav } from "./user-nav";
// import { MobileNav } from "./mobile-nav";
import { useAuthStore } from "@/store/auth-store";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function MainNav() {
  const pathname = usePathname();
  const user = useAuthStore((state) => state.user);

  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/stores",
      label: "Stores",
      active: pathname === "/stores",
    },
    {
      href: "/about",
      label: "About",
      active: pathname === "/about",
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">Your Brand</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  route.active ? "text-foreground" : "text-foreground/60"
                )}
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <ThemeToggle />
          {user ? (
            <>JOSE LUIS</>
          ) : (
            <Button asChild variant="ghost">
              <Link href="/login">Login</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}

// // components/layout/navbar/user-nav.tsx
// "use client"

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { Button } from "@/components/ui/button"
// import { useAuthStore } from "@/store/auth-store"

// export function UserNav({ user }) {
//   const logout = useAuthStore((state) => state.logout)

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="ghost" className="relative h-8 w-8 rounded-full">
//           <span className="sr-only">Open user menu</span>
//           {/* Avatar or user initial here */}
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent align="end">
//         <DropdownMenuLabel>My Account</DropdownMenuLabel>
//         <DropdownMenuSeparator />
//         <DropdownMenuItem asChild>
//           <a href="/profile">Profile</a>
//         </DropdownMenuItem>
//         <DropdownMenuItem asChild>
//           <a href="/settings">Settings</a>
//         </DropdownMenuItem>
//         <DropdownMenuSeparator />
//         <DropdownMenuItem onClick={logout}>
//           Log out
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   )
// }
