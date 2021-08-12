/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,  ScrollView,  StatusBar,  StyleSheet,
  Text,  TextInput,Button,  useColorScheme,  View,  Alert,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
function Home ({ navigation })  {
    return (
        <View>
          <Text>This is Home page!</Text>
        </View>
    )
  }
const Stack=createStackNavigator();

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return ( <View style={styles.sectionContainer}>
      <Text style={[ styles.sectionTitle,  {color: isDarkMode ?'white' :'black',}, ]}> {title}</Text>
      <Text style={[   styles.sectionDescription, {color: isDarkMode ? 'white' : 'black',  },        ]}>
        {children} </Text>  </View>  );};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {    backgroundColor: isDarkMode ?'black' :'white',  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView style={backgroundStyle} contentInsetAdjustmentBehavior="automatic"        >
        <View  >
          <TextInput  placeholder="input your text here" 
          style={{margin:20, height:40,borderStyle:'dashed',borderWidth:1, borderColor:'red',   width:220}} />
        </View>
        <View style={{height:200 , margin:20,padding:10, flexDirection:'column',justifyContent:'space-around' ,alignItems:'center',borderWidth:1,borderColor:'red' }}>
          <Button title="100 button"           />
          <Button title="100 button" style={{         }} 
          onPress={()=>{Alert.alert('hello')}}  />
        <Text style={{margin:10}} >creating</Text>
          <Button title="100 button"  />  
        </View>  
        <View>
          <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name='Home' component={Home} />
          </Stack.Navigator>
          </NavigationContainer>
          </View> 
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
