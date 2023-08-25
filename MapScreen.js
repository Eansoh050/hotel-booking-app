import { StyleSheet, Text, View } from "react-native";
import React, { useState, useRef } from "react";
import MapView from "react-native-maps";
import { useRoute } from "@react-navigation/native";
import { Marker } from "react-native-maps";

const MapScreen = () => {
  const route = useRoute();
  const mapView = useRef(null);
  return (
    <View>
      <MapView ref={mapView} style={{ height: "100%", width: "100%" }}>
        {route.params.searchResults.map((item) =>
          item.properties.map((property) => (
            <Marker
              title={property.name}
              coordinate={{
                latitude: Number(property.latitude),
                longitude: Number(property.longitude),
              }}
            ></Marker>
          ))
        )}
      </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
