import { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "0.5rem",
};

const defaultCenter = {
  lat: 0,
  lng: 0,
};

export function Map({ address }) {
  const [coordinates, setCoordinates] = useState(defaultCenter);

  useEffect(() => {
    // const geocoder = new window.google.maps.Geocoder();
    // const addressString = `${address.street}, ${address.city}, ${address.state} ${address.postal_code}, ${address.country}`;
    // geocoder.geocode({ address: addressString }, (results, status) => {
    //   if (status === "OK") {
    //     const { lat, lng } = results[0].geometry.location;
    //     setCoordinates({ lat: lat(), lng: lng() });
    //   }
    // });
  }, [address]);

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={coordinates}
        zoom={15}
      >
        <Marker position={coordinates} />
      </GoogleMap>
    </LoadScript>
  );
}
