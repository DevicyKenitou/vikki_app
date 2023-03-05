import { useState } from "react";
import { Image, View, StyleSheet, Dimensions } from "react-native";
import { Snackbar, TextInput } from "react-native-paper";
import { Buttons1 } from "vikki/src/components/Buttons";
import FlatList from "vikki/src/components/FlatList";
import ButtonsList from "vikki/src/features/cmd/ButtonsList";

import LottieView from 'lottie-react-native';



export function ActionsScreen() {
    const [IP, setIP] = useState("");
    const [numCol, setNumCol] = useState(2);

    const [onError, setOnError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("Error");

    const Header = null;

    const renderItem = ({ item, index }) => {
        return (
            <Buttons1
                title={item.title}
                bgColor={item.bgColor}
                imgSrc={item.icon}
                onPress={async () => {
                    const onErrorMsg = item.command ? await item.command(IP) : null;
                    if(onErrorMsg) {
                        console.log(onErrorMsg)
                        setErrorMsg(onErrorMsg.errorMsg);
                        setOnError(true);
                    }
                }}
                style={{
                    marginRight: index % numCol == 0 ? 0 : 10,
                    marginLeft: index % numCol == 1 ? 10 : 0,
                    width: item.flex * (Dimensions.get("window").width-20),
                }}
            />
        );
    };

    return (
        <View>
            <FlatList
                contentContainerStyle={{
                    backgrundColor: "#fff",
                    alignContent: "center",
                }}
                data={ButtonsList}
                renderItem={renderItem}
                ListHeaderComponent={Header}
                numColumns={numCol}
            />
            <Snackbar
                visible={onError}
                onDismiss={() => setOnError(false)}
                action={{
                    label: "OK",
                    onPress: () => {
                        setOnError(false);
                    },
                }}
                style={{
                    position: "absolute",
                    bottom: -33,
                    zIndex: 1000,
                }}
            >
                {errorMsg}
            </Snackbar>
        </View>
    );
}
