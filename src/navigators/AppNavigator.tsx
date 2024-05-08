import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  BottomTabParamList,
  DrawerParamList,
  NAVIGATION,
} from '../constants/navigation';
import AllUsers from '../screens/all_users';
import Home from '../screens/home';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import SettingScreen from '../screens/settings';
import {ICONS} from '../constants/icons';
import Todo from '../screens/Todo';
function CustomDrawerContent(props: Readonly<DrawerContentComponentProps>) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close"
        onPress={() => {
          props.navigation.closeDrawer();
        }}
      />
    </DrawerContentScrollView>
  );
}
const Drawer = createDrawerNavigator<DrawerParamList>();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => CustomDrawerContent(props)}
      screenOptions={{
       
        drawerActiveTintColor: 'orange',
        // drawerPosition: 'right',
        drawerType: 'front',
      }}>
      <Drawer.Screen name={NAVIGATION.TABS.DRAWER.HOME} component={Home} />
      <Drawer.Screen
        name={NAVIGATION.TABS.DRAWER.SETTINGS}
        component={SettingScreen}
      />
    </Drawer.Navigator>
  );
};

const Tab = createBottomTabNavigator<BottomTabParamList>();
const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, tabBarActiveTintColor: 'orange'}}
      backBehavior="firstRoute">
      <Tab.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{
          title: 'Home',
          tabBarIcon: () => ICONS.HOME({width: 18, height: 18}),
        }}
      />
      <Tab.Screen name="Todo" component={Todo}/>
      <Tab.Screen
        name={NAVIGATION.TABS.USERS}
        component={AllUsers}
        options={{
          tabBarIcon: () =>
            ICONS.USERS({
              width: 20,
              height: 20,
              color: 'white',
            }),
          // headerShown: true,
        }}
      />
    </Tab.Navigator>
  );
};
export default AppNavigator;
