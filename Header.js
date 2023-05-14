import { View, Text } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';

const Header = () => {

    return (
        <View style={{flexDirection:'row', margin:15 }}>
            <Text style={{fontWeight:'bold', fontSize:30, color:'black'}}>
               OPNotes
            </Text>
        </View>
    )
}
export default Header


