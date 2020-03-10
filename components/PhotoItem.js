import * as React from 'react';
import { Text, Dimensions, View, ImageBackground, Image} from 'react-native';

var topBotMargin = 50;

export default class PhotoItem extends React.Component {
    render() {
      return (
     <View style={{backgroundColor: "black"}}>
        <ImageBackground
            source={this.props.photo}
            style={{
              width: Dimensions.get('window').width, 
              height:200,
              justifyContent: 'center',
              alignItems:'center',
              marginBottom: topBotMargin,
            }}
        >
          {/* <Text style={{color:"white"}}>{this.props.num}</Text> */}
        </ImageBackground>
        </View>
      );
    }
  }
  