import { FlatList, Image, Text, View } from "react-native";
import { itemData } from "./itemData";

export const Layout = () => {
    const renderGridItem = ({ item }) => (
        <View style={{width:180, height:190, paddingLeft:5 }}>
            <Image source={item.imageURL} style={{ width: 155, height: 90, }} />
            <Text style={{flexWrap:'wrap'}}>{item.nameProduct}</Text>
            <Image source={item.vote} style={{width:106, height:13}}/>
            <View style={{flexDirection:'row',}}>
                <Text style={{fontFamily:'Roboto', fontSize:12, fontWeight:'700',}}>{item.price}</Text>
                <Text style={{fontFamily:'Roboto', fontSize:12, fontWeight:'400', color:'#969DAA',  paddingLeft:10}}>{item.discount}</Text>
            </View>
        </View>
    );

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={itemData}
                keyExtractor={(item) => item.id}
                renderItem={renderGridItem}
                numColumns={2}
            />
        </View>
    );
};