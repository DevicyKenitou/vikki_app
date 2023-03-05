import * as SMS from 'expo-sms';
import { Alert } from 'react-native';


export async function SendSMS(){
    const isAvailable = await SMS.isAvailableAsync();
    if (isAvailable) {
        // do your SMS stuff here
        ProcessSendSMS();
    } else {
        Alert.alert(
            'Erreur, pas de services SMS disponibles',
        )
    }
}

export async function ProcessSendSMS(){
    const { result } = await SMS.sendSMSAsync(
        ['0651778450'],
        'Kevin t nul !!!',
        /*{
          attachments: {
            uri: '../assets/test.png',
            mimeType: 'image/png',
            filename: 'myfile.png',
          },
        }*/
      );

    console.log(result);
}