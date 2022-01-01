import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Main from "./component/Main";   
import Statuscard from "./component/Statuscard";
import MaterialButtonViolet1 from "./component/MaterialButtonViolet1";
import Progress from './component/pro';
import MaterialButtonShare1 from "./component/MaterialButtonShare1";

import Loader from "./component/loader";


class Status extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      username: 'snehal',
      password: '123',
      locdata: [],
      msg: ['Null', 'Null', 'Null', 'Null'],
      an: 0,
      late: 'Not Late'
    }

  }
  onLogin = () => {
    // console.warn("ff");
    fetch('http://192.168.43.194:3000/loc', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({

        busno: this.props.sprops.busno
      })
    })
      .then((response) => response.json())

      .then(res => {
        //console.warn("ffff", res.message[0])
        this.setState({ locdata: res.message[0] })
        //console.warn("fffddf", this.state.locdata)
      })

      .then(res => {
        //console.warn("insidef", this.state.locdata)
        let ms;
        let late = 0;
        if ((this.state.locdata.late) == 0) {
          if ((this.state.locdata.input) == 0) {
            let message1 = 'Arriving at ' + this.state.locdata.eta1 + 'AM'
            //console.warn("dd")
            let message2 = 'Arriving at ' + this.state.locdata.eta2 + 'AM';
            let message3 = 'Arriving at ' + this.state.locdata.eta3 + 'AM';
            let message4 = 'Arriving at ' + this.state.locdata.eta4 + 'AM';
            ms = [message1, message2, message3, message4];

          }
          if ((this.state.locdata.input) == 1) {
            let message1 = 'Left from ' + this.props.sprops.start + ' at ' + this.state.locdata.eta1 + 'AM';
            //console.warn("dd")
            let message2 = 'Arriving at ' + this.state.locdata.eta2 + 'AM';
            let message3 = 'Arriving at ' + this.state.locdata.eta3 + 'AM';
            let message4 = 'Arriving at ' + this.state.locdata.eta4 + 'AM';
            ms = [message1, message2, message3, message4];
            this.setState({ an: 25 });

          }
          if (this.state.locdata.input == 2) {
            let message1 = 'Left from ' + this.props.sprops.start + ' at ' + this.state.locdata.eta1 + 'AM';
            let message2 = 'Left from ' + this.props.sprops.busstop1 + ' at ' + this.state.locdata.eta2 + 'AM';
            let message3 = 'Arriving at ' + this.state.locdata.eta3 + 'AM';
            let message4 = 'Arriving at ' + this.state.locdata.eta4 + 'AM';
            ms = [message1, message2, message3, message4];
            this.setState({ an: 50 });
          }
          if (this.state.locdata.input == 3) {
            let message1 = 'Left from ' + this.props.sprops.start + ' at ' + this.state.locdata.eta1 + 'AM';
            let message2 = 'Left from ' + this.props.sprops.busstop1 + ' at ' + this.state.locdata.eta2 + 'AM';
            let message3 = 'Left from ' + this.props.sprops.busstop2 + ' at ' + this.state.locdata.eta3 + 'AM';
            let message4 = 'Arriving ' + this.props.sprops.busstop3 + ' at ' + this.state.locdata.eta4 + 'AM';
            ms = [message1, message2, message3, message4];
            this.setState({ an: 75 });
          }
          if (this.state.locdata.input == 4) {
            let message1 = 'Left from ' + this.props.sprops.start + ' at ' + this.state.locdata.eta1 + 'AM';
            let message2 = 'Left from ' + this.props.sprops.busstop1 + ' at ' + this.state.locdata.eta2 + 'AM';
            let message3 = 'Left from ' + this.props.sprops.busstop2 + ' at ' + this.state.locdata.eta3 + 'AM';
            let message4 = 'Left from ' + this.props.sprops.busstop3 + ' at ' + this.state.locdata.eta4 + 'AM';
            ms = [message1, message2, message3, message4];
            this.setState({ an: 100 });
          }
        }
        if ((this.state.locdata.late) == 1) {
          if ((this.state.locdata.input) == 0) {
            let message1 = 'Arriving at ' + this.state.locdata.eta1 + 'AM'
            //console.warn("dd")
            let message2 = 'Arriving at ' + this.state.locdata.eta2 + 'AM';
            let message3 = 'Arriving at ' + this.state.locdata.eta3 + 'AM';
            let message4 = 'Arriving at ' + this.state.locdata.eta4 + 'AM';
            ms = [message1, message2, message3, message4];

          }
          if ((this.state.locdata.input) == 1) {
            let message1 = 'Left from ' + this.props.sprops.start + ' at ' + this.state.locdata.ata1 + 'AM';
            //console.warn("dd")
            let message2 = 'Arriving at ' + this.state.locdata.ata2 + 'AM';
            let message3 = 'Arriving at ' + this.state.locdata.ata3 + 'AM';
            let message4 = 'Arriving at ' + this.state.locdata.ata4 + 'AM';
            late = 1;
            ms = [message1, message2, message3, message4];
            this.setState({ an: 25 });

          }
          if (this.state.locdata.input == 2) {
            let message1 = 'Left from ' + this.props.sprops.start + ' at ' + this.state.locdata.ata1 + 'AM';
            let message2 = 'Left from ' + this.props.sprops.busstop1 + ' at ' + this.state.locdata.ata2 + 'AM';
            let message3 = 'Arriving at ' + this.state.locdata.ata3 + 'AM';
            let message4 = 'Arriving at ' + this.state.locdata.ata4 + 'AM';
            ms = [message1, message2, message3, message4];
            late = 1;
            this.setState({ an: 50 });
          }
          if (this.state.locdata.input == 3) {
            let message1 = 'Left from ' + this.props.sprops.start + ' at ' + this.state.locdata.ata1 + 'AM';
            let message2 = 'Left from ' + this.props.sprops.busstop1 + ' at ' + this.state.locdata.ata2 + 'AM';
            let message3 = 'Left from ' + this.props.sprops.busstop2 + ' at ' + this.state.locdata.ata3 + 'AM';
            let message4 = 'Arriving ' + this.props.sprops.busstop3 + ' at ' + this.state.locdata.ata4 + 'AM';
            ms = [message1, message2, message3, message4];
            late = 1;
            this.setState({ an: 75 });
          }
          if (this.state.locdata.input == 4) {
            let message1 = 'Left from ' + this.props.sprops.start + ' at ' + this.state.locdata.ata1 + 'AM';
            let message2 = 'Left from ' + this.props.sprops.busstop1 + ' at ' + this.state.locdata.ata2 + 'AM';
            let message3 = 'Left from ' + this.props.sprops.busstop2 + ' at ' + this.state.locdata.ata3 + 'AM';
            let message4 = 'Left from ' + this.props.sprops.busstop3 + ' at ' + this.state.locdata.ata4 + 'AM';
            ms = [message1, message2, message3, message4];
            late = 1;
            this.setState({ an: 100});
          }
        }
        if (late == 1) {
          this.setState({ late: 'Late' })
        }
        this.setState({ msg: ms })
        //console.warn("dffff", this.state.msg[0])
      })


  }





  componentDidMount = () => {
    this.onLogin()
    //   // this.setState({ loading: true })
    //   console.warn("ff")
    //   console.warn('Our data is fetched', this.state.locdata);

    //   // fetch('http://192.168.43.194:3000/loc', {
    //   //   method: 'POST',
    //   //   headers: {
    //   //     'Accept': 'application/json',
    //   //     'Content-Type': 'application/json',
    //   //   },
    //   //   body: JSON.stringify({

    //   //     busno: this.state.this.props.sprops.val.busno
    //   //   })
    //   // })
    //   //   .then((response) => response.json())

    //   //   .then(res => { console.warn("ffff", res) })
    //   //   .then(res => {
    //   //     if (res.success === true) {

    //   //       console.warn("fff")
    //   //       this.setState({ loading: false })
    //   //       this.setState({ locdata: res.message[0] })
    //   //       //this.props.onViewHome(res.message[0]);

    //   //     }
    //   //     else {
    //   //       this.setState({ loading: false })
    //   //       Alert.alert("Incorrect Username or password")
    //   //     }
    //   //   })


  }
  render() {

    return (
      <ScrollView style={styles.container}>
        <Loader
          loading={this.state.loading} />
        <View style={styles.mainStack}>
          <Main style={styles.main}></Main>
          <Statuscard style={styles.statuscard} message={this.state.msg[0]}></Statuscard>
          <Text style={styles.bustop1}>{this.props.sprops.start}</Text>
          <Text style={styles.bustop12}>{this.props.sprops.busstop1}</Text>
          <Text style={styles.bustop13}>{this.props.sprops.busstop2}</Text>
          <Text style={styles.bustop14}>{this.props.sprops.busstop3}</Text>
          <Statuscard style={styles.statuscard2} message={this.state.msg[1]}></Statuscard>
          <Statuscard style={styles.statuscard3} message={this.state.msg[2]}></Statuscard>
          <Statuscard style={styles.statuscard4} message={this.state.msg[3]}></Statuscard>
          <View style={styles.res}><Progress value={this.state.an} /></View>
          <MaterialButtonShare1
            style={styles.materialButtonShare1} onpress={this.onLogin}
          ></MaterialButtonShare1>
        </View>
        <View style={styles.currentStatusStackRow}>
          <View style={styles.currentStatusStack}>
            <Text style={styles.newstyle}>Current Status</Text>
            <Text style={styles.bUsNoBusName}>{"\  "}{this.props.sprops.busno}{"\n"}{"\     "}{this.props.sprops.name}</Text>
            <View style={styles.rect8}></View>
            <Text style={styles.late}>{this.state.late}</Text>

          </View>

          <MaterialButtonViolet1 onPress={this.props.onViewselection}
            style={styles.materialButtonViolet1}
          ></MaterialButtonViolet1>
        </View>
        <View style={styles.rect6}></View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  newstyle: {
    marginTop: 30
  },
  res: {
    top: 249,
    // left: 0,
    marginLeft: 100,
    width: 436,
    height: 21,
    position: "absolute",
    //backgroundColor: "rgba(248,231,28,1)",
    transform: [
      {
        rotate: "90deg"
      }
    ]
  },
  container: {
    //flex: 1,
    backgroundColor: "rgba(227,243,255,1)"
  },
  materialButtonShare1: {
    height: 56,
    width: 56,
    position: "absolute",
    left: 300,
    top: 475
  },
  main: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 514,
    width: 400
  },
  rect8: {
    top: -19,
    left: 0,
    width: 100,
    height: 50,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderRadius: 10
  },
  late: {
    top: 0,
    fontWeight: "bold",
    left: 11,
    position: "absolute",
    //fontFamily: "roboto-regular",
    color: "#121212",
    height: 33,
    width: 79
  },
  statuscard: {
    position: "absolute",
    top: 42,
    left: 170,
    height: 100,
    width: 200
  },
  bustop1: {
    top: 63,
    left: 10,
    position: "absolute",
    //fontFamily: "roboto-regular",
    color: "#121212",
    height: 35,
    width: 81
  },
  bustop12: {
    top: 198,
    left: 10,
    position: "absolute",
    //fontFamily: "roboto-regular",
    color: "#121212",
    height: 35,
    width: 81
  },
  bustop13: {
    top: 330,
    left: 10,
    position: "absolute",
    //fontFamily: "roboto-regular",
    color: "#121212",
    height: 35,
    width: 81
  },
  materialButtonViolet1: {
    height: 36,
    width: 100,
    marginLeft: 50
  },
  currentStatusStack: {
    width: 205,
    height: 60,
    marginTop: 4
  },
  currentStatus: {
    // top: 60,
    // left: 0,
    // position: "absolute",
    // //fontFamily: "roboto-regular",
    // color: "#121212",
    // height: 27,
    // width: 157,
    // marginTop: 77
  },
  bUsNoBusName: {
    top: 0,
    position: "absolute",
    //fontFamily: "roboto-regular",
    color: "#121212",
    height: 40,
    width: 100,
    justifyContent: "center",
    left: 110,
    fontWeight: "bold",
    marginTop: -15
  },
  currentStatusStackRow: {
    height: 64,
    flexDirection: "row",
    marginTop: -583,
    marginLeft: 23,
    marginRight: 20
  },
  bustop14: {
    top: 443,
    left: 10,
    position: "absolute",
    //fontFamily: "roboto-regular",
    color: "#121212",
    height: 35,
    width: 81
  },
  statuscard2: {
    position: "absolute",
    left: 170,
    top: 174,
    width: 130,
    height: 78
  },
  statuscard3: {
    position: "absolute",
    left: 170,
    top: 300,
    width: 130,
    height: 78
  },
  statuscard4: {
    position: "absolute",
    left: 170,
    top: 420,
    width: 130,
    height: 80
  },
  mainStack: {
    width: 320,
    height: 514,
    marginTop: 104,
    marginLeft: 20
  },
  currentStatus: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    height: 27,
    width: 157,
    marginTop: -547,
    marginLeft: 23
  },
  rect6: {

    //backgroundColor: "rgba(185,31,31,1)",
    marginTop: 580,
    marginLeft: 204
  }
});

export default Status;
