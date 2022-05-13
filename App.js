import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import SearchScreen from "./src/screens/SearchScreen";
import * as Localization from "expo-localization";
import { pl, en } from "./src/components/languages";
import i18n from "i18n-js";

i18n.fallbacks = true;
i18n.translations = { pl, en };
i18n.locale = Localization.locale;

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: i18n.t("appTitle"),
    },
  }
);

export default createAppContainer(navigator);
