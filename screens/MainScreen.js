import { View, Text, Image, TextInput , Alert  } from "react-native";

import React from 'react'
import { s } from "react-native-wind";
import { SafeAreaView } from "react-native-safe-area-context";


export default function MainScreen() {
  return (
   <SafeAreaView style={s `justify-center items-center`}>
<Text>this is the main</Text>
   </SafeAreaView>
  )
}