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
  const center = [13.9234, -17.2266];
  const zoom = 2;

  const [map, setMap] = useState(null);

  function DisplayPosition({ map }) {
    const [position, setPosition] = useState(() => map.getCenter());

    const onClick = useCallback(() => {
      map.setView(center, zoom);
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
      <h6>
        {/* Optional: lat and long of center of map displayed - removed for now */}

        {/* Latitude: {position.lat.toFixed(4)}<br/> 
        Longitude:{position.lng.toFixed(4)}<br/> */}

        {/* Reset map on click - would like to have this button containted within/on map */}
       <button id="mapRestButton" onClick={onClick}>Reset</button>
      </h6>
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

        <ZoomControl position='topleft' />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />

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
