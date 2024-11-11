import { z } from "zod";

// review.ts
export const reviewSchema = z.object({
  comment: z.string().min(10),
  rating: z.number().min(1).max(5),
  store_id: z.number(),
});
