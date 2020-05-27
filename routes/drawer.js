import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

// stacks
//import HomeStack from './homeStack';
//import AboutStack from './aboutStack';
import HomeStack from './homeStack';
import AboutStack from './aboutStack';
import PrincipalStack from './principalStack';
import StaffStack from './staffStack';
import StudentStack from './studentStack';
// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
  About: {
    screen: AboutStack,
  },
  Principal: {
    screen: PrincipalStack,
  },
  Staff: {
    screen: StaffStack,
  },
  Student: {
    screen: StudentStack,
  },

});


export default createAppContainer(RootDrawerNavigator);
