// app/(public)/page.tsx - Landing Page
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <section className="py-24">
        <h1 className="text-4xl font-bold">
          Encuentra Tiendas de Confianza en Todo el Mundo
        </h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Conéctate con tiendas verificadas y compra con confianza
        </p>
        <div className="mt-8 flex gap-4">
          <Button asChild>
            <Link href="/stores">Explorar Tiendas</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/register">Registra Tu Tienda</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
