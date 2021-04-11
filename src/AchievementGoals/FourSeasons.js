import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const FourSeasons = ({ workouts }) => {
  var done = false;
  var day = workouts.date ;
  var month = day.getmonth () ;
  var winter = false ;
  var spring = false ;
  var fall = false ;
  var summer = false ;
  
    for (var i = 0; i < workouts.date; i++) {
        const date = workouts[i].date_data[workouts[i].date_data.length - 1];
        if((workouts[i].month === "January" ||"Febuary" || "December") ){
            winter = true;
        
        if((workouts[i].month === "march" ||"April" || "May") ){
            spring = true;}

        if((workouts[i].month === "october" ||"november" || "september") ){
            fall = true;   }
                    
        if((workouts[i].month === "june" ||"july" || "August") ){
            summer = true;   } 
            
        if(summer && fall && spring && winter) {
                done = true;    }   

        }
    }

    return (
        null
    )
    console.log(done);
        };

const styles = StyleSheet.create({});

export default FourSeasons;