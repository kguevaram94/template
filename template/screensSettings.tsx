import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import SplashScreen from "./src/screens/SplashScreen";

const MasterSwitchNavigator = createSwitchNavigator(
  {
    splash: SplashScreen,
  },
  {
    initialRouteName: 'splash'
  }
);

export const App = createAppContainer(MasterSwitchNavigator);