import { StarIconOutline, StarIconSolid } from "./icons/Star";

export function RatingStars({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star}>
          {star <= rating ? (
            <StarIconSolid className="w-5 h-5 text-yellow-400" />
          ) : (
            <StarIconOutline className="w-5 h-5 text-yellow-400" />
          )}
        </span>
      ))}
      <span className="text-sm text-muted-foreground ml-2">({rating})</span>
    </div>
  );
}
