import { View, Text, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

import { SafeAreaView } from "react-native-safe-area-context";
import { s } from "react-native-wind";

import { Button } from "@rneui/themed";
import Logo from "../assets/images/fblogo.png";
import MetaLogo from "../assets/images/logo-Meta.png";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


export default function RegisterScreen({navigation}) {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const hasAccount = () => {
    navigation.navigate("LoginScreen");
  };

  const createAccount = () => {
    const auth = getAuth();
    if ( password !== confirmPassword){
      Alert.alert("password not matching");
      return;
    }
    if (password && email){
      createUserWithEmailAndPassword(auth,email,password).then((userCredentials) => {
        const user = userCredentials.user;
        console.log("successfully created" , user.email);

      })
      .catch((error) => {
        if (error.code === "auth/email-used-already"){
          Alert.alert("existing email");
        }
        if (error.code === "auth/invalid-email"){
          Alert.alert("invalid email");
        }
      console.error("error creating account  ", error.message);

      });}
      else {
        Alert.alert("missing data"); 
      } 
    
  };

  return (
    <SafeAreaView style={s `p-4`}>
      <TouchableOpacity>
        <Ionicons
          name="arrow-back"
          size={30}
          color={s `black`}
          onPress={() => navigation.navigate("LoginScreen")}
        />
      </TouchableOpacity>

      <View style={s`justify-center items-center`}>
        <Image source={Logo} style={s` h-14 w-14 mt-10`} />
        <TextInput
          placeholder="Full Name"
          autoFocus
          value={fullname}
          onChangeText={setFullname}
          style={s`border border-gray-400 p-3 rounded-xl w-11/12 mt-3`}
        />
        <TextInput
          placeholder="mobile number"
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
        <TextInput
          placeholder="Confirm password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          style={s`border border-gray-400 p-3 rounded-xl w-11/12 mt-3`}
        />

        <View style={s `w-11/12`}>
          <Button
            title="Create Account"
            onPress={createAccount}
            buttonStyle={s`rounded-2xl mt-6`}
          />
          <Button
            title="Already Have an Account"
            type="outline"
            buttonStyle={s`rounded-2xl mt-4`}
            onPress={hasAccount}
          />
        </View>

        <Image
      source={MetaLogo}
      style={s`p-4 h-10 w-1/5  mt-2`}
      
      />
      </View>
    </SafeAreaView>
  );
}
