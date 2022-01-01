import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Qrpage from "./Qrpage";

function Qr(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.qrpageStack}>
        <Qrpage style={styles.qrpage}></Qrpage>
        <Text style={styles.nameValue}>Name{"\n"}Value</Text>
        <Text style={styles.seatNoValue}>Seat No{"\n"}Value</Text>
        <Text style={styles.transactionIdValue}>Transaction ID{"\n"}Value</Text>
        <Text style={styles.amountValue}>Amount{"\n"}Value</Text>
        <Image
          source={require("../assets/images/images.png")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  qrpage: {
    top: 0,
    left: 0,
    width: 331,
    height: 336,
    position: "absolute"
  },
  nameValue: {
    top: 20,
    left: 19,
    width: 129,
    height: 42,
    color: "rgba(12,12,12,1)",
    position: "absolute",
    fontSize: 20,
    //fontFamily: "roboto-regular"
  },
  seatNoValue: {
    top: 20,
    left: 197,
    width: 129,
    height: 42,
    color: "rgba(12,12,12,1)",
    position: "absolute",
    fontSize: 20,
    //fontFamily: "roboto-regular"
  },
  transactionIdValue: {
    top: 75,
    left: 19,
    width: 129,
    height: 42,
    color: "rgba(12,12,12,1)",
    position: "absolute",
    fontSize: 20,
    //fontFamily: "roboto-regular"
  },
  amountValue: {
    top: 75,
    left: 197,
    width: 129,
    height: 42,
    color: "rgba(12,12,12,1)",
    position: "absolute",
    fontSize: 20,
    //fontFamily: "roboto-regular"
  },
  image2: {
    top: 136,
    left: 62,
    width: 200,
    height: 200,
    position: "absolute"
  },
  qrpageStack: {
    width: 331,
    height: 336
  }
});

export default Qr;
