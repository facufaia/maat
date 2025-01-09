// import { useState, useEffect } from "react";
// import { useSellerStore } from "@/store/sellers";
// import Link from "next/link";

// export default function CollectionsPage() {
//   const colections = useSellerStore((state) => state.colections);
//   const setColections = useSellerStore((state) => state.setColections);
//   const getColectionsByUserID = useSellerStore(
//     (state) => state.getColectionsByUserID
//   );
//   // const userId = getSession().user.id;

//   useEffect(() => {
//     getColectionsByUserID(userId)
//       .then((fetchedCollections) => {
//         setColections(fetchedCollections);
//       })
//       .catch((error) => {
//         console.error("Error fetching collections:", error);
//       });
//   }, []);

//   return (
//     <div className="collections-grid">
//       {colections.map((collection) => (
//         <Link
//           key={collection.id}
//           href={`/collections/${collection.id}`}
//           className="collection-item"
//         >
//           <h3>{collection.name}</h3>
//         </Link>
//       ))}
//     </div>
//   );
// }
