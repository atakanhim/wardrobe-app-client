import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import React, { useCallback } from 'react';
import { Entypo } from '@expo/vector-icons';
import { AuthProvider, useAuth } from './app/contexts/AuthContext';
import { CreateUserScreen, DiscoverScreen, HomeScreen, LoginScreen, ProfileScreen } from './app/screens';
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen"
import { CustomTabBar } from './app/components';
import RootNavigator from './navigate';


const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/SourceSansPro-Regular.ttf"),
    semibold: require("./assets/fonts/SourceSansPro-Semibold.ttf"),

  });

  const onLayoutRootView = useCallback(async () => {
    if(fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if(!fontsLoaded) {
    return null;
  }


  return (

    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
};


export default App;
