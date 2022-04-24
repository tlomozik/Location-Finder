import { useState } from "react";
import * as LocationAPI from "expo-location";

export default () => {
  const [location, setLocation] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  const getLocation = async () => {
    const { status } = await LocationAPI.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission denied");
      setErrorMessage("Permission denied");
      return;
    } else {
      setLocation(await LocationAPI.getCurrentPositionAsync({}));
    }
  };

  return [getLocation, location, errorMessage];
};
