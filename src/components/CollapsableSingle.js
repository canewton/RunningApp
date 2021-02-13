import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Collapsible from "react-native-collapsible";

export default class CollapsibleSingle extends Component {
  state = {
    collapsed: true,
  };

  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  render() {
    const { header, headerText, workout, workout2, workoutList, time } = styles;
    const { title, children } = this.props;

    return (
      <View>
        <TouchableOpacity onPress={this.toggleExpanded}>
          <View style={header}>
            <Text style={headerText}>{title}</Text>
          </View>
        </TouchableOpacity>
        <Collapsible collapsed={this.state.collapsed} align="center">
          <View style={workoutList}>
            <View style={workout}>
              <Text style={time}>{children}</Text>
            </View>
            <View style={workout}>
              <Text style={time}>{children}</Text>
            </View>
          </View>
        </Collapsible>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "#8fd14f",
  },
  headerText: {
    textAlign: "left",
    fontSize: 30,
    color: "white",
    fontWeight: "500",
  },
  content: {
    padding: 20,
    backgroundColor: "#fff",
  },
  workout: {
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "white",
  },
  workout2: {
    paddingVertical: 25,
    borderBottomWidth: StyleSheet.hairlineWidth,
    backgroundColor: "red",
    borderColor: "white",
  },
  workoutList: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    borderRadius: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "#12cdd4",
  },
  time: {
    fontSize: 24,
    fontWeight: "500",
    color: "white",
  },
});
