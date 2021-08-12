import React, {useState} from 'react';
import { Text, View, FlatList,RefreshControl, ActivityIndicator} from 'react-native';

export const Refresher =()=>{
const initData=["AJ1","222","333","444","555","666"];
  
// const initData=[{id:1,tex:"AJ1"},{id:2,tex:"222"},{id:3,tex:"333"},{id:4,tex:"444"},{id:5,tex:"555"},{id:6,tex:"666"},{id:7,tex:"777"},{id:8,tex:"888"},{id:9,tex:"999"},{id:10,tex:"1010"}];
 const [tata,setTata]=useState(initData);
 const [isLoading, setisLoading]=useState(false);
 const loadData=(more)=>{
   setisLoading(true);
   setTimeout(()=>{
     let Darray=[];
    if (more){
     Darray=tata.concat(initData);
/*       let l=tata.length+1;
     console.log(l);
     for (let i=0;i<=5;i++){
       Darray.push({id:l+i,tex:(100+l+i).toString()})
     }; */
     //console.log(Darray)
   }
   else {
     for (let i=tata.length-1;i>=0;i--){
       Darray.push(tata[i])};
     };
    setTata(Darray);
     setisLoading(false);
   },1000)}
 ;
 const getIndicator=()=>{
   return <View style={{ flex: 1, alignItems: 'center'}}>
     <ActivityIndicator size={'large'} color="blue" />
   <Text>Loading More</Text>
   </View>
 };
 const renderItem=({item})=>(      
      <Text 
      style={{
      margin:30,height:150,backgroundColor:'green',color:'red',fontSize:30,textAlign:'center'}}>
      {item}</Text>);   

return (<View style={{flex:1}}>
    <Text onPress={()=>{ 
    let Darray=[];
    for (let i=tata.length-1;i>=0;i--){
        Darray.push(tata[i])
        }
    setTata(Darray);
    }} > ADD </Text>
    <FlatList
    data={tata}
    renderItem={renderItem}
    //keyExtractor={item => item.}
/*  refreshing={isLoading}
                onRefresh={loadData} */
    refreshControl={
        <RefreshControl 
            title={'Loading'}
            colors={['red']}
            refreshing={isLoading}
            onRefresh={()=>loadData()}
        />
    }
    ListFooterComponent={()=>getIndicator() }
    onEndReached={()=>{loadData(true)}}
    onEndReachedThreshold={0}
    />
    </View>)
};