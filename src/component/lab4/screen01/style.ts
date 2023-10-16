import {StyleSheet} from 'react-native'

export const style = StyleSheet.create({
    container:{
        flexDirection: 'row', 
        justifyContent:'space-between', 
        padding: 10,  alignItems:'center',  
        borderBottomColor:'gray', 
        borderBottomWidth:1 
    },
    viewText:{
        justifyContent:'center', 
        paddingRight:15
    },
    text:{
        color:'red'
    },
    button:{
        backgroundColor:'red', 
        width:88,
        height:38, 
        justifyContent:'center',
        alignItems:'center'
    },
    textButton:{
        textTransform:'uppercase', 
        color:'white'
    }
})