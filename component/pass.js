import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";


function Pass(props) {
    return (
        <View style={[styles.container, props.style]}>
            <TextInput placeholder={props.placeholder} style={styles.inputStyle} onChangeText={props.onChangeText}></TextInput>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "transparent",
        flexDirection: "row",
        alignItems: "center",
        borderColor: "rgba(255,255,255,1)",
        borderBottomWidth: 1
    },
    inputStyle: {
        flex: 1,
        color: "#000",
        alignSelf: "stretch",
        paddingTop: 14,
        paddingRight: 16,
        paddingLeft: 10,
        paddingBottom: 8,
        fontSize: 16,
        //fontFamily: "roboto-regular",
        lineHeight: 16
    },

});

export default Pass;
