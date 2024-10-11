import axios from "axios";
import { apiKey } from "../constant";

const basedurl = "https://exercisedb.p.rapidapi.com";

const apiCall = async (url, params = {}) => {
  try {
    const options = {
      method: "GET",
      url,
      params,
      headers: {
        "x-rapidapi-key": apiKey,
        "x-rapidapi-host": "exercisedb.p.rapidapi.com",
      },
    };
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log("error is:", error.message);
  }
};

export const fetchExercicesByBodyPart = async (bodyPart) => {
  const url = `${basedurl}/exercises/bodyPart/${bodyPart}`;
  let data = await apiCall(url);
  return data;
};

export const searchExerces = async (exerciceName) => {
  const url = `${basedurl}/exercises/name/${exerciceName}`;
  let data = await apiCall(url);
  return data;
};
