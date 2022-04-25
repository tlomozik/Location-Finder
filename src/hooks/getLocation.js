import { useState } from "react";
import * as LocationAPI from "expo-location";

export default () => {
  const [location, setLocation] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [locationDetails, setLocationDetails] = useState();
  const getLocation = async () => {
    const { status } = await LocationAPI.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission denied");
      setErrorMessage("Permission denied");
      return;
    } else {
      const location = await LocationAPI.getCurrentPositionAsync({});
      setLocation(location);

      const getLocationDetails = await LocationAPI.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      setLocationDetails({
        street: getLocationDetails[0].street,
        name: getLocationDetails[0].name,
      });
    }
  };

  return [getLocation, location, locationDetails, errorMessage];
};
