import React from "react";
import { View, StyleSheet, ScrollView, Image, Dimensions } from "react-native";
import { imagesslide } from "../constant";

const { width, height } = Dimensions.get("window");

const Corsale = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
        snapToAlignment="center"
      >
        {imagesslide.map((image, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image source={image} style={styles.image} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height * 0.25,
    marginBottom: 10,
    marginTop: -10,
  },
  scrollViewContent: {
    alignItems: "center",
  },
  imageContainer: {
    width: width * 0.75,
    height: 200,
    borderRadius: 15,
    overflow: "hidden",
    marginHorizontal: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default Corsale;
