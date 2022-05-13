import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Slider } from "@miblanchard/react-native-slider";
import * as Localization from "expo-localization";
import { pl, en } from "./languages";
import i18n from "i18n-js";

i18n.fallbacks = true;
i18n.translations = { pl, en };
i18n.locale = Localization.locale;

const SearchBar = (props) => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: i18n.t("category"), value: "category", disabled: true },
    { label: i18n.t("hotels"), value: "hotels", parent: "category" },
    { label: i18n.t("restaurants"), value: "restaurants", parent: "category" },
    { label: i18n.t("shopping"), value: "shopping", parent: "category" },
    { label: i18n.t("transport"), value: "transport", parent: "category" },
    { label: i18n.t("facilities"), value: "facilities", parent: "category" },
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
