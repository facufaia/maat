import { useState } from "react";
import { StarIconOutline, StarIconSolid } from "./icons/Star";

export function RatingInput({ value, onChange }) {
  const [hover, setHover] = useState(4);

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          className="p-1 hover:scale-110 transition-transform"
          onClick={() => onChange(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(null)}
        >
          {star <= (hover ?? value) ? (
            <StarIconSolid className="w-6 h-6 text-yellow-400" />
          ) : (
            <StarIconOutline className="w-6 h-6 text-yellow-400" />
          )}
        </button>
      ))}
      <span className="text-sm text-muted-foreground ml-2">({value})</span>
    </div>
  );
}
