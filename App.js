import * as React from 'react';
import { Text, Button, Alert } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './Screens/HomeScreen';
import BadgesScreen from './Screens/BadgesScreen';
import ShareScreen from './Screens/ShareScreen';
import AccountScreen from './Screens/AccountScreen';
import AboutScreen from './Screens/AboutScreen';

const Tab = createBottomTabNavigator();
const navColors = {
	
}
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(254, 202, 202)',
    background: 'rgb(254, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};
export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
    	<Tab.Navigator 
			screenOptions={({ route }) => ({
				headerRight: () => {
					return (
						<Text onPress={() => Alert.alert('lkjlkjlkl')}>
							...
						</Text>
					)
				},

				tabBarIcon: ({ color, size }) => {
					const icons = {
						Home: 'home',
						Badges: 'trophy-outline',
						Account:'person-outline',
						Share: 'share-social-outline',
						About: 'information-circle-outline'
					};
				
					return (
						<Ionicons
						name={icons[route.name]}
						color={color}
						size={size}
						/>
					);
				},
			})}
		  ><Tab.Screen name="Home" component={HomeScreen}  options={{ title: 'Home', headerStyle: {backgroundColor: '#f87171',}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold',}, }}/>
			<Tab.Screen name="Badges" component={BadgesScreen}  options={{ title: 'Conquistas', headerStyle: {backgroundColor: '#f87171',}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold',}, }}/>
			<Tab.Screen name="Account" component={AccountScreen}  options={{ title: 'Conta', headerStyle: {backgroundColor: '#f87171',}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold',}, }}/>
			<Tab.Screen name="Share" component={ShareScreen}  options={{ title: 'Compartilhe', headerStyle: {backgroundColor: '#f87171',}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold',}, }}/>
			<Tab.Screen name="About" component={AboutScreen}  options={{ title: 'Sobre', headerStyle: {backgroundColor: '#f87171',}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold',}, }}/>
      	</Tab.Navigator>
	</NavigationContainer>
  );
}