import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useSellerStore } from "@/store/useSeller";

export function FavoriteButton() {
  const toggleFavorite = useSellerStore((state) => state.toggleFavorite);
  const store = useSellerStore((state) => state.store);

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => {
        toggleFavorite(store.id);
      }}
      className="transition-colors duration-200"
    >
      <Heart
        className={`w-6 h-6 ${
          store.isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"
        }`}
      />
    </Button>
  );
}
