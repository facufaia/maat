// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";

// export default function CollectionPage() {
//   const router = useRouter();
//   const { id } = router.query;

//   const [collection, setCollection] = useState(null);

//   useEffect(() => {
//     if (id) {
//       fetch(`/api/collections/${id}`)
//         .then((response) => response.json())
//         .then((data) => setCollection(data));
//     }
//   }, [id]);

//   if (!collection) return <div>Cargando...</div>;

//   return (
//     <div>
//       <h1>{collection.name}</h1>
//       <ul>
//         {collection.shops.map((shop) => (
//           <li key={shop.id}>{shop.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
