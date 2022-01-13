import React, { useState } from "react";
import {StyleSheet,Text,View,TextInput,Button,TouchableOpacity,} from "react-native";
import { Entypo } from '@expo/vector-icons';
import optionScreen from "./optionScreen";
const loginScreen =() => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (
    <View style={styles.container}> 
     <View style ={styles.topbar}> wadrobeBook </View>
      <Text style={styles.adminloginText}> <Entypo name="user" size={24} color="black" />Admin Login</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textstyle}
          placeholder="Email"
          placeholderTextColor="#fff"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.textstyle}
          placeholder="Password"
          placeholderTextColor="#fff"
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity style={styles.loginBtn}>
        <Text style ={styles.loginText}>LOGIN</Text>
        {Navigation.navigate.optionScreen }
      </TouchableOpacity>
      
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d2cdd3',
    alignItems: "center",
    justifyContent: "center",
  },

 
  inputView: {
    backgroundColor: "#786a7b",
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  textstyle: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
 
  loginBtn: {
      width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: '#1F0824',
  },
  loginText:{
      color :"#fff" 
  },
    adminloginText:{
      color :"#1f0824",
      fontStyle: "italic",
  },
    topbar: {
    position: 'absolute',
    top: 0,
    alignItems : "center",
    justifyContent :  "center",
    width: '100%',
    minHeight:40 ,
    fontSize : 30,
    backgroundColor: '#1F0824',
    color : '#fff',
    fontStyle: "italic"
    
  },

});

export default loginScreen;