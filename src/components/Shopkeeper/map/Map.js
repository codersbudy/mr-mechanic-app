import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Circle, useMapEvents } from 'react-leaflet';
import { GeoSearchControl } from 'react-leaflet-geosearch';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet-routing-machine';

const Map = () => {
  const [marker, setMarker] = useState(null);
  const [circle, setCircle] = useState(null);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    const getPosition = (position) => {
      const { latitude, longitude } = position.coords;
      setLatitude(latitude);
      setLongitude(longitude);
    };

    if (!navigator.geolocation) {
      console.log("Your browser doesn't support geolocation feature!");
    } else {
      navigator.geolocation.getCurrentPosition(getPosition);
    }
  }, []);

  const handleMapClick = (e) => {
    const { lat, lng } = e.latlng;

    setLatitude(lat);
    setLongitude(lng);
  };

  return (
    <div>
      <MapContainer
        center={[14.0860746, 100.608406]}
        zoom={6}
        style={{ width: '100%', height: '100vh' }}
        onClick={handleMapClick}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {latitude && longitude && <Marker position={[latitude, longitude]} />}
        {latitude && longitude && <Circle center={[latitude, longitude]} radius={10} />}
      </MapContainer>
      <input type="text" name="latitude" id="latitude" value={latitude} readOnly />
      <input type="text" name="longitude" id="longitude" value={longitude} readOnly />
    </div>
  );
};

export default Map;
