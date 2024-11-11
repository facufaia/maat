// components/forms/reviews/review.tsx
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
import { reviewSchema } from "@/lib/validations/review";
import { useReviewStore } from "@/store/reviews";
import { RatingStars } from "@/components/ui/RatingStars";

export function ReviewForm({ storeId }) {
  const createReview = useReviewStore((state) => state.createReview);
  const form = useForm({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      comment: "",
      rating: 5,
      store_id: storeId,
    },
  });

  async function onSubmit(values) {
    try {
      await createReview(values);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="rating"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rating</FormLabel>
              {/* <FormControl>
                <Rating value={field.value} onChange={field.onChange} />
              </FormControl>
              <FormMessage /> */}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Comment</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit Review</Button>
      </form>
    </Form>
  );
}
