import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import Config from '../apis/config';
import SongsListComponent from './SongsListComponent';

const SongsListContainer = props => {
  const {navigation} = props;
  const [data, setData] = useState({});
  const [progress, setProgress] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getAPIData();
  }, []);

  const getAPIData = async () => {
    try {
      setData([]);
      setProgress(true);
      let response = await fetch(Config.url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      let json = await response.json();
      setProgress(false);
      setRefreshing(false);
      setData(json.results);
    } catch (error) {
      console.error(error);
    }
  };

  const onPressItem = item => {
    navigation.navigate('SongDetailsContainer', item);
  };
  // #B6CAFF light
  // #336BFF dark

  return (
    <SongsListComponent
      data={data}
      progress={progress}
      refreshing={refreshing}
      onPressItem={onPressItem}
      getAPIData={getAPIData}
    />
  );
};

export default SongsListContainer;
