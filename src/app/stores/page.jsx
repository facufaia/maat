// app/(stores)/stores/page.tsx
import { StoreList } from "@/components/stores/storeList";
import { StoreFilter } from "@/components/stores/storeFilter";

export default function StoresPage() {
  return (
    <div className="container py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Browse Stores</h1>
        {/* <StoreFilter /> */}
      </div>
      <StoreList />
    </div>
  );
}
