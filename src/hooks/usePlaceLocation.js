import here from "../api/here";
import { useState } from "react";
import useLocation from "./useLocation";
export default () => {
  const [place, setPlace] = useState([]);
  const [getLocation, location, errorMessage] = useLocation();
  const placeTemp = [];
  const distanceTemp = [];

  const usePlaceLocation = async (searchTerm) => {
    getLocation();

    try {
      const res = await here.get(
        `discover?in=circle:${location.latitude},${location.longitude};r=500&q=${searchTerm}&apiKey=RI2ZHT12X2cEhnSq4gBZ0lR7Up-UxUzzdZ6BLRG4EZ4`
      );

      for (let response of res.data.items) {
        placeTemp.push(response.address.label);
        distanceTemp.push(response.distance);
      }

      setPlace({ name: placeTemp, distance: distanceTemp });
    } catch (err) {}
  };
  return [usePlaceLocation, place];
};
