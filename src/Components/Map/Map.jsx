import { useState, useEffect, useCallback, useMemo } from "react";
import "./Map.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";
import { Button, Col, Container, Row } from "reactstrap";
import MapMarker from "./MapMarker";
const locations = require("../../Assets/locationData/location.json");

const Map = (props) => {
  const center = [22.937506, -30.559482];
  const zoom = 2;

  const [map, setMap] = useState(null);

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

  function DisplayPosition({ map }) {
    const [position, setPosition] = useState(() => map.getCenter());

    const onClick = useCallback(() => {
      map.setView(center, zoom);
      setUserLocationMessage("Find your location");
      setUserLocationButtonMessage("Find your location");
    }, [map]);

    const onMove = useCallback(() => {
      setPosition(map.getCenter());
    }, [map]);

    useEffect(() => {
      map.on("move", onMove);
      return () => {
        map.off("move", onMove);
      };
    }, [map, onMove]);

    return (
      <p>
        latitude: {position.lat.toFixed(4)}, longitude:{" "}
        {position.lng.toFixed(4)}
        <button onClick={onClick}>Reset</button>
      </p>
    );
  }

  const displayMap = useMemo(
    () => (
      <MapContainer
        id='mapContainer'
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
        zoomControl={false}
        doubleClickZoom={false}
        ref={setMap}
      >

        {/* Button: reset functionality wanted on this one */}
        {/* <Button id='mapRestButton' onClick={DisplayPosition} color='success'>
          Reset Map
        </Button> */}
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
      </MapContainer>
    ),
    []
  );

  return (
    <Container id='container' fluid='true'>
      {displayMap}
      {map ? <DisplayPosition map={map} /> : null}
    </Container>
  );
};

export default Map;
