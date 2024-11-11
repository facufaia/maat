"use client";
import { useEffect } from "react";
import { useReviewStore } from "@/store/reviews";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { RatingStars } from "@/components/ui/RatingStars";
import { Separator } from "@/components/ui/separator";
import { formatDistanceToNow } from "date-fns";

export function ReviewList({ storeId }) {
  const reviews = useReviewStore((state) => state.reviews);
  const loading = useReviewStore((state) => state.loading);
  const fetchReviews = useReviewStore((state) => state.fetchReviews);

  useEffect(() => {
    fetchReviews(storeId);
  }, [storeId, fetchReviews]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[100px]">
        <p className="text-muted-foreground">Loading reviews...</p>
      </div>
    );
  }

  if (reviews.length === 0) {
    return (
      <Card className="bg-muted/50">
        <CardContent className="flex flex-col items-center justify-center py-8">
          <p className="text-muted-foreground">No reviews yet</p>
          <p className="text-sm text-muted-foreground mt-2">
            Be the first to review!
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {reviews.map((review) => (
        <Card key={review.id}>
          <CardHeader className="space-y-0 pb-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>
                    {review.user.name?.charAt(0) || "U"}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">
                    {review.user.name || "Anonymous"}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {formatDistanceToNow(new Date(review.created_at), {
                      addSuffix: true,
                    })}
                  </p>
                </div>
              </div>
              <RatingStars rating={review.rating} />
            </div>
          </CardHeader>
          <Separator className="my-2" />
          <CardContent>
            <p className="text-sm text-muted-foreground">{review.comment}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
