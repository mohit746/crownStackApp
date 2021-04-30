import React from 'react';
import {StyleSheet} from 'react-native';

const songDetailStyles = StyleSheet.create({
  flex_1: {
    flex: 1,
  },
  toolbar_title: {textAlign: 'center', color: 'white'},
  top_container: {
    flex: 0.1,
    justifyContent: 'center',
    backgroundColor: '#336BFF',
  },
  bottom_container: {flex: 0.9, alignItems: 'center'},
  text_16: {fontSize: 16, height: '10%'},
  image_preview_big: {
    resizeMode: 'contain',
    height: '60%',
    width: '70%',
  },
  height_20: {height: '20%'},
  font_20: {fontSize: 20},
  font_22: {fontSize: 22, color: 'white'},
  font_16: {fontSize: 16},
  font_16_white: {fontSize: 16, color: 'white'},
  button_text: {
    height: '10%',
    width: '100%',
    backgroundColor: '#336BFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default songDetailStyles;
