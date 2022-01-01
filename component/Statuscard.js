import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function Statuscard(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect7}>
        <Text style={styles.loremIpsum}>{props.message}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect7: {
    width: 170,
    height: 85,
    backgroundColor: "#CBE8FF",
    borderRadius: 10,
    shadowColor: "#000",
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 3
  },
  loremIpsum: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    height: 60,
    width: 130,
    marginTop: 22,
    marginLeft: 22
  }
});

export default Statuscard;
