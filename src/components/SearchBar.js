import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const SearchBar = (props) => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "Hotels", value: "hotels" },
    { label: "Restaurants", value: "restaurants" },
  ]);

  return (
    <View style={styles.backgroundStyle}>
      <DropDownPicker
        style={styles.dropdownpickerStyle}
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
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "white",
    borderRadius: 5,
    marginHorizontal: 15,
    minHeight: 500,
    flex: 1,
  },
});

export default SearchBar;
