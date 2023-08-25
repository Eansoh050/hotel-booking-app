import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Pressable } from "react-native";
import { Dimensions } from "react-native";
import { Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const PropertyCard = ({
  rooms,
  children,
  property,
  adults,
  selectedDates,
  availableRooms,
}) => {
  const { width, height } = Dimensions.get("window");
  const navigation = useNavigation();
  return (
    <View>
      <Pressable
        onPress={() =>
          navigation.navigate("Info", {
            name: property.name,
            rating: property.rating,
            oldPrice: property.oldPrice,
            newPrice: property.newPrice,
            photos: property.photos,
            availableRooms: property.rooms,
            adults: adults,
            children: children,
            rooms: rooms,
            selectedDates: selectedDates,
          })
        }
        style={{ margin: 15, backgroundColor: "white", flexDirection: "row" }}
      >
        <View>
          <Image
            style={{ height: height / 4, width: width - 280 }}
            source={{ url: property.image }}
          />
        </View>
        <View style={{ padding: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ width: 200 }}>{property.name}</Text>
            <AntDesign name="hearto" size={24} color="red" />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              marginTop: 4,
            }}
          >
            <MaterialIcons name="stars" size={24} color="black" />
            <Text>{property.rating}</Text>
            <View
              style={{
                backgroundColor: "#6cb4ee",
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
          <Text
            style={{
              color: "gray",
              width: 210,
              marginTop: 6,
              fontWeight: "bold",
            }}
          >
            {property.address.length > 50
              ? property.address.substr(0, 50)
              : property.address}
          </Text>

          <Text style={{ fontSize: 15, marginTop: 8, fontWeight: "500" }}>
            Price for 1 Night and {adults}
          </Text>
          <View
            style={{
              marginTop: 5,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: "red",
                textDecorationLine: "line-through",
              }}
            >
              {property.oldPrice * adults}
            </Text>
            <Text style={{ fontSize: 18 }}>
              {" "}
              GHC {property.newPrice * adults}
            </Text>
          </View>
          <View style={{ marginTop: 6 }}>
            <Text style={{ fontSize: 16, color: "gray" }}>Deluxe Room</Text>
            <Text style={{ fontSize: 15, color: "gray" }}>
              Hotel Room: 1 bed
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#608386",
              paddingVertical: 2,
              borderRadius: 5,
              marginTop: 2,
              width: 150,
              paddingHorizontal: 4,
            }}
          >
            <Text style={{ textAlign: "center", color: "white" }}>
              Limited Time Deal
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default PropertyCard;

const styles = StyleSheet.create({});
