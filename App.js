import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Keyboard,
  Switch
} from "react-native";
import WeatherItem from "./components/WeatherItem.js";
import OneCallItem from "./components/OneCallItem.js";
import apiKey from "./keys.js";

export default function App() {
  const [cityName, setCityName] = useState("");
  const [weatherForecast, setWeatherForecast] = useState([]);
  const [oneCall, setOneCall] = useState([]);
  const [type, setType] = useState(false);

  const endPoint =
    "https://api.openweathermap.org/data/2.5/forecast?lang=pt&units=metric&q=";
  const oneCallEndPoint =
    "https://api.openweathermap.org/data/2.5/onecall?lang=pt&units=metric&";

  const getForecasts = () => {
    setWeatherForecast([]);
    const target = `${endPoint}${cityName}&appid=${apiKey}`;
    fetch(target)
      .then((data) => data.json())
      .then((data) => {
        setWeatherForecast(data["list"]);
        getOneCall(data.city.coord);
        Keyboard.dismiss();
      });
  };

  const getOneCall = async (props) => {
    const { lat, lon } = props;
    const target = `${oneCallEndPoint}lat=${lat}&lon=${lon}&appid=${apiKey}`;
    const response = await fetch(target);
    const responseJson = await response.json();
    setOneCall([responseJson.current]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          styles={styles.cityName}
          placeholder="Digite o nome de uma cidade"
          value={cityName}
          onChangeText={(text) => setCityName(text)}
        />
        <Button title="Buscar" onPress={getForecasts} />
      </View>
      <View style={styles.typeContainer}>
        <Text>{type ? "OneCall" : "Forecast"}</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={type ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={setType}
          value={type}
        />
      </View>

      {!type ? (
        <FlatList
          style={{ marginTop: 10 }}
          data={weatherForecast}
          renderItem={(forecast) => (
            <WeatherItem forecast={forecast} type={type} />
          )}
        />
      ) : (
        <FlatList
          style={{ marginTop: 10 }}
          data={oneCall}
          renderItem={(forecast) => (
            <OneCallItem forecast={forecast} type={type} />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#fff",
  },
  cityName: {
    padding: 10,
    borderBottomColor: "#BB96F3",
    borderBottomWidth: 2,
    textAlign: "left",
    flexGrow: 0.9,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 8,
  },
  typeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 8,
  },
});
