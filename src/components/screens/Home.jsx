import axios from "axios";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View,} from "react-native";

const Home = ({navigation}) => {
    const [rickMorty,setRickMorty] = useState([])
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const characterPerPage = 3

    const fetchRickMorty = async () =>{
        try{
            setLoading(true);
            const {data} = await axios.get(`https://rickandmortyapi.com/api/character`)
            const newData = data.results
            // setRickMorty(data.results)
            setRickMorty([...rickMorty, ...newData]);
            setPage(page-1);
        }catch(error){
            console.error(error)
        }finally{
            setLoading(false)
        }
    }
    
    const renderFooter = () => {
        if (!loading) return null;
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#dcf285" />
            </View>
        );
    };

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
                // keyExtractor={(item) => item.id.toString()}
                onEndReached={fetchRickMorty}
                onEndReachedThreshold={0.5}
                ListFooterComponent={renderFooter}
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
    },
    loadingContainer: {
        alignItems: 'center',
        paddingVertical: 380,
    },
})
export default Home;