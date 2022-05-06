import { StyleSheet, View, Text } from "react-native";
//import { Text, Card } from "@rneui/themed";
import React from "react";

const CurrentLocationTile = ({ street, name, locationName }) => {
  return (
    <View style={styles.LocationTile}>
      <Text>
        {street} {name} {locationName}
      </Text>
    </View>
  );
};

export default CurrentLocationTile;

const styles = StyleSheet.create({
  LocationTile: {
    marginBottom: 20,
  },
});
