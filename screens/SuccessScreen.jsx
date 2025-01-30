import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/styles";

const SuccessScreen = ({ navigation }) => {
    const handleGoHome = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: "Landing" }],
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Payment Initiated Successfully!</Text>
            <TouchableOpacity style={styles.button} onPress={handleGoHome}>
                <Text style={styles.buttonText}>Go Back Home</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SuccessScreen;
