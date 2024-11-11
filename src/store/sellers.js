// src/store/store-store.js
import { create } from "zustand";

const JSONSTORE = [
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
    image: "https://images.unsplash.com/photo-1491933382434-500287f9b54b",
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
    image: "https://images.unsplash.com/photo-1491933382434-500287f9b54b",
    rating: 5,
    description: "Trendy clothing and accessories",
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

export const useSellerStore = create((set, get) => ({
  stores: [],
  store: null,
  filteredStores: [],
  loading: false,
  filters: {
    search: "",
    category: null,
    country: null,
  },
  error: null,
  fetchStores: async () => {
    try {
      set({ loading: true });
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // const response = await fetch("data/stores.json");
      // const data = await response.json();

      const data = JSONSTORE;

      set({
        stores: data,
        filteredStores: data,
        loading: false,
      });
    } catch (error) {
      console.error("Failed to fetch stores:", error);
      set({ loading: false });
    }
  },
  setFilters: (newFilters) => {
    const state = get();
    const filters = { ...state.filters, ...newFilters };
    set({ filters });

    const filtered = state.stores.filter((store) => {
      const matchesSearch =
        store.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        store.description.toLowerCase().includes(filters.search.toLowerCase());
      const matchesCategory =
        !filters.category || store.category_id === filters.category;
      const matchesCountry =
        !filters.country || store.address.country === filters.country;
      return matchesSearch && matchesCategory && matchesCountry;
    });
    set({ filteredStores: filtered });
  },
  createStore: async (storeData) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const newStore = {
        id: Date.now(), // Generate temporary ID
        ...storeData,
      };

      set((state) => ({
        stores: [...state.stores, newStore],
        filteredStores: [...state.filteredStores, newStore],
      }));

      return newStore;
    } catch (error) {
      console.error("Failed to create store:", error);
      throw error;
    }
  },
  getStoreDetails: async (storeId) => {
    try {
      set({ loading: true, error: null });
      const state = get();
      const store = state.stores.find(
        (store) => store.id === parseInt(storeId)
      );

      if (!store) {
        throw new Error("Store not found");
      }

      set({ store, loading: false });
    } catch (error) {
      set({
        error: error.message,
        loading: false,
        store: null,
      });
    }
  },
}));
