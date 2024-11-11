import { Button } from "@/components/ui/button";
import { Flag } from "lucide-react";

export function ReportButton() {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="transition-colors duration-200"
    >
      <Flag className="w-6 h-6 text-gray-400 hover:text-yellow-500" />
    </Button>
  );
}
