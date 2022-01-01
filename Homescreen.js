import React, { Component } from "react";
import { StyleSheet, View, Text, Image, ScrollView, Alert, StatusBar } from "react-native";
import MaterialSearchBar from "./component/MaterialSearchBar";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialButtonSuccess from "./component/MaterialButtonSuccess";
import CupertinoButtonPurple from "./component/CupertinoButtonPurple";


class Homescreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource: {}

    }

  }

  // componentDidMount() {
  //   this.getDataFromAPI()
  //   //console.warn("hi", this.state.dataSource[0].name);
  // }
  // getDataFromAPI = async () => {
  //   const endpoint = 'http://192.168.43.194:3000/users'
  //   const res = await fetch(endpoint)
  //   const data = await res.json()

  //   console.warn("data", data)
  //   this.setState({ dataSource: [data] })
  //   console.warn("dataSource", this.state.dataSource)
  //   console.warn("datasource", this.state.dataSource[0].id)
  // }



  // getb() {
  //   // Alert.alert("ff");
  //   fetch('http://192.168.43.194:3000/users')
  //     .then(response => response.json())

  //     .then(users => console.warn("get", users))
  //     .then(response => this.setState({ dataSource: response.users }))
  //   console.warn("hi", this.state.dataSource.id);
  // }
  // fetchData = async () => {
  //   const response = await fetch('http://192.168.43.194:3000/users');
  //   const users = await response.json();
  //   console.warn("converted data", users);
  //   this.setState({ dataSource: users });
  //   console.warn("converted data", this.state.dataSource.id);
  // }
  // componentDidMount() {
  //   this.fetchData();
  // }

  render() {
    const data = this.props.sprops;
    // this.setState({ dataSource: data })
    // console.warn("ddd", this.state.dataSource)
    return (

      <View style={styles.container}>
        <StatusBar hidden={false} barStyle={'default'} />
        <View style={styles.textRow}>
          <Text style={styles.text}>Good Morning,{"\n"}{data.name}</Text>
          <Image
            source={require("./assets/images/account_circle-24px_(1).png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
        </View>
        <View style={styles.materialSearchBarStack}>
          <MaterialSearchBar style={styles.materialSearchBar} onPress={this.props.onViewSearch}></MaterialSearchBar>
          <Icon name="arrow-left-drop-circle" style={styles.icon}></Icon>
        </View>
        <MaterialButtonSuccess
          style={styles.materialButtonSuccess}
        ></MaterialButtonSuccess>
        <View style={styles.rect}>
          <View style={styles.text2Row}>
            <Text style={styles.text2}  >Wallet Balance{"\n"}{data.balance}</Text>
            <CupertinoButtonPurple
              style={styles.cupertinoButtonPurple}
            ></CupertinoButtonPurple>
          </View>
          <Text style={styles.offers}>Offers</Text>
          <Text style={styles.by3Get1Free}>By 3 get 1 free</Text>
        </View>
        <Text style={styles.recentOrders}>Recent Orders</Text>
        <View style={styles.scrollArea}>
          <ScrollView
            horizontal={false}
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <View style={styles.group}>
              <View style={styles.rect2}>
                <View style={styles.image2Row}>
                  <Image
                    source={require("./assets/images/home_page_travel.png")}
                    resizeMode="contain"
                    style={styles.image2}
                  ></Image>
                  <View style={styles.loremIpsumStack}>
                    <Text style={styles.loremIpsum}></Text>
                    <Text style={styles.thrissur55Inr}>
                      Thrissur {"\n"}55 INR
                  </Text>
                  </View>
                </View>
              </View>
              <Image
                source={require("./assets/images/home_page_travel.png")}
                resizeMode="contain"
                style={styles.image5}
              ></Image>
            </View>
            <View style={styles.rect3}>
              <View style={styles.rect4}>
                <View style={styles.image6Row}>
                  <Image
                    source={require("./assets/images/home_page_travel.png")}
                    resizeMode="contain"
                    style={styles.image6}
                  ></Image>
                  <View style={styles.text3Stack}>
                    <Text style={styles.text3}></Text>
                    <Text style={styles.thrissur55Inr2}>
                      {this.state.dataSource.name} {"\n"}55 INR
                  </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.rect5}>
              <View style={styles.rect6}>
                <View style={styles.image4StackRow}>
                  <View style={styles.image4Stack}>
                    <Image
                      source={require("./assets/images/home_page_travel.png")}
                      resizeMode="contain"
                      style={styles.image4}
                    ></Image>
                    <Image
                      source={require("./assets/images/home_page_travel.png")}
                      resizeMode="contain"
                      style={styles.image7}
                    ></Image>
                  </View>
                  <View style={styles.text4Stack}>
                    <Text style={styles.text4}></Text>
                    <Text style={styles.thrissur55Inr3}>
                      Thrissur {"\n"}55 INR
                  </Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(227,243,255,1)",
    borderRadius: 10
  },
  text: {
    color: "#121212",
    //fontFamily: "roboto-700",
    marginTop: 9
  },
  image: {
    width: 68,
    height: 46,
    marginLeft: 172
  },
  textRow: {
    height: 46,
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 35
  },
  materialSearchBar: {
    top: 0,
    width: 321,
    height: 56,
    position: "absolute",
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.04,
    left: 0
  },
  icon: {
    top: 8,
    left: 273,
    position: "absolute",
    color: "rgba(227,243,255,1)",
    fontSize: 40,
    transform: [
      {
        rotate: "181.11deg"
      }
    ]
  },
  materialSearchBarStack: {
    width: 321,
    height: 56,
    marginTop: 24,
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.04,
    marginLeft: 33

  },
  materialButtonSuccess: {
    width: 100,
    height: 36,
    marginTop: -253,
    marginLeft: 415,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.04
  },
  rect: {
    width: 321,
    height: 218,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.4,
    marginTop: 250,
    alignSelf: "center"
  },
  text2: {
    color: "#121212",
    //fontFamily: "roboto-700",
    marginTop: 11
  },
  cupertinoButtonPurple: {
    width: 110,
    height: 44,
    marginLeft: 80
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
  recentOrders: {
    width: 306,
    height: 40,
    color: "#121212",
    //fontFamily: "roboto-700",
    marginTop: 52,
    marginLeft: 35
  },
  scrollArea: {
    width: 317,
    height: 226,
    marginTop: 16,
    alignSelf: "center"
  },
  scrollArea_contentContainerStyle: {
    width: 317,
    height: 1130,
    flexDirection: "column"
  },
  group: {
    width: 317,
    height: 59,
    alignSelf: "center"
  },
  rect2: {
    width: 317,
    height: 59,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.04,
    flexDirection: "row"
  },
  image2: {
    width: 101,
    height: 52
  },
  loremIpsum: {
    top: 0,
    left: 22,
    width: 166,
    height: 37,
    color: "#121212",
    position: "absolute",
    // fontFamily: "roboto-700"
  },
  thrissur55Inr: {
    top: 0,
    left: 0,
    width: 188,
    height: 37,
    color: "#121212",
    position: "absolute",
    //fontFamily: "roboto-700"
  },
  loremIpsumStack: {
    width: 188,
    height: 37,
    marginTop: 15
  },
  image2Row: {
    height: 52,
    flexDirection: "row",
    flex: 1,
    marginRight: 28
  },
  image5: {
    width: 101,
    height: 52,
    marginLeft: -134
  },
  rect3: {
    width: 317,
    height: 59,
    marginTop: 16,
    alignSelf: "center"
  },
  rect4: {
    width: 317,
    height: 59,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.04,
    flexDirection: "row"
  },
  image6: {
    width: 101,
    height: 52
  },
  text3: {
    top: 0,
    left: 22,
    width: 166,
    height: 37,
    color: "#121212",
    position: "absolute",
    //fontFamily: "roboto-700"
  },
  thrissur55Inr2: {
    top: 0,
    left: 0,
    width: 188,
    height: 37,
    color: "#121212",
    position: "absolute",
    //fontFamily: "roboto-700"
  },
  text3Stack: {
    width: 188,
    height: 37,
    marginTop: 12
  },
  image6Row: {
    height: 52,
    flexDirection: "row",
    flex: 1,
    marginRight: 28,
    marginTop: 3
  },
  rect5: {
    width: 317,
    height: 59,
    marginTop: 21,
    alignSelf: "center"
  },
  rect6: {
    width: 317,
    height: 59,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.04,
    flexDirection: "row"
  },
  image4: {
    top: 0,
    left: 0,
    width: 101,
    height: 52,
    position: "absolute"
  },
  image7: {
    top: 1,
    left: 0,
    width: 101,
    height: 52,
    position: "absolute"
  },
  image4Stack: {
    width: 101,
    height: 53
  },
  text4: {
    top: 0,
    left: 22,
    width: 166,
    height: 37,
    color: "#121212",
    position: "absolute",
    // fontFamily: "roboto-700"
  },
  thrissur55Inr3: {
    top: 0,
    left: 0,
    width: 188,
    height: 37,
    color: "#121212",
    position: "absolute",
    //fontFamily: "roboto-700"
  },
  text4Stack: {
    width: 188,
    height: 37,
    marginTop: 15
  },
  image4StackRow: {
    height: 53,
    flexDirection: "row",
    flex: 1,
    marginRight: 28
  }
});

export default Homescreen;
