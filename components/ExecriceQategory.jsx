import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { category } from "../constant";
const { width, height } = Dimensions.get("window");
import { useNavigation } from "@react-navigation/native";

const ExerciseCategory = () => {
  const navigation = useNavigation();

  const renderItem = (item) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("ExercesScreen", { item })}
      >
        <Image
          source={item.image}
          style={{
            width: width * 0.47,
            height: height * 0.25,
            margin: 5,
            borderRadius: 30,
          }}
        />
        <Text
          style={{
            position: "absolute",
            zIndex: 1,
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
            top: height - height * 0.78,
            left: width - width * 0.85,
          }}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ margin: 5, flex: 1 }}>
      <View>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            marginBottom: 10,
            marginLeft: width - width * 0.95,
          }}
        >
          Exercises
        </Text>
      </View>
      <View style={{ flex: 1, marginBottom: 5 }}>
        <FlatList
          data={category}
          renderItem={({ item }) => renderItem(item)}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default ExerciseCategory;
