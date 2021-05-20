import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import { createStackNavigator } from "@react-navigation/stack";

import EnterprisesList from '../pages/EnterprisesList';
import Favorites from '../pages/Favorites';
import EnterpriseDetails from '../pages/EnterpriseDetails';
import Search from '../pages/Search';

const App = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function EnterprisesStack(){
  return (
    <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="EnterprisesList" component={EnterprisesList}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="EnterpriseDetails" component={EnterpriseDetails}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Search" component={Search}
        />
    </Stack.Navigator>
)
}

const AppRoutes: React.FC = () =>(
  <App.Navigator
    // barStyle={}
  >
    <App.Screen name="Enterprises" options={{
        tabBarIcon: ({ color, focused }) => (
            <Icon name="home" size={25} color={color} />
        ),
        title: "Empresas",
    }}
    component={EnterprisesStack} />
    <App.Screen name="Favorites"
    options={{
        tabBarIcon: ({ color, focused }) => (
            <Icon name="explore" size={25} color={color} />
        ),
        title: "Favoritos"
      }}
    component={Favorites} />
  </App.Navigator>
)

export default AppRoutes;
