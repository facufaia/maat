import { z } from "zod";

export const workerServiceSchema = z.object({
  worker_id: z.number().int("Worker ID must be an integer").positive(),
  service_id: z.number().int("Service ID must be an integer").positive(),
  price: z.number().positive("Price must be positive"),
  duration: z.number().int("Duration must be in minutes").positive(),
  is_online: z.boolean().default(false),
});
