import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

// stacks
//import HomeStack from './homeStack';
//import AboutStack from './aboutStack';
import HomeStack from './homeStack';
import AboutStack from './aboutStack';

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
  About: {
    screen: AboutStack,
  },
});


export default createAppContainer(RootDrawerNavigator);
