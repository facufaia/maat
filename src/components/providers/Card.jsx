"use client";
import { useEffect, useState } from "react";
import { useProvidersprovider } from "@/provider/useProviders";
import { RatingStars } from "@/components/ui/RatingStars";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import BookingDialog from "@/components/providers/BookingDialog";
import { professionals } from "@/lib/constants";

export function Card({ id }) {
  const loading = useProvidersprovider((state) => state.loading);
  const error = useProvidersprovider((state) => state.error);
  const getProvidersDetails = useProvidersprovider(
    (state) => state.getProvidersDetails
  );
  const provider = useProvidersprovider((state) => state.provider);
  const [selectedService, setSelectedService] = useState("all");

  useEffect(() => {
    getProvidersDetails(id);
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <p className="text-muted-foreground">Loading provider details...</p>
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
        <p className="text-muted-foreground">provider not found</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex justify-between h-[50svh] items-start md:gap-24">
        {/* Left Content */}
        <div className="flex flex-col h-full justify-between">
          <div>
            <div className="text-2xl font-bold mb-2">{provider.name}</div>
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <MapPin size={16} />
              <span className="text-sm">
                {provider.address.city}, {provider.address.state}
              </span>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <RatingStars rating={provider.rating} />
              <span className="text-sm text-muted-foreground">
                ({provider.totalReviews} reviews)
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Gaming Servers</Badge>
            <Badge variant="secondary">VPN</Badge>
            <Badge variant="secondary">Web Hosting</Badge>
            <Badge variant="secondary">Web Hosting</Badge>
            <Badge variant="secondary">Cloud Storage</Badge>
            <Badge variant="secondary">Cloud Storage</Badge>
            <Badge variant="secondary">Gaming Servers</Badge>
            <Badge variant="secondary">VPN</Badge>
            <Badge variant="secondary">Web Hosting</Badge>
            <Badge variant="secondary">Web Hosting</Badge>
            <Badge variant="secondary">Cloud Storage</Badge>
            <Badge variant="secondary">Cloud Storage</Badge>
          </div>
        </div>

        {/* Right Image */}
        <div className="h-full w-full">
          <img
            src={provider.image || "/placeholder-provider.jpg"}
            alt={provider.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Subservices Filter */}
      <div className="flex justify-start mb-4 mt-10">
        <Select value={selectedService} onValueChange={setSelectedService}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Services</SelectItem>
            <SelectItem value="gaming">Gaming Servers</SelectItem>
            <SelectItem value="vpn">VPN Services</SelectItem>
            <SelectItem value="hosting">Web Hosting</SelectItem>
            <SelectItem value="cloud">Cloud Storage</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Professionals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {professionals.map((professional) => (
          <div key={professional.id} className="border rounded-lg p-4">
            <BookingDialog
              professional={professional}
              providerConfig={{
                requires_deposit: true,
                default_deposit_rate: 50,
              }}
            />
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold">{professional.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {professional.role}
                </p>
              </div>
              <Avatar className="h-10 w-10">
                <AvatarImage src={professional.image} />
                <AvatarFallback>{professional.initials}</AvatarFallback>
              </Avatar>
            </div>

            {/* Top 3 Services */}
            <div className="space-y-2">
              {professional.services.slice(0, 3).map((service) => (
                <div key={service.id} className="flex justify-between text-sm">
                  <span>{service.name}</span>
                  <div>
                    <span className="font-medium">${service.price}</span>
                    <span className="text-muted-foreground ml-2">
                      ({service.duration}h)
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* View More Services Dialog */}
            {professional.services.length > 3 && (
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="sm" className="w-full mt-2">
                    <MoreHorizontal className="h-4 w-4 mr-2" />
                    View More Services
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <div className="space-y-2">
                    {professional.services.map((service) => (
                      <div key={service.id} className="flex justify-between">
                        <span>{service.name}</span>
                        <div>
                          <span className="font-medium">${service.price}</span>
                          <span className="text-muted-foreground ml-2">
                            ({service.duration}h)
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
