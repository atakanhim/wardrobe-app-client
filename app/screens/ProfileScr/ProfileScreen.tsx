import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useAuth } from '../../contexts/AuthContext';
import styles from './ProfileScreenStyles';
type AuthStackParamList = {
  Profile: undefined; // Diğer ekranlarınız için ek parametreler tanımlayabilirsiniz
    // Örneğin: Home: { userId: string };
  };
type ProfileScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  'Profile'
>;
type Props = {
    navigation: ProfileScreenNavigationProp;
  };

const ProfileScreen: React.FC<Props> = ({ navigation }) => {
  const { onLogout} = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Keşfet</Text>
      {/* İçerik ve diğer bileşenler burada yer alabilir */}
     
    </View>
  );
};


export default ProfileScreen;
