// // src/components/stores/store-filter.jsx
// "use client";

// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { useStoreStore } from "@/store/store-store";

// export function StoreFilter() {

// const filters = useStoreStore((state) => state.filters);
// const setFilters = useStoreStore((state) => state.setFilters);

//   return (
//     <div className="flex gap-4 p-4 bg-card rounded-lg shadow-sm">
//       <Input
//         placeholder="Buscar tiendas..."
//         value={filters.search}
//         onChange={(e) => setFilters({ search: e.target.value })}
//         className="w-[250px]"
//       />

//       {/* Selector de Categoría */}
//       <Select
//         value={filters.category ? filters.category.toString() : ""}
//         onValueChange={(value) =>
//           setFilters({ category: value === "all" ? null : parseInt(value) })
//         }
//       >
//         <SelectTrigger className="w-[180px]">
//           <SelectValue placeholder="Categoría" />
//         </SelectTrigger>
//         <SelectContent>
//           <SelectGroup>
//             <SelectItem value="all">Todas las categorías</SelectItem>
//             <SelectItem value="1">Restaurantes</SelectItem>
//             <SelectItem value="2">Tiendas</SelectItem>
//             <SelectItem value="3">Servicios</SelectItem>
//           </SelectGroup>
//         </SelectContent>
//       </Select>

//       {/* Selector de País */}
//       <Select
//         value={filters.country || ""}
//         onValueChange={(value) =>
//           setFilters({ country: value === "all" ? null : value })
//         }
//       >
//         <SelectTrigger className="w-[180px]">
//           <SelectValue placeholder="País" />
//         </SelectTrigger>
//         <SelectContent>
//           <SelectGroup>
//             <SelectItem value="all">Todos los países</SelectItem>
//             <SelectItem value="USA">Estados Unidos</SelectItem>
//             <SelectItem value="CAN">Canadá</SelectItem>
//             <SelectItem value="MEX">México</SelectItem>
//           </SelectGroup>
//         </SelectContent>
//       </Select>
//     </div>
//   );
// }
