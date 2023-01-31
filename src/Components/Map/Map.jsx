import { useState, useEffect } from "react";
import "./Map.css";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { Button, Col, Container, Row } from "reactstrap";
import MapMarker from "./MapMarker";
const locations = require("../../Assets/locationData/location.json");

const Map = (props) => {
  const [mapCenter, setMapCenter] = useState([22.937506, -30.559482]);
  const [mapZoom, setMapZoom] = useState(2);
  const [coordinates, setCoordinates] = useState({ lat: 0, lon: 0 });
  const [userLocationMessage, setUserLocationMessage] =
    useState("Find your location");
  const [userLocationButtonMessage, setUserLocationButtonMessage] =
    useState("Find your location");

  //Function will reset: zoom, user marker (location and info within)
  //**Function is not resetting map zoom on click - why?!
  function mapZoomReset() {
    setMapZoom(2);
    setCoordinates({ lat: 0, lon: 0 });
    setUserLocationMessage("Find your location");
    setUserLocationButtonMessage("Find your location");
    setMapCenter([22.937506, -30.559482])
  }

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

  // TODO:
  // Function: check users location - find out [x] and add information to the popup [ ]
  // Change text inside popup depending if location has been found or not [ ]
  // Another idea may be to check the weather in that location [ ]
  //Reset button - take users back to zoomed out - button on map? How to use leaflet methods in react leaflet?

  return (
    <Container id='container' fluid='true'>
        <MapContainer
          id='mapContainer'
          center={mapCenter}
          zoom={mapZoom}
          scrollWheelZoom={false}
          zoomControl={true}
        >
        <Button id='mapRestButton' onClick={mapZoomReset} color='success'>
          Reset Map
        </Button>

          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          {/* User has choice of finding location - this is the marker for it */}
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
    </Container>
  );
};

export default Map;
