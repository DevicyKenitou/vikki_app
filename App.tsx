import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import MainStack from "vikki/src/MainStack";

import 'react-native-gesture-handler';

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar 
                style="light"
                backgroundColor="#fff"
            />
            <MainStack />
        </NavigationContainer>
    )
}