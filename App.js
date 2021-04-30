/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashContainer from './src/splash/SplashContainer';
import SongsListContainer from './src/songlist/SongsListContainer';
import SongDetailsContainer from './src/songdetail/SongDetailsContainer';
const Stack = createStackNavigator();

const App: () => Node = () => {
  function HomeScreen() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name="SplashContainer" component={SplashContainer} />
        <Stack.Screen
          name="SongsListContainer"
          component={SongsListContainer}
        />
        <Stack.Screen
          name="SongDetailsContainer"
          component={SongDetailsContainer}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
