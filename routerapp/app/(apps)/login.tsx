import React, { useEffect, useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes,
// } from "@react-native-google-signin/google-signin";
import { useAuth } from "@/contexts/authProvider";
import { useLocalSearchParams, useRouter } from "expo-router";

const LoginScreen: React.FC<any> = ({ route }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, onRegister, onGoogleLogin } = useAuth();
  const [error, setError]: any = useState();
  const [userInfo, setUserInfo]: any = useState();
  const router = useRouter();
  const params = useLocalSearchParams();

  // useEffect(() => {
  //   GoogleSignin.configure({
  //     webClientId:
  //       "692724499227-gkeac9s95q579lodovv8s2b3ihat38rp.apps.googleusercontent.com",
  //     scopes: ["profile", "email"],
  //     offlineAccess: false,
  //   });
  // }, []);
  useEffect(() => {
    console.log("login icerdeyiz");
  }, []);
  useEffect(() => {
    if (params) {
      console.log("login mesaj = " + params.messaage);
    }
  }, [params.messaage]);

  const handleLogin = async () => {
    const result = await onLogin!(email, password);
    if (result) {
      while (router.canGoBack()) {
        // Pop from stack until one element is left
        router.back();
      }
      console.log("giris yapildi");
      router.replace("/");
    }
  };
  const handleCreateUser = () => {
    router.navigate("/createUser");
  };

  // const handleGoogleLogin = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     console.log("q");
  //     const user = await GoogleSignin.signIn();
  //     console.log(user);

  //     const result = await onGoogleLogin!(user.idToken);

  //     if (result.Succeeded) {
  //       console.log("googlelogin screen : ", result);
  //     }

  //     setUserInfo(user);
  //     console.log(user);
  //   } catch (e) {
  //     console.log(e);
  //     setError(e);
  //   }
  // };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        className="text-2xl"
        placeholder="Şifre"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button title="Giriş Yap" onPress={handleLogin} />
      <Button title="Kullanici Oluştur" onPress={handleCreateUser} />
      {params && <TextInput>--</TextInput>}

      <View>
        {/* <GoogleSigninButton
          size={GoogleSigninButton.Size.Standard}
          color={GoogleSigninButton.Color.Dark}
          onPress={handleGoogleLogin}
        ></GoogleSigninButton> */}
        <TextInput>{JSON.stringify(error?.message)}</TextInput>
      </View>
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

export default LoginScreen;
