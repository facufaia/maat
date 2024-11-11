// components/forms/reports/scam-report.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { scamReportSchema } from "@/lib/validations/report";
import { useReportStore } from "@/store/report-store";

export function ScamReportForm({ storeId }) {
  const createReport = useReportStore((state) => state.createReport);
  const form = useForm({
    resolver: zodResolver(scamReportSchema),
    defaultValues: {
      description: "",
      store_id: storeId,
    },
  });

  async function onSubmit(values) {
    try {
      await createReport(values);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description of Scam</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant="destructive">
          Submit Report
        </Button>
      </form>
    </Form>
  );
}
