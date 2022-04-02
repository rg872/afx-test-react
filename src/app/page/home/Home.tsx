import { Wrapper } from "@googlemaps/react-wrapper";
import { useState } from "react";
import Map from "../../components/map/Map";
import PlaceSearchBox from "../../components/place-search-box/PlaceSearchBox";
import { AFX_GCP_API_KEY } from "../../utils/env";
import { HomeContainer } from "./Home.styled";

const apiKey = AFX_GCP_API_KEY;

const Home = () => {
  const [center] = useState({ lat: -34.397, lng: 150.644 });
  const [zoom] = useState(4);

  return (
    <HomeContainer>
      <PlaceSearchBox />
      <Map center={center} zoom={zoom} />
    </HomeContainer>
  );
};

export default Home;
