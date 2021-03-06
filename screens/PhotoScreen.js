import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import BackgroundWrapper from '../components/BackgroundWrapper';

import PhotoItem from '../components/PhotoItem';

import styles from '../allStyles';


export default function PhotoScreen() {

  //tomdo: change this to global.Gwood.photosArray
  _forms = global.Gwood.forms;
  let printPhotos = _forms.map((a, i) => {
    return <PhotoItem source={a}/>                       
  });

  return (
    <BackgroundWrapper>
    <ScrollView>  

      <View style={styles.about_hoursContainer}>
        <Text style={styles.photo_headerText}>Some of our favorite pictures: </Text>
      </View>

      {printPhotos}

      {/* a closing paragraph if i want it later */}
      {/* <View style={styles.about_contentContainer}>
        <Text style={styles.about_paragraphText}>{global.Gwood.about.paragraph}</Text>
      </View> */}


    </ScrollView>

  </BackgroundWrapper>
  );
}
