import Home from "./Home";
import 'react-native-gesture-handler';
import {NavigationContainer} from "@react-navigation/native";

export default function App() {
  return (
      <NavigationContainer>
      <Home/>
      </NavigationContainer>
  );
}

