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