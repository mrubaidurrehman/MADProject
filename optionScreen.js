import * as React from 'react';
import { Text, View, StyleSheet ,TouchableOpacity,Image} from 'react-native';
import { Ionicons , Entypo ,SimpleLineIcons } from '@expo/vector-icons'; 



const optionScreen =()=> {
  return (
   
    <View style={styles.container}>
    <TouchableOpacity style={styles.touchableOpacity}><Entypo name="add-user" size={40} color="black" /> <Text >USER</Text>      </TouchableOpacity>
    <TouchableOpacity style={styles.touchableOpcity}><Ionicons name="duplicate" size={40} color="black" /> PRODUCTS</TouchableOpacity>


    <View>             <TouchableOpacity style ={styles.signoutbutton}><SimpleLineIcons name="logout" size={24} color="black" /> </TouchableOpacity></View>

    <View style ={styles.bottombar}></View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    backgroundColor: '#ecf0f1',
  },
  touchableOpacity:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
 signoutbutton:{
   position : 'absolute',
 },
   bottombar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    minHeight: 30,
    backgroundColor: '#1F0824',
  },
});
export default optionScreen;