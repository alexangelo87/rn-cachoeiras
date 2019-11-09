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
        backgroundColor: '#1E88E5',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'center',
      },
    },
  },
);

export default createAppContainer(App);
