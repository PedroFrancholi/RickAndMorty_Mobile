import { useState } from "react";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import { Text } from "react-native";
import { SafeAreaView } from "react-native";
import { TextInput } from "react-native";
import { View } from "react-native";

const Register = () => {
    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[validEmail,setValidEmail] = useState('')
    const[password,setPassword] = useState('')
    const[validPassword,setValidPassword] = useState('')


    return (
        <SafeAreaView style={{backgroundColor:'#24414f'}}>
            <View style={styles.body}>
                <Text style={styles.textRegister}>REGISTER</Text>
                <View style={{}}>
                    <Image source={require('../image/rick.gif')} style={styles.image}/>
                    <Image source={require('../image/morty.gif')} style={styles.image}/>
                </View>
            
            <Text>Email</Text>
            <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            />
            <Text>Confirm Email</Text>
            <TextInput
            style={styles.input}
            onChangeText={setValidEmail}
            value={validEmail}
            />
            <Text>Password</Text>
            <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            />
            <Text>Confirm Password</Text>
            <TextInput
            style={styles.input}
            onChangeText={setValidPassword}
            value={validPassword}
            />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    body:{
        height:'100%',
        backgroundColor:'#4a85a1',
        alignItems:'center',
        justifyContent:'center'
    },
    textRegister:{
        color:'#dcf285',
        fontSize:40,
        marginBottom:10,
        textShadowColor: 'rgba(0, 0, 0, 0.8)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5
    },
    boxImage:{
        flexDirection:'row',
        justifyContent:'center',
    },
    image:{
        height:100,
        marginBottom:10,
        resizeMode:'contain'
    },
    input:{
        borderWidth:2,
        borderRadius:10,
        borderColor:'#24414f',
        backgroundColor:"#dcf285",
        height:40,
        width:300,
        padding:10
    }
})

export default Register;