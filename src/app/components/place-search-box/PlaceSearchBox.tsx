import { Autocomplete, TextField } from "@mui/material";
import { width } from "@mui/system";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/state";
import {
  selectAllPlace,
  selectSelectedPlace,
} from "../../state/place/place.selector";
import {
  getPlacePredictions,
  setSelectedPlaceId,
} from "../../state/place/place.slice";

interface Option {
  label: string;
  id: string;
}

const PlaceSearchBox = () => {
  const dispatch = useAppDispatch();
  const places = useAppSelector(selectAllPlace);
  const selectedPlace = useAppSelector(selectSelectedPlace);

  const [options, setOptions] = useState<Option[] | []>([]);
  const [value, setValue] = useState<Option | null>(null);

  useEffect(() => {
    if (places) {
      const opt = places.map((place) => ({
        id: place.place_id,
        label: place.description,
      }));
      setOptions(opt);
    }

    if (selectedPlace) {
      const val = {
        id: selectedPlace.place_id,
        label: selectedPlace.description,
      };
      setValue(val);
    }
  }, [places, selectedPlace]);

  const getPlaces = async (keyword: string | null) => {
    if (keyword) {
      dispatch(getPlacePredictions(keyword));
    }
  };

  const setSelectedPlace = (value: Option | null) => {
    if (value) {
      dispatch(setSelectedPlaceId(value.id));
    }
  };

  return (
    <Autocomplete
      sx={{
        position: "absolute",
        left: "10px",
        top: "10px",
        width: "45%",
        zIndex: "999",
        background: "white",
      }}
      options={options}
      onInputChange={(event, keyword) => getPlaces(keyword)}
      value={value}
      onChange={(event, value) => setSelectedPlace(value)}
      renderInput={(params) => <TextField {...params} label="Search Place" />}
    />
  );
};

export default PlaceSearchBox;
