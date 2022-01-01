import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Qr from "./component/Qr";

class Congratulation extends Component {
  render(){
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <Text style={styles.congratulations}>Congratulations</Text>
        <Text style={styles.text}>Payment successfull</Text>
        
      </View>
      <Qr style={styles.qr}></Qr>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(227,243,255,1)"
  },
  rect: {
    width: 360,
    height: 233,
    backgroundColor: "rgba(242,153,74,1)",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    alignSelf: "center"
  },
  congratulations: {
    width: 178,
    height: 27,
    color: "rgba(12,12,12,1)",
    fontSize: 25,
   // fontFamily: "roboto-regular",
    marginTop: 59,
    marginLeft: 98
  },
  text: {
    color: "#121212",
   // fontFamily: "roboto-regular",
    alignSelf: "center"
  },
  image: {
    width: 49,
    height: 38,
    marginTop: 9,
    alignSelf: "center"
  },
  qr: {
    width: 331,
    height: 336,
    marginTop: 38,
    marginLeft: 15
  }
});

export default Congratulation;
