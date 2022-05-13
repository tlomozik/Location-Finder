import { StyleSheet, View, ScrollView, ActivityIndicator } from "react-native";
import React from "react";
import { Table, Row, Rows } from "react-native-table-component";
import { Text, Card } from "@rneui/themed";
import * as Localization from "expo-localization";
import { pl, en } from "./languages";
import i18n from "i18n-js";

i18n.fallbacks = true;
i18n.translations = { pl, en };
i18n.locale = Localization.locale;

const CurrentLocationTile = ({
  street,
  name,
  locationName,
  locationDistance,
  loading,
}) => {
  const tableData = [];

  if (locationName) {
    for (let a = 0; a < locationName.length; a++) {
      tableData.push([[locationName[a]], [locationDistance[a] + "m"]]);
    }
  }
  const tablehead = [i18n.t("title"), i18n.t("distance")];
  console.log(loading);
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        <Card containerStyle={styles.cardTableStyle}>
          <Card.Title>
            <Text style={styles.fonts} h4>
              {street} {name}
            </Text>
          </Card.Title>

          <Card.Divider />

          {loading ? (
            <Table>
              <Row
                data={tablehead}
                textStyle={styles.Rowtext}
                style={styles.head}
                flexArr={[4, 2]}
              />
              <Rows
                data={tableData}
                textStyle={styles.Rowstext}
                style={styles.row}
                flexArr={[4, 2]}
              />
            </Table>
          ) : (
            <ActivityIndicator size="large" color="#000000" />
          )}
        </Card>
      </ScrollView>
    </View>
  );
};

export default CurrentLocationTile;

const styles = StyleSheet.create({
  container: {
    zIndex: 0,
    flex: 3,
  },
  scrollView: {
    marginHorizontal: 5,
    paddingBottom: 100,
  },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  Rowstext: { margin: 6 },
  Rowtext: { margin: 4 },
  row: { height: 50 },
  fonts: { marginBottom: 8 },
  cardTitleStyle: { backgroundColor: "#f1f8ff" },
  cardTableStyle: { flex: 1, borderRadius: 30 },
});
