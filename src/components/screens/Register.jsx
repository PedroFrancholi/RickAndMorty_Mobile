import { useState } from "react";
import { StyleSheet,Image,Vibration,TouchableOpacity,Text,SafeAreaView,TextInput,View } from "react-native";

const Register = ({navigation}) => {
    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[validPassword,setValidPassword] = useState('')
    const[errorName, setErrorName] = useState('')
    const[errorEmail, setErrorEmail] = useState('')
    const[errorPassword, setErrorPassword] = useState('')
    const[errorPasswordDiferent,setErrorPasswordDiferent] = useState('')
    const[validName,setValidName] = useState(false)
    const[validPasswordEqual,setValidPasswordEqual] = useState(false)
    const[validation,setValidation] = useState(false)

    const onPressClear = () =>{
        setName('')
        setEmail('')
        setPassword('')
        setValidPassword('')
        setErrorEmail('')
        setErrorPassword('')
        setErrorPasswordDiferent('')
        setErrorName('')
    }

    const onPressRegister = () => {
        const emailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if(name.length >= 3){
            setValidName(true)
            setErrorName('')
        }else{
            Vibration.vibrate()
            setValidName(false)
            setErrorName('Invalid Name')
        }

        if(password != validPassword){
            Vibration.vibrate()
            setValidPasswordEqual(false)
            setErrorPasswordDiferent(`Passwords don't match`)
        }else{
            setValidPasswordEqual(true)
            setErrorPasswordDiferent('')
        }

        if(emailValid.test(email)){
            if ((password.length) < 8) {
                Vibration.vibrate()
                setErrorEmail('')
                setErrorPassword('Invalid Password')
                setValidation(false)
            }else{
                setErrorEmail('')
                setErrorPassword('')
                setValidation(true)
            }
        }else{
            if ((password.length) < 8 | (validPassword.length) < 8) {
                Vibration.vibrate()
                setErrorEmail('Invalid Email')
                setErrorPassword('Invalid Password')
                setValidation(false)
            }else{
                Vibration.vibrate()
                setErrorEmail('Invalid Email')
                setErrorPassword('')
                setValidation(false)
            }
        }

        if(validName && validation && validPasswordEqual){
            navigation.navigate('Home')
        }
    }

    return (
        <SafeAreaView style={{backgroundColor:'#24414f'}}>
            <View style={styles.body}>
                <Text style={styles.textRegister}>REGISTER</Text>
                <View style={styles.boxImage}>
                    <Image source={require('../image/rick.gif')} style={styles.image}/>
                </View>
                <View style={styles.boxInput}>
                    <Text style={styles.text}>Complete Name     <Text style={styles.textError}>{errorName}</Text></Text>
                    <TextInput
                    style={styles.input}
                    onChangeText={setName}
                    value={name}
                    />
                </View>
                <View style={styles.boxInput}>
                    <Text style={styles.text}>Email     <Text style={styles.textError}>{errorEmail}</Text></Text>
                    <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    />
                </View>
          
                <View style={styles.boxInput}>
                    <Text style={styles.text}>Password     <Text style={styles.textError}>{errorPassword}</Text></Text>
                    <TextInput
                    style={styles.input}
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry={true}
                    />
                </View>
                <View style={styles.boxInput}>
                    <Text style={styles.text}>Confirm Password  <Text style={styles.textError}>{errorPasswordDiferent}</Text></Text>
                    <TextInput
                    style={styles.input}
                    onChangeText={setValidPassword}
                    value={validPassword}
                    secureTextEntry={true}
                    />
                </View>   
                <View style={styles.boxButton}>
                    <TouchableOpacity style={styles.buttonRegister} onPress={onPressRegister}>
                        <Text style={styles.textButtonRegister}>Register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonClear} onPress={onPressClear}>
                        <Text style={styles.textButtonClear}>Clear</Text>
                    </TouchableOpacity>
                </View>      
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <View style={styles.buttonLogin}>
                        <Text style={styles.textButtonLogin}>Login</Text>
                    </View>
                </TouchableOpacity>    
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
        marginTop:-40,
        paddingBottom:30,
        textShadowColor: 'rgba(0, 0, 0, 0.8)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5
    },
    image:{
        height:120,
        marginBottom:20,
        resizeMode:'contain'
    },
    boxInput:{
        gap:2,
        marginBottom:8
    },
    input:{
        borderWidth:2,
        borderRadius:10,
        borderColor:'#24414f',
        backgroundColor:"#e8387e",
        height:40,
        width:300,
        padding:10,
        color:'#FFF'
    },
    text:{
        fontFamily:'Helvetica',
        fontWeight:'bold',
        fontSize:16,
        color:'#fff',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1.5, height: 1.5 },
        textShadowRadius: 5
    },
    boxButton:{
        flexDirection:'row',
        gap:15
    },
    buttonRegister:{
        backgroundColor:'#24414f',
        borderWidth:1.6,
        borderColor:"#dcf285",
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        width:120,
        height:34
    },
    buttonClear:{
        backgroundColor:'#9ad6d6',
        borderWidth:1.6,
        borderColor:"#24414f",
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        width:120,
        height:34,
    },
    buttonLogin:{
        backgroundColor:'#e8387e',
        borderWidth:1.6,
        borderColor:"#FFF",
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        width:120,
        height:34,
        marginTop:8
    },
    textButtonRegister:{
        fontWeight:'bold',
        fontSize:20,
        color:'#dcf285',
        textShadowColor: 'rgba(0, 0, 0, 0.6)',
        textShadowOffset: { width: 1.2, height: 1.2 },
        textShadowRadius: 5,
    },
    textButtonClear:{
        fontWeight:'bold',
        fontSize:20,
        color:'#24414f',
        textShadowColor: 'rgba(255, 255, 255, 0.6)',
        textShadowOffset: { width: 1.2, height: 1.2 },
        textShadowRadius: 5,
    },
    textButtonLogin:{
        fontWeight:'bold',
        fontSize:20,
        color:'#FFF',
        textShadowColor: 'rgba(0, 0, 0, 0.6)',
        textShadowOffset: { width: 1.2, height: 1.2 },
        textShadowRadius: 5,
    },
    textError:{
        color:'#F00',
        fontSize:12,
        textShadowColor: 'rgba(255, 255, 255, 0.3)',
        textShadowOffset: { width: 0.5, height: 0.5 },
        textShadowRadius: 5
    }
})

export default Register;