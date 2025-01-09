// components/layout/Footer.tsx
"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Footer() {
  const { data: session } = useSession();

  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/maatmedrecortada.png"
                alt="Maat Logo"
                width={140}
                height={140}
                className="h-auto w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              Connecting trusted stores with customers worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/stores" className="hover:underline">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  Sobre Nosotros
                </Link>
              </li>
              {!session?.user && (
                <>
                  <li>
                    <Link href="/login" className="hover:underline">
                      Inicia Sesion
                    </Link>
                  </li>
                  <li>
                    <Link href="/register" className="hover:underline">
                      Registrate
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Store Owners */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">For Store Owners</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/dashboard" className="hover:underline">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/stores/create" className="hover:underline">
                  List Your Store
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:underline">
                  Pricing Plans
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:underline">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between pt-8 mt-8 border-t md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Maat. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link
              href="https://twitter.com"
              className="text-muted-foreground hover:text-foreground"
            >
              Twitter
            </Link>
            <Link
              href="https://linkedin.com"
              className="text-muted-foreground hover:text-foreground"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com"
              className="text-muted-foreground hover:text-foreground"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
