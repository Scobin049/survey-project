import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {StatusBar, Text} from 'react-native';
import {MainProvider} from './context/main-context';
import InitialScreen from './pages/InitialScreen';
import LoginScreen from './pages/LoginScreen';
import SurveyDashboardScreen from './pages/SurveyDashboardScreen';
import SurveyListScreen from './pages/SurveyListScreen';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <MainProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Initial" component={InitialScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />

          <Stack.Screen
            name="SurveyDashboard"
            component={SurveyDashboardScreen}
          />
          <Stack.Screen name="SurveyList" component={SurveyListScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <Text style={{textAlign: 'center', fontSize: 10}}>
        Developed by Avanade
      </Text>
    </MainProvider>
  );
}

export default App;
