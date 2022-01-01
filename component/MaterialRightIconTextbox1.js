import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialRightIconTextbox1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TextInput placeholder={props.placeholder} onChangeText={props.onChangeText} style={styles.inputStyle}></TextInput>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "rgba(255,255,255,1)",
    borderBottomWidth: 1
  },
  inputStyle: {
    flex: 1,
    color: "#000",
    alignSelf: "stretch",
    paddingTop: 14,
    paddingRight: 16,
    paddingBottom: 8,
    fontSize: 16,
    //fontFamily: "roboto-regular",
    lineHeight: 16
  },

});

export default MaterialRightIconTextbox1;
