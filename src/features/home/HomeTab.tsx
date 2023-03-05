//@ts-check

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useCallback } from "react";
import { Image, Text } from "react-native";
import { TouchableRipple } from "react-native-paper";
import { ActionsScreen } from "vikki/src/features/cmd/ActionsScreen";
import DataScreen from "vikki/src/features/data/Screen";
import SMSTest from "vikki/src/features/sms/SMSTest";

export default function HomeTab() {
    const Tab = createBottomTabNavigator();

    const renderIcon = useCallback((src)=>{
        return (
            <Image 
                source={src}
                style={{
                    width: 30,
                    height: 30,
                }}
            />
        )
    }, []);

    return (
        <Tab.Navigator
            initialRouteName="Actions"
            sceneContainerStyle={{
                backgroundColor: '#fff',
            }}
            screenOptions={({route})=>{
                return {
                    headerShown: false,
                    tabBarStyle: {
                        height: 60,
                    },
                    tabBarShowLabel: false,
                    tabBarButton: (props)=>(
                        <TouchableRipple
                            {...props}
                            rippleColor="rgba(0, 0, 0, .1)"
                        />
                    ),
                    tabBarIcon: ({color, focused})=>{

                        switch(route.name){
                            case 'Data':
                                return renderIcon(
                                    focused
                                        ? require('vikki/src/assets/tab-icons/patient_folder_on.png')
                                        : require('vikki/src/assets/tab-icons/patient_folder_off.png')
                                );
                            case 'Actions':
                                return renderIcon(
                                    focused
                                        ? require('vikki/src/assets/tab-icons/remote_on.png')
                                        : require('vikki/src/assets/tab-icons/remote_off.png')
                                );
                            case 'SMSTest':
                                return renderIcon(
                                    focused
                                        ? require('vikki/src/assets/tab-icons/emergency_on.png')
                                        : require('vikki/src/assets/tab-icons/emergency_off.png')
                                );

                            default :
                                return renderIcon(
                                    require('vikki/src/assets/tab-icons/unknown.png')
                                );
                        }
                    }
                }
            }}
        >   
            <Tab.Screen
                name="Data"
                component={DataScreen}
            />
            <Tab.Screen
                name="Actions"
                component={ActionsScreen}
            />
            <Tab.Screen
                name="SMSTest"
                component={SMSTest}
            />
        </Tab.Navigator>
    );
}
