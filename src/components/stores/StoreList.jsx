"use client";
import { useEffect } from "react";
import { useSellerStore } from "@/store/useSeller";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { RatingStars } from "@/components/ui/RatingStars";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { StoreAddress } from "@/components/stores/StoreAddress";
import { BookmarkButton } from "@/components/ui/BookmarkButton";

export function StoreList() {
  const filteredStores = useSellerStore((state) => state.filteredStores);
  const loading = useSellerStore((state) => state.loading);
  const fetchStores = useSellerStore((state) => state.fetchStores);

  useEffect(() => {
    fetchStores();
  }, [fetchStores]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <p className="text-muted-foreground">Cargando tiendas...</p>
      </div>
    );
  }

  if (!filteredStores || filteredStores.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <p className="text-muted-foreground">No se encontraron tiendas</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
      {filteredStores &&
        filteredStores.map((store, index) => (
          <Link
            href={`services/${store.id}`}
            key={index}
            className="group group-[bom] flex flex-col gap-6 relative py-4 hover:bg-accent-foreground rounded-md duration-200 ease-in-out transition-colors"
          >
            <div className="absolute right-4 top-4">
              <BookmarkButton />
            </div>
            <section className="flex flex-col gap-4">
              <CardTitle className="group-hover:text-primary duration-200 ease-in-out transition-colors">
                {store.name}
              </CardTitle>
              <RatingStars rating={store.rating || 0} />
            </section>
            <section className="flex flex-col gap-4">
              <img
                src={store.image}
                alt={`store front`}
                className="object-cover rounded-md h-60 w-full"
              />
              <p className="text-muted-foreground">{store.description}</p>

              <StoreAddress address={store.address} />
            </section>
          </Link>
        ))}
    </div>
  );
}
