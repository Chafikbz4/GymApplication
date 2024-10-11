import {
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
// Get screen dimensions
const { width, height } = Dimensions.get("window");
const WelcomPage = () => {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar barStyle="white" />
      <SafeAreaView style={styles.container}>
        <Image
          source={require("../fitnesse/welcome.png")}
          style={styles.image}
        />
        <View style={styles.textcontainer}>
          <View style={{ flexDirection: "row", gap: 5 }}>
            <Text style={{ color: "white", fontSize: 35 }}>Hellow</Text>
            <Text style={styles.textstyle}>GymRats</Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#FF4C5B",
              height: 40,
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 10,
              borderRadius: 30,
            }}
            onPress={() => navigation.navigate("Home")}
          >
            <Text
              style={{
                color: "white",
                fontSize: 30,
              }}
            >
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default WelcomPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: width,
    height: height,
    resizeMode: "cover",
  },
  textcontainer: {
    position: "absolute",
    top: height - height * 0.30,
  },
  textstyle: {
    color: "#FF4C5B",
    fontSize: 40,
    fontWeight: "bold",
  },
});
