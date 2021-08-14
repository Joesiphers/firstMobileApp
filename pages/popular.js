import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer} from '@react-navigation/native';
import { Text, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Navito from '../NaviUtil/NaviTo';
//let Navito;
const Top = createMaterialTopTabNavigator();
const JS=()=>{ return <View><Text>JAVA SCRIPT</Text>
<Text onPress={()=>{Navito.goPage('Trend',{params:"information"})}} >back to Trend</Text>
</View> }; //try with some params information
const Python=()=>{ return <View><Text>PYTHON</Text></View> };
const Cpluplus=()=>{ return <View><Text>C++</Text></View> };
const tabPage=()=>{ return <View><Text>doukyi</Text></View> };
const tabs=["JS","Python","C++","react","Java"];
const gentab=tabs.map((item,index)=>{
            return <Top.Screen key={item} name={item} component={tabPage}
             />});

const Popular=(props)=>{
    Navito.navigation=props.navigation;// pass the Home's navigation got from parent
   // console.log(props.route,"popular");    console.log(tabScreens,)
     return (<Top.Navigator screenOptions={{
         tabBarScrollEnabled:true,
         tabBarStyle:{backgroundColor:'#999'},
         tabBarLabelStyle:{fontSize:20 ,color:"white",textTransform:'none'},
         tabBarIndicatorStyle:{height:3,backgroundColor:'white'},
         swipeEnabled:false
         }}>
            {gentab}

            </Top.Navigator>
    )}

export default Popular;            
/*     <Top.Screen name="C++" component={Cpluplus}/>
     
        console.log( gentab);  
    const tabScreens=[] 
    const gentab=()=>{tabs.forEach((item,index)=>{
    tabScreens[index]= <Top.Screen name={item} component={tabPage}/>})
    return tabScreens}
    console.log(tabScreens, "tabScreens");
{gentab()}
            */
