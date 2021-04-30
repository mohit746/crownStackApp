import React from 'react';
import {View, Image} from 'react-native';
import splashStyles from './splashStyles';

const SplashComponent = () => {
  return (
    <View style={splashStyles.main_container}>
      <Image
        source={require('../assets/images.png')}
        style={splashStyles.image_view}
      />
    </View>
  );
};

export default SplashComponent;
