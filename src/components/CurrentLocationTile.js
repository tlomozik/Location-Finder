import { StyleSheet, View } from "react-native";
import { Text, Card } from "@rneui/themed";
import React from "react";

const CurrentLocationTile = ({ longitude, latitude }) => {
  return (
    <View style={styles.LocationTile}>
      <Card>
        <Text h3>{latitude}</Text>
        <Text h3>{longitude}</Text>
      </Card>
    </View>
  );
};

export default CurrentLocationTile;

const styles = StyleSheet.create({
  LocationTile: {
    marginBottom: 30,
  },
});
