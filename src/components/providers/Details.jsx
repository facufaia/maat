"use client";
import { useEffect } from "react";
import { useSellerProvider } from "@/stores/useSeller";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { RatingStars } from "@/components/ui/RatingStars";

export function Details({ id }) {
  const loading = useSellerProvider((state) => state.loading);
  const error = useSellerProvider((state) => state.error);
  const getProviderDetails = useSellerProvider(
    (state) => state.getProviderDetails
  );
  const provider = useSellerProvider((state) => state.provider);

  useEffect(() => {
    getProviderDetails(id);
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <p className="text-muted-foreground">Loading Provider details...</p>
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

  if (!provider) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <p className="text-muted-foreground">Provider not found</p>
      </div>
    );
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-2xl font-bold">
              {provider.name}
            </CardTitle>
            <div className="flex items-center gap-2 mt-2">
              <RatingStars rating={provider.rating} />
              <span className="text-sm text-muted-foreground">
                ({provider.totalReviews} reseñas)
              </span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <img
          src={provider.image}
          alt={"provider.name"}
          className="w-full h-64 object-cover rounded-lg"
        />

        {/* <div>
          <p className="text-muted-foreground">{provider.description}</p>
        </div>

        <Separator />

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-primary mt-1" />
            <div>
              <h3 className="font-semibold">Address</h3>
              <p className="text-sm text-muted-foreground">
                {provider.address.street}
                <br />
                {provider.address.city}, {provider.address.state}{" "}
                {provider.address.postal_code}
                <br />
                {provider.address.country}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-primary mt-1" />
            <div>
              <h3 className="font-semibold">Business Hours</h3>
              <div className="text-sm text-muted-foreground grid grid-cols-2 gap-2">
                {Object.entries(provider.hours).map(([day, hours]) => (
                  <div key={day} className="flex justify-between">
                    <span className="capitalize">{day}:</span>
                    <span>{hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div> */}
      </CardContent>
    </Card>
  );
}
