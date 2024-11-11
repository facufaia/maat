"use client";
import { useEffect } from "react";
import { useSellerStore } from "@/store/sellers";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { RatingStars } from "@/components/ui/RatingStars";
import { StoreAddress } from "@/components/stores/StoreAddress";
import { StoreMap } from "@/components/stores/StoreMaps";
import { FavoriteButton } from "@/components/ui/FavoriteButton";
import { ReportDialog } from "@/components/ui/ReportDialog";

export function StoreCard({ id }) {
  const loading = useSellerStore((state) => state.loading);
  const error = useSellerStore((state) => state.error);
  const getStoreDetails = useSellerStore((state) => state.getStoreDetails);
  const store = useSellerStore((state) => state.store);

  useEffect(() => {
    getStoreDetails(id);
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <p className="text-muted-foreground">Loading store details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <p className="text-destructive">{error}</p>
      </div>
    );
  }

  if (!store) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <p className="text-muted-foreground">Store not found</p>
      </div>
    );
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-2xl font-bold">{store.name}</CardTitle>
            <div className="flex items-center gap-2 mt-2">
              <RatingStars rating={store.rating} />
              <span className="text-sm text-muted-foreground">
                ({store.totalReviews} reviews)
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <FavoriteButton
              isFavorite={store.isFavorite}
              onToggle={() => toggleFavorite(store.id)}
            />
            <ReportDialog />
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <img
          src={store.image}
          alt={"store.name"}
          className="w-full h-64 object-cover rounded-lg"
        />

        <div>
          <p className="text-muted-foreground">{store.description}</p>
        </div>

        <Separator />

        <div className="space-y-4">
          <StoreAddress address={store.address} />
          <StoreMap address={store.address} />
        </div>

        {/* <div className="flex items-start gap-3">
          <Clock className="w-5 h-5 text-primary mt-1" />
          <div>
            <h3 className="font-semibold">Business Hours</h3>
            <div className="text-sm text-muted-foreground grid grid-cols-2 gap-2"></div>
          </div>
        </div>
        <StoreHours/> */}
      </CardContent>
    </Card>
  );
}
