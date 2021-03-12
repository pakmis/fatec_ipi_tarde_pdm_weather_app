import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import WeatherCard from "./WeatherCard";
const OneCallItem = (props) => {
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
            <Text style={styles.value}>Sensação Térmica: {props.forecast.item.feels_like + "\u00B0"}</Text>
          </View>
          <View style={styles.secondRow}>
            <Text style={styles.value}>
              Nascer: {new Date(props.forecast.item.sunrise * 1000).toLocaleTimeString()}
            </Text>
            <Text style={styles.value}>
              Por: {new Date(props.forecast.item.sunset * 1000).toLocaleTimeString()}
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

export default OneCallItem;
