"use client";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useProvidersStore } from "@/store/useProviders";
import ColletionsBTN from "@/components/ui/BookmarkButton";
import { categories } from "@/lib/constants";

export function Filter() {
  const filters = useProvidersStore((state) => state.filters);
  const setFilters = useProvidersStore((state) => state.setFilters);

  return (
    <div className="flex gap-4 bg-card rounded-lg shadow-sm">
      <Input
        placeholder="Buscar tiendas..."
        value={filters.search}
        onChange={(e) => setFilters({ search: e.target.value })}
        className="w-[250px]"
      />
      <Select
        value={filters.category ? filters.category.toString() : ""}
        onValueChange={(value) =>
          setFilters({ category: value === "all" ? null : parseInt(value) })
        }
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Categoría" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="all">Todas las categorías</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category.id} value={category.id.toString()}>
                {category.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      {/* <Select
        value={filters.country || ""}
        onValueChange={(value) =>
          setFilters({ country: value === "all" ? null : value })
        }
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="País" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="all">Todos los países</SelectItem>
            <SelectItem value="USA">Estados Unidos</SelectItem>
            <SelectItem value="CAN">Canadá</SelectItem>
            <SelectItem value="MEX">México</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select> */}
      {/* <ColletionsBTN /> */}
    </div>
  );
}
