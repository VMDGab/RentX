import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const {Navigator, Screen} = createStackNavigator();

import { CarDetails } from '../pages/CarDetails';
import { Home } from '../pages/Home';
import { Scheduling } from '../pages/Scheduling';
import { Confirmation } from '../pages/Confirmation';
import { SchedulingDetails } from '../pages/SchedulingDetails';
import { MyCars } from '../pages/MyCars';
import { Splash } from '../pages/Splash';
import {SignUpFirstStep} from '../pages/SignUp/SignUpFirstStep';
import {SignUpSecondStep} from '../pages/SignUp/SignUpSecondStep';
import { SignIn } from '../pages/SignIn';

export function StackRoutes() {
  return (
    <Navigator initialRouteName='Splash'>
      <Screen name="Splash" component={Splash} options={{headerShown: false}} />

      <Screen name="SignIn" component={SignIn} options={{headerShown: false}} /> 

      <Screen name="SignUpFirstStep" component={SignUpFirstStep} options={{headerShown: false}} />

      <Screen name="SignUpSecondStep" component={SignUpSecondStep} options={{headerShown: false}} />
      
      <Screen name="Home" component={Home} options={{headerShown: false, gestureEnabled: false}} />

      <Screen name="CarDetails" component={CarDetails} options={{headerShown: false}} />
      
      <Screen name="Scheduling" component={Scheduling} options={{headerShown: false}}/>
     
      <Screen name="Confirmation" component={Confirmation} options={{headerShown: false}} />

      <Screen name="SchedulingDetails" component={SchedulingDetails} options={{headerShown: false}} />

       <Screen name="MyCars" component={MyCars} options={{headerShown: false}} />

    </Navigator>
  );
}