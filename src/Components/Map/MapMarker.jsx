import { Marker, Popup } from "react-leaflet";
import { Button, Container } from "reactstrap";

const MapMarker = (props) => {
  //   const [livedLocations, setLivedLocations] = useState({});

  //   async function livedLocationData() {
  //     const myLocationsJSON = fetch(myLocations);
  //     let info = JSON.parse(myLocationsJSON);
  //     console.log(info);
  //     try {
  //       const response = await fetch(locations);
  //       let data = await JSON.parse(response);
  //       setLivedLocations(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   console.log("CHECK THIS OUT" + livedLocations)

  //   useEffect(() => {
  //     livedLocationData();
  //   }, []);

  const id = props.id;
  const location = props.location;

  return (
    <Marker
      position={[location.coordinates.latitude, location.coordinates.longitude]}
    >
      <Popup>
        <h6>
          <strong>Country:</strong> {location.country}
          <br />
        </h6>
        <h6>
          <strong>City:</strong> {location.city}, {location.province_state}
          <br />
        </h6>
        <h6>
          <strong>Years:</strong> {location.years}
          <br />
        </h6>
        <hr />
        <a href={location.link} style={{alignItems : "center"}} target="_blank" rel="noopener noreferrer">
          <Button color='success' size='sm'>
            Learn more
          </Button>
        </a>
      </Popup>
    </Marker>
  );
};

export default MapMarker;
