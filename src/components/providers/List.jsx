"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { RatingStars } from "@/components/ui/RatingStars";
import { Button } from "@/components/ui/button";
import { BookmarkButton } from "@/components/ui/BookmarkButton";
import { Address } from "@/components/providers/Address";
import { useEffect } from "react";
import { useProvidersStore } from "@/store/useProviders";
import Link from "next/link";

export function List() {
  const filteredProviders = useProvidersStore(
    (state) => state.filteredProviders
  );
  const loading = useProvidersStore((state) => state.loading);
  const fetchProviders = useProvidersStore((state) => state.fetchProviders);

  useEffect(() => {
    fetchProviders();
  }, [fetchProviders]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <p className="text-muted-foreground">Cargando tiendas...</p>
      </div>
    );
  }

  if (!filteredProviders || filteredProviders.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <p className="text-muted-foreground">No se encontraron tiendas</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
      {filteredProviders &&
        filteredProviders.map((provider, index) => (
          <Link
            href={`services/${provider.id}`}
            key={index}
            className="group group-[bom] flex flex-col gap-6 relative py-4 hover:bg-accent-foreground rounded-md duration-200 ease-in-out transition-colors"
          >
            <div className="absolute right-4 top-4">
              <BookmarkButton />
            </div>
            <section className="flex flex-col gap-4">
              <CardTitle className="group-hover:text-primary duration-200 ease-in-out transition-colors">
                {provider.name}
              </CardTitle>
              <RatingStars rating={provider.rating || 0} />
            </section>
            <section className="flex flex-col gap-4">
              <img
                src={provider.image}
                alt={`provider front`}
                className="object-cover rounded-md h-60 w-full"
              />
              <p className="text-muted-foreground">{provider.description}</p>

              <Address address={provider.address} />
            </section>
          </Link>
        ))}
    </div>
  );
}
