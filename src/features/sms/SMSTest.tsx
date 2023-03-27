//@ts-check

import React from "react";
import { View, Text, Button, Image } from "react-native";
import { SendSMS } from "vikki/src/services/sms";

export default function SMSTest(){
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>

            <Image
                source={require('vikki/src/assets/tab-icons/emergency_on.png')}
                style={{
                    width: 70,
                    height: 70,
                    marginBottom: 80,
                }}
            />

            <Button
                title="Appeler les urgences"
                onPress={SendSMS}
                color="#EF4844"
            />
            <View style={{ marginBottom: 30 }} />
            <Button
                title="Contacter le personnel médical"
                onPress={SendSMS}
                color="#6c9ef7"
            />
        </View>
    )
}