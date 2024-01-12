import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider, useAuth } from './app/contexts/AuthContext';
import { CreateUserScreen, DiscoverScreen, HomeScreen, LoginScreen, ProfileScreen } from './app/screens';
import CustomTabBar from './app/components/CustomTabbar';



const AuthStack = createNativeStackNavigator();
const AppTab = createBottomTabNavigator();
const AuthStackScreen = () => ( // loginscreende props gönderemeye çaklışrıken tiğpini degiştirdigim icin hat alıyorum
  <AuthStack.Navigator>
    <AuthStack.Screen name="LoginScreen" component={LoginScreen} /> 
     <AuthStack.Screen name="CreateUserScreen" component={CreateUserScreen} />
    {/* Buraya diğer kimlik doğrulama ekranlarınızı ekleyebilirsiniz */}
  </AuthStack.Navigator>
);

const AppStackScreen = () => (
  <AppTab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
    <AppTab.Screen  name="Home" 
         component={HomeScreen}
         options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={24} color="black" />
          ),
        }} />

    <AppTab.Screen name="Profile" component={ProfileScreen} />
    <AppTab.Screen name="Discover" component={DiscoverScreen} />
    {/* Buraya uygulamanın diğer ana ekranlarını ekleyebilirsiniz */}
  </AppTab.Navigator>
);
const RootNavigator: React.FC = () => {
  const { authState } = useAuth();

  return authState?.authenticated ? <AppStackScreen /> : <AuthStackScreen />;
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
};


export default App;
