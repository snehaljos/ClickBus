import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const MaterialButtonViolet = (Props) => {

  return (
    <TouchableOpacity style={[styles.container, Props.style]} onPress={Props.onPress} >
      <Text style={styles.caption}>{Props.label}</Text>
    </TouchableOpacity>
  );

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(84,199,88,1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 2,
    minWidth: 88,
    borderRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 5
  },
  caption: {
    color: "#fff",
    fontSize: 14,
    //fontFamily: "roboto-regular"
  }
});

export default MaterialButtonViolet;
