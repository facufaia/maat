"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { CreditCard, Banknote } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BookingDialog({ professional, storeConfig }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState("idle");
  const [selectedService, setSelectedService] = useState(null);
  const [step, setStep] = useState("date"); // 'date', 'time', 'confirm'
  const [paymentMethod, setPaymentMethod] = useState(null);
  const router = useRouter();

  const handlePaymentMethodSelect = (method) => {
    setPaymentMethod(method);
  };

  const handlePayment = async () => {
    setPaymentStatus("processing");

    setTimeout(() => {
      setPaymentStatus("success");
      alert("¡Reserva confirmada! Redirigiendo a tu panel de reservas...");
      router.push("/dashboard/bookings");
    }, 1500);
  };

  const calculateAdvanceAmount = (service) => {
    if (!service.advance) return null;
    return (service.price * service.advance.amount) / 100;
  };

  // Ejemplo de horarios disponibles - deben venir de la API en función de la fecha seleccionada
  const getAvailableTimeSlots = (date) => {
    return [
      "09:00",
      "09:30",
      "10:00",
      "10:30",
      "11:00",
      "11:30",
      "14:00",
      "14:30",
      "15:00",
      "15:30",
      "16:00",
      "16:30",
    ];
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setStep("time");
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setStep("payment");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full mt-4">
          Reservar cita
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] md:max-w-[80svw]">
        <DialogHeader>
          <DialogTitle>Reservar con {professional.name}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {professional.services.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                selectedService?.id === service.id
                  ? "border-primary bg-primary/5"
                  : "hover:border-primary/50"
              }`}
            >
              <div className="flex justify-between items-start">
                <h3 className="font-medium">{service.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="font-bold">${service.price}</span>
                  <span className="text-sm text-muted-foreground">
                    {service.duration}h
                  </span>
                </div>
              </div>

              {service.advance && (
                <div className="flex items-center justify-between mt-2 text-sm text-muted-foreground border-t pt-2">
                  <div className="flex items-center gap-1">
                    <span>Adelanto: {service.advance.amount}%</span>
                    <span className="font-medium">
                      (${(service.price * service.advance.amount) / 100})
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {service.advance.payment_methods.map((method) => (
                      <Badge
                        key={method}
                        variant="outline"
                        className="flex items-center gap-1"
                      >
                        {method === "CARD" ? (
                          <CreditCard className="h-3 w-3" />
                        ) : (
                          <Banknote className="h-3 w-3" />
                        )}
                        {method}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Paso 2: Seleccionar Fecha */}
          {selectedService && (
            <div className="space-y-2">
              <h4 className="font-medium">Elige una fecha</h4>
              <DatePicker
                selected={selectedDate}
                onChange={handleDateSelect}
                minDate={new Date()}
                placeholderText="11/12/24"
                className="w-full bg-background p-2 border rounded text-foreground"
                dateFormat="dd/mmmm/yy"
                locale="es"
                excludeDates={[]} // Agregar fechas no disponibles aquí
              />
            </div>
          )}

          {/* Paso 3: Seleccionar Hora */}
          {step === "time" && (
            <div className="space-y-2">
              <h4 className="font-medium">Selecciona una hora</h4>
              <div className="grid grid-cols-3 gap-2">
                {getAvailableTimeSlots(selectedDate).map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? "default" : "outline"}
                    onClick={() => handleTimeSelect(time)}
                    className="w-full"
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Paso de Pago */}
          {step === "payment" && selectedService.advance && (
            <div className="space-y-4">
              <div className="bg-muted p-4 rounded-lg space-y-2">
                <h4 className="font-medium">Pago por Adelantado Requerido</h4>
                <p>Servicio: {selectedService.name}</p>
                <p>Precio Total: ${selectedService.price}</p>
                <div className="mt-2 pt-2 border-t">
                  <p className="font-medium">
                    Adelanto Requerido ({selectedService.advance.amount}%)
                  </p>
                  <p>Monto: ${calculateAdvanceAmount(selectedService)}</p>
                </div>

                <div className="mt-4">
                  <p className="font-medium mb-2">
                    Selecciona un método de pago
                  </p>
                  <div className="flex gap-2">
                    {selectedService.advance.payment_methods.map((method) => (
                      <Button
                        key={method}
                        variant={
                          paymentMethod === method ? "default" : "outline"
                        }
                        onClick={() => handlePaymentMethodSelect(method)}
                        className="flex items-center gap-2"
                      >
                        {method === "CARD" ? (
                          <CreditCard className="h-4 w-4" />
                        ) : (
                          <Banknote className="h-4 w-4" />
                        )}
                        {method}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              <Button
                onClick={handlePayment}
                className="w-full"
                disabled={paymentStatus === "processing"}
              >
                {paymentStatus === "processing" ? (
                  <span className="flex items-center gap-2">
                    Procesando pago...
                  </span>
                ) : (
                  "Pagar y Confirmar Reserva"
                )}
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
