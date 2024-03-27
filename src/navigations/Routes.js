import * as React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { useSelector} from 'react-redux'


const Stack = createNativeStackNavigator();

export default function Routes() {
    const userData = useSelector(state => state.auth.userData)

    console.log("userData", userData)


    return (
        <NavigationContainer fallback={<Text>Loading......</Text>}>
            <Stack.Navigator> 
                {userData?.isLogin ? MainStack(Stack) : AuthStack(Stack)}
            </Stack.Navigator>
        </NavigationContainer>
    )
}