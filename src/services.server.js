import { Alert } from "react-native";

export async function Request(IP, args){
    try{
        const url = IP + encodeURIComponent(args);
        console.log("=>", url)
        const resp = await fetch(url);
        console.log(await resp.text())
    }catch(err){
        console.log(err);
        Alert.alert(
            'Erreur serveur',
            "Requête : \"" + (IP + encodeURIComponent(args)) + "\"\n\n" +
            err.toString()
        )
    }
}

export async function VIKKI_Come(IP){
    await Request(IP, 'viens');
}

export async function VIKKI_Temperature(IP){
    await Request(IP, 'température');
}

export async function VIKKI_Heartbeat(IP){
    await Request(IP, 'pouls');
}

export async function VIKKI_Emergency(IP){
    await Request(IP, 'urgence');
}