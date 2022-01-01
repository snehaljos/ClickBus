import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

function MaterialRightIconTextbox(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TextInput placeholder={props.placeholder} style={styles.inputStyle} onChangeText={props.onChangeText}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#D9D5DC",
    borderBottomWidth: 1
  },
  inputStyle: {
    width: 375,
    height: 42,
    color: "#000",
    alignSelf: "stretch",
    paddingTop: 14,
    paddingRight: 10,
    paddingLeft: 9,
    paddingBottom: 8,
    fontSize: 16,
    //fontFamily: "roboto-regular",
    lineHeight: 16
  }
});

export default MaterialRightIconTextbox;
