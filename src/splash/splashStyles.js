import React from 'react';
import {StyleSheet} from 'react-native';

const splashStyles = StyleSheet.create({
  main_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B6CAFF',
  },
  image_view: {resizeMode: 'contain', height: 300, width: 300},
});

export default splashStyles;
