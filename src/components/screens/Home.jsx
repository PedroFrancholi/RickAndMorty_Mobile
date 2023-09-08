import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View,} from "react-native";

const Home = ({navigation}) => {
    const [rickMorty,setRickMorty] = useState()

    const fetchRickMorty = async () =>{
        try{
            const {data} = await axios.get(`https://rickandmortyapi.com/api/character`)
            setRickMorty(data.results)
        }catch(error){
            console.error(error)
        }
    }
    
    useEffect(()=>{
        fetchRickMorty()
    },[])

    const ReturnValue = ({content}) =>{
        const {id,name,status,image} = content;
    
        const navigationCharacteres = () => {
            navigation.navigate('Characteres', {id: id})
        }

        return(
            <TouchableOpacity style={styles.boxBody} onPress={() => navigationCharacteres(content)}>
                <View style={styles.boxBodyInternal}>
    
                <View style={styles.boxText}>
                    <Text style={styles.text}>ID: {id}</Text>
                    <Text style={styles.text}>Name: {name}</Text>
                    <Text style={styles.text}>Status: {status}</Text>
                </View>
                <Image source={{uri: image}} style={styles.image}/>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={{backgroundColor:'#24414f'}}>
            <View style={styles.body}>
                <Text style={styles.textTitle}>{`SELECT ONE CHARACTER
    TO VIEW THE DETAILS`}
                </Text>
                <FlatList
                data={rickMorty}
                renderItem={({item}) => <ReturnValue content={item}/>}
                keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    body:{
        height:'100%',
        backgroundColor:"#4a85a1",
        alignItems:'center',
        justifyContent:'center',
        gap:10
    },
    textTitle:{
        paddingTop:10,
        color:'#FFF',
        fontSize:30,
        fontWeight:'bold',
        alignItems:'center',
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5
    },
    image:{
        marginTop:10,
        height:80,
        resizeMode:'contain'
    },
    boxText:{
        alignItems:'center',
    },
    text:{
        color:'#24414f',
        fontSize:14
    },
    boxBody:{
        flex:0,
        height:200,
        width:400,
        marginVertical:5,
        backgroundColor:"#4a85a1",
        justifyContent:'center',
        flexDirection:'row'

    },
    boxBodyInternal:{
        justifyContent:'center',
        width:250,
        backgroundColor:'#dcf285',
        borderRadius:20,
    }
})
export default Home;