import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import { createStackNavigator } from "@react-navigation/stack";

import EnterprisesList from '../pages/EnterprisesList';
import Favorites from '../pages/Favorites';
import EnterpriseDetails from '../pages/EnterpriseDetails';
import Search from '../pages/Search';
import { Platform } from "react-native";

const App = createBottomTabNavigator();
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
    </Stack.Navigator>
)
}

const AppRoutes: React.FC = () =>(
  <App.Navigator
    tabBarOptions={{
      activeTintColor: "#03fc30",
      inactiveTintColor: "#000",
      labelPosition: 'beside-icon',
      style: {
          paddingVertical: Platform.OS === "android" ? 0 : 10 ,
          height: 88
      }
    }}
  >
    <App.Screen name="Enterprises" options={{
        tabBarIcon: ({ color, focused }) => (
            <Icon name="briefcase" size={25} color={color} />
        ),
        title: "Empresas",
    }}
    component={EnterprisesStack} />
    <App.Screen name="Search"
      options={{
        tabBarIcon: ({ color, focused }) => (
            <Icon name="search" size={25} color={color} />
        ),
        title: "Pesquisar"
      }}
    component={Search} />
    <App.Screen name="Favorites"
      options={{
        tabBarIcon: ({ color, focused }) => (
            <Icon name="heart" size={25} color={color} />
        ),
        title: "Favoritos"
      }}
    component={Favorites} />
  </App.Navigator>
)

export default AppRoutes;
