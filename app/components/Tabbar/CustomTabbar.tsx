import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import styles from './CustomTabbarStyle';

const CustomTabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
    const tabNames = ['Home', 'Profile', 'Discover']; // Sekme isimleri

    return (
        <View style={styles.tabBar}>
            <TouchableOpacity
                style={state.index === 2 ? styles.tabItemFocused : styles.tabItem}
                onPress={() => navigation.navigate('Discover')}
            >
                <Text style={state.index === 2 ? styles.textFocused : styles.text}>Discover</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={state.index === 0 ? styles.tabItemFocused : styles.tabItem}
                onPress={() => navigation.navigate('Home')}
            >
                <Text style={state.index === 0 ? styles.textFocused : styles.text}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={state.index === 1 ? styles.tabItemFocused : styles.tabItem}
                onPress={() => navigation.navigate('Profileee')}
            >
                <Text style={state.index === 1 ? styles.textFocused : styles.text}>Profile</Text>
            </TouchableOpacity>
        </View>
    );
};



export default CustomTabBar;
