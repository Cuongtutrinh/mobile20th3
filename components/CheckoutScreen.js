import React, { useState } from "react";
import { 
  View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, 
  StatusBar, Keyboard, TouchableWithoutFeedback 
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CheckoutScreen = ({ navigation }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const formatCardNumber = (text) => {
    const cleaned = text.replace(/\s+/g, '');
    return cleaned.replace(/(\d{4})/g, '$1 ').trim();
  };

  const handleExpiryDateChange = (text) => {
    const cleaned = text.replace(/\D/g, '');
    if (cleaned.length <= 6) {
      if (cleaned.length >= 2) {
        setExpiryDate(`${cleaned.substring(0, 2)}/${cleaned.substring(2, 6)}`);
      } else {
        setExpiryDate(cleaned);
      }
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="chevron-back" size={28} color="#4CD964" />
          </TouchableOpacity>

          <View style={styles.headerRow}>
            <View style={styles.titleWrapper}>
              <Text style={styles.title}>Checkout</Text>
              <Text style={styles.cardIcon}>💳</Text>
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>₹ 1,527</Text>
              <Text style={styles.gst}>Including GST (18%)</Text>
            </View>
          </View>

          <View style={styles.paymentMethods}>
            <TouchableOpacity style={styles.activePaymentButton}>
              <Ionicons name="card-outline" size={18} color="white" />
              <Text style={styles.activePaymentText}>Credit card</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.inactivePaymentButton}>
              <Ionicons name="logo-apple" size={18} color="black" />
              <Text style={styles.inactivePaymentText}>Apple Pay</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.label}>Card number</Text>
          <TextInput 
            style={styles.input} 
            keyboardType="numeric"
            value={cardNumber}
            onChangeText={(text) => setCardNumber(formatCardNumber(text))}
            placeholder="1234 5678 9012 3456"
            maxLength={19} 
          />

          <Text style={styles.label}>Cardholder name</Text>
          <TextInput 
            style={styles.input} 
            value={cardholderName}
            onChangeText={setCardholderName}
            placeholder="Full name on card"
          />

          <View style={styles.row}>
            <View style={styles.halfColumn}>
              <Text style={styles.label}>Expiry date</Text>
              <TextInput 
                style={styles.input} 
                keyboardType="numeric" 
                value={expiryDate}
                onChangeText={handleExpiryDateChange}
                placeholder="MM/YYYY"
                maxLength={7}
              />
            </View>
            <View style={styles.halfColumn}>
              <Text style={styles.label}>CVV / CVC</Text>
              <TextInput 
                style={styles.input} 
                keyboardType="numeric" 
                value={cvv}
                onChangeText={setCvv}
                placeholder="123"
                maxLength={3}
              />
            </View>
          </View>

          <View style={styles.spacer} />
          <Text style={styles.noteText}>We will send you an order details to your email after the successful payment</Text>

          <TouchableOpacity style={styles.payButton} onPress={() => navigation.navigate("Success")}>
            <Ionicons name="lock-closed" size={18} color="white" />
            <Text style={styles.payButtonText}>Pay for the order</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF",
    paddingBottom: 24
  },
  backButton: {
    marginTop: 10,
    marginBottom: 20,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 30
  },
  titleWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    color: "#000000"
  },
  priceContainer: {
    alignItems: "flex-end",
  },
  price: {
    fontSize: 20,
    color: "#4CD964",
    fontWeight: "600"
  },
  gst: {
    fontSize: 14,
    color: "#8E8E93"
  },
  paymentMethods: {
    flexDirection: "row",
    marginBottom: 30,
    height: 50
  },
  activePaymentButton: {
    flex: 1,
    backgroundColor: "#4CD964",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
    height: 50
  },
  activePaymentText: {
    color: "white",
    marginLeft: 6,
    fontWeight: "500",
    fontSize: 16
  },
  inactivePaymentButton: {
    flex: 1,
    backgroundColor: "#F2F2F7",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
    height: 50
  },
  inactivePaymentText: {
    color: "#000000",
    marginLeft: 6,
    fontWeight: "500",
    fontSize: 16
  },
  label: {
    marginBottom: 8,
    fontWeight: "500",
    fontSize: 14,
    color: "#1C1C1E"
  },
  input: {
    borderWidth: 1,
    borderColor: "#E5E5EA",
    borderRadius: 12,
    height: 56,
    paddingHorizontal: 16,
    marginBottom: 24,
    fontSize: 16,
    color: "#1C1C1E",
    backgroundColor: "#F9F9F9"
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  halfColumn: {
    width: "48%"
  },
  spacer: {
    flex: 1,
    minHeight: 20
  },
  noteText: {
    fontSize: 12,
    color: "#8E8E93",
    textAlign: "center",
    marginBottom: 16
  },
  payButton: {
    flexDirection: "row",
    backgroundColor: "#4CD964",
    borderRadius: 12,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8
  },
  payButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 8
  }
});

export default CheckoutScreen;
