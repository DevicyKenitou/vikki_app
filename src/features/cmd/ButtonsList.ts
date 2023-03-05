import { VIKKI_Come, VIKKI_Emergency, VIKKI_Heartbeat, VIKKI_Temperature } from "vikki/src/services.server"

/*

                <Buttons1 
                    title="Faire venir VIKKI"
                    bgColor="#1ecd1a"
                    imgSrc={require("vikki/src/assets/cmd-icons/viens.png")}
                    onPress={()=>{ VIKKI_Come(IP) }}
                />
                <Buttons1 
                    title="Température"
                    bgColor="#e9307d"
                    imgSrc={require("vikki/src/assets/cmd-icons/thermometer.png")}
                    onPress={()=>{ VIKKI_Temperature(IP) }}
                />
                <Buttons1 
                    title="Pouls"
                    bgColor="#e59d31"
                    imgSrc={require("vikki/src/assets/cmd-icons/heartbeat.png")}
                    onPress={()=>{ VIKKI_Heartbeat(IP) }}
                />
                <Buttons1 
                    title="Appel d'URGENCE"
                    bgColor="#e53131"
                    imgSrc={require("vikki/src/assets/cmd-icons/emergency.png")}
                    onPress={()=>{ VIKKI_Emergency(IP) }}
                />

*/

export default [
    {
        title: "Appeler VIKKI",
        command: VIKKI_Come,
        icon: require("vikki/src/assets/cmd-icons/call.png"),
        bgColor: '#6cf56a',
        flex: .4,
    },
    {
        title: "Température",
        command: VIKKI_Temperature,
        icon: require("vikki/src/assets/cmd-icons/celsius.png"),
        bgColor: '#ee6aa1',
        flex: .5,
    },
    {
        title: "Pouls",
        command: VIKKI_Heartbeat,
        icon: require("vikki/src/assets/cmd-icons/heartbeat.png"),
        bgColor: '#ebac3c',
        flex: .3,
    },
    {
        title: "Appel d'URGENCE",
        command: VIKKI_Emergency,
        icon: require("vikki/src/assets/cmd-icons/sos.png"),
        bgColor: '#f35757',
        flex: .6,
    }
]