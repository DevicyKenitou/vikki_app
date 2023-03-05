import { FlashList } from "@shopify/flash-list";
import { FlatList as RNFlatList } from "react-native";

export default function FlatList(props){
    return (
        <RNFlatList
            {...props}
            contentContainerStyle={[
                {
                    paddingHorizontal: 20,
                    paddingVertical: 20,
                },
                props.contentContainerStyle
            ]}
        />
    )
}