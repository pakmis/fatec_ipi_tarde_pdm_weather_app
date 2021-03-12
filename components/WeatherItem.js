import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import WeatherCard from "./WeatherCard";
const WeatherItem = (props) => {
  return (
    <WeatherCard style={styles.card}>
      <View style={styles.view}>
        <Image
          source={{
            uri:
              `https://openweathermap.org/img/wn/${props.forecast.item.weather[0].icon}.png`,
          }}
          style={styles.image}
        />
        <View>
          <View style={styles.firstRow}>
            <Text style={styles.value}>
              {new Date(props.forecast.item.dt * 1000).toLocaleTimeString()} -
              {props.forecast.item.weather[0].description}
            </Text>
          </View>
          <View style={styles.secondRow}>
            <Text style={styles.value}>
              Min: {props.forecast.item.main.temp_min + "\u00B0"}
            </Text>
            <Text style={styles.value}>
              Max: {props.forecast.item.main.temp_max + "\u00B0"}
            </Text>
            <Text style={styles.value}>
              Hum: {props.forecast.item.main.humidity}%
            </Text>
          </View>
        </View>
      </View>
    </WeatherCard>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
    marginHorizontal: 5
  },
  view: {
    flexDirection: "row",
  },
  image: {
    width: 50,
    height: 50,
  },
  firstRow: {
    justifyContent: "center",
    flexDirection: "row",
  },
  secondRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 4,
    borderTopWidth: 1,
    borderTopColor: "#DDD",
  },
  value: {
    marginHorizontal: 2,
    fontSize: 9,
    textTransform: 'capitalize'
  },
});

export default WeatherItem;
