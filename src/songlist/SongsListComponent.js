import React from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import songsListStyle from './songsListStyle';

const SongsListComponent = props => {
  const {data, progress, refreshing, onPressItem, getAPIData} = props;
  const renderSeparator = () => {
    return <View style={songsListStyle.seperator} />;
  };
  const renderSongItem = item => {
    return (
      <TouchableOpacity
        style={songsListStyle.touchable_style}
        onPress={() => {
          onPressItem(item);
        }}>
        <View style={songsListStyle.image_container}>
          <Image
            source={{uri: item.artworkUrl100}}
            style={songsListStyle.image_style}
          />
        </View>
        <View style={songsListStyle.text_container}>
          <Text style={songsListStyle.color_dark}>{item.trackName}</Text>
          <View style={songsListStyle.directionRow}>
            <Text style={songsListStyle.flex_05_dark}>{item.artistName}</Text>
            <Text style={songsListStyle.flex_05_dark}>
              {msToTime(item.trackTimeMillis)}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  function msToTime(duration) {
    var milliseconds = Math.floor((duration % 1000) / 100),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      minutes = minutes < 10 ? '0' + minutes : minutes;
    return minutes + ' minutes';
  }

  return (
    <View style={songsListStyle.flex_1}>
      <View style={songsListStyle.toolbar_title}>
        <Text style={songsListStyle.toolbar_text}>SONGS</Text>
      </View>
      {progress == true ? (
        <View style={songsListStyle.progress_view}>
          <AnimatedCircularProgress
            size={80}
            width={10}
            fill={100}
            tintColor="#00e0ff"
            backgroundColor="#3d5875"
          />
          <Text>Please wait</Text>
        </View>
      ) : (
        <View style={songsListStyle.flex_09}>
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={getAPIData} />
            }
            renderItem={({item}) => renderSongItem(item)}
            ItemSeparatorComponent={renderSeparator}
          />
        </View>
      )}
    </View>
  );
};

export default SongsListComponent;
