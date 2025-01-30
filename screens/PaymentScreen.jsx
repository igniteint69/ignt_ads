import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import styles from "../styles/styles";

const PaymentScreen = ({ navigation }) => {
    const [phoneNumber, setPhoneNumber] = useState("");

    const handlePayment = () => {
        if (phoneNumber.length < 10) {
            Alert.alert("Invalid Phone Number", "Please enter a valid phone number.");
            return;
        }
        navigation.navigate("Success");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Enter Your Phone Number</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter phone number"
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
            />
            <TouchableOpacity style={styles.button} onPress={handlePayment}>
                <Text style={styles.buttonText}>Initiate Payment</Text>
            </TouchableOpacity>
        </View>
    );
};

export default PaymentScreen;
