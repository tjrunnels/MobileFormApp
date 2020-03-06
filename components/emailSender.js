import qs from 'qs';
import { Linking, Alert } from 'react-native';

export async function sendEmail(to, subject, body, options = {}) {

    await Alert.alert(
        'Opening Email App',
        'Glenwood will now write your Email. \n  Just click send!!!',
        [
          //Cancel option
          {text: 'Not Now',
            //onPress: () => stopEmail = true,
            style: 'cancel',
          },
          //Okay option
          {text: 'Okay', 
            onPress: () => {return openEmailApp(to,subject,body,options = {})},
          }
        ],
        {cancelable: true},
    );
}

async function openEmailApp(to, subject, body, options = {}) {
    const { cc, bcc } = options;

    let url = `mailto:${to}`;

    // Create email link query
    const query = qs.stringify({
        subject: subject,
        body: body,
        cc: cc,
        bcc: bcc
    });

    if (query.length) {
        url += `?${query}`;
    }

    // check if we can use this link
    const canOpen = await Linking.canOpenURL(url);

    if (!canOpen) {
        throw new Error('Provided URL can not be handled');
    }

    return Linking.openURL(url);
}