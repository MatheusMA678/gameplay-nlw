import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login } from "./screens/Login";

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
