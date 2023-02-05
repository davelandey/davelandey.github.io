import { useState, useEffect, useCallback } from "react";
import "./Map.css";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  ZoomControl,
  useMapEvents,
} from "react-leaflet";
import { Button, Col, Container, Row } from "reactstrap";
import MapMarker from "./MapMarker";
const locations = require("../../Assets/locationData/location.json");

const Map = (props) => {
  const center = [22.937506, -30.559482];
  const zoom = 2;

  const [map, setMap] = useState(null);
  const [mapCenter, setMapCenter] = useState(center);
  const [mapZoom, setMapZoom] = useState(zoom);
  const [coordinates, setCoordinates] = useState({ lat: 0, lon: 0 });
  const [userLocationMessage, setUserLocationMessage] =
    useState("Find your location");
  const [userLocationButtonMessage, setUserLocationButtonMessage] =
    useState("Find your location");

    const getUserLocation = () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setCoordinates({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
        setUserLocationMessage("You are here!");
        setUserLocationButtonMessage("Found your location");
      });
    };


  //Function will reset: zoom, user marker (location and info within)
  //**Function is not resetting map zoom on click - why?!
const MapZoomReset = useCallback(() => {
setMapCenter(center)
setMapZoom(zoom)
setUserLocationMessage("Find your location");
setUserLocationButtonMessage("Find your location");
alert("I am working on this functionality.\nWhen a user clicks this button the map will: \n- recenter \n- zoom will return to original")
}, [])
  

  return (
    <Container id='container' fluid='true'>
      <MapContainer
        id='mapContainer'
        center={center}
        zoom={mapZoom}
        scrollWheelZoom={false}
        zoomControl={false}
        doubleClickZoom={false}
        ref={setMap}
      >
        <Button id='mapRestButton' onClick={MapZoomReset} color='success'>
          Reset Map
        </Button>
        <ZoomControl position='topleft' />

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {/* User has choice of finding location - this is the marker for it */}
        {/* Consider creating userMarker component to clean up code */}
        <Marker position={[coordinates.lat, coordinates.lon]}>
          <Popup>
            <h6>{userLocationMessage}</h6>
            <Button
              id='userLocationButton'
              size='sm'
              color='success'
              onClick={getUserLocation}
            >
              {userLocationButtonMessage}
            </Button>
          </Popup>
          {/* Marker/s for mapped location/s for myself */}
        </Marker>
        {locations.map((location) => (
          <MapMarker location={location} id={location.id} />
        ))}

        {/* EXAMPLE FROM REACT LEAFTET */}
      </MapContainer>
    </Container>
  );
};

export default Map;
