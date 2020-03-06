import * as React from 'react';
import { Text, Dimensions, View, ImageBackground} from 'react-native';

const home_front_logo = require("../assets/images/contactUs.jpg");

var topBotMargin = 50;

export default class PhotoItem extends React.Component {
    render() {
      return (
     <View style={{backgroundColor: "black"}}>
        <ImageBackground
            source={home_front_logo}
            style={{
              width: Dimensions.get('window').width, 
              height:200,
              justifyContent: 'center',
              alignItems:'center',
              marginBottom: topBotMargin,
            }}
        >
          <Text style={{color:"white"}}>{this.props.source}</Text>
        </ImageBackground>
        </View>
      );
    }
  }
  