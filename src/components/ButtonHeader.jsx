import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const ButtonHeader = ({ nameIcon, size, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.headerIcon}>
      <Ionicons name={nameIcon} size={size} />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  headerIcon: {
    width: 40,
    height: 40,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
