"use client";
import { Bookmark } from "lucide-react";
import { Button } from "./button";
import { useProvidersStore } from "@/store/useProviders";

export function BookmarkButton() {
  const toggleBookmark = useProvidersStore((state) => state.toggleBookmark);
  const provider = useProvidersStore((state) => state.provider);

  return (
    <Button
      variant="secondary"
      size="icon"
      onClick={() => toggleBookmark(provider.id)}
      className="transition-colors duration-200"
    >
      <Bookmark
        className={`w-6 h-6 ${
          provider?.isBookmarked ? "fill-red-500 text-red-500" : "text-gray-400"
        }`}
      />
    </Button>
  );
}
