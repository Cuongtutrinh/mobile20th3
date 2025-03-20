import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CheckoutScreen from "./components/CheckoutScreen";
import SuccessScreen from "./components/SuccessScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Checkout">
        <Stack.Screen 
          name="Checkout" 
          component={CheckoutScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Success" 
          component={SuccessScreen} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
