import { Image, TouchableOpacity, View } from "react-native";
import {
    Card,
    TouchableRipple,
    Text,
    Button,
    Avatar,
} from "react-native-paper";

export function Buttons1({ title, bgColor, onPress, imgSrc, style }) {
    return (
        <View
            style={{
                borderRadius: 6,
                overflow: "hidden",
            }}
        >
            <TouchableRipple
                rippleColor="rgba(255, 255, 255, 0.2)"
                onPress={onPress}
                style={[{
                    flex: 0.5,
                    backgroundColor: '#6c9ef7',
                    alignItems: "center",
                    borderRadius: 6,
                    marginVertical: 10,    
                    
                    shadowColor: 'rgba(0,0,0, 1)', // IOS
                    shadowOffset: { height: 0, width: 0 }, // IOS
                    shadowOpacity: 1, // IOS
                    shadowRadius: 2, //IOS
                    elevation: 2, // Android
                }, style]}
            >
                <Card
                    mode="contained"
                    style={{
                        backgroundColor: 'transparent',
                    }}
                >
                    <Card.Content
                        style={{
                            alignItems: "center",
                        }}
                    >
                        <Text
                            variant="titleLarge"
                            style={{ textAlign: 'center', color: '#fff', }}
                        >
                            {title}
                        </Text>
                        <View style={{ marginTop: 15 }} />
                        <Image
                            source={imgSrc}
                            style={{
                                width: 70,
                                height: 70,
                            }}
                        />
                    </Card.Content>
                </Card>
            </TouchableRipple>
        </View>
    );

    return (
        <View style={{ marginVertical: 10 }}>
            <TouchableRipple
                rippleColor="rgba(0, 0, 0, .3)"
                onPress={onPress}
                style={{
                    alignItems: "center",
                    backgroundColor: bgColor ? bgColor : "#64a6f7",
                    borderRadius: 6,
                    paddingHorizontal: 70,
                    paddingVertical: 8,
                    flexDirection: "row",
                    justifyContent: "center",
                }}
            >
                <>
                    <Image
                        source={imgSrc}
                        style={{
                            width: 30,
                            height: 30,
                            position: "absolute",
                            left: 15,
                        }}
                    />
                    <Text style={{ fontSize: 25, color: "#fff" }}>{title}</Text>
                </>
            </TouchableRipple>
        </View>
    );
}
