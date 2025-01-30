import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/styles";

const LandingScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Payment")}>
                <Text style={styles.buttonText}>Pay Now</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LandingScreen;
