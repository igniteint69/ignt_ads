import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LandingScreen from "../screens/LandingScreen";
import PaymentScreen from "../screens/PaymentScreen";
import SuccessScreen from "../screens/SuccessScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: "#f0f4f4" }, headerTintColor: "#0c0c0c" }}>
            <Stack.Screen name="Landing" component={LandingScreen} options={{ title: "Home" }} />
            <Stack.Screen name="Payment" component={PaymentScreen} options={{ title: "Payment" }} />
            <Stack.Screen name="Success" component={SuccessScreen} options={{ title: "Success" }} />
        </Stack.Navigator>
    );
};

export default StackNavigator;
