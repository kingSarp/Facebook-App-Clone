import { View, Text, Image, TextInput } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { Button } from "@rneui/themed";
import Logo from "../assets/images/fblogo.png";
import MetaLogo from "../assets/images/logo-Meta.png";

import { s } from "react-native-wind";

export default function LoginScreen({navigation}) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  
  const createNewAccount = () => {
  navigation.navigate("RegisterScreen");
  }
  

  return (
    <SafeAreaView style={s`p-4 justify-center items-center`}>
      <Button
        title="English (US)"
        type="clear"
        titleStyle={s `text-black`}
        buttonStyle={s`mt-2`}
      />

      <Image source={Logo} style={s`h-14 w-14 m-20`} />

      <TextInput
        placeholder="mobile number"
        autoFocus
        value={email}
        onChangeText={setEmail}
        style={s`border border-gray-400 p-3 rounded-xl w-11/12 mt-3`}
      />
      <TextInput
        placeholder="password" 
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={s`border border-gray-400 p-3 rounded-xl w-11/12 mt-3`}
      />
      <View style={s `w-11/12`}>
        <Button
          title="Login"
          //onPress={Login}
          buttonStyle={s`rounded-2xl mt-4`}
        />

        <Button 
        title="Forgot Password"
         type="clear"
        titleStyle={s`text-black text-sn`}
        buttonStyle={s`mt-4`} />

        <Button
          title="Create new account"
          type="outline"
          onPress={createNewAccount}

          buttonStyle={s`rounded-2xl mt-28`}
        />
      </View>
      <Image
      source={MetaLogo}
      style={s`p-4 h-10 w-1/5  mt-2`}
      
      />
    </SafeAreaView>
  );
}
