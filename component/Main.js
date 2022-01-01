import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";

function Main(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.scrollArea}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <View style={styles.scrollArea}>
            <ScrollView
              horizontal={false}
              contentContainerStyle={styles.scrollArea_contentContainerStyle}
            ></ScrollView>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  scrollArea: {
    width: 360,
    height: 514,
    backgroundColor: "#E6E6E6",
    borderRadius: 10,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 5,
      height: 5
    },
    elevation: 0,
    shadowOpacity: 0.04
  },
  scrollArea_contentContainerStyle: {
    height: 514,
    width: 319
  }
});

export default Main;
