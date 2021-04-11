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
        
        if((workouts[i].month === "March" ||"April" || "May") ){
            spring = true;}

        if((workouts[i].month === "October" ||"November" || "September") ){
            fall = true;   }
                    
        if((workouts[i].month === "June" ||"July" || "August") ){
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