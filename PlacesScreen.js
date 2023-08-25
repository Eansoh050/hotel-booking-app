import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";

import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import PropertyCard from "../components/PropertyCard";
import { BottomModal, ModalFooter } from "react-native-modals";
import { SlideAnimation } from "react-native-modals";
import { ModalTitle } from "react-native-modals";
import { ModalContent } from "react-native-modals";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import SearchResults from "../components/SearchResults";

const PlacesScreen = () => {
  const route = useRoute();

  const data = [
    // first place
    {
      id: "0",
      place: "Accra",
      placeImage:
        "https://images.pexels.com/photos/7630190/pexels-photo-7630190.jpeg?auto-compress&cs=tinysrgb&=800",
      shortDescription: "City in Ghana",
      properties: [
        // 1st property
        {
          id: "10",
          name: "Kempinski hotel",
          image:
            "https://cf.bstatic.com/xdata/images/hotel/square200/433845616.webp?k=ca81c9e0c553871cb3c019482b260539bcb3383fe57f00850c352ad4ff8a0825&amp;o=",
          rating: "3.6",
          address:
            "346, Hennur Main Road, Post, Kalyan Nagar, 560043 Banggalore, India",
          oldPrice: 4600,
          newPrice: 3362,
          latitude: "13.0359",
          longitude: " 77.6431",

          photos: [
            {
              id: "100",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max300/433845615.jpg?k=fafb688336ba990dd22869b16f8f3be5bc79a501a5b2c6c5fd88668dc1e1499a&amp;o=&amp;hp=1",
            },
            {
              id: "101",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max500/433845633.jpg?k=19a43441c40e9c9ff3b57d6a1a7c379c4def04730e34f76fd4a298eaefcd23d1&amp;o=&amp",
            },
            {
              id: "102",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max300/433845645.jpg?k=f238a2a582d282b5d8e9cd5d7d31a0d518d3b0ca4e296f48c162948235d732da&amp;o=&amp",
            },
            {
              id: "103",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max300/433845650.jpg?k=36bbad9d47f2db957eddbf922e711fbfc9ab2bf901ceaa1bd5d1ca4dc857f21c&amp;o=&amp",
            },
            {
              id: "104",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/433845665.jpg?k=637ae74710f45147445e49211d54d63a6200b6857f1bd03e38e41cceb0b931eb&amp",
            },
          ],
          rooms: [
            {
              id: "202",
              name: "King room with balcony",
              size: 419,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 queen bed",
            },
            {
              id: "203",
              name: "King room with balcony",
              size: 419,
              refundable: "Not refundable",
              payment: "Pay in advance",
              bed: "1 queen bed",
            },
            {
              id: "205",
              name: "Two bedroom with balcony",
              size: 490,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 queen bed",
            },
          ],
        },
        // 2nd property
        {
          id: "11",
          name: "64/B, Regenta Inn Indiranagar, Binnamangala 1st sage Indiranagar, 560038 Bangalore, India",
          image:
            "https://cf.bstatic.com/xdata/images/hotel/square200/223496641.webp?k=ac8ff3baec098184e1870425150360e8d026253b59205bc4b2ba85138c629765&amp;o=",
          rating: "4",
          address: "La Rd, Accra",
          oldPrice: 5600,
          newPrice: 4212,
          latitude: "12.9784",
          longitude: "77.6408 ",

          photos: [
            {
              id: "111",
              image: "https://images.app.goo.gl/vjgkMEy5xqW7w1Sr5A",
            },
            {
              id: "112",
              image: "https://images.app.goo.gl/56Liq3hnNS3HSaTM7",
            },
            {
              id: "113",
              image: "https://images.app.goo.gl/FHdqNFYfUNUudX487",
            },
            {
              id: "114",
              image: "https://images.app.goo.gl/RK2TXXBtpKPwKkYu7",
            },
            {
              id: "115",
              image: "https://images.app.goo.gl/oNbtHAK7oiCzewbs7",
            },
          ],
          rooms: [
            {
              id: "212",
              name: "King room with balcony",
              size: 419,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 queen bed",
            },
            {
              id: "213",
              name: "King room with balcony",
              size: 419,
              refundable: "Not refundable",
              payment: "Pay in advance",
              bed: "1 queen bed",
            },
            {
              id: "215",
              name: "Two bedroom with balcony",
              size: 490,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 queen bed",
            },
          ],
        },
        // 3rd property
        {
          id: "12",
          name: "Royal  Hotel",
          image:
            "https://cf.bstatic.com/xdata/images/hotel/square200/368745507.webp?k=531f2d21714a1b3325f0bc2d6596207e56eb73229501aa25f0eedcf14006cef7&amp;o=",
          rating: "4",
          address:
            "Down Town Park, Sadahalli Gate, Kempegowda Int'l Airport Rd, 562157 Bangalore, India",
          oldPrice: 3400,
          newPrice: 2312,
          latitude: "13.059 ",
          longitude: " 77.6431",

          photos: [
            {
              id: "113",
              image: "https://images.app.goo.gl/vjgkMEy5xqW7w1Sr5A",
            },
            {
              id: "114",
              image: "https://images.app.goo.gl/56Liq3hnNS3HSaTM7",
            },
            {
              id: "115",
              image: "https://images.app.goo.gl/FHdqNFYfUNUudX487",
            },
            {
              id: "116",
              image: "https://images.app.goo.gl/RK2TXXBtpKPwKkYu7",
            },
            {
              id: "117",
              image: "https://images.app.goo.gl/oNbtHAK7oiCzewbs7",
            },
          ],
          rooms: [
            {
              id: "222",
              name: "King room with balcony",
              size: 419,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 queen bed",
            },
            {
              id: "223",
              name: "King room with balcony",
              size: 419,
              refundable: "Not refundable",
              payment: "Pay in advance",
              bed: "1 queen bed",
            },
            {
              id: "225",
              name: "Two bedroom with balcony",
              size: 490,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 queen bed",
            },
          ],
        },
      ],
    },
    // second place
    {
      id: "3",
      place: "Kumasi",
      placeImage:
        "https://images.pexels.com/photos/9373357/pexels-photo-9373357.jpeg?auto-compress&cs=tinysrgb&=800",
      shortDescription: "City in Ghana",
      properties: [
        // 1st property
        {
          id: "31",
          name: "Okumah Hotel",
          image: "https://images.app.goo.gl/fFjAJBmWQHYaymvC9",
          rating: "3.1",
          address: "Off BM Kuffour Avenue Kaase AK-440, 9786, Kumasi",
          oldPrice: 530,
          newPrice: 350,
          latitude: "6.65569",
          longitude: "1.60805.",

          photos: [
            {
              id: "131",
              image: "https://images.app.goo.gl/cKehiTfAPxDLVPwLA",
            },
            {
              id: "132",
              image: "https://images.app.goo.gl/6CiY1DWLJ16okytJA",
            },
            {
              id: "133",
              image: "https://images.app.goo.gl/tQXNrnQYnbACGGEg9",
            },
            {
              id: "134",
              image: "https://images.app.goo.gl/zRy4PgPySAEpPFPX9",
            },
            {
              id: "135",
              image: "https://images.app.goo.gl/paNCpUmQ2wJxy5Y59",
            },
          ],
          rooms: [
            {
              id: "232",
              name: "King room with balcony",
              size: 439,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 queen bed",
            },
            {
              id: "233",
              name: "King room with balcony",
              size: 421,
              refundable: "Not refundable",
              payment: "Pay in advance",
              bed: "1 queen bed",
            },
            {
              id: "235",
              name: "Two bedroom with balcony",
              size: 450,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 queen bed",
            },
          ],
        },
        // 2nd property
        {
          id: "41",
          name: "Senator Hotel",
          image: "https://images.app.goo.gl/eCLJjcdqGMQvfpZb8",
          rating: "3.8",
          address: "Unnamed Road, Kumasi",
          oldPrice: 630,
          newPrice: 550,
          latitude: "6.69979",
          longitude: "-1.6819",

          photos: [
            {
              id: "141",
              image: "https://images.app.goo.gl/mcNDsrnXLHS6TEYV9",
            },
            {
              id: "142",
              image: "https://images.app.goo.gl/t2YriXnppQ7Fs2ua6",
            },
            {
              id: "143",
              image: "https://images.app.goo.gl/a32BnVzmzj3vcEto9",
            },
            {
              id: "144",
              image: "https://images.app.goo.gl/Y9YFipduurdmxYm36",
            },
            {
              id: "145",
              image: "https://images.app.goo.gl/JPKeaAnT77TwScd1A",
            },
          ],
          rooms: [
            {
              id: "242",
              name: "King room with balcony",
              size: 340,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 queen bed",
            },
            {
              id: "243",
              name: "King room with balcony",
              size: 420,
              refundable: "Not refundable",
              payment: "Pay in advance",
              bed: "1 queen bed",
            },
            {
              id: "245",
              name: "Two bedroom with balcony",
              size: 456,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 queen bed",
            },
          ],
        },
        // 3rd property
        {
          id: "51",
          name: "Asantewaa Premier Hotel",
          image: "https://images.app.goo.gl/TwPkSXtdtG2jphd76",
          rating: "2.8",
          address: "AK-819-6370, 3B Club St, Kumasi",
          oldPrice: 430,
          newPrice: 350,
          latitude: " 6.706080",
          longitude: "-1.528590",

          photos: [
            {
              id: "151",
              image: "https://images.app.goo.gl/N5k6k7shRbfM57fe9",
            },
            {
              id: "152",
              image: "https://images.app.goo.gl/pRzTCsSZs3fgFkMh8",
            },
            {
              id: "153",
              image: "https://images.app.goo.gl/Fd2z4VnNXc9tN8nk8",
            },
            {
              id: "154",
              image: "https://images.app.goo.gl/8pXi25YFZ8LrujH1A",
            },
            {
              id: "155",
              image: "https://images.app.goo.gl/ahtyGmxWQaM1zyZs5",
            },
          ],
          rooms: [
            {
              id: "252",
              name: "King room with balcony",
              size: 340,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 queen bed",
            },
            {
              id: "253",
              name: "King room with balcony",
              size: 420,
              refundable: "Not refundable",
              payment: "Pay in advance",
              bed: "1 queen bed",
            },
            {
              id: "255",
              name: "Two bedroom with balcony",
              size: 456,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 queen bed",
            },
          ],
        },
      ],
    },
  ];
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFilter, setselectedFilter] = useState([]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Popular Places",
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
  const filters = [
    {
      id: "0",
      filter: "cost:Low to High",
    },
    {
      id: "1",
      filter: "cost: High to Low",
    },
  ];
  const searchPlaces = data?.filter(
    (item) => item.place === route.params.place
  );
  const [sortedData, setSortedData] = useState(data);
  console.log(searchPlaces);

  const compare = (a, b) => {
    if (a.newPrice > b.newPrice) {
      return -1;
    }
    if (a.newPrice < b.newPrice) {
      return 1;
    }
    return 0;
  };
  const comparision = (a, b) => {
    if (a.newPrice < b.newPrice) {
      return -1;
    }
    if (a.newPrice > b.newPrice) {
      return 1;
    }
    return 0;
  };

  const applyFilter = (filter) => {
    setModalVisible(false);
    switch (filter) {
      case "cost:High to Low":
        searchPlaces.map((val) => val.properties.sort(compare));
        setSortedData(searchPlaces);
        break;
      case "cost:Low to High":
        searchPlaces.map((val) => val.properties.sort(comparision));
        setSortedData(searchPlaces);
        break;
    }
  };
  console.log(route.params);
  return (
    <View>
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          padding: 12,
          backgroundColor: "white",
        }}
      >
        <Pressable
          onPress={() => setModalVisible(!modalVisible)}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Octicons name="arrow-switch" size={22} color="gray" />
          <Text style={{ fontSize: 15, fontWeight: "bold", marginLeft: 8 }}>
            Sort
          </Text>
        </Pressable>
        <Pressable style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="ios-filter" size={24} color="black" />
          <Text style={{ fontSize: 15, fontWeight: "bold", marginLeft: 8 }}>
            Filter
          </Text>
        </Pressable>
        <Pressable
          onPress={() =>
            navigation.navigate("Map", {
              searchResults: searchPlaces,
            })
          }
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <FontAwesome5 name="map-marker-alt" size={24} color="black" />
          <Text>Map</Text>
        </Pressable>
      </Pressable>
      <ScrollView style={{ backgroundColor: "#f5f5f5" }}>
        {sortedData
          ?.filter((item) => item.place === route.params.place)
          .map((item) =>
            item.properties.map((property, index) => (
              <PropertyCard
                key={index}
                rooms={route.params.rooms}
                children={route.params.children}
                adults={route.params.adults}
                selectedDates={route.params.selectedDates}
                property={property}
                availableRooms={property.rooms}
              />
            ))
          )}
      </ScrollView>

      <BottomModal
        onBackdropPress={() => setModalVisible(!modalVisible)}
        swipeDirection={["up", "down"]}
        swipeThreshold={200}
        footer={
          <ModalFooter>
            <Pressable
              onPress={() => applyFilter(selectedFilter)}
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                paddingRight: 18,
                marginVertical: 19,
                marginBottom: 30,
              }}
            >
              <Text>Apply</Text>
            </Pressable>
          </ModalFooter>
        }
        modalTitle={<ModalTitle title="Sort and Filter" />}
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
        // sends you back to the previous window
        onHardwareBackPress={() => setModalVisible(!modalVisible)}
        visible={modalVisible}
        onTouchOutside={() => setModalVisible(!modalVisible)}
      >
        <ModalContent style={{ width: "100%", height: 280 }}>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                marginVertical: 10,
                flex: 2,
                height: 280,
                borderRightWidth: 1,
                borderColor: "#e0e0e0",
              }}
            >
              <Text style={{ textAlign: "center" }}>Sort</Text>
            </View>
            <View style={{ flex: 3, margin: 10 }}>
              {filters.map((item, index) => (
                <Pressable
                  onPress={() => setselectedFilter(item.filter)}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: 10,
                  }}
                  key={index}
                >
                  {selectedFilter.includes(item.filter) ? (
                    <FontAwesome name="circle" size={18} color="green" />
                  ) : (
                    <Entypo name="circle" size={18} color="black" />
                  )}

                  <Text
                    style={{ fontSize: 16, fontWeight: "500", marginLeft: 6 }}
                  >
                    {item.filter}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>
        </ModalContent>
      </BottomModal>
    </View>
  );
};

export default PlacesScreen;

const styles = StyleSheet.create({});
