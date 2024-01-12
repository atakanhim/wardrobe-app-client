import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useAuth } from '../../contexts/AuthContext';
import styles from './DiscoverScreenStyles';
type AuthStackParamList = {
  Discover: undefined; // Diğer ekranlarınız için ek parametreler tanımlayabilirsiniz
    // Örneğin: Home: { userId: string };
  };
type DiscoverScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  'Discover'
>;
type Props = {
    navigation: DiscoverScreenNavigationProp;
  };

const DiscoverScreen: React.FC<Props> = ({ navigation }) => {
  const { onLogout} = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Keşfet</Text>
      {/* İçerik ve diğer bileşenler burada yer alabilir */}
     
    </View>
  );
};


export default DiscoverScreen;
