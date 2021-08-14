import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer} from '@react-navigation/native';
import { Text, View} from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Popular from './popular';


const Tab= createMaterialTopTabNavigator();
const Home = () => {
    const Trend=({route,navigation})=>{
       // console.log(route)
        return <View><Text>trend</Text></View> };
    const Save=()=>{return   <View><Text>saved</Text></View>};
    const MyHub=()=>{return <View><Text>My..</Text></View>};
        
        return (
          <Provider>
        <NavigationContainer>
        <Tab.Navigator 
         initialRouteName='Trend' tabBarPosition='bottom' >
            <Tab.Screen name ='Popular' component={Popular} 
            options={{tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="fire" color='#e91e63' size={20} />
              )}}/>
            <Tab.Screen name ='Trend' component={Trend}
                            options={{tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name="trending-up" color='#e91e63' size={20} />
                              )}}
             />
            <Tab.Screen name ='My Hub' component={MyHub}
                options={{tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color='#e91e63' size={20} />
                  )}} />
            <Tab.Screen name ='Save' component={Save} 
            options={{
                tabBarLabel: 'Updates',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="star-outline" color='#e91e63' size={20} />
                  )
                }}
                />
    </Tab.Navigator>
        </NavigationContainer>
        </Provider>)
        }
export default Home;
/**/
    /*     

 */    
