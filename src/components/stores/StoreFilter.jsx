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
import { useSellerStore } from "@/store/useSeller";
import ColletionsBTN from "@/components/ui/BookmarkButton";

export function StoreFilter() {
  const filters = useSellerStore((state) => state.filters);
  const setFilters = useSellerStore((state) => state.setFilters);

  const categories = [
    { id: 1, name: "Artículos para el hogar" },
    { id: 2, name: "Electrónica" },
    { id: 3, name: "Entretenimiento" },
    { id: 4, name: "Familia" },
    { id: 5, name: "Inmuebles" },
    { id: 6, name: "Instrumentos musicales" },
    { id: 7, name: "Jardín y exteriores" },
    { id: 8, name: "Juguetes y juegos" },
    { id: 9, name: "Material de oficina" },
    { id: 10, name: "Ropa" },
    { id: 11, name: "Suministros para mascotas" },
    { id: 12, name: "Suministros para reformas" },
  ];

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
