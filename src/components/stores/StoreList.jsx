"use client";
import { useEffect } from "react";
import { useSellerStore } from "@/store/sellers";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { RatingStars } from "@/components/ui/RatingStars";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function StoreList() {
  const { filteredStores } = useSellerStore((state) => state.filteredStores);
  const { loading } = useSellerStore((state) => state.loading);
  const { fetchStores } = useSellerStore((state) => state.fetchStores);

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

  if (filteredStores.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <p className="text-muted-foreground">No se encontraron tiendas</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {filteredStores.map((store) => (
        <Card key={store.id} className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle>{store.name}</CardTitle>
            <RatingStars rating={store.rating || 0} />
          </CardHeader>
          <CardContent>
            <img
              src={store.image}
              alt={`store front`}
              className="object-cover rounded-md"
            />
            <p className="text-muted-foreground mb-4">{store.description}</p>
            <div className="text-sm">
              <p className="font-medium">Dirección:</p>
              <p className="text-muted-foreground">
                {store.address.street}
                <br />
                {store.address.city}, {store.address.state}{" "}
                {store.address.postal_code}
                <br />
                {store.address.country}
                {store.reviews}
              </p>
            </div>
            <Button asChild>
              <Link href={`stores/${store.id}`}>Click Me</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
