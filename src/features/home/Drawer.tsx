import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeTab from "vikki/src/features/home/HomeTab";

function Settings(){
    return (<></>)
}

export default function MainDrawerScreen() {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeTab} />
            <Drawer.Screen name="Settings" component={Settings} />
        </Drawer.Navigator>
    );
}
