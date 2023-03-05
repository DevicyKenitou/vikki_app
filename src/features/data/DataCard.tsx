import { useEffect, useState } from "react";
import { Dimensions, View } from "react-native";
import { ProgressChart } from "react-native-chart-kit";

export default function DataCard({}) {
    // each value represents a goal ring in Progress chart
    const [data, setData] = useState([0.4, 0.6, 0.8]);

    useEffect(() => {
        setTimeout(() => {
            data[0] = 0.6;
            data[1] = 0.2;
            setData([...data]);
        }, 1000);
    }, []);

    return (
        <View
            style={{
                marginVertical: 10,
                marginHorizontal: 40,
                borderRadius: 16,
                overflow: "hidden",
            }}
        >
            <ProgressChart
                data={data}
                width={Dimensions.get("screen").width - 80}
                height={220}
                chartConfig={{
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: "#fb8c00",
                    backgroundGradientTo: "#ffa726",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16,
                    },
                }}
            />

        </View>
    );
}
