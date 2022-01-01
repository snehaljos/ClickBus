import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

function Qrpage(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect2}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect2: {
    width: 331,
    height: 336,
    backgroundColor: "rgba(203,232,255,1)",
    borderRadius: 10,
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.04
  }
});

export default Qrpage;
