// app/(stores)/stores/[id]/page.tsx
import { StoreDetails } from "@/components/stores/StoreDetails";
import { ReviewList } from "@/components/reviews/ReviewList";
import { ReviewForm } from "@/components/forms/review";

export default function StorePage({ params }) {
  return (
    <div className="container py-12">
      <StoreDetails id={params.id} />
      <div className="mt-12">
        <h2 className="text-xl font-bold mb-4">Reviews</h2>
        <ReviewList storeId={params.id} />
        <div className="mt-8">
          <ReviewForm storeId={params.id} />
        </div>
      </div>
    </div>
  );
}
