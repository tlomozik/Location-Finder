import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";
import getLocation from "../hooks/getLocation";
import CurrentLocationTile from "../components/CurrentLocationTile";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorResults] = useResults();
  const [useLocation, location, locationDetails, errorLocation] = getLocation();

  const filterResultsByPrice = (price) => {
    return results.filter((results) => {
      return results.price === price;
    });
  };

  useEffect(() => {
    useLocation();
    console.log(location);
    console.log(locationDetails);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorResults ? <Text>{errorResults}</Text> : null}

      {!errorLocation && (
        <CurrentLocationTile
          latitude={location?.coords.latitude}
          longitude={location?.coords.longitude}
          street={locationDetails?.street}
          name={locationDetails?.name}
        />
      )}

      <ScrollView>
        <ResultsList
          title="Cost Effective"
          results={filterResultsByPrice("$")}
        />
        <ResultsList title="Bit Pricier" results={filterResultsByPrice("$$")} />
        <ResultsList
          title="Big Spender"
          results={filterResultsByPrice("$$$")}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
