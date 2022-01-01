import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, TextInput } from "react-native";

function MaterialSearchBar(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <View style={styles.rect}>
          <TextInput
            placeholder="Search Bus"
            style={styles.inputStyle}
          ></TextInput>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    padding: 4,
    elevation: 3,
    borderRadius: 10,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "#111",
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    justifyContent: "center"
  },
  button: {
    width: 367,
    height: 48,
    alignSelf: "center"
  },
  rect: {
    width: 209,
    height: 48,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 2,
    marginLeft: 42
  },
  inputStyle: {
    width: 89,
    height: 48,
    color: "#000",
    alignSelf: "flex-start",
    paddingRight: 5,
    fontSize: 16,
    //fontFamily: "roboto-regular",
    lineHeight: 16
  }
});

export default MaterialSearchBar;
