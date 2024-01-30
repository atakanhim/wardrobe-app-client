import { useRouter } from "expo-router";
import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { useAuth } from "../../contexts/authProvider";

const CreateUserScreen = () => {
  const [nameSurname, setNameSurname] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { onRegister } = useAuth();

  const handleCreate = async () => {
    const result = await onRegister!(
      nameSurname,
      userName,
      email,
      password,
      confirmPassword
    );
    console.log(result.message); // hatayi ekrana verme

    if (result.succeeded) {
      const messaage = "basarili";
      router.navigate({ pathname: `/login`, params: { mesaj: messaage } }); // Remove the braces in params
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ad Soyad"
        value={nameSurname}
        onChangeText={setNameSurname}
      />
      <TextInput
        style={styles.input}
        placeholder="Kullanici Adi"
        value={userName}
        onChangeText={setUserName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Şifre"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />

      <TextInput
        style={styles.input}
        placeholder="Şifre Tekrar"
        value={confirmPassword}
        secureTextEntry
        onChangeText={setConfirmPassword}
      />
      <Button title="Üye Ol" onPress={handleCreate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  input: {
    width: "100%",
    marginVertical: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
  },
});

export default CreateUserScreen;
