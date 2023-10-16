import React, { useState } from "react";
import { Layout } from "./src/component/lab4/screen01/Layout";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "./src/component/lab4/Home";
import AntDesign from "react-native-vector-icons/AntDesign";
import { LayoutScreen02 } from "./src/component/lab4/screen02/LayoutScreen02";
import { TextInput, View } from "react-native";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Feather from "react-native-vector-icons/Feather";
import { StyleSheet } from "react-native";
export default function App() {
  const Stack = createNativeStackNavigator();
  const renderHeaderRight = () => {
    return (
      <AntDesign
        name="shoppingcart"
        size={24}
        color="white"
        style={{ paddingRight: 15 }}
      />
    );
  };
  const renderHeaderTitle = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'white',
          borderRadius: 5,
        }}
      >
        <Feather name="search" size={20} />
        <TextInput
          placeholder="Enter something"
          style={{
            color: "black",
            backgroundColor: "white",
            height: 40,
            width: 180,
          }}
        />
      </View>
    );
  };
  const renderHeaderRightLayoutScreen02 = () => {
    return (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <AntDesign
          name="shoppingcart"
          size={24}
          color="white"
          style={{ paddingRight: 15 }}
        />
        <SimpleLineIcons
          size={20}
          name="options"
          style={{ paddingRight: 15, color: "white" }}
        />
      </View>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "My home" }}
        />
        <Stack.Screen
          name="Layout"
          component={Layout}
          options={({ route }) => ({
            title: route?.params?.name,
            headerStyle: {
              backgroundColor: "rgba(27, 169, 255, 1)",
            },
            headerTintColor: "rgba(255, 255, 255, 1)",
            headerRight: renderHeaderRight,
          })}
        />
        <Stack.Screen
          name="LayoutScreen02"
          component={LayoutScreen02}
          options={({ route }) => ({
            title: route?.params?.name,
            headerTitle: () => renderHeaderTitle(),
            headerStyle: {
              backgroundColor: "rgba(27, 169, 255, 1)",
            },
            headerTintColor: "rgba(255, 255, 255, 1)",
            headerRight: renderHeaderRightLayoutScreen02,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 5,
    marginRight: 15,
  },
  input: {
    flex: 1,
    color: "white",
    padding: 10,
  },
  searchIcon: {
    padding: 10,
  },
});
