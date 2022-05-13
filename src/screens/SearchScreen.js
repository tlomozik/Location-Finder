import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useLocation from "../hooks/useLocation";
import CurrentLocationTile from "../components/CurrentLocationTile";

const SearchScreen = () => {
  const [getLocation, location, place, loading, errorLocation] = useLocation();

  const [term, setTerm] = useState("hotels");
  const [distanceTerm, setDistanceTerm] = useState([1000]);
  useEffect(() => {
    getLocation(term, distanceTerm);
    console.log(location, "location z SearchScreen");
    console.log(place, "place z SearchScreen");
  }, [term, distanceTerm]);

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={term}
        distanceTerm={distanceTerm}
        setDistanceTerm={setDistanceTerm}
        setTerm={setTerm}
      />
      {!errorLocation && (
        <CurrentLocationTile
          street={location?.street}
          name={location?.name}
          locationName={place?.name}
          locationDistance={place?.distance}
          loading={loading}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
