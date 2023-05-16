import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Notes from './screens/Notes';

const Stacked = createNativeStackNavigator();

export default function App() {

  return (
      <NavigationContainer>
          <Stacked.Navigator>
              <Stacked.Screen name='Home' component={Home}/>
              <Stacked.Screen name='Notes' component={Notes}/>
          </Stacked.Navigator>
      </NavigationContainer>

  );
}

