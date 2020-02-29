import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button, TouchableHighlight, TouchableNativeFeedback} from 'react-native';

import styles from '../allStyles';


export default class FormButton extends React.Component {
    render() {
      return (

        <TouchableOpacity 
          style={styles.home_formButton} 
          onPress={this.props.onPress}
          >
            <Text style={styles.home_formButtonText}>
                {this.props.name} {this.props.suffix}
            </Text>
          </TouchableOpacity>

      );
    }
  }
  