import React from 'react';
//import type {Node} from 'react';
import {  SafeAreaView,Text,View} from 'react-native';
import Home from './pages/Home';
import { TabNavi } from './pages/TabNavi';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const App= () => {
const Tab=createStackNavigator();
 const welcome =({navigation})=>{
    return <View style={{flex:1}} >
          <Text onPress={navigation.navigate('home') } >Home</Text>
        </View>} 
  return (
       <NavigationContainer>
         <Tab.Navigator>
         <Tab.Screen name="Welcome" component={welcome} />
         <Tab.Screen name="home" component={Home} />
         </Tab.Navigator>
         </NavigationContainer>   
  );
};
export default App;
/*         <Tab.Screen name="tabNavi" component={TabNavi} />
          <Text onPress={navigation.navigate('tabNavi') }>TabNavi</Text>

*/