import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Paycard from "./component/Paycard";
import MaterialButtonViolet from "./component/MaterialButtonViolet";
class Payment extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.scrollArea2Stack}>
          <View style={styles.scrollArea2}>
            <ScrollView
              horizontal={true}
              contentContainerStyle={styles.scrollArea2_contentContainerStyle}
            >
              <View style={styles.scrollAreaRow}>
                <View style={styles.scrollArea}>
                  <ScrollView
                    horizontal={true}
                    contentContainerStyle={
                      styles.scrollArea_contentContainerStyle
                    }
                  >
                    <Icon name="md-add" style={styles.icon}></Icon>
                  </ScrollView>
                </View>
                <Paycard style={styles.paycard}></Paycard>
              </View>
            </ScrollView>
          </View>
          <Paycard style={styles.paycard2}></Paycard>
          <Paycard style={styles.paycard3}></Paycard>
        </View>
        <Text style={styles.travelSummary}>Travel Summary</Text>
        <View style={styles.rect2}>
          <View style={styles.paasengerNameRow}>
            <Text style={styles.paasengerName}>Paasenger Name</Text>
            <Text style={styles.numberOfTickets}>Number Of Tickets</Text>
          </View>
          <View style={styles.nameRow}>
            <Text style={styles.name}>Name</Text>
            <Text style={styles.tickets}>Tickets</Text>
          </View>
          <View style={styles.ticketPrizeColumnRow}>
            <View style={styles.ticketPrizeColumn}>
              <Text style={styles.ticketPrize}>Ticket Prize</Text>
              <Text style={styles.loremIpsum}>55</Text>
            </View>
            <View style={styles.totalPrizeStack}>
              <Text style={styles.totalPrize}>Total Prize</Text>
              <Text style={styles.loremIpsum2}>Lor</Text>
            </View>
          </View>
          <MaterialButtonViolet
            style={styles.materialButtonViolet} label={'Pay'} onPress={this.props.onviewqr}
          ></MaterialButtonViolet>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(203,232,255,1)"
  },
  scrollArea2: {
    top: 0,
    left: 0,
    width: 374,
    height: 255,
    position: "absolute",
    backgroundColor: "rgba(203,232,255,1)"
  },
  scrollArea2_contentContainerStyle: {
    width: 374,
    height: 255,
    flexDirection: "row"
  },
  scrollArea: {
    width: 52,
    height: 71,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    borderWidth: 0,
    borderColor: "#000000",
    shadowOpacity: 0.04,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 5,
      height: 5
    },
    elevation: 0
  },
  scrollArea_contentContainerStyle: {
    width: 52,
    height: 71
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 44,
    width: 25,
    marginTop: 14,
    marginLeft: 13
  },
  paycard: {
    height: 195,
    width: 141,
    shadowOpacity: 0.04,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 5,
      height: 5
    },
    elevation: 0,
    marginLeft: 39
  },
  scrollAreaRow: {
    height: 195,
    flexDirection: "row",
    flex: 1,
    marginRight: 142,
    marginTop: 11
  },
  paycard2: {
    position: "absolute",
    left: 274,
    top: 11,
    width: 141,
    height: 195,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 5,
      height: 5
    },
    elevation: 0,
    shadowOpacity: 0.04
  },
  paycard3: {
    position: "absolute",
    left: 255,
    top: 12,
    width: 141,
    height: 195
  },
  scrollArea2Stack: {
    width: 415,
    height: 255,
    marginTop: 65,
    marginLeft: 26
  },
  travelSummary: {
    //  //fontFamily: "roboto-regular",
    color: "#121212",
    height: 65,
    width: 300,
    fontSize: 34,
    marginLeft: 10
  },
  rect2: {
    width: 360,
    height: 207,
    backgroundColor: "rgba(255,255,255,1)",
    shadowOpacity: 0.04,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 5,
      height: 5
    },
    elevation: 0,
    borderRadius: 10,
    marginTop: 9,
    marginLeft: 16
  },
  paasengerName: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    height: 25,
    width: 124
  },
  numberOfTickets: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    height: 25,
    width: 200,
    marginLeft: 68
  },
  paasengerNameRow: {
    height: 25,
    flexDirection: "row",
    marginTop: 26,
    marginRight: 19,
    marginLeft: 10
  },
  name: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    height: 22,
    width: 52
  },
  tickets: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 129
  },
  nameRow: {
    height: 22,
    flexDirection: "row",
    marginLeft: 26,
    marginRight: 76
  },
  ticketPrize: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    height: 16,
    width: 92
  },
  loremIpsum: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    height: 20,
    width: 52,
    marginTop: 13,
    marginLeft: 10
  },
  ticketPrizeColumn: {
    width: 92,
    marginLeft: 10
  },
  totalPrize: {
    top: 0,
    left: 0,
    position: "absolute",
    //fontFamily: "roboto-regular",
    color: "#121212",
    height: 22,
    width: 118,
    marginLeft: 10
  },
  loremIpsum2: {
    top: 0,
    left: 0,
    position: "absolute",
    //fontFamily: "roboto-regular",
    color: "#121212",
    height: 0,
    width: 82
  },
  totalPrizeStack: {
    width: 118,
    height: 22,
    marginLeft: 100,
    marginTop: 8
  },
  ticketPrizeColumnRow: {
    height: 49,
    flexDirection: "row",
    marginTop: 15,
    marginRight: 19
  },
  materialButtonViolet: {
    height: 36,
    width: 295,
    marginTop: 24,
    marginLeft: 30
  }
});

export default Payment;
