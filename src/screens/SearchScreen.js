import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useLocation from "../hooks/useLocation";
import CurrentLocationTile from "../components/CurrentLocationTile";
import usePlaceLocation from "../hooks/usePlaceLocation";

const SearchScreen = () => {
  const [getLocation, location, errorLocation] = useLocation();
  const [getPlaceLocation, place] = usePlaceLocation();
  const [term, setTerm] = useState("hotels");

  useEffect(() => {
    getLocation();
    getPlaceLocation(term);
    console.log(location);
    console.log(place);
  }, [term]);

  return (
    <View style={{ flex: 1 }}>
      {!errorLocation && (
        <CurrentLocationTile
          street={location?.street}
          name={location?.name}
          locationName={place?.name}
        />
      )}

      <SearchBar term={term} setTerm={setTerm} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
