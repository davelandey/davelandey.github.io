import { useState, useEffect } from "react";
import "./Map.css";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { Button, Container } from "reactstrap";
import MapMarker from "./MapMarker";
const locations = require("../../Assets/locationData/location.json");

const Map = (props) => {
  const [coordinates, setCoordinates] = useState({ lat: 0, lon: 0 });

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCoordinates({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    });
  };
// Marker sytle
  // Function: check users location - find out and add information to the popup
  // Change text inside popup depending if location has been found or not

  // Another idea may be to check the weather in that location

  // Reset button - take users back to zoomed out

  return (
    <Container is='container'>
      <MapContainer
        id='mapContainer'
        center={[22.937506, -30.559482]}
        zoom={1.5}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={[coordinates.lat, coordinates.lon]}>
          <Popup>
            <h6>Your location!</h6>
            <Button size='sm' color='success' onClick={getUserLocation}>
              Find it
            </Button>
          </Popup>
        </Marker>
        {locations.map((location) => (
          <MapMarker location={location} id={location.id} />
        ))}
      </MapContainer>
    </Container>
  );
};

export default Map;
