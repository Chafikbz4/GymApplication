import React from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Dimensions,
} from "react-native";
import Header from "../components/Header";
import Corsale from "../components/Corsale";
import ExecriceQategory from "../components/ExecriceQategory";
const { width } = Dimensions.get("window");

const HomePage = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <Header />
        <Corsale />
        <ExecriceQategory />
      </SafeAreaView>
    </>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});
