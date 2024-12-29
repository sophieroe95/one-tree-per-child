import type { LatLngTuple, Map as LeafletMap } from "leaflet";
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

const MAP_DEFAULT_CENTRE: LatLngTuple = [51.4545, -2.58];

export default function Map() {
  const [isMapReady, setIsMapReady] = React.useState(false);
  const mapRef = React.useRef<LeafletMap>(null);

  React.useEffect(() => {
    if (isMapReady && mapRef.current !== null) {
      mapRef.current.locate({ setView: true, maxZoom: 16 });
    }
  }, [isMapReady]);

  return (
    <MapContainer
      center={MAP_DEFAULT_CENTRE}
      className="Map"
      ref={mapRef}
      scrollWheelZoom
      style={{ height: "100%" }}
      whenReady={() => setIsMapReady(true)}
      zoom={12}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}
