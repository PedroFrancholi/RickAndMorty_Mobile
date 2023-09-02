import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ReturnValue = ({content}) =>{
    const {id,name,status,image} = content
    return(
        <TouchableOpacity style={styles.boxBody}>
            <Text style={{color:'#000'}}>ID: {id}</Text>
            <Text style={{color:'#000'}}>Name: {name}</Text>
            <Text style={{color:'#000'}}>Status: {status}</Text>
            <Image source={{uri: image}} style={styles.image}/>
        </TouchableOpacity>
    )
}

const Home = () => {
    const [rickMorty,setRickMorty] = useState([])
    const fetchRickMorty = async () =>{
    
        try{
            const {data} = await axios.get("https://rickandmortyapi.com/api/character")
            setRickMorty(data.results)
        }catch(error){
            console.error(error)
        }
    }
    
    useEffect(()=>{
        fetchRickMorty()
    },[])
    
    

    return (
        <SafeAreaView style={{backgroundColor:'#000'}}>
            
            <View style={styles.card}>
            <View style={styles.body}>
                <FlatList
                data={rickMorty}
                renderItem={({item}) => <ReturnValue content={item}/>}
                keyExtractor={(item) => item.id.toString()}
                />
            </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    body:{
        height:'100%',
        backgroundColor:"#4a85a1",
        justifyContent:'center',
        gap:10
    },
    image:{
        height:80,
        resizeMode:'contain'
    },
    boxBody:{
        height:160,
        marginBottom:15,
        backgroundColor:"#dcf285",
        // alignItems:'center',
        justifyContent:'center'

    }
})
export default Home;