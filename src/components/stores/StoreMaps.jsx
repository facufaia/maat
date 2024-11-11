import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

const containerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "0.5rem",
};

const defaultCenter = {
  lat: 0,
  lng: 0,
};

export function StoreMap({ address }) {
  const [coordinates, setCoordinates] = useState(defaultCenter);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const addressString = encodeURIComponent(
          `${address.street}, ${address.city}, ${address.state} ${address.postal_code}, ${address.country}`
        );
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${addressString}`
        );
        const data = await response.json();

        if (data.length > 0) {
          setCoordinates({
            lat: parseFloat(data[0].lat),
            lng: parseFloat(data[0].lon),
          });
        }
      } catch (error) {
        console.error("Error geocoding address:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCoordinates();
  }, [address]);

  if (isLoading) {
    return <div>Loading map...</div>;
  }

  return (
    <MapContainer
      center={[coordinates.lat, coordinates.lng]}
      zoom={15}
      style={containerStyle}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[coordinates.lat, coordinates.lng]}>
        <Popup>
          {address.street}, {address.city}
        </Popup>
      </Marker>
    </MapContainer>
  );
}
