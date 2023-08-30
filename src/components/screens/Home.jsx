import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";

const fetchRickMorty = async () =>{
    const [rickMorty,setRickMorty] = useState([])

    try{
        const {data} = await axios.get('https://rickandmortyapi.com/api/character')
        setRickMorty(data)
    }catch(error){
        console.error(error)
    }
}

useEffect(()=>{
    fetchRickMorty()
},[])

const dataRickMorty = ({rickMorty}) =>{
    const {id,name,status} = rickMorty
    return(
        <View style={{backgroundColor:'#0F0'}}>
            <Text style={{color:'#000'}}>ID: {id}</Text>
            <Text>Name: {name}</Text>
            <Text>Status: {status}</Text>
        </View>
    )
}

const Home = () => {
    return (
        <SafeAreaView style={{backgroundColor:'#000'}}>
            <View style={{backgroundColor:'#0F0'}}>
                <FlatList
                data={rickMorty}
                renderItem={({item}) => <dataRickMorty rickMorty={item}/>}
                />
            </View>
        </SafeAreaView>
    );
}

export default Home;