"use client";

import { format } from "date-fns";
import { es } from "date-fns/locale";
import { CreditCard, Banknote } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const mockBookings = [
  {
    id: 44,
    service: "Corte de Cabello",
    professional: {
      name: "Marío Samallan santan 24/7/12 atr con la gilada",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=maria",
      initials: null, // Solo tiene avatar
    },
    date: "2025-01-15T14:00:00",
    status: "pending",
    price: 150,
    advance: {
      amount: 50,
      paid: 75,
      method: "CARD",
    },
    store: "Peluquería Style",
  },
  {
    id: 1,
    service: "Corte de Cabello",
    professional: {
      name: "María López",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=maria",
      initials: null, // Solo tiene avatar
    },
    date: "2024-01-15T14:00:00",
    status: "completed",
    price: 150,
    advance: {
      amount: 50,
      paid: 75,
      method: "CARD",
    },
    store: "Peluquería Style",
  },
  {
    id: 2,
    service: "Tinte y Mechas",
    professional: {
      name: "Carlos Sánchez",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=carlos",
      initials: null, // Solo tiene avatar
    },
    date: "2024-01-20T15:00:00",
    status: "upcoming",
    price: 200,
    advance: {
      amount: 30,
      paid: 60,
      method: "CASH",
    },
    store: "Beauty Center",
  },
  {
    id: 3,
    service: "Masaje Terapéutico",
    professional: {
      name: "Ana García",
      avatar: null, // Solo tiene iniciales
      initials: "AG",
    },
    date: "2023-12-20T16:00:00",
    status: "completed",
    price: 180,
    advance: {
      amount: 25,
      paid: 45,
      method: "CARD",
    },
    store: "Spa Relax",
  },
  {
    id: 4,
    service: "Diseño de Cejas",
    professional: {
      name: "Laura Martínez",
      avatar: null, // Solo tiene iniciales
      initials: "LM",
    },
    date: "2024-01-28T11:00:00",
    status: "upcoming",
    price: 80,
    advance: {
      amount: 40,
      paid: 32,
      method: "CARD",
    },
    store: "Beauty Center",
  },
  {
    id: 5,
    service: "Masaje Deportivo",
    professional: {
      name: "Juan Pérez",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=juan",
      initials: null, // Solo tiene avatar
    },
    date: "2024-02-05T15:30:00",
    status: "upcoming",
    price: 220,
    advance: {
      amount: 50,
      paid: 110,
      method: "CASH",
    },
    store: "SportMassage Pro",
  },
  {
    id: 6,
    service: "Tratamiento Facial",
    professional: {
      name: "Sofia Rodríguez",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sofia",
      initials: null, // Solo tiene avatar
    },
    date: "2024-01-30T14:15:00",
    status: "upcoming",
    price: 150,
    advance: {
      amount: 30,
      paid: 45,
      method: "CARD",
    },
    store: "Spa Relax",
  },
  {
    id: 7,
    service: "Corte y Barba",
    professional: {
      name: "Diego Torres",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=diego",
      initials: null, // Solo tiene avatar
    },
    date: "2024-02-15T12:00:00",
    status: "upcoming",
    price: 120,
    advance: {
      amount: 25,
      paid: 30,
      method: "CASH",
    },
    store: "BarberShop Elite",
  },
];

function BookingCard({ booking }) {
  const isUpcoming = new Date(booking.date) > new Date();

  return (
    <div className="bg-card rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div className="flex gap-4">
          <Avatar className="h-12 w-12">
            {booking.professional.avatar ? (
              <AvatarImage src={booking.professional.avatar} />
            ) : null}
            <AvatarFallback>{booking.professional.initials}</AvatarFallback>
          </Avatar>

          <div>
            <h3 className="font-semibold text-lg">{booking.service}</h3>
            <p className="text-muted-foreground">{booking.store}</p>
            <p className="text-sm text-muted-foreground">
              Prof. {booking.professional.name}
            </p>
          </div>
        </div>

        <Badge variant={isUpcoming ? "default" : "secondary"}>
          {isUpcoming ? "Próxima" : "Completada"}
        </Badge>
      </div>

      <Separator className="my-4" />

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-muted-foreground">Fecha y Hora</p>
          <p className="font-medium">
            {format(new Date(booking.date), "PPP 'a las' p", { locale: es })}
          </p>
        </div>
        <div>
          <p className="text-muted-foreground">Precio Total</p>
          <p className="font-medium">${booking.price}</p>
        </div>
        <div>
          <p className="text-muted-foreground">Adelanto Pagado</p>
          <div className="flex items-center gap-2">
            <span className="font-medium">${booking.advance.paid}</span>
            {booking.advance.method === "CARD" ? (
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            ) : (
              <Banknote className="h-4 w-4 text-muted-foreground" />
            )}
          </div>
        </div>
        <div>
          <p className="text-muted-foreground">Estado del Pago</p>
          <div className="flex items-center gap-2">
            <span className="font-medium">
              {booking.advance.amount}% de adelanto
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BookingsPage() {
  const upcomingBookings = mockBookings.filter(
    (booking) => new Date(booking.date) > new Date()
  );

  const pastBookings = mockBookings.filter(
    (booking) => new Date(booking.date) <= new Date()
  );

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-8">Mis Reservas</h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-4">Próximas Reservas</h2>
          {upcomingBookings.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2">
              {upcomingBookings.map((booking) => (
                <BookingCard key={booking.id} booking={booking} />
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              No tienes reservas próximas
            </div>
          )}
        </section>

        <Separator />

        <section>
          <h2 className="text-xl font-semibold mb-4">Reservas Pasadas</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {pastBookings.map((booking) => (
              <BookingCard key={booking.id} booking={booking} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
