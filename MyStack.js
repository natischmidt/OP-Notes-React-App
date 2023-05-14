import React from 'react'
import 'react-native-gesture-handler';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import Home from "./Home";
import CreateNote from "./CreateNote";
import Note from "./Note";



const Stack = createNativeStackNavigator();


const MyStack = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Create a note" component={CreateNote} />
                <Stack.Screen name="View Note" component={Note} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};



// <View style={{flexDirection:'row', margin:15 }}>
//     <Text style={{fontWeight:'bold', fontSize:30, color:'black'}}>
//         OPNotes
//     </Text>
// </View>