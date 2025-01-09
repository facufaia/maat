import { z } from "zod";

export const storeSchema = z.object({
  user_id: z.number(),
  name: z.string().min(3),
  category_id: z.number(),
  description: z.string().min(10),
  isVerified: z.boolean(),
  images: z.array(z.string()),
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
