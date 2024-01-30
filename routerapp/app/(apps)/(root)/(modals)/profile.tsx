import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Switch,
  Image,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  LocationPermissionResponse,
  getForegroundPermissionsAsync,
} from "expo-location";
import { Feather } from "@expo/vector-icons";

const Profile = () => {
  const [locationStatus, setLocationStatus] =
    useState<LocationPermissionResponse>();

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
  const profileImage = require("@/assets/images/defaulavatar.png"); // Profil fotoğrafının dosya yolu
  const emailConfirmed: boolean = true;
  const SECTIONS = [
    {
      header: "Prefences",
      icon: "settings",
      items: [
        { icon: "globe", color: "#fe9400", label: "Language", type: "link" },
        {
          id: "darkMode",
          icon: "moon",
          color: "#007afe",
          label: "Dark Mode ",
          type: "toogle",
        },
        {
          id: "locationPermissionGranted",
          icon: "navigation",
          color: "#32c759",
          label: "Location ",
          type: "toogle",
        },
        {
          id: "showCollaborators",
          icon: "users",
          color: "#32c759",
          label: "Show Collaborators ",
          type: "toogle",
        },
      ],
    },
    {
      header: "Help",
      icon: "help-circle",
      items: [
        {
          icon: "lock",
          color: "#54A1AA",
          label: "Change Password",
          type: "link",
        },
        {
          icon: "at-sign",
          color: "green",
          label: "Confirm Email",
          type: "link",
        },
        { icon: "flag", color: "#8e8d91", label: "Report Bug", type: "link" },
        { icon: "mail", color: "#007afe", label: "Contact Us ", type: "link" },
      ],
    },
    {
      header: "Content",
      icon: "align-center",
      items: [
        { icon: "save", color: "#32c759", label: "Saved", type: "link" },
        {
          icon: "download",
          color: "#fd2d54",
          label: "Downloads ",
          type: "link",
        },
      ],
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.profile}>
          <TouchableOpacity
            onPress={() => {
              // degisiklik
            }}
          >
            <View style={styles.profileAvatarWrapper}>
              <Image
                alt="profile picture"
                source={profileImage}
                style={styles.profileAvatar}
              />
            </View>
            <View style={styles.profileAction}>
              <Feather name="edit-3" size={15} color={"#fff"} />
            </View>
          </TouchableOpacity>
          <Text style={styles.profileName}>atakan him</Text>
        </View>

        {SECTIONS.map(({ header, items }) => (
          <View style={styles.section} key={header}>
            <Text style={styles.sectionHeader}>{header}</Text>

            {items.map(({ id, color, icon, type, label }) =>
              icon === "at-sign" && emailConfirmed ? (
                <View key={icon}></View>
              ) : (
                <TouchableOpacity
                  key={icon}
                  onPress={() => {
                    // handle onpress
                  }}
                >
                  <View style={styles.row}>
                    {/* icon */}
                    <View style={[styles.rowIcon, { backgroundColor: color }]}>
                      <Feather
                        name={icon as any}
                        color="#fff"
                        size={18}
                      ></Feather>
                    </View>
                    {/* yazi */}
                    <Text style={styles.rowLabel}>{label}</Text>

                    {/* aradaki boşlugu  tam olarak dolduruyoruz */}
                    <View style={{ flex: 1 }}></View>

                    {/* toogle */}
                    {type == "toogle" &&
                      (id === "locationPermissionGranted" ||
                        id === "darkMode" ||
                        id === "showCollaborators") && (
                        <Switch
                          value={form[id]}
                          onValueChange={(value) =>
                            setForm({ ...form, [id]: value })
                          }
                        />
                      )}
                    {type == "link" && (
                      <Feather name="chevron-right" color="#0c0c0c" size={22} />
                    )}
                  </View>
                </TouchableOpacity>
              )
            )}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
  },
  profile: {
    borderColor: "black",
    padding: 20,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  profileName: {
    marginTop: 25,
    fontSize: 17,
    fontWeight: "600",
    color: "black",
    textAlign: "center",
  },
  profileAvatarWrapper: {
    position: "relative",
  },
  section: {
    paddingHorizontal: 24,
  },
  sectionHeader: {
    paddingVertical: 12,
    fontSize: 12,
    fontWeight: "600",
    color: "#9e9e9e",
    textTransform: "uppercase",
    letterSpacing: 1.1,
  },
  profileAvatar: {
    width: 72,
    height: 72,
    borderRadius: 999,
  },
  profileAction: {
    backgroundColor: "#007bff",
    width: 28,
    height: 28,
    borderRadius: 999,
    position: "absolute",
    right: -4,
    bottom: -10,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 50,
    backgroundColor: "#E9E9E9",
    borderRadius: 8,
    marginBottom: 11,
    paddingHorizontal: 15,
  },
  rowLabel: {
    fontSize: 17,
    color: "#0c0c0c",
  },
  rowIcon: {
    width: 32,
    height: 32,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
});
export default Profile;
