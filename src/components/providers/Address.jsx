import { MapPin } from "lucide-react";

export function Address({ address }) {
  return (
    <div className="flex items-start gap-3">
      <MapPin className="w-5 h-5 text-primary mt-1" />
      <div>
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
