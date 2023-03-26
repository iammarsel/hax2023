import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tinder from './components/Tinder';
import Favorites from './components/Favorites';
import GetIngredientsList from './components/GetIngredientsList';
import Home from './components/Home';
import { MyProvider } from './MyContext';
import GetIngredients from './components/GetIngredients';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <MyProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="GetIngredients"
          component={GetIngredients}
          options={{
            headerShown: false,
            gestureEnabled: false
          }}
        />

      <Stack.Screen
          name="GetIngredientsList"
          component={GetIngredientsList}
          options={{

            headerShown: false,
            gestureEnabled: true,
            title: 'GetIngredientsList',
            headerStyle: {
              backgroundColor: '#03c2fc',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen
          name="Tinder"
          component={Tinder}
          options={{
            title: 'Tinder',
            headerStyle: {
              backgroundColor: '#03c2fc',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            gestureEnabled: false
          }}
        />

        <Stack.Screen
          name="Favorites"
          component={Favorites}
          options={{
            title: 'Favorites',
            headerStyle: {
              backgroundColor: '#03c2fc',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerShown: false,
            gestureEnabled: false
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
    </MyProvider>
  );
}
