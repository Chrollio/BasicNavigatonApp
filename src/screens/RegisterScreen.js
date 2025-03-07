import React, { useState } from "react";
import { Text, TextInput, View, Alert, TouchableOpacity, Image } from "react-native";
import { regdesignstyle } from "../styles/Design"; // Your provided styles

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');

  const clearFields = () => {
    setUsername('');
    setPassword('');
    setFirstname('');
    setLastname('');
    setEmail('');
  };

  const handleRegister = () => {
    if (!username.trim() || !password.trim() || !firstname.trim() || !lastname.trim() || !email.trim()) {
      Alert.alert("Form Incomplete", "All fields are required.");
      return;
    }

    Alert.alert(
      "Registration Complete",
      `Username: ${username}\nFirst Name: ${firstname}\nLast Name: ${lastname}\nEmail: ${email}`,
      [{ text: "OK", onPress: clearFields }]
    );
  };

  return (
    <View style={regdesignstyle.container}>
      <View style={regdesignstyle.box}>
        <View style={regdesignstyle.introContainer}>
        <Image 
           source={require('../assets/smiley.jpg')}   // Replace with your image URL or local image
          style={regdesignstyle.logo} 
        />

        <Text style={regdesignstyle.title}>Registration</Text>
        </View>
         {/* First Name & Last Name Side by Side */}
         <View style={regdesignstyle.rowContainer}>
          <TextInput
            value={firstname}
            style={[regdesignstyle.input, regdesignstyle.halfInput, regdesignstyle.firstInput]}
            placeholder="First Name"
            placeholderTextColor="black"
            onChangeText={setFirstname}
          />

          <TextInput
            value={lastname}
            style={[regdesignstyle.input, regdesignstyle.halfInput]}
            placeholder="Last Name"
            placeholderTextColor="black"
            onChangeText={setLastname}
          />
        </View>

        <TextInput
          value={username}
          style={regdesignstyle.input}
          placeholder="Username"
          placeholderTextColor="black"
          onChangeText={setUsername}
        />

        <TextInput
          value={password}
          style={regdesignstyle.input}
          placeholder="Password"
          placeholderTextColor="black"
          secureTextEntry
          onChangeText={setPassword}
        />

        <TextInput
          value={email}
          style={regdesignstyle.input}
          placeholder="Email"
          placeholderTextColor="black"
          keyboardType="email-address"
          onChangeText={setEmail}
        />

        <TouchableOpacity style={regdesignstyle.button} onPress={handleRegister}>
          <Text style={regdesignstyle.buttonText}>Register</Text>
        </TouchableOpacity>

        <View style={regdesignstyle.rowContainer2}>
            <Text>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
                <Text style={regdesignstyle.ToOtherLink}>Click here</Text>
            </TouchableOpacity>
        </View>

      </View>
    </View>
  );
};

export default RegisterScreen;
