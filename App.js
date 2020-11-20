import 'react-native-gesture-handler';
import React from 'react';

import HomeScreen from './route/home/Home';
import Introduct from './route/Intro/Introduction';
import AdvanceCourse from './route/advanced course/advanced';
import AboutScreen from './route/about/About';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Basic Network Course" component={Introduct} />
        <Drawer.Screen
          name="Advanced Network Course"
          component={AdvanceCourse}
        />
        <Drawer.Screen name="About" component={AboutScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
