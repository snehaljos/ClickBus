import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function Back(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Icon name="arrow-left-drop-circle" style={styles.icon}></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  icon: {
    color: "rgba(227,243,255,1)",
    fontSize: 40,
    transform: [
      {
        rotate: "181.00deg"
      }
    ]
  }
});

export default Back;
