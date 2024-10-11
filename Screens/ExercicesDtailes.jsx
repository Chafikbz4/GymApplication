import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
const { width, height } = Dimensions.get("window");
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
const ExercicesDtailes = ({ route }) => {
  const navigation = useNavigation();
  const data = route.params;
  return (
    <ScrollView>
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
          left: width - width * 0.15,
        }}
        onPress={navigation.goBack}
      >
        <Icon name="remove" size={30} color="white" />
      </TouchableOpacity>
      <View>
        <Image
          source={{ uri: data.item.gifUrl }}
          style={{ width, height: height * 0.55 }}
        />
      </View>
      <View style={styles.informations}>
        <Text style={[styles.text, { fontWeight: "bold" }]}>
          Name: {data.item.name}
        </Text>
        <Text style={[styles.text, { fontWeight: "bold" }]}>
          Body Part: {data.item.bodyPart}
        </Text>
        <Text style={styles.text}>Equipment: {data.item.equipment}</Text>
        <Text style={[styles.text, { fontWeight: "bold", fontSize: 22 }]}>
          Instructions:
        </Text>

        { data.item.instructions && data.item.instructions.length >0 && data.item.instructions.map((inst, index) => {
          return (
            <Text key={inst} style={styles.instructionText}>
              {index + 1} {inst}
            </Text>
          );
        })}

        <Text style={[styles.text, { fontWeight: "bold" }]}>
          Target: {data.item.target}
        </Text>
        <Text style={[styles.text, { fontWeight: "bold", fontSize: 22 }]}>
          Secondary Muscles:
        </Text>
        {data.item.secondaryMuscles && data.item.secondaryMuscles.length > 0 && (
  <>
    
    {data.item.secondaryMuscles.map((sec, index) => (
      <Text key={index} style={styles.secondaryMuscleText}>
        {sec}
      </Text>
    ))}
  </>
)}

      </View>
    </ScrollView>
  );
};

export default ExercicesDtailes;

const styles = StyleSheet.create({
  informations: {
    margin: 5,
  },
  text: {
    fontSize: 20,
    margin: 5,
  },
  instructionText: {
    fontSize: 25,
    margin: 5,
  },
  secondaryMuscleText: {
    fontSize: 25,
    margin: 5,
  },
});
