import * as React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import BackgroundWrapper from '../components/BackgroundWrapper';

import styles from '../allStyles';

import PhotoItem from '../components/PhotoItem';

export default function PhotoScreen() {

  //tomdo: change this to global.Gwood.photosArray
  _photos = global.Gwood.photosArray;
  let printPhotos = _photos.map((a, i) => {
    return <PhotoItem key={i} photo={{uri: a}} num={a}/>                       
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
