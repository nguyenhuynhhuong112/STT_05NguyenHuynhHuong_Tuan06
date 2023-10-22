import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Feather from "react-native-vector-icons/Feather";
import Foundation from "react-native-vector-icons/Foundation";
import { TextInput, View, TouchableOpacity } from "react-native";
import { LayoutScreen02 } from "./src/component/lab4/screen02/LayoutScreen02";
import { Layout } from "./src/component/lab4/screen01/Layout";
import { Home } from "./src/component/lab4/Home";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
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

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainScreen() {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: "rgba(27, 169, 255, 1)" },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          tabBarLabel: "",
          tabBarIcon: () => (
            <Foundation name="list" size={30} style={{ color: "white" }} />
          ),
        }}
      />
      <Tab.Screen
        name="Layout"
        component={LayoutNavigator}
        initialParams={{ navigation: null }}
        options={({ navigation }) => ({
          tabBarIcon: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <AntDesign name="home" size={30} style={{ color: "white" }} />
            </TouchableOpacity>
          ),
          tabBarLabel: "",
        })}
      />
      <Tab.Screen
        name="LayoutScreen02"
        component={LayoutScreen02Navigator}
        initialParams={{ navigation: null }}
        options={({ navigation }) => ({
          tabBarIcon: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
            >
              <AntDesign
                name="arrowleft"
                size={30}
                style={{ color: "white" }}
              />
            </TouchableOpacity>
          ),
          tabBarLabel: "",
        })}
      />
    </Tab.Navigator>
  );
}

function LayoutNavigator({ navigation }: { navigation: any }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Layout"
        component={Layout}
        options={{
          title: "Layout",
          headerRight: renderHeaderRight,
          headerShown: true,
          headerStyle: {
            backgroundColor: "rgba(27, 169, 255, 1)",
          },
          headerTintColor: "rgba(255, 255, 255, 1)",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <AntDesign name="arrowleft" size={24} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function LayoutScreen02Navigator({ navigation }: { navigation: any }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LayoutScreen02"
        component={LayoutScreen02}
        options={{
          title: "LayoutScreen02",
          headerTitle: renderHeaderTitle,
          headerRight: renderHeaderRightLayoutScreen02,
          headerShown: true,
          headerStyle: {
            backgroundColor: "rgba(27, 169, 255, 1)",
          },
          headerTintColor: "rgba(255, 255, 255, 1)",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <AntDesign name="arrowleft" size={24} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
