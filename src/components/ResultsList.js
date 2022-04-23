import React from "react";
import {
     View,
     Text,
     StyleSheet,
     FlatList,
     TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, results, navigation }) => {
     if (!results.length) {
          return null;
     }

     return (
          <View style={styles.containerStyle}>
               <Text style={styles.titleStyle}>{title}</Text>
               <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={results}
                    keyExtractor={(results) => results.id}
                    renderItem={({ item }) => {
                         return (
                              <TouchableOpacity
                                   onPress={() =>
                                        navigation.navigate("ResultsShow", {
                                             id: item.id,
                                        })
                                   }
                              >
                                   <ResultsDetail result={item} />
                              </TouchableOpacity>
                         );
                    }}
               />
          </View>
     );
};

const styles = StyleSheet.create({
     containerStyle: {
          marginBottom: 20,
     },

     titleStyle: {
          fontSize: 18,
          fontWeight: "bold",
          marginLeft: 10,
          marginBottom: 5,
     },
});

export default withNavigation(ResultsList);
