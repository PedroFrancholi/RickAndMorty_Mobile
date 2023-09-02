import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/components/screens/Home";
import LoginPage from "./src/components/screens/LoginPage";
import { SafeAreaView } from "react-native";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// function StackNavigator() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Login" component={LoginPage} />
//     </Stack.Navigator>
//   );
// }

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home"
        component={Home} 
        options={{ 
          headerStyle: { 
            backgroundColor: "#4a85a1"
          } 
          
        }}
        />
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
            headerShown:false
            // headerStyle: { backgroundColor: "#4a85a1",
            // borderBottomWidth: 2, 
            // borderBottomColor: "#dcf285",
            }
          }
        />
        <Stack.Screen
          name="Teste"
          component={TabNavigator}
          options={{ 
            headerShown: false 
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
