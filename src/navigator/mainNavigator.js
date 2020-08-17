import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps91305Navigator from '../features/Maps91305/navigator';
import Add-Item91304Navigator from '../features/Add-Item91304/navigator';
import Maps91300Navigator from '../features/Maps91300/navigator';
import UserProfile91296Navigator from '../features/UserProfile91296/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps91305: { screen: Maps91305Navigator },
Add-Item91304: { screen: Add-Item91304Navigator },
Maps91300: { screen: Maps91300Navigator },
UserProfile91296: { screen: UserProfile91296Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
