import { z } from "zod";

// report.ts
export const scamReportSchema = z.object({
  description: z.string().min(20),
  store_id: z.number(),
});
