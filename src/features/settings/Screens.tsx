import React, { useState } from "react";
import { View, StyleSheet, } from "react-native";
import { TextInput } from "react-native-paper";
import LottieView from "lottie-react-native";

const styles = StyleSheet.create({
    textInput: {
        /*borderWidth: 1,
        borderRadius: 4,
        width: 250,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginBottom: 20*/
        marginBottom: 20,
        backgroundColor: "rgb(245, 245, 245)",
    },
});

export function SettingsScreen(){
    const [IP, setIP] = useState("");
    return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {/* <Image
                    style={{ width : 200, height: 200, marginBottom: 20}}
                    source={require("vikki/src/assets/vikki.png")} 
                /> */}
    
                <LottieView
                    autoPlay
                    speed={0.5}
                    ref={null /*animation*/}
                    style={{
                        width: 200,
                        height: 200,
                        backgroundColor: "#fff",
                    }}
                    // Find more Lottie files at https://lottiefiles.com/featured
                    source={require("vikki/src/assets/lottie/robot1.json")}
                />
    
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    {/* <TextInput
                        mode="flat"
                        label={""}
                        value={"http://"}
                        style={[styles.textInput, { flex: 0.25 }]}
                        activeUnderlineColor="rgb(0, 0, 0)"
                    /> */}
                    <View
                        style={{
                            backgroundColor: "rgb(100, 233, 100)",
                            borderRadius: 50,
                            width: 15,
                            height: 15,
                            marginRight: 30,
                            marginBottom: 10,
                        }}
                    />
                    <TextInput
                        mode="flat"
                        label={"IP de VIKKI"}
                        style={[styles.textInput, { flex: 0.5 }]}
                        placeholder=""
                        value={IP}
                        onChangeText={(val) => {
                            setIP(val);
                        }}
                        onPressIn={(t) => {
                            /*if(IP == '')
                                setIP('http://:8080/');*/
                        }}
                        activeUnderlineColor="rgb(0, 0, 0)"
                    />
                    <TextInput
                        mode="flat"
                        label={"PORT"}
                        value={":8080"}
                        style={[styles.textInput, { flex: 0.25 }]}
                        activeUnderlineColor="rgb(0, 0, 0)"
                    />
                </View>
            </View>
    )
}