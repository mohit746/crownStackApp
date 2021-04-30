import React, {useEffect, useState} from 'react';
import SplashComponent from './SplashComponent';

const SplashContainer = props => {
  const {navigation} = props;
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        routes: [{name: 'SongsListContainer'}],
      });
    }, 2000);
  }, []);

  return <SplashComponent />;
};

export default SplashContainer;
