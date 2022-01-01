import React, { Component } from "react";
import { StyleSheet, View, Text, Image, StatusBar, } from "react-native";
import Back from "./component/Back";
import Icon from "react-native-vector-icons/MaterialIcons";
import MaterialRightIconTextbox from "./component/MaterialRightIconTextbox";
import MaterialRightIconTextbox1 from "./component/MaterialRightIconTextbox1";
import MaterialButtonDanger from "./component/MaterialButtonDanger";
import Loader from "./component/loader";
class Searchscreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      from: 'kodakara',
      to: 'chalakudy',
      routedata: [],
      busdata: []
    }
  }
  onsearch = () => {
    this.setState({ loading: true });

    fetch('http://192.168.43.194:3000/search', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: this.state.from,
        to: this.state.to
      })
    })
      .then((response) => response.json())


      .then(res => {
        if (res.success === true) {
          this.setState({ loading: false })
          // this.setState({ routedata: res.route })
          // this.setState({ busdata: res.busdetails })
          this.props.onViewlist(res.message);

        }
        else {
          this.setState({ loading: false })
          Alert.alert("Incorrect Username or password")
        }
      })

  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={false} barStyle={'default'} />
        <Loader
          loading={this.state.loading} />
        <View style={styles.backStack}>
          <Back style={styles.back}></Back>
          <Back style={styles.back2}></Back>
          <View style={styles.rect}>
            <View style={styles.iconRow}>
              <Icon name="local-offer" style={styles.icon}></Icon>
              <Text style={styles.loremIpsum}>Get UpTo 50% Discount</Text>
            </View>
          </View>
        </View>
        <Text style={styles.findBus}>Find Bus</Text>
        <View style={styles.rect2}>
          <View style={styles.materialRightIconTextboxStackStack}>
            <View style={styles.materialRightIconTextboxStack}>
              <MaterialRightIconTextbox onChangeText={(from) => this.setState({ from })}
                style={styles.materialRightIconTextbox} placeholder='From'
              ></MaterialRightIconTextbox>
              <Image
                source={require("./assets/images/unfold_more-24px.png")}
                resizeMode="contain"
                style={styles.image}
              ></Image>
            </View>
            <MaterialRightIconTextbox1 onChangeText={(to) => this.setState({ to })}
              style={styles.materialRightIconTextbox1} placeholder='To'
            ></MaterialRightIconTextbox1>
          </View>
        </View>
        <MaterialButtonDanger
          style={styles.materialButtonDanger} onPress={this.onsearch}
        ></MaterialButtonDanger>
        <Image
          source={require("./assets/images/searchpagr.png")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(227,243,255,1)",
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 0
  },
  back: {
    top: 39,
    left: 266,
    width: 41,
    height: 41,
    position: "absolute"
  },
  back2: {
    top: 39,
    left: 266,
    width: 41,
    height: 41,
    position: "absolute"
  },
  rect: {
    top: 0,
    left: 10,
    width: 322,
    height: 60,
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    borderRadius: 10,
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.04,
    flexDirection: "row"
  },
  icon: {
    color: "rgba(227,243,255,1)",
    fontSize: 40,
    height: 40,
    width: 40
  },
  loremIpsum: {
    width: 216,
    height: 20,
    color: "#121212",
    //fontFamily: "roboto-regular",
    marginLeft: 25,
    marginTop: 10
  },
  iconRow: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 36,
    marginLeft: 17,
    marginTop: 9
  },
  backStack: {
    width: 322,
    height: 80,
    marginTop: 48,
    marginLeft: 19
  },
  findBus: {
    width: 269,
    height: 39,
    color: "#121212",
    fontSize: 24,
    //fontFamily: "roboto-700",
    marginLeft: 30
  },
  rect2: {
    left: 10,
    width: 322,
    height: 118,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.04,
    marginTop: 11,
    marginLeft: 19
  },
  materialRightIconTextbox: {
    top: 0,
    left: 0,
    width: 322,
    height: 43,
    position: "absolute"
  },
  image: {
    top: 23,
    left: 272,
    width: 42,
    height: 42,
    borderRadius: 10,
    backgroundColor: "rgba(227,243,255,1)",
    position: "absolute",

  },
  materialRightIconTextboxStack: {
    top: 0,
    left: 0,
    width: 322,
    height: 65,
    position: "absolute"
  },
  materialRightIconTextbox1: {
    top: 43,
    left: 9,
    width: 305,
    height: 43,
    position: "absolute"
  },
  materialRightIconTextboxStackStack: {
    width: 322,
    height: 86,
    marginTop: 16
  },
  materialButtonDanger: {
    width: 137,
    height: 36,
    borderRadius: 10,
    marginTop: 24,
    marginLeft: 120
  },
  image2: {
    width: 360,
    height: 238,
    marginTop: 46,
    marginLeft: 15
  }
});

export default Searchscreen;
