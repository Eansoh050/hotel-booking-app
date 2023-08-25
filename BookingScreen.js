import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const BookingScreen = () => {
  const bookings = useSelector((state) => state.booking.booking);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Bookings",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "500",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
    });
  }, []);
  return (
    <SafeAreaView>
      {bookings.length > 0 &&
        bookings.map((item) => (
          <Pressable
            style={{
              backgroundColor: "white",
              marginVertical: 10,
              marginHorizontal: 20,
              borderColor: "#e0e0e0",
              padding: 14,
              borderRadius: 6,
            }}
          >
            <View>
              <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                {" "}
                {item.name}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 7,
                }}
              >
                <MaterialIcons name="stars" size={24} color="green" />
                <Text
                  style={{ marginLeft: 3, fontSize: 15, fontWeight: "400" }}
                >
                  {item.rating}
                </Text>
                <Text style={{ marginLeft: 3 }}>+</Text>
                <View
                  style={{
                    padding: 6,
                    borderRadius: 4,
                    width: 100,
                    backgroundColor: "#0039a6",
                    marginLeft: 4,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontSize: 13,
                      fontWeight: "400",
                    }}
                  >
                    Genius Level
                  </Text>
                </View>
              </View>
            </View>
          </Pressable>
        ))}
    </SafeAreaView>
  );
};

export default BookingScreen;

const styles = StyleSheet.create({});
