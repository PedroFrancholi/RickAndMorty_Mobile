import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-native";
import { SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const Characteres = ({ route,navigation }) => {
  const [characteres, setCharacteres] = useState(null);
  const {id} = route.params;

  const fetchCharacteres = async () => {
    try {
        const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        setCharacteres(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCharacteres();
  }, [id]);


  return (
    <SafeAreaView style={{backgroundColor:'#24414f'}}>
      {characteres && (
        <>
          <View style={styles.boxGeral}>
            <View style={styles.boxContainer}>
                <TouchableOpacity style={styles.boxText}>
                    <Text style={styles.textTitle}>{characteres.name}</Text>
                </TouchableOpacity>

                <Image source={{uri: characteres.image}} style={styles.image}/>
            <TouchableOpacity style={styles.boxText}> 
                <Text style={styles.text}>Id: {characteres.id}</Text>
                <Text style={styles.text}>Status: {characteres.status}</Text>
                <Text style={styles.text}>Gender: {characteres.gender}</Text>
                <Text style={styles.text}>Created Date: {characteres.created}</Text>
            </TouchableOpacity>
            </View>
          </View>
        </>
      )}
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    boxGeral:{
        flex:0,
        height:'100%',
        backgroundColor:'#4a85a1',
        justifyContent:'center',
        alignItems:'center'
    },
    boxContainer:{
        paddingVertical:20,
        width:350,
        backgroundColor:'#4a8',
        borderRadius:25,
        gap:15
    },
    image:{
        height:200,
        resizeMode:'contain'
    },
    boxText:{
        alignItems:'center',
        justifyContent:'center',
        gap:5
    },
    text:{
        color:'#FFF',
        fontWeight:'bold',
        fontSize:16,
        textShadowColor: 'rgba(0, 0, 0, 0.6)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5
    },
    textTitle:{
        color:'#dcf285',
        fontWeight:'bold',
        fontSize:26,
        textShadowColor: 'rgba(0, 0, 0, 0.8)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5
    }
})

export default Characteres;
