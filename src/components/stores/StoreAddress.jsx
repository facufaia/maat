import { MapPin } from "lucide-react";

export function StoreAddress({ address }) {
  return (
    <div className="flex items-start gap-3">
      <MapPin className="w-5 h-5 text-primary mt-1" />
      <div>
        <h3 className="font-semibold">Direccion</h3>
        <p className="text-sm text-muted-foreground">
          {address.street}
          <br />
          {address.city}, {address.state} {address.postal_code}
          <br />
          {address.country}
        </p>
      </div>
    </div>
  );
}
