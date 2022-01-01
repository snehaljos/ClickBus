import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";



function Listcard({ item, onpress }) {
  //console.warn("ffv", item);
  let st;
  if (item.available) {
    st = 'Running';
  }
  else {
    st = 'Not Running';
  }

  return (<TouchableOpacity style={styles.container} onPress={onpress}>
    <View style={styles.rect}>
      <View style={styles.text2Row}>
        <Text style={styles.text2}  >{"\t"}Bus No{"\n"}{item.busno}</Text>
        <Text style={styles.text3}>{"\t"}Bus Name{"\n"}{"\t"}{item.name}</Text>
        <Text style={styles.text4}>{"\t"}status{"\n"}{st}</Text>

      </View>
      <View style={styles.rect2} >
        <Text style={styles.text5}>{"\t"}From{"\n"}{item.start}</Text>
        <Text style={styles.text6}>{"\t"}To{"\n"}{item.end}</Text>
        <Text style={styles.text7}>{"\t"}Type{"\n"}{item.start}</Text>
      </View>
    </View>
  </TouchableOpacity>
  )
}
//rgba(227,243,255,1)
const styles = StyleSheet.create({
  container: {

    //backgroundColor: "red",

  },
  rect2: {
    flexDirection: 'row',

    marginLeft: 10
  },
  text6: {
    marginLeft: 76
  },
  text5: {
    color: "#121212",
    //fontFamily: "roboto-700",
    marginLeft: 7
  },
  text2: {
    color: "#121212",
    //fontFamily: "roboto-700",
    marginLeft: -20
  },
  text4: {
    color: "#121212",
    //fontFamily: "roboto-700",
    marginLeft: 60
  },
  text7: {
    color: "#121212",
    //fontFamily: "roboto-700",
    marginLeft: 67
  },
  text3: {
    color: "#121212",
    //fontFamily: "roboto-700",
    marginLeft: 50
  },
  rect: {
    width: 381,
    height: 100,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.4,
    marginTop: 10,
    alignSelf: "center"
  },
  text2Row: {
    height: 44,
    flexDirection: "row",
    marginTop: 17,
    marginLeft: 29,
    marginRight: 14
  },
  offers: {
    color: "#121212",
    // fontFamily: "roboto-700",
    marginTop: 48,
    marginLeft: 29
  },
  by3Get1Free: {
    width: 264,
    height: 65,
    color: "#121212",
    //fontFamily: "roboto-regular",
    marginTop: 18,
    marginLeft: 29
  },

  items: {

    padding: 50,
    flexDirection: 'row',
    marginTop: 10,

    marginLeft: 33,
    marginRight: 33,
    marginBottom: 10,
    borderColor: '#bbb',
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  }
});

export default Listcard;
