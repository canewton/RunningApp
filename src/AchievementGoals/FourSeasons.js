import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const FourSeasons = ({ workouts }) => {
    var done = false;;
    var winter = false;
    var spring = false;
    var fall = false;
    var summer = false;

    for (var i = 0; i < workouts.date; i++) {
        const date = workouts[i].date
        const month = date.getMonth()
        if ((month === 0|| 1 || 2)) {
            winter = true;
        }

        if ((month === 3 || 4 || 5)) {
            spring = true;
        }

        if ((month === 6 || 7 || 8)) {
            fall = true;
        }

        if ((month === 9 || 10 || 11)) {
            summer = true;
        }

        if (summer && fall && spring && winter) {
            done = true;
        }

    }
    console.log(done)

    return (
        null
    )

}
const styles = StyleSheet.create({});

export default FourSeasons;