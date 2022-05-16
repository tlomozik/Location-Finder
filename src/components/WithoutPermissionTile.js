import { View, StyleSheet } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { Text, Card } from "@rneui/themed";
import * as Localization from "expo-localization";
import { pl, en } from "./languages";
import i18n from "i18n-js";

i18n.fallbacks = true;
i18n.translations = { pl, en };
i18n.locale = Localization.locale;

const WithoutPermissionTile = () => {
  return (
    <View style={styles.cardStyle}>
      <Card>
        <Entypo
          name="emoji-sad"
          size={24}
          color="black"
          style={styles.iconStyle}
        />

        <Text h4>{i18n.t("withoutpermission")}</Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    fontSize: 40,
  },

  cardStyle: {
    alignItems: "center",
    zIndex: 0,
  },
});

export default WithoutPermissionTile;
