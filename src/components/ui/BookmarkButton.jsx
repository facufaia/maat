"use client";
import { Bookmark } from "lucide-react";
import { Button } from "./button";
import { useSellerStore } from "@/store/useSeller";

export function BookmarkButton() {
  const toggleBookmark = useSellerStore((state) => state.toggleBookmark);
  const store = useSellerStore((state) => state.store);

  return (
    <Button
      variant="secondary"
      size="icon"
      onClick={() => toggleBookmark(store.id)}
      className="transition-colors duration-200"
    >
      <Bookmark
        className={`w-6 h-6 ${
          store?.isBookmarked ? "fill-red-500 text-red-500" : "text-gray-400"
        }`}
      />
    </Button>
  );
}
