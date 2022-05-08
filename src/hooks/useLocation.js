import { useState } from "react";
import * as LocationAPI from "expo-location";
import here from "../api/here";
export default () => {
  const [errorMessage, setErrorMessage] = useState();
  const [location, setLocation] = useState();
  const [place, setPlace] = useState([]);

  const placeTemp = [];
  const distanceTemp = [];

  const useLocation = async (searchTerm) => {
    const { status } = await LocationAPI.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission denied");
      setErrorMessage("Permission denied");
      return;
    }

    const coords = await LocationAPI.getCurrentPositionAsync({});

    const latitude = coords.coords.latitude;
    const longitude = coords.coords.longitude;

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
        `discover?in=circle:${latitude},${longitude};r=500&q=${searchTerm}&apiKey=RI2ZHT12X2cEhnSq4gBZ0lR7Up-UxUzzdZ6BLRG4EZ4`
      );

      for (let response of res.data.items) {
        placeTemp.push(response.address.label);
        distanceTemp.push(response.distance);
      }

      setPlace({ name: placeTemp, distance: distanceTemp });
    } catch (err) {
      console.log("błąd usePlaceLocation");
    }
  };

  return [useLocation, location, place, errorMessage];
};
