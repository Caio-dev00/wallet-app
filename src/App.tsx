import 'react-native-gesture-handler';
import React, {useCallback} from "react";
import * as SplashScreen from 'expo-splash-screen';
import { View, Text } from "react-native";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_800ExtraBold
} from "@expo-google-fonts/poppins";

import { DMSans_400Regular } from "@expo-google-fonts/dm-sans";
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display";
import COLORS from "../src/styles/theme";
import { StatusBar } from "expo-status-bar";

import { Login } from "./screens/Login";

SplashScreen.preventAutoHideAsync();

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    DMSans_400Regular,
    DMSerifDisplay_400Regular
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if(!fontsLoaded){
    return null;
  }

  return (
    <ThemeProvider theme={COLORS}>
      <StatusBar hidden/>
      <View onLayout={onLayoutRootView}>
        <Login/>
      </View>
    </ThemeProvider>
  )
}

export { App };
