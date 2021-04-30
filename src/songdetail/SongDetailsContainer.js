import React from 'react';
import SongDetailsComponent from './SongDetailsComponent';

const SongDetailsContainer = props => {
  const {route} = props;
  return <SongDetailsComponent route={route} />;
};

export default SongDetailsContainer;
