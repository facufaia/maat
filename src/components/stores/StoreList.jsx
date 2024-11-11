"use client";
import { useEffect } from "react";
import { useSellerStore } from "@/store/sellers";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { RatingStars } from "@/components/ui/RatingStars";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { StoreAddress } from "@/components/stores/StoreAddress";

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredStores &&
        filteredStores.map((store) => (
          <Card key={store.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>{store.name}</CardTitle>
              <RatingStars rating={store.rating || 0} />
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
              <img
                src={store.image}
                alt={`store front`}
                className="object-cover rounded-md "
              />
              <div className="flex flex-col gap-4">
                <p className="text-muted-foreground mb-4">
                  {store.description}
                </p>
                <StoreAddress address={store.address} />
                <Button asChild>
                  <Link href={`stores/${store.id}`}>Click Me</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
    </div>
  );
}
