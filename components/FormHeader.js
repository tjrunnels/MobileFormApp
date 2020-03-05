import * as React from 'react';
import { Image, Platform, StyleSheet, Text, Dimensions, TouchableOpacity, View, Button, TouchableHighlight, TouchableNativeFeedback, ImageBackground} from 'react-native';

import styles from '../allStyles';

const home_front_logo = require("../assets/images/gwood.png");



export default class FormHeader extends React.Component {
    render() {
      return (
        <ImageBackground
            source={require("../assets/images/form.jpg")} style={{width: Dimensions.get('window').width, height:200,
            justifyContent: 'center',
            alignItems:'center'
            }}
        >
          <View style={styles.formHeader_rectangle}>
              <Text style={styles.formHeader_text}>{this.props.title}</Text>
          </View>
        </ImageBackground>
      );
    }
  }
  