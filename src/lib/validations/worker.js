import { z } from "zod";

export const workerSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(50, "Username must not exceed 50 characters"),

  avatar: z.string().url("Avatar must be a valid URL").optional().nullable(),

  user_id: z
    .number()
    .int("User ID must be an integer")
    .positive("User ID must be positive")
    .optional()
    .nullable(),

  store_id: z
    .number()
    .int("Store ID must be an integer")
    .positive("Store ID is required"),
});
