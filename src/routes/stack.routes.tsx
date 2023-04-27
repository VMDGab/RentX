import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const {Navigator, Screen} = createStackNavigator();

import { CarDetails } from '../pages/CarDetails';
import { Home } from '../pages/Home';
import { Scheduling } from '../pages/Scheduling';
import { SchedulingComplete } from '../pages/SchedulingComplete';
import { SchedulingDetails } from '../pages/SchedulingDetails';

export function StackRoutes() {
  return (
    <Navigator>
 <Screen name="Scheduling" component={Scheduling} options={{headerShown: false}}/>

      <Screen name="Home" component={Home} options={{headerShown: false}} />

      <Screen name="CarDetails" component={CarDetails} options={{headerShown: false}} />

     
      <Screen name="SchedulingComplete" component={SchedulingComplete} options={{headerShown: false}} />

      <Screen name="SchedulingDetails" component={SchedulingDetails} options={{headerShown: false}} />

    </Navigator>
  );
}