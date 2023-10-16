import React from "react";
import { TouchableOpacity } from "react-native";
import { View, FlatList, Image, Text } from "react-native";
import { itemData } from "./itemData";
import { style } from "./style";

export const Layout = () => {
  const handleTouch = (id: string) => {
    console.log("id ", id);
  };
  const renderItem = ({ item }) => (
    <View style={style.container}>
      <Image source={item.imageURL} style={{ width: 74, height: 74 }} />
      <View style={style.viewText}>
        <Text>{item.nameProduct}</Text>
        <Text style={style.text}>{item.nameShop}</Text>
      </View>
      <TouchableOpacity
        style={style.button}
        onPress={() => {
          handleTouch(item.id);
        }}
      >
        <Text style={style.textButton}>chat</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{flex:1}}>
      <Text style={style.textTitle}>Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!</Text>
      <FlatList
        data={itemData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};
