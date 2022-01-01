import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  StatusBar,
  AsyncStorage,
  Alert
} from "react-native";
import MaterialStackedLabelTextbox from "./component/MaterialStackedLabelTextbox";
import MaterialRightIconTextbox from "./component/MaterialRightIconTextbox";
import Pass from "./component/pass";
import MaterialButtonViolet from "./component/MaterialButtonViolet";
import MaterialButtonPink from "./component/MaterialButtonPink";
import Loader from "./component/loader";

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      username: 'snehal',
      password: '123',
      data: []
    }

  }
  componentDidMount() {
    this._loadinitialsstate().done();
  }
  _loadinitialsstate = async () => {
    var value = await AsyncStorage.getItem('user');
    if (value !== null) {
      this.props.onViewHome(data);
    }
  }
  onLogin = () => {
    this.setState({ loading: true });

    fetch('http://192.168.43.194:3000/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
      .then((response) => response.json())


      .then(res => {
        if (res.success === true) {

          AsyncStorage.setItem('user', res.success);
          this.setState({ loading: false })
          this.setState({ data: res.message[0] })
          //console.warn("l", this.state.data)
          this.props.onViewHome(res.message[0]);

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
        <View style={styles.materialStackedLabelTextboxRow}>
          <MaterialStackedLabelTextbox
            style={styles.materialStackedLabelTextbox}
          ></MaterialStackedLabelTextbox>
          <ImageBackground
            source={require("./assets/images/buswal.jpg")}
            resizeMode="contain"
            style={styles.image}
            imageStyle={styles.image_imageStyle}
          >
            <View style={styles.rect}>
              <MaterialRightIconTextbox
                style={styles.materialRightIconTextbox} placeholder='Username'
                onChangeText={(username) => this.setState({ username })}
              ></MaterialRightIconTextbox>
              <Pass
                style={styles.materialRightIconTextbox1} placeholder='Password'
                onChangeText={(password) => this.setState({ password })}
              ></Pass>
            </View>
            <MaterialButtonViolet
              style={styles.materialButtonViolet} label={'LOGIN'} onPress={this.onLogin}
            ></MaterialButtonViolet>
            <MaterialButtonPink
              style={styles.materialButtonPink} onPress={this.props.onViewHome}

            ></MaterialButtonPink>
          </ImageBackground>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(227,243,255,1)",
    flexDirection: "row"
  },
  materialStackedLabelTextbox: {
    width: 375,
    height: 60,
    marginTop: 784
  },
  image: {
    width: 500,
    height: 950,
    marginLeft: 854
  },
  image_imageStyle: {},
  rect: {
    width: 258,
    height: 114,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.04,
    marginTop: 631,
    marginLeft: 100
  },
  materialRightIconTextbox: {
    width: 235,
    height: 43,
    marginTop: 14,
    marginLeft: 12
  },
  materialRightIconTextbox1: {
    width: 233,
    height: 43,
    marginLeft: 13
  },
  materialButtonViolet: {
    width: 156,
    height: 36,
    borderRadius: 10,
    marginTop: 33,
    marginLeft: 151
  },
  materialButtonPink: {
    width: 156,
    height: 36,
    borderRadius: 10,
    marginTop: 24,
    marginLeft: 151
  },
  materialStackedLabelTextboxRow: {
    height: 943,
    flexDirection: "row",
    flex: 1,
    marginRight: -63,
    marginLeft: -1278,
    marginTop: -328
  }
});

export default Login;
