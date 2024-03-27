import React from "react";
import navigationStrings from "./navigationStrings";
import * as Screens from '../screen';
import TabRoutes from './TabRoutes';

export default function (Stack) {
    return (
        <>

            <Stack.Screen
                name={navigationStrings.TAB_ROUTES}
                component={TabRoutes}
                options={{ headerShown: false }}

            />
            <Stack.Screen
                name={navigationStrings.HOME}
                component={Screens.Home}
                options={{ headerShown: false }}

            />
            <Stack.Screen
                name={navigationStrings.SEARCH}
                component={Screens.Search}
                options={{ headerShown: false }}

            />

            <Stack.Screen
                name={navigationStrings.CREATE_POST}
                component={Screens.CreatePost}
                options={{ headerShown: false }}

            />
        </>
    );
}