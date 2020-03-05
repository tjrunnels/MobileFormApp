import * as React from 'react';
import { Image, ImageBackground, Platform, StyleSheet, Text, TouchableOpacity, View, Button, TouchableHighlight, TouchableNativeFeedback} from 'react-native';

import styles from '../allStyles';

export default class BackgroundWrapper extends React.Component {
    constructor(props){
        super(props);
     
        this.state = {
           backImage: require('../assets/images/mobileappbackground.jpeg'),
        }
     }


    render() {
      return (
        <ImageBackground source={this.state.backImage} style={styles.app_backgroundImage}>
            { this.props.children }
        </ImageBackground>
      );
    }
  }
  