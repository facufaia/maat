import { List } from "@/components/providers/List";
import { Filter } from "@/components/providers/Filter";

export default function ProvidersPage() {
  return (
    <div className="container py-12 flex flex-col gap-8">
      <div className="flex items-start flex-col gap-6">
        <h1 className="text-2xl font-bold">Buscar Servicios</h1>
        <Filter />
      </div>
      <List />
    </div>
  );
}
