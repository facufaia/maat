// src/store/review-store.js
import { create } from "zustand";

const JSONREVIEWS = [
  {
    id: "r1",
    store_id: 1, // The Green Market
    user: {
      id: 1,
      name: "Sarah Green",
      avatar: "SG",
    },
    rating: 4,
    comment: "Great selection of organic produce! A bit pricey but worth it.",
    created_at: "2024-02-15T14:23:00Z",
  },
  {
    id: "r2",
    store_id: 1,
    user: {
      id: 2,
      name: "Mike Peterson",
      avatar: "MP",
    },
    rating: 2,
    comment: "Limited parking and sometimes items are out of stock.",
    created_at: "2024-01-20T09:15:00Z",
  },
  {
    id: "r3",
    store_id: 5, // Tech Haven
    user: {
      id: 4,
      name: "Alex Chen",
      avatar: "AC",
    },
    rating: 5,
    comment:
      "Excellent customer service and competitive prices on latest gadgets!",
    created_at: "2024-02-28T11:30:00Z",
  },
  {
    id: "r4",
    store_id: 3, // Taco Fiesta
    user: {
      id: 7,
      name: "Maria Rodriguez",
      avatar: "MR",
    },
    rating: 2,
    comment: "Food was cold and service was slow.",
    created_at: "2024-02-10T18:30:00Z",
  },
  {
    id: "r5",
    store_id: 4, // Fashionista
    user: {
      id: 10,
      name: "Sophie Laurent",
      avatar: "SL",
    },
    rating: 5,
    comment: "Amazing collection! Always find the latest trends here.",
    created_at: "2024-03-01T14:20:00Z",
  },
];

export const useReviewStore = create((set) => ({
  reviews: [],
  loading: false,
  error: null,

  // Fetch reviews for a specific store
  fetchReviews: async (storeId) => {
    set({ loading: true });
    // try {
    // Replace with your actual API endpoint
    // const response = await fetch(`/api/stores/${storeId}/reviews`);
    // const data = await response.json();

    await new Promise((resolve) => setTimeout(resolve, 1500));

    const data = JSONREVIEWS.filter((review) => review.store_id === storeId);

    set({ reviews: data, loading: false });
    // } catch (error) {
    //   set({ error: error.message, loading: false });
    // }
  },

  // Create a new review
  // createReview: async (review) => {
  //   try {
  //     // Replace with your actual API endpoint
  //     const response = await fetch(`/api/reviews`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(review),
  //     });
  //     const newReview = await response.json();

  //     set((state) => ({
  //       reviews: [...state.reviews, newReview],
  //     }));

  //     return newReview;
  //   } catch (error) {
  //     throw new Error("Failed to create review");
  //   }
  // },
}));
