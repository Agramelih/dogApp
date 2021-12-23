import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './src/screens/MainScreen';
import PersonInfoScreen from './src/screens/PersonInfoScreen';
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();

const App = () => {
  const [ personData, setPersonData ] = useState({});
  useEffect( () => {
    SplashScreen.hide();
  }, [])
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = {"main"}>
        <Stack.Screen 
          name = "main" 
          options = {{
            title: "Main"
          }}
        >
          { props => <MainScreen {...props} setPersonData = {setPersonData}/> }
        </Stack.Screen>
        <Stack.Screen 
          name = "personalInfo" 
          options = {{
            title: "Info"
          }}
        >
          { props => <PersonInfoScreen {...props} personData = {personData} /> }
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
