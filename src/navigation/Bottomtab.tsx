/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import Profile from '../screens/Profile/Profile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text, View} from 'react-native';
import colors from '../constants/colors';
import OnBoardingScreen from '../screens/OnboardingScreen/OnBoardingScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Route, getFocusedRouteNameFromRoute} from '@react-navigation/native';
import AddTask from '../screens/AddTask/AddTask';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        options={({route}) => ({
          tabBarStyle: {
            width: '95%',
            height: '10%',
            borderEndEndRadius: 20,
            borderStartEndRadius: 20,
            backgroundColor: colors.black,
            display: getRouteName(route),
            marginBottom: 10,
            borderRadius: 30,
            marginLeft: 5,
          },
          tabBarLabel: 'Home',
          tabBarTestID: 'Home-tab',
          activeTintColor: 'black', // Color for the selected tab
          inactiveTintColor: 'white', // Color for inactive tabs
          tabBarIcon: ({focused}) => {
            let iconComponent;

            if (String(route.name) === 'Home' && focused) {
              iconComponent = (
                <View
                  style={{
                    borderRadius: 20,
                    height: 40,
                    width: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <MaterialCommunityIcons
                    color={focused ? 'white' : 'black'}
                    name="home"
                    size={30}
                  />
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'white',
                      width: '80%',
                      height: 2,
                    }}>
                    <Text style={{color: 'white'}}>-</Text>
                  </View>
                </View>
              );
            } else {
              iconComponent = (
                <View
                  style={{
                    borderRadius: 20,
                    height: 40,
                    width: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <MaterialCommunityIcons
                    color={'white'}
                    name="home"
                    size={30}
                  />
                </View>
              );
            }

            return iconComponent;
          },
        })}
        name="Home"
        component={HomeStack}
      />
      <Tab.Screen
        options={({route}) => ({
          tabBarStyle: {
            width: '95%',
            height: '10%',
            borderEndEndRadius: 20,
            borderStartEndRadius: 20,
            backgroundColor: colors.black,
            display: getRouteName(route),
            marginBottom: 10,
            borderRadius: 30,
            marginLeft: 5,
          },
          tabBarLabel: 'AddTask',
          tabBarTestID: 'AddTask-tab',
          activeTintColor: 'black', // Color for the selected tab
          inactiveTintColor: 'white', // Color for inactive tabs
          tabBarIcon: ({focused}) => {
            let iconComponent;

            if (String(route.name) === 'AddTask' && focused) {
              iconComponent = (
                <View
                  style={{
                    borderRadius: 20,
                    height: 40,
                    width: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <MaterialCommunityIcons
                    color={focused ? 'white' : 'black'}
                    name="plus"
                    size={35}
                  />
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'white',
                      width: '80%',
                      height: 2,
                    }}>
                    <Text style={{color: 'white'}}>-</Text>
                  </View>
                </View>
              );
            } else {
              iconComponent = (
                <View
                  style={{
                    borderRadius: 20,
                    height: 40,
                    width: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <MaterialCommunityIcons
                    color={'white'}
                    name="plus"
                    size={35}
                  />
                </View>
              );
            }

            return iconComponent;
          },
        })}
        name="AddTask"
        component={AddTask}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={({route}) => ({
          tabBarStyle: {
            width: '95%',
            height: '10%',
            borderEndEndRadius: 20,
            borderStartEndRadius: 20,
            backgroundColor: colors.black,
            display: getRouteName(route),
            marginBottom: 10,
            borderRadius: 30,
            marginLeft: 5,
          },
          tabBarLabel: 'Profile',
          tabBarTestID: 'Profile-tab',
          activeTintColor: 'black', // Color for the selected tab
          inactiveTintColor: 'white', // Color for inactive tabs
          tabBarIcon: ({focused}) => {
            let iconComponent;

            if (String(route.name) === 'Profile' && focused) {
              iconComponent = (
                <View
                  style={{
                    borderRadius: 20,
                    height: 40,
                    width: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <MaterialCommunityIcons
                    color={focused ? 'white' : 'black'}
                    name="account"
                    size={30}
                  />
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'white',
                      width: '80%',
                      height: 2,
                    }}>
                    <Text style={{color: 'white'}}>-</Text>
                  </View>
                </View>
              );
            } else {
              iconComponent = (
                <View
                  style={{
                    borderRadius: 20,
                    height: 40,
                    width: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <MaterialCommunityIcons
                    color={'white'}
                    name="account"
                    size={30}
                  />
                </View>
              );
            }
            return iconComponent;
          },
        })}
      />
    </Tab.Navigator>
  );
};
const getRouteName = (route: Partial<Route<string>>) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  if (routeName?.includes('OnBoardingScreen')) {
    return 'none';
  }
  return 'flex';
};

export default MyTabs;
