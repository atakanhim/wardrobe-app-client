import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView, ScrollView, Switch, Alert, } from 'react-native';
import styles from './ProfileScreenStyles';

import { Feather } from '@expo/vector-icons';
import * as Location from 'expo-location';
import { LocationPermissionResponse, getForegroundPermissionsAsync } from 'expo-location';


type Props = {

};
const ProfileScreen: React.FC<Props> = () => {
  const [locationStatus, setLocationStatus] = useState<LocationPermissionResponse>();

  const [form, setForm] = React.useState({
    darkMode: true,
    showCollaborators: false,
    locationPermissionGranted: false,

  });
  useEffect(() => {
    (async () => {
      setLocationStatus(await getForegroundPermissionsAsync());
    })();
  }, []);



  // useEffect(() => {
  //   const requestLocationPermission = async () => {

  //     let data = await Location.requestForegroundPermissionsAsync();
  //     console.log(data);
  //     if (data.status !== 'granted') {
  //       console.log('Permission to access location was denied');
  //     } else {
  //       // Kullanıcı izin verdiyse, gerekli işlemleri gerçekleştir
  //       let location = await Location.getCurrentPositionAsync({});
  //       console.log(location);
  //     }
  //   };

  //   requestLocationPermission();
  // }, [form.locationPermissionGranted]);


  const emailConfirmed: boolean = true;
  const SECTIONS = [{
    header: "Prefences",
    icon: 'settings',
    items: [
      { icon: 'globe', color: '#fe9400', label: 'Language', type: 'link' },
      { id: 'darkMode', icon: 'moon', color: '#007afe', label: 'Dark Mode ', type: 'toogle' },
      { id: 'locationPermissionGranted', icon: 'navigation', color: '#32c759', label: 'Location ', type: 'toogle' },
      { id: 'showCollaborators', icon: 'users', color: '#32c759', label: 'Show Collaborators ', type: 'toogle' },
    ]
  },
  {
    header: 'Help',
    icon: "help-circle",
    items: [
      { icon: 'lock', color: '#54A1AA', label: 'Change Password', type: 'link' },
      { icon: 'at-sign', color: 'green', label: 'Confirm Email', type: 'link' },
      { icon: 'flag', color: '#8e8d91', label: 'Report Bug', type: 'link' },
      { icon: 'mail', color: '#007afe', label: 'Contact Us ', type: 'link' }
    ]
  },
  {
    header: 'Content',
    icon: "align-center",
    items: [
      { icon: 'save', color: '#32c759', label: 'Saved', type: 'link' },
      { icon: 'download', color: '#fd2d54', label: 'Downloads ', type: 'link' }
    ]
  }
  ];

  const profileImage = require("../../../assets/imgs/babyoda.jpeg"); // Profil fotoğrafının dosya yolu
  return (
    <SafeAreaView style={{ flex: 1 }} >
      <ScrollView contentContainerStyle={styles.container}>

        <View style={styles.profile}>
          <TouchableOpacity onPress={() => {
            // degisiklik
          }}>
            <View style={styles.profileAvatarWrapper}>
              <Image alt='profile picture' source={profileImage} style={styles.profileAvatar} />
            </View>
            <View style={styles.profileAction}>
              <Feather name='edit-3' size={15} color={"#fff"} />
            </View>
          </TouchableOpacity>
          <Text style={styles.profileName}>atakan him</Text>
        </View>



        {SECTIONS.map(({ header, items }) => (
          <View style={styles.section} key={header}>
            <Text style={styles.sectionHeader}>{header}</Text>

            {items.map(({ id, color, icon, type, label }) => (

              (icon === "at-sign" && emailConfirmed) ? <View key={icon}></View> :
                <TouchableOpacity key={icon} onPress={() => {
                  // handle onpress


                }}>
                  <View style={styles.row}>
                    {/* icon */}
                    <View style={[styles.rowIcon, { backgroundColor: color }]}>
                      <Feather name={icon as any} color="#fff" size={18}></Feather>
                    </View>
                    {/* yazi */}
                    <Text style={styles.rowLabel}>{label}</Text>

                    {/* aradaki boşlugu  tam olarak dolduruyoruz */}
                    <View style={{ flex: 1, }}></View>

                    {/* toogle */}
                    {
                      type == 'toogle' && (id === 'locationPermissionGranted' || id === 'darkMode' || id === 'showCollaborators') &&
                      <Switch value={form[id]} onValueChange={value => setForm({ ...form, [id]: value })} />

                    }
                    {
                      type == 'link' &&
                      <Feather name='chevron-right' color="#0c0c0c" size={22} />

                    }
                  </View>
                </TouchableOpacity>
            ))}
          </View>
        ))}


      </ScrollView>
    </SafeAreaView >
  );
};



export default ProfileScreen;
