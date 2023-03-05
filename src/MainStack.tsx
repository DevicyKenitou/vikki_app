//@ts-check


import { createStackNavigator } from '@react-navigation/stack';
import MainDrawerScreen from 'vikki/src/features/home/Drawer';

export default function MainStack(){

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName='Main'
        >
            <Stack.Screen name="Main" component={MainDrawerScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}