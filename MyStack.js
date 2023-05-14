import {createStackNavigator} from "@react-navigation/stack";
import 'react-native-gesture-handler';
import {NavigationContainer} from "@react-navigation/native";
import Home from "./Home";
import CreateNote from "./CreateNote";
import Note from "./Note";



const Stack = createStackNavigator();


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

