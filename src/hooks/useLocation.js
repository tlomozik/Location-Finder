import { useState } from "react";
import * as LocationAPI from "expo-location";

export default () => {
  const [errorMessage, setErrorMessage] = useState();
  const [location, setLocation] = useState();

  const useLocation = async () => {
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
  };

  return [useLocation, location, errorMessage];
};
