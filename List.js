import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, StatusBar, } from "react-native";
import Listcard from "./component/Listcard";
import { FlatList } from "react-native-gesture-handler";

class List extends Component {

  onclick = (val) => {
    //console.warn("h", val);
    this.props.onviewseat(val);
  }
  render() {
    const data = this.props.sprops;

    //console.warn("busdata", data);
    return (
      <View style={styles.container}>
        <StatusBar hidden={false} barStyle={'default'} />
        <TouchableOpacity

          style={styles.button}
        >
          <Text style={styles.filterYourBuses}>Filter your buses</Text>
        </TouchableOpacity>
        <View style={styles.con}>
          <FlatList data={data}

            renderItem={({ item }) => (
              <Listcard onpress={() => this.onclick(item)} item={item} />
            )
            }
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(227,243,255,1)",
    alignContent: "center"
  },
  con: {
    flex: 1,
    marginTop: 10,


  },
  button: {
    width: 320,
    height: 36,
    marginRight: -19,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.04,
    marginTop: 53,
    marginLeft: 33
  },
  filterYourBuses: {
    width: 176,
    height: 24,
    color: "#121212",
    // fontFamily: "roboto-regular",
    marginTop: 12,
    marginLeft: 18
  },
  listcard: {
    top: 0,
    left: 0,
    width: 325,
    height: 93,
    position: "absolute"
  },
  busNo: {
    top: 13,
    left: 9,
    width: 307,
    height: 72,
    color: "#121212",
    position: "absolute",
    // fontFamily: "roboto-regular"
  },
  listcardStack: {
    width: 325,
    height: 93,
    marginTop: 42,
    marginLeft: 18
  },
  listcard2: {
    top: 0,
    left: 0,
    width: 325,
    height: 93,
    position: "absolute"
  },
  text: {
    top: 15,
    left: 9,
    width: 307,
    height: 72,
    color: "#121212",
    position: "absolute",
    // fontFamily: "roboto-regular"
  },
  listcard2Stack: {
    width: 325,
    height: 93,
    marginTop: 26,
    marginLeft: 18
  },
  listcard3: {
    top: 0,
    left: 0,
    width: 325,
    height: 93,
    position: "absolute"
  },
  text2: {
    top: 16,
    left: 9,
    width: 307,
    height: 72,
    color: "#121212",
    position: "absolute",
    // fontFamily: "roboto-regular"
  },
  listcard3Stack: {
    width: 325,
    height: 93,
    marginTop: 17,
    marginLeft: 18
  }
});

export default List;
