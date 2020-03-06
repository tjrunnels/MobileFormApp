import * as React from 'react';
import { Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import styles from '../allStyles';

import FormClass from '../components/FormClass'
import FormHeader from '../components/FormHeader'
import BackgroundWrapper from '../components/BackgroundWrapper';


export default function FormScreen({route,navigation}) {
  
  //error page if the form page was reached out of use case
  if(global.Gwood.formChosen == null) {
    return(
      <View>
        <Text style={{fontSize:30, color:"red"}}>invalid formID.  Please restart the App</Text>
      </View>
    )
  }

  //varaibles
    var formInfo;
    //#region assigning formInfo the correct info based on formChosen
    switch(global.Gwood.formChosen) {
      case 0:
        formInfo = global.Gwood.form0; break;
      case 1:
        formInfo = global.Gwood.form1; break;
      case 2:
        formInfo = global.Gwood.form2; break;
      case 3:
        formInfo = global.Gwood.form3; break;
      case 4:
        formInfo = global.Gwood.form4; break;
      default: 
        formInfo = global.Gwood.form0; //hopefully we never get to this....
    }
    //#endregion
    var _formsNeeded = ("" + formInfo.formsNeeded).split(',');

    
  return (
    <BackgroundWrapper>      
        <KeyboardAwareScrollView
          extraHeight={10}
          extraScrollHeight={100}
        >

          <FormHeader title={formInfo.titles} picture={formInfo.picture}/>

          <View style={styles.formScreen_contentContainer}>
            <Text style={styles.formScreen_paragraphText}>{formInfo.paragraph}</Text>
          </View>

          <FormClass formsNeeded={_formsNeeded} />

      </KeyboardAwareScrollView>
    </BackgroundWrapper>
  );
}