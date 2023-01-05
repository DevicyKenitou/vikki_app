import { useState } from "react";
import { Image, TextInput, View, Platform, Alert, StyleSheet } from "react-native";
import { Buttons1 } from "./components/Buttons.jsx";
import { VIKKI_Come, VIKKI_Emergency, VIKKI_Heartbeat, VIKKI_Temperature } from "./services.server.js";

const style = StyleSheet.create({
  txtipt : {
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    marginHorizontal: 4
  }
});

export function MainScreen(){

    const [_PROTO, set_PROTO] = useState('http://');
    const [_PORT, set_PORT] = useState(':8080/');
    const [IP, setIP] = useState('');

    if(Platform.OS == 'web'){
      const txt = "L'application version web ne fonctionnera pas sur Expo.dev, seulement en éxécution locale sur ordinateur."
      Alert.alert("Attention", txt);
      console.warn(txt)
    }

    function FULL_URL(){
      return _PROTO + IP + _PORT;
    }


    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Image
                style={{ width : 200, height: 200, marginBottom: 20}}
                source={require("./assets/vikki.png")} 
            />

            <View 
              style={{
                flexDirection: "row",
                width: "80%"
              }}
            >
              <TextInput
                style={[style.txtipt, { flex : 1 }]}
                value={_PROTO}
                placeholder="http://"
                onChangeText={(val)=>{ set_PROTO(val) }}
              />
              <TextInput
                  returnKeyType="send"
                  keyboardType="numeric"
                  style={[style.txtipt, {
                      flex : 2,
                  }]}
                  placeholder="IP"
                  value={IP}
                  onChangeText={(val)=>{ setIP(val) }}
                  onPressIn={(t)=>{
                      /*if(IP == '')
                          setIP('http://:8080/');*/
                  }}
              />
              <TextInput 
                style={[style.txtipt, { flex : 1 }]}
                value={_PORT}
                placeholder=":8080/"
                onChangeText={(val)=>{ set_PORT(val) }}
              />
            </View>

            <View>
                <Buttons1 
                    title="Faire venir VIKKI"
                    bgColor="#1ecd1a"
                    imgSrc={require("./assets/viens.png")}
                    onPress={()=>{ VIKKI_Come(FULL_URL()) }}
                />
                <Buttons1 
                    title="Température"
                    bgColor="#e9307d"
                    imgSrc={require("./assets/thermometer.png")}
                    onPress={()=>{ VIKKI_Temperature(FULL_URL()) }}
                />
                <Buttons1 
                    title="Pouls"
                    bgColor="#e59d31"
                    imgSrc={require("./assets/heartbeat.png")}
                    onPress={()=>{ VIKKI_Heartbeat(FULL_URL()) }}
                />
                <Buttons1 
                    title="Appel d'URGENCE"
                    bgColor="#e53131"
                    imgSrc={require("./assets/emergency.png")}
                    onPress={()=>{ VIKKI_Emergency(FULL_URL()) }}
                />
            </View>

        </View>
    )
}
