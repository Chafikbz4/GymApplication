import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
const Header = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>READY TO</Text>
        <Text style={styles.subtitle}>WORKOUT</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Search")}>
        <Icon name="search" size={40} color="gray" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textContainer: {
    marginVertical: 10,
  },
  title: {
    fontSize: 50,
    color: "black",
    fontWeight: "bold",
    marginBottom: -10,
  },
  subtitle: {
    fontSize: 50,
    color: "#FF4C5B",
    fontWeight: "bold",
  },
});
