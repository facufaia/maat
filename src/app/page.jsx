import {
  Calendar,
  ArrowDown,
  Shield,
  Star,
  CreditCard,
  Search,
  Clock,
} from "lucide-react";
import {
  Briefcase,
  Scissors,
  Heart,
  Home,
  Laptop,
  Dumbbell,
  Utensils,
  Paintbrush,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const categories = [
    {
      id: 1,
      name: "Belleza y Bienestar",
      description: "Peluquería, Spa, Masajes",
      icon: Scissors,
      gradient: "from-pink-500 to-rose-500",
    },
    {
      id: 2,
      name: "Salud",
      description: "Terapias, Nutrición, Psicología",
      icon: Heart,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      id: 3,
      name: "Hogar",
      description: "Limpieza, Plomería, Electricidad",
      icon: Home,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 4,
      name: "Tecnología",
      description: "Reparaciones, Soporte, Diseño",
      icon: Laptop,
      gradient: "from-purple-500 to-violet-500",
    },
    {
      id: 5,
      name: "Fitness",
      description: "Entrenamiento, Yoga, Deportes",
      icon: Dumbbell,
      gradient: "from-orange-500 to-amber-500",
    },
    {
      id: 6,
      name: "Gastronomía",
      description: "Catering, Chef a domicilio",
      icon: Utensils,
      gradient: "from-red-500 to-orange-500",
    },
    {
      id: 7,
      name: "Arte y Diseño",
      description: "Fotografía, Diseño Gráfico",
      icon: Paintbrush,
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      id: 8,
      name: "Profesionales",
      description: "Legal, Contable, Consultoría",
      icon: Briefcase,
      gradient: "from-gray-500 to-slate-500",
    },
  ];

  const FirstComponent = categories[0].icon;
  const ThirdComponent = categories[3].icon;

  return (
    <section className="flex flex-col gap-16">
      <section className="container relative grid grid-cols-12 py-36 min-h-[100svh] rounded-lg">
        <div className="flex md:flex-col md:justify-between md:h-[50svh] relative z-10 text-foreground col-span-6">
          <div className="flex flex-col gap-6 items-center">
            <h1 className="text-5xl font-bold text-pretty animate-fadeInUp flex items-center justify-center">
              Descubrí y Reservá Servicios en Tu Zona
            </h1>
            <p className="text-2xl text-balance text-foreground/80">
              Encontrá, reservá y pagá servicios online y presenciales de forma
              segura
            </p>
          </div>
          <div className="flex justify-center text-base gap-8 text-foreground/90">
            <span className="flex items-center gap-4 leading-5">
              <Shield className="h-10 w-10 text-primary" />
              Pagos Seguros
            </span>
            <span className="flex items-center gap-4 leading-5">
              <Star className="h-10 w-10 text-primary" />
              Reseñas Verificadas
            </span>
            <span className="flex items-center gap-4 leading-5">
              <Calendar className="h-10 w-10 text-primary" />
              Reservas Instantáneas
            </span>
          </div>
        </div>
        <div className="col-span-6 flex items-center justify-center">
          <Image
            src="/fullmaat.png"
            alt="Maat Logo"
            width={300}
            height={300}
            priority
            className="h-auto w-auto"
          />
        </div>
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
          <ArrowDown className="h-8 w-8 text-primary animate-bounce" />
        </div>
      </section>
      <section className="py-16 container flex flex-col gap-14">
        <h2 className="text-3xl font-bold text-center mb-12">
          ¿Cómo Funciona?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-12 items-center text-center p-6">
            <Search className="h-16 w-16 text-primary" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Buscá</h3>
              <p className="text-balance">
                Encontrá el servicio que necesitás por zona o categoría
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-12 items-center text-center p-6">
            <Calendar className="h-16 w-16 text-primary" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Reservá</h3>
              <p className="text-balance">
                Elegí el horario que te convenga y reservá al instante
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-12 items-center text-center p-6">
            <CreditCard className="h-16 w-16 text-primary" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Pagá</h3>
              <p className="text-balance">
                Realizá el pago de forma segura en nuestra plataforma
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Explora por Categorías
        </h2>
        <div className="grid grid-cols-4 auto-rows-[180px] gap-4 max-w-7xl mx-auto">
          {/* Large Card - Span 2x2 */}
          <div
            className={`row-span-2 col-span-2 rounded-3xl p-6 bg-gradient-to-br ${categories[0].gradient} group hover:scale-[102%] transition-all duration-200 cursor-pointer relative overflow-hidden`}
          >
            <div className="relative z-10 h-full flex flex-col justify-between text-white">
              <FirstComponent className="h-8 w-8" />
              <div>
                <h3 className="text-2xl font-bold">{categories[0].name}</h3>
                <p className="text-sm opacity-90">
                  {categories[0].description}
                </p>
              </div>
            </div>
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Regular Cards */}
          {categories.slice(1, 3).map((category) => (
            <div
              key={category.id}
              className={`rounded-3xl p-6 bg-gradient-to-br ${category.gradient} group hover:scale-[102%] transition-all duration-200 cursor-pointer relative overflow-hidden`}
            >
              <div className="relative z-10 h-full flex flex-col justify-between text-white">
                <category.icon className="h-6 w-6" />
                <div>
                  <h3 className="text-lg font-bold">{category.name}</h3>
                  <p className="text-xs opacity-90">{category.description}</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/20" />
            </div>
          ))}

          {/* Wide Card - Span 2x1 */}
          <div
            className={`col-span-2 rounded-3xl p-6 bg-gradient-to-br ${categories[3].gradient} group hover:scale-[102%] transition-all duration-200 cursor-pointer relative overflow-hidden`}
          >
            <div className="relative z-10 h-full flex flex-col justify-between text-white">
              <ThirdComponent className="h-6 w-6" />
              <div>
                <h3 className="text-xl font-bold">{categories[3].name}</h3>
                <p className="text-sm opacity-90">
                  {categories[3].description}
                </p>
              </div>
            </div>
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Remaining Regular Cards */}
          {categories.slice(4).map((category) => (
            <div
              key={category.id}
              className={`rounded-3xl p-6 bg-gradient-to-br ${category.gradient} group hover:scale-[102%] transition-all duration-200 cursor-pointer relative overflow-hidden`}
            >
              <div className="relative z-10 h-full flex flex-col justify-between text-white">
                <category.icon className="h-6 w-6" />
                <div>
                  <h3 className="text-lg font-bold">{category.name}</h3>
                  <p className="text-xs opacity-90">{category.description}</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/20" />
            </div>
          ))}
        </div>
      </section>

      {/* Benefits
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          ¿Por qué elegirnos?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center p-6">
            <Shield className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Pagos Seguros</h3>
            <p className="text-balance">
              Transacciones protegidas y garantizadas
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
            <Star className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Reseñas Verificadas</h3>
            <p className="text-balance">Opiniones reales de usuarios</p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
            <Clock className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Reserva Inmediata</h3>
            <p className="text-balance">Confirmación instantánea de tu turno</p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
            <Search className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Servicios Verificados</h3>
            <p className="text-balance">
              Profesionales calificados y confiables
            </p>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="py-16 text-center">
        <h2 className="text-4xl font-bold mb-6">¿Listo para comenzar?</h2>
        <p className="text-xl mb-8">Encontrá el servicio perfecto para vos</p>
        <Button size="lg" className="px-8">
          Explorar Servicios
        </Button>
      </section>
    </section>
  );
}
