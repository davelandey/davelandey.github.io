import { useState } from "react";

const UserLocation = (props) => {
    const [coordinates, setCoordinates] = useState({ lat: 0, lon: 0 });
    const [userLocationMessage, setUserLocationMessage] =
    useState("Find your location");
  const [userLocationButtonMessage, setUserLocationButtonMessage] =
    useState("Find your location");


   // const weatherAPI = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=${process.env.REACT_APP_WEATHERAPI}`

    //WORK ON FETCH FUNCTION - collect user info, display time and forecast at their location
   // const weatherDataFetch = () => {

   // }

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
    
    
    return ( 
    <>

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

    </> );

}
 
export default UserLocation;