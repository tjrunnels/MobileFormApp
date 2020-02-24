import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button, TouchableHighlight, TouchableNativeFeedback} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

import { MonoText } from '../components/StyledText';

import styles from '../allStyles';

export default function HomeScreen({navigation}) {

  //variables
  const home_front_logo = <Image source={require("../assets/images/300x200.png")} style={{width:300}}/>;



  return (
    <View style={styles.home_container}>
      <DevelopmentModeNotice />




       {/* Top, main logo on home page */}
       <View style={styles.home_welcomeContainer}>
          {home_front_logo}
      </View>


      <ScrollView style={styles.home_container} contentContainerStyle={styles.home_contentContainer}>


        <View style={styles.home_getStartedContainer}>   
          <Text style={styles.home_getStartedText}>Head over to the form page</Text>

          <TouchableOpacity 
          style={styles.home_formButton} 
          onPress={() => navigation.navigate('Form')}
          >
              <Text style={styles.home_formButtonText}>BETER</Text>
          </TouchableOpacity>


        </View>


        <View style={styles.home_helpContainer}>
          <TouchableOpacity onPress={handleHelpPress} style={styles.home_helpLink}>
            <Text style={styles.home_helpLinkText}>Help, it didn’t automatically reload!</Text>
          </TouchableOpacity>
        </View>


      </ScrollView>

      <View style={styles.home_tabBarInfoContainer}>
        <Text style={styles.home_tabBarInfoText}>This is a tab bar. You can edit it in:</Text>

        <View style={[styles.home_codeHighlightContainer, styles.home_navigationFilename]}>
          <MonoText style={styles.home_codeHighlightText}>navigation/BottomTabNavigator.js</MonoText>
        </View>
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.home_helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.home_developmentModeText}>
        Development mode is enabled: your app will be slower but you can use useful development
        tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.home_developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   developmentModeText: {
//     marginBottom: 20,
//     color: 'rgba(0,0,0,0.4)',
//     fontSize: 14,
//     lineHeight: 19,
//     textAlign: 'center',
//   },
//   contentContainer: {
//     paddingTop: 30,
//   },
//   welcomeContainer: {
//     alignItems: 'center',
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   welcomeImage: {
//     width: 100,
//     height: 80,
//     resizeMode: 'contain',
//     marginTop: 3,
//     marginLeft: -10,
//   },
//   getStartedContainer: {
//     alignItems: 'center',
//     marginHorizontal: 50,
//   },
//   homeScreenFilename: {
//     marginVertical: 7,
//   },
//   codeHighlightText: {
//     color: 'rgba(96,100,109, 0.8)',
//   },
//   codeHighlightContainer: {
//     backgroundColor: 'rgba(0,0,0,0.05)',
//     borderRadius: 3,
//     paddingHorizontal: 4,
//   },
//   getStartedText: {
//     fontSize: 17,
//     color: 'rgba(96,100,109, 1)',
//     lineHeight: 24,
//     textAlign: 'center',
//   },
//   tabBarInfoContainer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     ...Platform.select({
//       ios: {
//         shadowColor: 'black',
//         shadowOffset: { width: 0, height: -3 },
//         shadowOpacity: 0.1,
//         shadowRadius: 3,
//       },
//       android: {
//         elevation: 20,
//       },
//     }),
//     alignItems: 'center',
//     backgroundColor: '#fbfbfb',
//     paddingVertical: 20,
//   },
//   tabBarInfoText: {
//     fontSize: 17,
//     color: 'rgba(96,100,109, 1)',
//     textAlign: 'center',
//   },
//   navigationFilename: {
//     marginTop: 5,
//   },
//   helpContainer: {
//     marginTop: 15,
//     alignItems: 'center',
//   },
//   helpLink: {
//     paddingVertical: 15,
//   },
//   helpLinkText: {
//     fontSize: 14,
//     color: '#2e78b7',
//   },
//   formButton:{
//     marginRight:40,
//     marginLeft:40,
//     marginTop:10,
//     paddingTop:20,
//     paddingBottom:20,
//     borderRadius:10,
//     borderWidth: 1,
//     backgroundColor:'#68a0cf',
//     borderColor: '#fff',
//      width: 300
//   },

//   formButtonText: {
//      fontSize:50,
//      fontWeight:"bold",
//      textAlign:"center",
//      fontFamily:"Papyrus",
//    },

// });
