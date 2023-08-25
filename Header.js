import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Header = () => {
  return (
    <View
      style={{
        backgroundColor: "#003580",
        height: 65,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderColor: "white",
          borderWidth: 1,
          borderRadius: 25,
          padding: 8,
        }}
      >
        <Ionicons name="bed-outline" size={24} color="white" />
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 15,
            marginLeft: 8,
            color: "white",
          }}
        >
          Stays
        </Text>
      </Pressable>
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Ionicons name="ios-airplane-outline" size={26} color="white" />
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 15,
            marginLeft: 8,
            color: "white",
          }}
        >
          Flight
        </Text>
      </Pressable>
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Ionicons name="car-outline" size={26} color="white" />
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 15,
            marginLeft: 8,
            color: "white",
          }}
        >
          Car Rental
        </Text>
      </Pressable>
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <FontAwesome5 name="uber" size={26} color="white" />
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 15,
            marginLeft: 8,
            color: "white",
          }}
        >
          Taxi
        </Text>
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
