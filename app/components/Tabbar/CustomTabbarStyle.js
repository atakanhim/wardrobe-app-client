import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../constants';

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#fff',
    // Diğer stil özellikleri...
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // Diğer stil özellikleri...
  },
  tabItemFocused: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0d7ff', // Örnek bir arka plan rengi
    borderRadius: 3, // Yuvarlak köşeler için
    // margin ve padding'i kaldır
    // Diğer stil özellikleri...
  },
  text: {
    // Metin için stil özellikleri...

    fontFamily: 'regular',
  },
  textFocused: {
    fontFamily: 'semibold',
    fontSize:SIZES.medium,
    // Aktif metin için diğer stil özellikleri...
  },
});

export default styles;
