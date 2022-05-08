import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useLocation from "../hooks/useLocation";
import CurrentLocationTile from "../components/CurrentLocationTile";
import usePlaceLocation from "../hooks/usePlaceLocation";

const SearchScreen = () => {
  const [getLocation, location, place, errorLocation] = useLocation();

  const [term, setTerm] = useState("hotels");

  useEffect(() => {
    getLocation(term);
    console.log(location, "location z SearchScreen");
    console.log(place, "place z SearchScreen");
  }, [term]);

  return (
    <View style={{ flex: 1 }}>
      <SearchBar term={term} setTerm={setTerm} />
      {!errorLocation && (
        <CurrentLocationTile
          street={location?.street}
          name={location?.name}
          locationName={place?.name}
          locationDistance={place?.distance}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
