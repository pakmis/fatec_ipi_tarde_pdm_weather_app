import React from "react";
import { View, StyleSheet } from "react-native";
const WeatherCard = (props) => {
  return (
    <View style={{ ...styles.weatherCard, ...props.style }}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  weatherCard: {
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.32,
    backgroundColor: "white",
    elevation: 4,
    padding: 12,
    borderRadius: 12,
  },
});
export default WeatherCard;
