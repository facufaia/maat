"use client";
import { useEffect, useState } from "react";
import { useSellerStore } from "@/store/useSeller";
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
import BookingDialog from "@/components/stores/BookingDialog";

export const professionals = [
  {
    id: 1,
    name: "María López",
    role: "Estilista Senior",
    image: "https://github.com/maria-lopez.png",
    initials: "ML",
    services: [
      {
        id: 1,
        name: "Corte de cabello",
        price: 25,
        duration: 1,
        advance: {
          amount: 30, // porcentaje
          payment_methods: ["EFECTIVO", "TARJETA", "QR"],
        },
        qr_url: "https://backend.example.com/payment/qr?serviceId=1",
      },
      {
        id: 2,
        name: "Peinado",
        price: 20,
        duration: 1,
        advance: null, // No requiere adelanto
        qr_url: "https://backend.example.com/payment/qr?serviceId=2",
      },
      {
        id: 3,
        name: "Tinte y mechas",
        price: 60,
        duration: 2,
        advance: {
          amount: 50,
          payment_methods: ["TARJETA", "QR"], // Tarjeta o QR
        },
        qr_url: "https://backend.example.com/payment/qr?serviceId=3",
      },
    ],
  },
  {
    id: 2,
    name: "Carlos Sánchez",
    role: "Barbero",
    image: "https://github.com/carlos-sanchez.png",
    initials: "CS",
    services: [
      {
        id: 4,
        name: "Corte de barba",
        price: 15,
        duration: 0.5,
        advance: null, // No requiere adelanto
        qr_url: "https://backend.example.com/payment/qr?serviceId=4",
      },
      {
        id: 5,
        name: "Afeitado clásico",
        price: 20,
        duration: 1,
        advance: {
          amount: 25,
          payment_methods: ["EFECTIVO", "TARJETA", "QR"],
        },
        qr_url: "https://backend.example.com/payment/qr?serviceId=5",
      },
      {
        id: 6,
        name: "Diseño de barba",
        price: 30,
        duration: 1,
        advance: {
          amount: 50,
          payment_methods: ["EFECTIVO", "TARJETA", "QR"],
        },
        qr_url: "https://backend.example.com/payment/qr?serviceId=6",
      },
    ],
  },
  {
    id: 3,
    name: "Laura Gómez",
    role: "Especialista en Coloración",
    image: "https://github.com/laura-gomez.png",
    initials: "LG",
    services: [
      {
        id: 7,
        name: "Baño de color",
        price: 40,
        duration: 1.5,
        advance: {
          amount: 50, // porcentaje
          payment_methods: ["EFECTIVO", "TARJETA", "QR"],
        },
        qr_url: "https://backend.example.com/payment/qr?serviceId=7",
      },
      {
        id: 8,
        name: "Tinte completo",
        price: 70,
        duration: 2,
        advance: {
          amount: 50,
          payment_methods: ["EFECTIVO", "TARJETA", "QR"],
        },
        qr_url: "https://backend.example.com/payment/qr?serviceId=8",
      },
      {
        id: 9,
        name: "Balayage",
        price: 120,
        duration: 3,
        advance: {
          amount: 50,
          payment_methods: ["EFECTIVO", "TARJETA", "QR"],
        },
        qr_url: "https://backend.example.com/payment/qr?serviceId=9",
      },
      {
        id: 10,
        name: "Mechas californianas",
        price: 100,
        duration: 2.5,
        advance: {
          amount: 50,
          payment_methods: ["EFECTIVO", "TARJETA", "QR"],
        },
        qr_url: "https://backend.example.com/payment/qr?serviceId=10",
      },
    ],
  },
];

export function StoreCard({ id }) {
  const loading = useSellerStore((state) => state.loading);
  const error = useSellerStore((state) => state.error);
  const getStoreDetails = useSellerStore((state) => state.getStoreDetails);
  const store = useSellerStore((state) => state.store);
  const [selectedService, setSelectedService] = useState("all");

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
    <div className="w-full">
      <div className="flex justify-between h-[50svh] items-start md:gap-24">
        {/* Left Content */}
        <div className="flex flex-col h-full justify-between">
          <div>
            <div className="text-2xl font-bold mb-2">{store.name}</div>
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <MapPin size={16} />
              <span className="text-sm">
                {store.address.city}, {store.address.state}
              </span>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <RatingStars rating={store.rating} />
              <span className="text-sm text-muted-foreground">
                ({store.totalReviews} reviews)
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
            src={store.image || "/placeholder-store.jpg"}
            alt={store.name}
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
              storeConfig={{
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
