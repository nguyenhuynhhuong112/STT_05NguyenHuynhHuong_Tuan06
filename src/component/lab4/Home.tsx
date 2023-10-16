import { Button, Text } from "react-native";
import { View } from "react-native";
import { style } from "./screen01/style";

export const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <View style={style.buttonHome}></View>
      <Button
        title="Go to Screen 01"
        onPress={() => navigation.navigate("Layout", { name: "Chat" })}
      />
      <View style={style.buttonHome}></View>
      <Button
        title="Go to Screen 02"
        onPress={() => navigation.navigate("LayoutScreen02")}
      />
    </View>
  );
};
