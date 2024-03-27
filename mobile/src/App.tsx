import * as React from 'react';
import Config from 'react-native-config';

import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar, Text} from 'react-native';

import palette from './assets/images/palette';
import {MainProvider} from './context/main-context';
import InitialScreen from './pages/InitialScreen';
import LoginScreen from './pages/LoginScreen';
import SurveyDashboardScreen from './pages/SurveyDashboardScreen';
import SurveyListScreen from './pages/SurveyListScreen';
import SurveyResponseScreen from './pages/SurveyResponseScreen';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const client = new ApolloClient({
    uri: Config.BASE_URL,
    cache: new InMemoryCache(),
  });

  return (
    <MainProvider>
      <ApolloProvider client={client}>
        <StatusBar barStyle="dark-content" backgroundColor={palette.white} />
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Initial" component={InitialScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />

            <Stack.Screen
              name="SurveyDashboard"
              component={SurveyDashboardScreen}
            />
            <Stack.Screen name="SurveyList" component={SurveyListScreen} />
            <Stack.Screen
              name="SurveyResponse"
              component={SurveyResponseScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
        <Text style={{textAlign: 'center', fontSize: 10}}>
          Developed in Avanade
        </Text>
      </ApolloProvider>
    </MainProvider>
  );
}

export default App;
