export const categories = [
  { id: 1, name: "Artículos para el hogar" },
  { id: 2, name: "Electrónica" },
  { id: 3, name: "Entretenimiento" },
  { id: 4, name: "Familia" },
  { id: 5, name: "Inmuebles" },
  { id: 6, name: "Instrumentos musicales" },
  { id: 7, name: "Jardín y exteriores" },
  { id: 8, name: "Juguetes y juegos" },
  { id: 9, name: "Material de oficina" },
  { id: 10, name: "Ropa" },
  { id: 11, name: "Suministros para mascotas" },
  { id: 12, name: "Suministros para reformas" },
];

export const stores = [
  {
    id: 1,
    name: "The Green Market",
    category_id: 1,
    image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58",
    rating: 3,
    description: "Local organic produce and sustainable goods",
    address: {
      street: "123 Eco Street",
      city: "Portland",
      state: "OR",
      postal_code: "97201",
      country: "USA",
    },
    coordinates: {
      latitude: 45.523064,
      longitude: -122.676483,
    },
  },
  {
    id: 10,
    name: "Verduleria don Pepe",
    category_id: 1,
    image:
      "https://images.unsplash.com/photo-1604200657090-ae45994b2451?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdyZWVuJTIwbWFya2V0fGVufDB8fDB8fHww",
    rating: 3,
    description: "Local organic produce and sustainable goods",
    address: {
      street: "123 Eco Street",
      city: "Portland",
      state: "OR",
      postal_code: "97201",
      country: "USA",
    },
    coordinates: {
      latitude: 45.523064,
      longitude: -122.676483,
    },
  },
  {
    id: 5,
    name: "Tech Haven",
    category_id: 2,
    image: "https://images.unsplash.com/photo-1491933382434-500287f9b54b",
    rating: 4,
    description: "Premium electronics and gadgets store",
    address: {
      street: "456 Innovation Ave",
      city: "Toronto",
      state: "ON",
      postal_code: "M5V 2H1",
      country: "CAN",
    },
    coordinates: {
      latitude: 43.644345,
      longitude: -79.394762,
    },
  },
  {
    id: 3,
    name: "Taco Fiesta",
    category_id: 1,
    image:
      "https://images.unsplash.com/photo-1624300629298-e9de39c13be5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1leGljYW4lMjBmb29kfGVufDB8fDB8fHww",
    rating: 2,
    description: "Authentic Mexican street food",
    address: {
      street: "789 Sabor Lane",
      city: "Mexico City",
      state: "CDMX",
      postal_code: "03100",
      country: "MEX",
    },
    coordinates: {
      latitude: 19.432608,
      longitude: -99.133209,
    },
  },
  {
    id: 4,
    name: "Fashionista",
    category_id: 3,
    image:
      "https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsb3RoaW5nfGVufDB8fDB8fHww",
    rating: 5,
    description: "Trendy clothing and accessories",
    hours: {
      monday: "9:00 AM - 6:00 PM",
      tuesday: "9:00 AM - 6:00 PM",
      wednesday: "9:00 AM - 6:00 PM",
      thursday: "9:00 AM - 6:00 PM",
      friday: "9:00 AM - 6:00 PM",
      saturday: "10:00 AM - 4:00 PM",
      sunday: "Closed",
    },
    address: {
      street: "101 Style Blvd",
      city: "Paris",
      state: "Île-de-France",
      postal_code: "75001",
      country: "FRA",
    },
    coordinates: {
      latitude: 48.856613,
      longitude: 2.352222,
    },
  },
  {
    id: 5,
    name: "Tama",
    category_id: 3,
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D",
    rating: 5,
    description: "Trendy clothing and accessories",
    hours: {
      monday: "9:00 AM - 6:00 PM",
      tuesday: "9:00 AM - 6:00 PM",
      wednesday: "9:00 AM - 6:00 PM",
      thursday: "9:00 AM - 6:00 PM",
      friday: "9:00 AM - 6:00 PM",
      saturday: "10:00 AM - 4:00 PM",
      sunday: "Closed",
    },
    address: {
      street: "101 Style Blvd",
      city: "Paris",
      state: "Île-de-France",
      postal_code: "75001",
      country: "FRA",
    },
    coordinates: {
      latitude: 48.856613,
      longitude: 2.352222,
    },
  },
  {
    id: 6,
    name: "Bambeco",
    category_id: 3,
    image:
      "https://plus.unsplash.com/premium_photo-1664202526475-8f43ee70166d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D",
    rating: 5,
    description: "Trendy clothing and accessories",
    hours: {
      monday: "9:00 AM - 6:00 PM",
      tuesday: "9:00 AM - 6:00 PM",
      wednesday: "9:00 AM - 6:00 PM",
      thursday: "9:00 AM - 6:00 PM",
      friday: "9:00 AM - 6:00 PM",
      saturday: "10:00 AM - 4:00 PM",
      sunday: "Closed",
    },
    address: {
      street: "101 Style Blvd",
      city: "Paris",
      state: "Île-de-France",
      postal_code: "75001",
      country: "FRA",
    },
    coordinates: {
      latitude: 48.856613,
      longitude: 2.352222,
    },
  },
];

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
