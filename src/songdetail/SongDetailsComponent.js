import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import songDetailStyles from './songDetailStyles';

const SongDetailsComponent = props => {
  const {route} = props;

  const msToTime = duration => {
    var milliseconds = Math.floor((duration % 1000) / 100),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      minutes = minutes < 10 ? '0' + minutes : minutes;
    return minutes + ' minutes';
  };

  return (
    <View style={songDetailStyles.flex_1}>
      <View style={songDetailStyles.top_container}>
        <Text style={songDetailStyles.toolbar_title}>SONG DETAIL</Text>
      </View>
      <View style={songDetailStyles.bottom_container}>
        <Text style={songDetailStyles.text_16}>
          Artist: {route.params.artistName}
        </Text>
        <Image
          source={{uri: route.params.artworkUrl100}}
          style={songDetailStyles.image_preview_big}
        />
        <View style={songDetailStyles.height_20}>
          <Text style={songDetailStyles.font_20}>
            Song: {route.params.trackName}
          </Text>
          <Text style={songDetailStyles.font_16}>
            Released on: {route.params.releaseDate}
          </Text>
          <Text style={songDetailStyles.font_16}>
            Duration: {msToTime(route.params.trackTimeMillis)}
          </Text>
        </View>
        <TouchableOpacity style={songDetailStyles.button_text}>
          <Text style={songDetailStyles.font_22}>BUY</Text>
          <Text style={songDetailStyles.font_16_white}>
            in {route.params.trackPrice} {route.params.currency}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SongDetailsComponent;
