import React, {useState, useRef} from "react";
import {View, Text, TouchableOpacity, Alert, ActivityIndicator} from "react-native";
import PhoneInput from "react-native-phone-number-input";
import styles from "../styles/styles";

const API_BASE_URL = "https://sandbox.ignitecove.com";

const PaymentScreen = ({navigation}) => {
   const [phoneNumber, setPhoneNumber] = useState("");
   const [formattedValue, setFormattedValue] = useState("");
   const [loading, setLoading] = useState(false);
   const phoneInputRef = useRef(null);

   const handlePayment = async () => {
      const actualNumber = phoneInputRef.current?.getNumberAfterPossiblyEliminatingZero()?.formattedNumber;
      if (!phoneInputRef.current?.isValidNumber(phoneNumber) || !actualNumber) {
         Alert.alert("Invalid Phone Number", "Please enter a valid phone number.");
         return;
      }

      setLoading(true);
      try {
         const data = JSON.stringify({
            Amount: "1",
            PhoneNumber: actualNumber,
            FCMToken: "",
            AccountToSubscribe: "",
            loggedInUserPhone: "",
            planId: 0,
            referralCode: ""
         });
         const response = await fetch(`${API_BASE_URL}/v1/mps/lipa-na-mpesa`, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: data,
         });
         const result = await response.json();
         setLoading(false);
         if (response.ok) {
            navigation.navigate("Success");
         } else {
            Alert.alert("Payment Failed", result.message || "Something went wrong.");
         }
      } catch (error) {
         setLoading(false);
         Alert.alert("Error", "An error occurred while processing your payment.");
      }
   };

   return (
      <View style={styles.container}>
         <Text style={styles.title}>Enter Your Phone Number</Text>
         <PhoneInput
            ref={phoneInputRef}
            defaultValue={phoneNumber}
            defaultCode="US"
            layout="first"
            onChangeText={setPhoneNumber}
            onChangeFormattedText={setFormattedValue}
            withShadow
            autoFocus
         />
         <TouchableOpacity style={styles.button} onPress={handlePayment} disabled={loading}>
            {loading ? <ActivityIndicator color="#fff"/> : <Text style={styles.buttonText}>Initiate Payment</Text>}
         </TouchableOpacity>
      </View>
   );
};

export default PaymentScreen;
