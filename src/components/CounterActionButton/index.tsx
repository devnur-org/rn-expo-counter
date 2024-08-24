import React from "react";
import {StyleSheet, TouchableOpacity, TouchableOpacityProps} from "react-native";
import {styles} from "./styles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

interface CounterActionButtonProps extends TouchableOpacityProps {
  icon: "plus" | "minus"
}

const CounterActionButton: React.FC<CounterActionButtonProps> = ({icon, ...props}) => {
  return (
    <TouchableOpacity
      {...props}
      style={StyleSheet.flatten([
        styles.actionWrapper,
        props.disabled && styles.actionWrapperDisabled
      ])}>
      <MaterialCommunityIcons name={icon} size={24} color={props.disabled ? "gray" : "black"}/>
    </TouchableOpacity>
  )
}

export default CounterActionButton
