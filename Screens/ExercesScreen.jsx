import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import React, { useEffect, useState } from "react";
import { fetchExercicesByBodyPart } from "../api/apis";
const { width, height } = Dimensions.get("window");
import { useNavigation } from "@react-navigation/native";
const ExercesScreen = ({ route }) => {
  const navigation = useNavigation();
  const { item } = route.params;
  const [vidios, setvidoos] = useState([]);
  const [Activaor, setActivator] = useState(true);

  useEffect(() => {
    if (item) getExercices(item.name);
  }, [item]);
  const getBack = () => {
    navigation.navigate("Home");
  };
  const getExercices = async (bodypart) => {
    let data = await fetchExercicesByBodyPart(bodypart);
    setvidoos(data);
    if (data) {
      setActivator(false);
    }
  };
  const sendData = (item) => {
    navigation.navigate("ExercicesDtailes", { item });
  };

  const renderItem = (item) => {
    return (
      <View>
        <TouchableOpacity onPress={() => sendData(item)}>
          <Image
            source={{ uri: item.gifUrl }}
            style={{
              width: width * 0.47,
              height: height * 0.25,
              margin: 5,
            }}
          />
        </TouchableOpacity>
        <Text style={{ margin: 5, fontSize: 16 }}>
          {item.name.length > 20 ? item.name.slice(0, 20) + "..." : item.name}
        </Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        style={{
          width: 50,
          height: 50,
          position: "absolute",
          zIndex: 1,
          backgroundColor: "#FF4C5B",
          borderRadius: 50,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          top: height - height * 0.97,
          left: width - width * 0.97,
        }}
        onPress={getBack}
      >
        <Icon name="arrow-left" size={30} color="white" />
      </TouchableOpacity>
      <Image
        source={item.image}
        style={{
          width: width,
          height: height * 0.45,
          alignSelf: "center",
          borderBottomRightRadius: 30,
          borderBottomLeftRadius: 25,
        }}
      />
      <View style={{ margin: 10 }}>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>
          {item.name} Exercises
        </Text>
        <Text style={{ fontSize: 18 }}>Exercises List</Text>
      </View>
      {!Activaor ? (
        <FlatList
          data={vidios}
          renderItem={({ item }) => renderItem(item)}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      ) : (
        <ActivityIndicator size="large" color="black" />
      )}
    </View>
  );
};

export default ExercesScreen;
