import React from 'react';
import type {Node} from 'react';
import {TouchableOpacity, StyleSheet,  Text,  TextInput,Button, FlatList, useColorScheme,  View,  Alert,} from 'react-native';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabNavi} from './pages/TabNavi';
//import { Tail } from './pages/details';
import { Refresher } from './pages/refresh';
import SwipeDemo from './pages/swipable';
import Icon from 'react-native-vector-icons/Ionicons';


const Stack=createStackNavigator();
//const Tab = createBottomTabNavigator();
//const Icon=MaterialCommunityIcons;

function Home ({navigation})  {
    return (
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'  }}>
          <Text>This is Home page!</Text>
          <Icon name="home" color="#445566" size={30} 
          />
          <Button title="Show Details" 
          onPress={()=>navigation.navigate('Detail',{til:"aaa"})} 
          />
          <Button title="Go Refresh" onPress={()=>navigation.navigate('refresh')} />
          <Button title="Swipe Demo" onPress={()=>navigation.navigate('swipeDemo')} />

        </View>
    );  }

 function Detail ({navigation,route})  {
  let til=route.params.til;   //to change the params, always require route.params
  React.useEffect(()=>{ navigation.setOptions({title:til}),[navigation, til]});
  
  const Op={headerLeft:()=>{
            return  <TouchableOpacity 
              style={{backgroundColor: "red", padding: 3}} 
              onPress={()=>navigation.popToTop()}>
              <Icon name="home" size={20}/>
              </TouchableOpacity>}};
  React.useEffect(()=>navigation.setOptions(Op),[0]);
  return (
             <View style={styles.container}>
              <Text>{til}</Text>
              <TextInput style={styles.input} 
              onChangeText={(text)=>navigation.setParams({til:text})}/> 
              <Button title="toHome" onPress={()=>navigation.navigate('Home',{})} />
              <Button title="Go Back" onPress={()=>navigation.goBack()} />
              <Text style={styles.btn} onPress={()=>{navigation.navigate('TabNavi')}}
              >Next</Text>
               </View>
      )  }
 /* 

*/

//const App: () => Node = () => {
  const App = () => {

    return (
          <NavigationContainer>    
          <Stack.Navigator screenOptions={
            {headerTitleAlign:'center',
            headerStyle:{backgroundColor:'tomato',height:50},
            headerTitleStyle:{textAlign:'center' ,fontSize:22},
            headerShown:true,
           // gestureEnabled: true,
          //  gestureDirection: 'vertical',
            } }
             >
              <Stack.Screen name="Home" component={Home}/>
              <Stack.Screen name="Detail" component={Detail}/> 
              <Stack.Screen name="TabNavi" component={TabNavi} />
              <Stack.Screen name="refresh" component={Refresher} />
              <Stack.Screen name="swipeDemo" component={SwipeDemo} />

          </Stack.Navigator>
          </NavigationContainer>
  );
};
//              

const styles = StyleSheet.create({
    container:{
    flex:1,
    margin:10,
    alignItems: 'center', 
     },
  input:{
    borderWidth:1,
    borderColor:'orange',
    height:50,
    width:220
  },
  btn:{marginTop:10,padding:10, width:80,color:'blue',    
      textAlign:'center',fontSize:18,
      
     borderWidth:1,borderColor:'orange'}
  
});

export default App;
