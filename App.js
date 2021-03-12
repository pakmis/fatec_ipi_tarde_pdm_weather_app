import { StatusBar } from "expo-status-bar";
import React, { useState} from "react";
import { Button, StyleSheet, Text, View, TextInput, FlatList } from "react-native";
import WeatherItem from "./components/WeatherItem.js";
import apiKey from './keys.js'

export default function App() {
  const [ cityName, setCityName ] = useState('');
  const [ weatherForecast, setWeatherForecast ] = useState([]);

  const endPoint = "https://api.openweathermap.org/data/2.5/forecast?lang=pt&units=metric&q=";

  const getForecasts = () => {
    setWeatherForecast([]);
    const target = `${endPoint}${cityName}&appid=${apiKey}`;
    fetch(target)
      .then((data) => data.json())
      .then((data) => {
        setWeatherForecast(data["list"]);
        Keyboard.dismiss();
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputCointainer}>
        <TextInput
          styles={styles.cityName}
          placeholder="Digite o nome de uma cidade"
          value={cityName}
          onChangeText={(text) => setCityName(text)}
        />
        <Button title="OK" onPress={() => getForecasts()}/>
      </View>

      <FlatList
        style={{ marginTop: 10}}
        data={weatherForecast}
        renderItem={(forecast) => <WeatherItem forecast={forecast}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#fff'
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
    justifyContent: "space-between",
    marginBottom: 8,
  },
});
