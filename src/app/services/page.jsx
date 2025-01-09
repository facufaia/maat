import { StoreList } from "@/components/stores/StoreList";
import { StoreFilter } from "@/components/stores/StoreFilter";

export default function StoresPage() {
  return (
    <div className="container py-12 flex flex-col gap-8">
      <div className="flex items-start flex-col gap-6">
        <h1 className="text-2xl font-bold">Buscar Servicios</h1>
        <StoreFilter />
      </div>
      <StoreList />
    </div>
  );
}
