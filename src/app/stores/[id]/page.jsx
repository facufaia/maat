import { StoreCard } from "@/components/stores/StoreCard";
import { ReviewList } from "@/components/reviews/ReviewList";
import { ReviewForm } from "@/components/forms/review";

export default function StorePage({ params }) {
  return (
    <div className="container py-12">
      <StoreCard id={params.id} />
      <div className="mt-12">
        <h2 className="text-xl font-bold mb-4">Reseñas</h2>
        <ReviewList storeId={params.id} />
        <div className="mt-8">
          <ReviewForm storeId={params.id} />
        </div>
      </div>
      <section className="mt-12">
        <h3>Tiendas Relacionadas</h3>
      </section>
    </div>
  );
}
