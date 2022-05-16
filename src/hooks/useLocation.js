import { useState } from "react";
import * as LocationAPI from "expo-location";
import here from "../api/here";

export default () => {
  const [errorMessage, setErrorMessage] = useState();
  const [location, setLocation] = useState();
  const [place, setPlace] = useState([]);
  const [loading, setLoading] = useState(false);
  const placeTemp = [];
  const distanceTemp = [];

  let latitude;
  let longitude;

  const useLocation = async (searchTerm, distanceTerm) => {
    const { status } = await LocationAPI.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission denied");
      setErrorMessage("Permission denied");
      return;
    }

    setLoading(false);
    console.log(distanceTerm[0], " z useLcoation");

    const coords = await LocationAPI.getCurrentPositionAsync({});

    latitude = coords.coords.latitude;
    longitude = coords.coords.longitude;

    const getLocationDetails = await LocationAPI.reverseGeocodeAsync({
      latitude,
      longitude,
    });

    setLocation({
      latitude,
      longitude,
      street: getLocationDetails[0].street,
      name: getLocationDetails[0].name,
    });
    try {
      const res = await here.get(
        `discover?in=circle:${latitude},${longitude};r=${distanceTerm[0].toFixed(
          0
        )}&q=${searchTerm}&apiKey=RI2ZHT12X2cEhnSq4gBZ0lR7Up-UxUzzdZ6BLRG4EZ4`
      );

      for (let response of res.data.items) {
        placeTemp.push(response.title);
        distanceTemp.push(response.distance);
      }

      setPlace({ name: placeTemp, distance: distanceTemp });
    } catch (err) {
      console.log(err);
    }

    setLoading(true);
  };

  return [useLocation, location, place, loading, errorMessage];
};
