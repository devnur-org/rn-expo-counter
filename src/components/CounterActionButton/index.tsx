import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import {StyleSheet, Text, TouchableOpacity, TouchableOpacityProps} from "react-native";
import {styles} from "./styles";

interface PropsWithIcon extends TouchableOpacityProps {
  iconName: "minus" | "plus" | "ccw";
  text?: never;
}

interface PropsWithText extends TouchableOpacityProps {
  text: string;
  iconName?: never;
}

type Props = PropsWithIcon | PropsWithText;

const CounterActionButton: React.FC<Props> = ({onPress, text, iconName, ...props}) => {

  const disabledStyle = props.disabled ? styles.disabled : styles.enabled

  return (
    <TouchableOpacity {...props} activeOpacity={0.8} onPress={onPress} style={styles.container}>
      {iconName ? (
        <Entypo name={iconName} size={20} color={disabledStyle.color}/>
      ) : (
        <Text style={StyleSheet.flatten([styles.text, disabledStyle])}>{text}</Text>
      )}
    </TouchableOpacity>
  )
}

export default CounterActionButton
