import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomPage from "../Screens/WelcomPage";
import HomePage from "../Screens/HomePage";
import ExercesScreen from "../Screens/ExercesScreen";
import ExercicesDtailes from "../Screens/ExercicesDtailes";
import Search from "../Screens/Search";
import SearchDetails from "../Screens/SearchDetails"
const Stack = createStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcom"
          component={WelcomPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ExercesScreen"
          component={ExercesScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ExercicesDtailes"
          component={ExercicesDtailes}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Details"
          component={SearchDetails}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
