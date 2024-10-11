import {
  View,
  Text,
  TextInput,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
const { width, height } = Dimensions.get("window");
import { searchExerces } from "../api/apis";
import { useNavigation } from "@react-navigation/native";

function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const Search = () => {
  const [textInput, setTextInput] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [activator, setActivator] = useState(true);
  const navigation = useNavigation();

  const search = async (exercesname) => {
    let data = await searchExerces(exercesname);
    setSearchList(data);
    if (data) {
      setActivator(false);
    }
  };

  const debouncedSearch = useCallback(debounce(search, 2000), []);

  const sendData = (item) => {
    console.log;
    navigation.navigate("ExercicesDtailes", { item });
  };

  useEffect(() => {
    debouncedSearch(textInput);
  }, [textInput, debouncedSearch]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        marginTop: height * 0.05,
      }}
    >
      <Icon
        name="search"
        size={40}
        color="white"
        style={{
          left: -width * 0.4,
          top: height * 0.01,
          position: "relative",
          zIndex: 1,
        }}
      />
      <TextInput
        style={{
          width: width * 0.95,
          backgroundColor: "gray",
          height: height * 0.07,
          borderRadius: 60,
          marginTop: -height * 0.05,
          textAlign: "center",
          color: "white",
          fontSize: 20,
        }}
        value={textInput}
        onChangeText={(text) => setTextInput(text)}
      />
      <Icon
        name="remove"
        size={40}
        color="white"
        style={{
          left: width * 0.4,
          top: -height * 0.06,
          position: "relative",
          zIndex: 1,
        }}
        onPress={() => navigation.goBack()}
      />
      <View>
        <FlatList
          data={searchList}
          renderItem={({ item }) => (
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
                {item.name.length > 20
                  ? item.name.slice(0, 20) + "..."
                  : item.name}
              </Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default Search;
