import React, {useEffect, useState} from 'react';

//React navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//async storage
import AsyncStorage from '@react-native-async-storage/async-storage';

//Screens
import LogIn from '../src/screens/LogIn';
import SignUp from '../src/screens/SignUp';
import Welcome from '../src/screens/Welcome';
import EmailVerification from '../src/screens/EmailVerification';

import {Provider} from 'react-redux';
import store from '../src/reduxtoolkit/UserStore';

const Stack = createStackNavigator();

const RootStack = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const value = await AsyncStorage.getItem('pmAsyncStoreData');
        console.log('AsyncStorage Value--->', value);
        if (value !== null) {
          console.log('AsyncStorage Value--->', value);
          setIsSignedIn(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    checkUser();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: 'transparent',
            },
            headerTintColor: 'transparent',
            headerTransparent: true,
            headerTitle: '',
            headerLeftContainerStyle: {
              paddingLeft: 5,
            },
          }}
          // initialRouteName="LogIn"
        >
          {isSignedIn ? (
            <>
              <Stack.Screen
                options={{headerTintColor: 'green'}}
                name="Welcome"
                component={Welcome}
              />
              <Stack.Screen
                options={{headerTintColor: 'green'}}
                name="EmailVerification"
                component={EmailVerification}
              />
            </>
          ) : (
            <>
              <Stack.Screen name="LogIn" component={LogIn} />
              <Stack.Screen name="SignUp" component={SignUp} />
              <Stack.Screen
                options={{headerTintColor: 'green'}}
                name="Welcome"
                component={Welcome}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default RootStack;
