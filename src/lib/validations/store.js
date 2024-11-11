import { z } from "zod";

// store.ts
export const storeSchema = z.object({
  name: z.string().min(3),
  category_id: z.number(),
  description: z.string().min(10),
  address: z.object({
    street: z.string(),
    city: z.string(),
    state: z.string(),
    postal_code: z.string(),
    country: z.string(),
  }),
  coordinates: z.object({
    latitude: z.number(),
    longitude: z.number(),
  }),
});
