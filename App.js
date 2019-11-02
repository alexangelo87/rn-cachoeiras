import * as React from 'react';
import Details from './views/details';
import Home from './views/home';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const App = createStackNavigator(
  {
    Home: Home,
    Details: Details,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      header: null,
    },
  },
);

export default createAppContainer(App);
