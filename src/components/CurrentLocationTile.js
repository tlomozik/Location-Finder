import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";
import { Text, Card, Button, Icon } from "@rneui/themed";
const CurrentLocationTile = ({
  street,
  name,
  locationName,
  locationDistance,
}) => {
  const tableData = [];

  if (locationName) {
    for (let a = 0; a < locationName.length; a++) {
      tableData.push([[locationName[a]], [locationDistance[a] + "m"]]);
    }
  }
  const tablehead = ["Name", "Distance"];

  return (
    <View style={styles.container}>
      <Card containerStyle={styles.cardTitleStyle}>
        <Card.Title>
          <Text style={styles.fonts} h4>
            {street} {name}
          </Text>
        </Card.Title>
      </Card>
      <Card containerStyle={styles.cardTableStyle}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}
        >
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
        </ScrollView>
      </Card>
    </View>
  );
};

export default CurrentLocationTile;

const styles = StyleSheet.create({
  container: {
    flex: 3,
    padding: 10,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  Rowstext: { margin: 6 },
  Rowtext: { margin: 4 },
  row: { height: 50 },
  fonts: { marginBottom: 8 },
  cardTitleStyle: { backgroundColor: "#f1f8ff" },
  cardTableStyle: { flex: 1 },
});
