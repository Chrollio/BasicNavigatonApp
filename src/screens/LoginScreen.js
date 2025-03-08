import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { loginstyle } from "../styles/MainStyle"; 
import api from "../api";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert("Error", "All fields are required!", [{ text: "OK" }]);
      return;
    }

    try {
      const response = await api.post("/auth/login", { username, password });

      console.log("Request Body:", JSON.stringify({ username, password }, null, 2));
      console.log("Response:", JSON.stringify(response.data.token));

      Alert.alert("Success", "Login Successful!", [{ text: "OK" }]);
      navigation.navigate("HomePageScreen", { username });
    } catch (error) {
      console.error("Login error:", error);
      Alert.alert("Error", "Invalid username or password!", [{ text: "OK" }]);
    }
  };

  return (
    <View style={loginstyle.container}>
      <View style={loginstyle.innerContainer}>
        <Text style={loginstyle.title}>Login</Text>

        
        <TextInput
          value={username}
          style={loginstyle.textinput}
          onChangeText={setUsername}
          placeholder="Username"
          placeholderTextColor="black"
        />

        
        <TextInput
          value={password}
          style={loginstyle.textinput}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="black"
        />

        <TouchableOpacity style={loginstyle.button} onPress={handleLogin}>
          <Text style={loginstyle.buttonText}>Login</Text>
        </TouchableOpacity>

        <View style={{ marginTop: 20, alignItems: "center" }}>
          <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}> 
            <Text style={{ color: "black", fontWeight: "bold" }}>Register as User</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("RegisterAdminScreen")} style={{ marginTop: 10 }}> 
            <Text style={{ color: "black", fontWeight: "bold" }}>Register as Admin</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={() => navigation.navigate("HomePageScreen")} style={{ marginTop: 10 }}> 
            <Text style={{ color: "black", fontWeight: "bold" }}>Back to Home</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;