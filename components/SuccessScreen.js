import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SuccessScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Success Image */}
      <Image source={require("../assets/success.png")} style={styles.image} />
      
      {/* Success Message */}
      <Text style={styles.title}>Payment Success, Yayy!</Text>
      <Text style={styles.subtitle}>We will send order details and invoice to your contact no. and registered email</Text>
      
      {/* Check Details Link */}
      <TouchableOpacity>
        <Text style={styles.checkDetails}>Check Details →</Text>
      </TouchableOpacity>
      
      {/* Download Invoice Button */}
      <TouchableOpacity style={styles.downloadButton}>
        <Text style={styles.downloadText}>Download Invoice</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff", alignItems: "center", justifyContent: "center" },
  backButton: { position: "absolute", top: 40, left: 20 },
  image: { width: 200, height: 200, marginBottom: 20 },
  title: { fontSize: 22, fontWeight: "bold", textAlign: "center" },
  subtitle: { color: "gray", textAlign: "center", marginVertical: 10 },
  checkDetails: { color: "blue", fontSize: 16, marginBottom: 20 },
  downloadButton: { backgroundColor: "blue", padding: 15, borderRadius: 10, alignItems: "center", width: "80%" },
  downloadText: { color: "white", fontSize: 16, fontWeight: "bold" }
});

export default SuccessScreen;
