import * as React from 'react';
import { Text, Dimensions, View, ImageBackground} from 'react-native';

import styles from '../allStyles';

export default class FormHeader extends React.Component {
    render() {
      return (
        <ImageBackground
            source={this.props.picture}
            style={{
              width: Dimensions.get('window').width, 
              height:200,
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
  