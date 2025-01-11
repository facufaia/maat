// src/store/store-store.js
import { create } from "zustand";
import { getProviders } from "@/services/api";

export const useProvidersStore = create((set, get) => ({
  provider: null,

  providers: [],
  filteredProviders: [],

  filters: {
    search: "",
    category: null,
    country: null,
  },

  loading: false,
  error: null,

  fetchProviders: async () => {
    try {
      set({ loading: true });
      // await new Promise((resolve) => setTimeout(resolve, 1000));

      const { call } = getProviders();
      const response = await call;

      set({
        stores: data,
        filteredStores: data,
        loading: false,
      });
    } catch (error) {
      console.error("Failed to fetch providers:", error);
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

  createProvider: async (storeData) => {
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
      console.error("Failed to create providers:", error);
      throw error;
    }
  },

  getProviderDetails: async (storeId) => {
    try {
      set({ loading: true, error: null });
      const state = get();
      const store = state.stores.find(
        (store) => store.id === parseInt(storeId)
      );

      if (!store) {
        throw new Error("Provider not found");
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
