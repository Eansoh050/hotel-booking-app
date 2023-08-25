import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { ScrollView, Image } from "react-native";
import { Pressable } from "react-native";
import { pixNormalize } from "../components/Normalise";
import { MaterialIcons } from "@expo/vector-icons";
import Amenities from "../components/Amenities";
const PropertyInfoScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: `${route.params.name}`,
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
  const difference = route.params.oldPrice - route.params.newPrice;
  const offerPrice = (Math.abs(difference) / route.params.oldPrice) * 100;

  return (
    <SafeAreaView>
      <ScrollView>
        <Pressable
          style={{ flexDirection: "row", flexWrap: "wrap", margin: 5 }}
        >
          {route.params.photos.slice(0, 5).map((photo) => (
            <View style={{ margin: 6 }}>
              <Image
                style={{
                  width: 120,
                  height: pixNormalize(80),
                  borderRadius: pixNormalize(4),
                }}
                source={{ url: photo.image }}
              />
            </View>
          ))}
          <Pressable style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={{ textAlign: "center", marginLeft: 20 }}>
              Show More
            </Text>
          </Pressable>
        </Pressable>

        <View
          style={{
            marginHorizontal: 12,
            marginTop: 10,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>
              {route.params.name}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                marginTop: 4,
              }}
            >
              <MaterialIcons name="stars" size={24} color="green" />
              <Text>{route.params.rating}</Text>
              <View
                style={{
                  backgroundColor: "#003580",
                  paddingVertical: 3,
                  borderRadius: 5,
                  width: 100,
                }}
              >
                <Text
                  style={{ textAlign: "center", color: "white", fontSize: 15 }}
                >
                  Genius Level
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              backgroundColor: "#17b169",
              paddingVertical: 4,
              paddingHorizontal: 6,
              borderRadius: 6,
            }}
          >
            <Text style={{ color: "white", fontSize: 15 }}>
              Travel Sustainable
            </Text>
          </View>
        </View>
        <Text
          style={{
            borderColor: "#e0e0e0",
            borderWidth: 3,
            height: 1,
            marginTop: 15,
          }}
        />
        <Text
          style={{
            fontSize: 17,
            marginTop: 10,
            fontWeight: "500",
            marginHorizontal: 12,
          }}
        >
          Price for 1 Night and {route.params.adults} adults
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",

            marginHorizontal: 12,
            marginTop: 4,
            gap: 8,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "red",
              textDecorationLine: "line-through",
            }}
          >
            {route.params.oldPrice * route.params.adults}
          </Text>
          <Text style={{ fontSize: 20 }}>
            GHC {route.params.newPrice * route.params.adults}
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 12,
            marginTop: 7,
            backgroundColor: "green",
            paddingHorizontal: 4,
            paddingVertical: 5,
            width: 78,
            borderRadius: 4,
          }}
        >
          <Text style={{ textAlign: "center", color: "white" }}>
            {offerPrice.toFixed(0)} % OFF
          </Text>
        </View>
        <Text
          style={{
            borderColor: "#e0e0e0",
            borderWidth: 3,
            height: 1,
            marginTop: 15,
          }}
        />
        <View
          style={{
            margin: 12,
            flexDirection: "row",
            alignItems: "center",
            gap: 60,
          }}
        >
          <View>
            <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}>
              Check In
            </Text>
            <Text
              style={{ color: "#007fff", fontWeight: "bold", fontSize: 15 }}
            >
              {route.params.selectedDates.startDate}
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 16, marginBottom: 3, fontWeight: "600" }}>
              Check Out
            </Text>
            <Text
              style={{ color: "#007fff", fontWeight: "bold", fontSize: 15 }}
            >
              {route.params.selectedDates.endDate}
            </Text>
          </View>
        </View>
        <View style={{ margin: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}>
            Rooms and Guests
          </Text>
          <Text style={{ color: "#007fff", fontWeight: "bold", fontSize: 15 }}>
            {route.params.rooms} rooms {route.params.adults} adults
            {route.params.children} children
          </Text>
        </View>
        <Text
          style={{
            borderColor: "#e0e0e0",
            borderWidth: 3,
            height: 1,
            marginTop: 15,
          }}
        />
        <Amenities />
        <Text
          style={{
            borderColor: "#e0e0e0",
            borderWidth: 3,
            height: 1,
            marginTop: 15,
          }}
        />
      </ScrollView>
      <Pressable
        onPress={() =>
          navigation.navigate("Rooms", {
            rooms: route.params.availableRooms,
            oldPrice: route.params.oldPrice,
            newPrice: route.params.newPrice,
            name: route.params.name,
            children: route.params.children,
            adults: route.params.adults,
            rating: route.params.rating,
            startDate: route.params.selectedDates.startDate,
            endDate: route.params.selectedDates.endDate,
          })
        }
        style={{
          backgroundColor: "#6cb4ee",
          bottom: 2,
          padding: 15,
          position: "absolute",
          width: "95%",
          marginHorizontal: 10,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: 15,
          }}
        >
          Select Availability
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default PropertyInfoScreen;

const styles = StyleSheet.create({});
