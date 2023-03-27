import { Alert } from "react-native";
import { Snackbar } from "react-native-paper";

export async function Request(IP, args){
    try{
        const url = IP + encodeURIComponent(args);
        console.log("=>", url)
        const resp = await fetch(url);
        console.log(await resp.text())
    }catch(err){
        console.log(err);

        return {
            errorMsg : "La commande \"" + (IP + encodeURIComponent(args)) + "\" a échouée.\n\n" + err.toString()
        }
    }
}

export async function VIKKI_Come(IP){
    return await Request(IP, 'viens');
}

export async function VIKKI_Temperature(IP){
    return await Request(IP, 'température');
}

export async function VIKKI_Heartbeat(IP){
    return await Request(IP, 'cardiaque');
}

export async function VIKKI_Emergency(IP){
    return await Request(IP, 'urgence');
}