import { Wrapper } from "@googlemaps/react-wrapper";
import { useCallback } from "react";
import { AFX_GCP_API_KEY } from "../../utils/env";
import { SectionMap } from "./Map.styled";

const apiKey = AFX_GCP_API_KEY;

const Maps = ({
  center,
  zoom,
}: {
  center: google.maps.LatLngLiteral;
  zoom: number;
}) => {
  // https://reactjs.org/docs/refs-and-the-dom.html#callback-refs
  const mapRef = useCallback((node: any) => {
    if (node !== null) {
      new window.google.maps.Map(node, {
        center,
        zoom,
        mapTypeControl: false,
      });
    }
  }, []);

  return (
    <Wrapper apiKey={apiKey} libraries={["places"]}>
      <SectionMap ref={mapRef} id="map" />
    </Wrapper>
  );
};

export default Maps;
