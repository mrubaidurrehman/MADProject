import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign, Entypo} from '@expo/vector-icons';

const mainScreen = () => {
  return (
    <View style={styles.container}>
      <Text style ={styles.appName}>
      <Entypo name="shopping-bag" size={24} color="black" />
        wardrobe<Text style={styles.boldtext}>Book</Text>{' '}
      </Text>
      <TouchableOpacity style={styles.button}>
      <AntDesign name="rightcircle" size={24} color="black" />
        {Navigation.navigate.loginScreen}
      </TouchableOpacity>
      <View style={styles.bottombar}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d2cdd3',
    alignItems: 'center',
    justifyContent: 'center',   
  },

  boldtext: {
    fontWeight: 'bold',
  },
  button: {
    width: '10%',
    height: 30,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 120,
    backgroundColor: '#1F0824',
  },
  bottombar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    minHeight: 30,
    backgroundColor: '#1F0824',
  },
  appName: {
   fontSize: 30,
   color: '#1F0824',
   fontStyle: "italic",
   fontFamily: 'PT Sherif',
  },
});

export default mainScreen;
