import { useState } from "react";
import { Image, TextInput, View } from "react-native";
import { Buttons1 } from "./components/Buttons.ssx";
import { VIKKI_Come, VIKKI_Emergency, VIKKI_Heartbeat, VIKKI_Temperature } from "./services.server";

export function MainScreen(){

    const [IP, setIP] = useState('');

    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Image
                style={{ width : 200, height: 200, marginBottom: 20}}
                source={require("vikki/src/assets/vikki.png")} 
            />

            
            <TextInput 
                style={{
                    borderWidth: 1,
                    borderRadius: 4,
                    width: 250,
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                    marginBottom: 20
                }}
                placeholder="IP (http://162.125.23.3:8080/)"
                value={IP}
                onChangeText={(val)=>{ setIP(val) }}
                onPressIn={(t)=>{
                    /*if(IP == '')
                        setIP('http://:8080/');*/
                }}
            />

            <View>
                <Buttons1 
                    title="Faire venir VIKKI"
                    bgColor="#1ecd1a"
                    imgSrc={require("./assets/viens.png")}
                    onPress={()=>{ VIKKI_Come(IP) }}
                />
                <Buttons1 
                    title="Température"
                    bgColor="#e9307d"
                    imgSrc={require("./assets/thermometer.png")}
                    onPress={()=>{ VIKKI_Temperature(IP) }}
                />
                <Buttons1 
                    title="Pouls"
                    bgColor="#e59d31"
                    imgSrc={require("./assets/heartbeat.png")}
                    onPress={()=>{ VIKKI_Heartbeat(IP) }}
                />
                <Buttons1 
                    title="Appel d'URGENCE"
                    bgColor="#e53131"
                    imgSrc={require("./assets/emergency.png")}
                    onPress={()=>{ VIKKI_Emergency(IP) }}
                />
            </View>

        </View>
    )
}