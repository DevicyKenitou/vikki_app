import { Image, Text, TouchableOpacity, View } from "react-native";

export function Buttons1({
    title,
    bgColor,
    onPress,
    imgSrc
}){

    return (
        <View style={{ marginVertical : 10 }}>
            <TouchableOpacity 
                onPress={onPress}
                style={{
                    alignItems: 'center',
                    backgroundColor: bgColor ? bgColor : '#3083e9',
                    borderRadius: 60,
                    paddingHorizontal: 70,
                    paddingVertical: 8,
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}
            >
                <Image 
                    source={imgSrc}
                    style={{
                        width: 30,
                        height: 30,
                        position: 'absolute',
                        left: 15
                    }}
                />
                <Text style={{ fontSize: 25, color: '#fff'}}>
                    {title}
                </Text>
            </TouchableOpacity>
        </View>
    )

}