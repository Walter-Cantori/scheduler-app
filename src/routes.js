import { createStackNavigator } from 'react-navigation';
import { colors } from './styles';

import Identify from './pages/Identify';
import Login from './pages/Login';
import Register from './pages/Register';
import Scheduler from './pages/Scheduler';
import MyAccount from './pages/MyAccount';

const Router = createStackNavigator(
  {
    Identify,
    Login,
    Register,
    Scheduler,
    MyAccount,
  },
  {
    initialRouteName: 'Identify',
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.purpleMain,
        borderBottomWidth: 0,
      },
      headerTintColor: colors.whiteTitles,
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
      },
    },
  },
);

export default Router;
