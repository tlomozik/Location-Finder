import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";
import getLocation from "../hooks/getLocation";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();
  const [useLocation, location] = getLocation();

  const filterResultsByPrice = (price) => {
    return results.filter((results) => {
      return results.price === price;
    });
  };

  useEffect(() => {
    useLocation();
    console.log(location);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {location?.coords.latitude ? (
        <Text>{location?.coords.latitude}</Text>
      ) : null}

      {location?.coords.longitude ? (
        <Text>{location?.coords.longitude}</Text>
      ) : null}

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
