import {Text, View} from "react-native";
import {styles} from "./styles";
import React from "react";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="horizontal-rotate-counterclockwise" size={24} color="black"/>
      <Text style={styles.text}>My Counters</Text>
    </View>
  )
}

export default Header;
