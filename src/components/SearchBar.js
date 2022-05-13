import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Slider } from "@miblanchard/react-native-slider";

const SearchBar = (props) => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "Category", value: "category", disabled: true },
    { label: "Hotels", value: "hotels", parent: "category" },
    { label: "Restaurants", value: "restaurants", parent: "category" },
    { label: "Shopping", value: "shopping", parent: "category" },
    { label: "Transport", value: "transport", parent: "category" },
    { label: "Facilities", value: "facilities", parent: "category" },
  ]);

  const [track, setTrack] = useState(props.distanceTerm[0]);
  console.log(track);
  return (
    <View style={styles.backgroundStyle}>
      <DropDownPicker
        zIndex={1}
        containerStyle={{
          marginBottom: 20,
        }}
        open={open}
        setOpen={setOpen}
        items={items}
        setItems={setItems}
        value={props.term}
        setValue={props.setTerm}
        onChangeValue={(value) => {
          props.setTerm(value);
        }}
      />

      <Slider
        value={props.distanceTerm}
        onSlidingComplete={(value) => props.setDistanceTerm(value)}
        minimumValue={20}
        maximumValue={1000}
        step={20}
        onValueChange={(value) => setTrack(Math.floor(...value))}
        renderAboveThumbComponent={(...value) => {
          return <Text>{Math.floor(track)}m</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginLeft: 10,
    marginTop: 10,
    marginHorizontal: 15,
  },
});

export default SearchBar;
