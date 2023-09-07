import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from "./src/components/screens/Home";
import LoginPage from "./src/components/screens/LoginPage";
import Characteres from "./src/components/screens/Characteres";
import Account from "./src/components/screens/Account";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle:{
          backgroundColor:'#24414f',
          borderTopColor:'transparent',
        },
        tabBarLabelStyle:{
          color:'#FFF'
        },
        
      }}
    >
      <Tab.Screen 
        name="HomePage"
        component={Home}   
        options={{
          headerShown:false,
          tabBarLabel: 'Home',
          tabBarIcon: () =>(
            <MaterialCommunityIcons name="home" color={'#FFF'} size={30} borderTopColor='#F00'/>
          ),
        }}
        />
        <Tab.Screen 
        name="Account"
        component={Account}   
        options={{
          headerShown:false,
          tabBarLabel: 'Account',
          tabBarIcon: () =>(
            <MaterialCommunityIcons name="account" color={'#FFF'} size={30} borderTopColor='#F00'/>
          ),
        }}
        />
        {/* <Tab.Screen 
        name="Characteres"
        component={Characteres}
        options={{
          headerShown:false,
          tabBarIcon: () =>(
            <MaterialCommunityIcons name="account" color={'#FFF'} size={30} />
          )
        }}/> */}
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ 
            headerShown:false,
            }
          }
        />
        <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={{ 
            headerShown: false
          }}
        />
        <Stack.Screen
        name="Characteres"
        component={Characteres}
        options={{
          headerTintColor:'#dcf285',
          headerStyle:{
            backgroundColor:'#4a85a1',
            borderBottomColor:'#dcf285',
            borderBottomWidth:1
          },
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
