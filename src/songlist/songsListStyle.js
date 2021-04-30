import React from 'react';
import {StyleSheet} from 'react-native';

const songsListStyle = StyleSheet.create({
  flex_1: {flex: 1},
  seperator: {
    height: 0.5,
    width: '70%',
    alignSelf: 'center',
    backgroundColor: 'grey',
  },
  toolbar_title: {
    flex: 0.1,
    justifyContent: 'center',
    backgroundColor: '#336BFF',
  },
  flex_09: {flex: 0.9},
  toolbar_text: {textAlign: 'center', color: 'white'},
  progress_view: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  touchable_style: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: '6%',
  },
  image_container: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image_style: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
  },
  text_container: {flex: 0.6, marginVertical: '4%'},
  color_dark: {color: '#336BFF'},
  flex_05_dark: {flex: 0.5, color: '#336BFF'},
  directionRow: {flexDirection: 'row'},
});

export default songsListStyle;
