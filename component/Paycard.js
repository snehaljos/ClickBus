import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function Paycard(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect2Stack}>
        <View style={styles.rect2}>
          <Icon name="cc-visa" style={styles.icon2}></Icon>
          <Text style={styles.expire1262021}>Expire{"\n"}12/6/2021</Text>
        </View>
        <Text style={styles.xxxx4455}>XXXX 4455</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect2: {
    top: 0,
    left: 0,
    width: 141,
    height: 195,
    position: "absolute",
    backgroundColor: "rgba(24,86,244,1)",
    borderRadius: 10
  },
  icon2: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    height: 40,
    width: 51,
    marginTop: 15,
    marginLeft: 20
  },
  expire1262021: {
    //fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 35,
    width: 98,
    marginTop: 105,
    marginLeft: 22
  },
  xxxx4455: {
    top: 97,
    left: 20,
    position: "absolute",
    //fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 30,
    width: 122,
    fontSize: 20
  },
  rect2Stack: {
    width: 142,
    height: 195
  }
});

export default Paycard;
