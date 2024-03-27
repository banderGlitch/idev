import React from "react";
import navigationStrings from "./navigationStrings";
import * as Screen from '../screen';
export default function (Stack) {
    return (
        <>
         <Stack.Screen
                name={navigationStrings.INITIAL_SCREEN}
                component={Screen.InitialScreen}
                options={{ headerShown: false }}
            />
         <Stack.Screen
                name={navigationStrings.LOGIN}
                component={Screen.Login}
                options={{ headerShown: false }}
            />
          <Stack.Screen
                name={navigationStrings.SIGNUP}
                component={Screen.SignUp}
                options={{ headerShown: false }}
            />

        </>

    )
}