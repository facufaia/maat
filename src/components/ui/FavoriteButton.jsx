import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export function FavoriteButton({ isFavorite, onToggle }) {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={onToggle}
      className="transition-colors duration-200"
    >
      <Heart
        className={`w-6 h-6 ${
          isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"
        }`}
      />
    </Button>
  );
}
