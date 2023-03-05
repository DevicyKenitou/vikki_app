import { NavigationContainer } from "@react-navigation/native";
import MainStack from "vikki/src/MainStack";

export default function App() {
    /*return (
        <View style={styles.container}>
        <MainScreen />
        <StatusBar style="auto" />
        </View>
    );*/

    return (
        <MainStack />
    );
}