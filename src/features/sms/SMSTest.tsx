//@ts-check

import React from "react";
import { View, Text, Button } from "react-native";
import { SendSMS } from "vikki/src/services/sms";

export default function SMSTest(){
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text>SMSTest</Text>
            <Button
                title="Envoyer SMS"
                onPress={SendSMS}
            />
        </View>
    )
}