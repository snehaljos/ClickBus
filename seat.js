import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Selection from "./component/selection";
import MaterialButtonViolet from "./component/MaterialButtonViolet";
class Seat extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.rect}>
                    <View style={styles.rect2Row}>
                        <View style={styles.rect2}></View>
                        <View style={styles.rect3}></View>
                        <View style={styles.rect4}></View>
                    </View>
                    <View style={styles.emptyRow}>
                        <Text style={styles.empty}>Empty</Text>
                        <Text style={styles.selected}>Selected</Text>
                        <Text style={styles.booked}>Booked</Text>
                    </View>
                </View>
                <View style={styles.rect5}>
                    <Selection />
                </View>
                <View style={styles.rect6}>
                    <MaterialButtonViolet label={'Procced'} style={styles.MaterialButtonViolet} onPress={this.props.onviewpay} />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(227,243,255,1)"
    },
    MaterialButtonViolet: {
        height: 36,
        width: 300,
        marginTop: 24
    },
    rect: {
        width: 349,
        height: 68,
        backgroundColor: "rgba(255,255,255,1)",
        borderRadius: 10,
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowColor: "rgba(0,0,0,1)",
        shadowOpacity: 0.04,
        marginTop: 46,
        marginLeft: 6
    },
    rect2: {
        width: 48,
        height: 40,
        backgroundColor: "#3493FF",
        borderRadius: 10
    },
    rect3: {
        width: 48,
        height: 40,
        backgroundColor: "#8EF0E7",
        borderRadius: 10,
        marginLeft: 71
    },
    rect4: {
        width: 48,
        height: 40,
        backgroundColor: "rgba(30,23,189,1)",
        borderRadius: 10,
        marginLeft: 73
    },
    rect2Row: {
        height: 40,
        flexDirection: "row",
        marginTop: 10,
        marginLeft: 31,
        marginRight: 30
    },
    empty: {
        width: 48,
        height: 18,
        color: "#121212",
        // fontFamily: "roboto-regular"
    },
    selected: {
        width: 60,
        height: 18,
        color: "#121212",
        // fontFamily: "roboto-regular",
        marginLeft: 66
    },
    booked: {
        width: 48,
        height: 18,
        color: "#121212",
        //fontFamily: "roboto-regular",
        marginLeft: 61
    },
    emptyRow: {
        height: 18,
        flexDirection: "row",
        marginLeft: 36,
        marginRight: 30
    },
    rect5: {
        width: 349,
        height: 387,
        backgroundColor: "rgba(255,255,255,1)",
        borderRadius: 10,
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowColor: "rgba(0,0,0,1)",
        shadowOpacity: 0.04,
        marginTop: 13,
        marginLeft: 6
    },
    rect6: {
        width: 349,
        height: 90,
        backgroundColor: "rgba(255,255,255,1)",
        borderRadius: 10,
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowColor: "rgba(0,0,0,1)",
        shadowOpacity: 0.04,
        marginTop: 17,
        alignSelf: "center"
    }
});

export default Seat;
