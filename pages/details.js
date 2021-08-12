import { Text, View,  Button,FlatList} from 'react-native';
import React from 'react';

export function Tail ()  {
    const Data=[{id:"1",tex:"BJ1"},{id:"2",tex:"BJ2"},{id:"3",tex:"BJ3"},{id:"4",tex:"BJ4"},{id:"5",tex:"BJ5"}];
    const renderItem=({item})=>{
        console.log(item.tex);
        <Text style={{
            margin:10,height:150,backgroundColor:'green',color:'red'}}>
                {item.tex}</Text>
    };
    return (<View style={{flex:1}}>
        <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

                <Text>hahah</Text>
                </View>
        )  }