// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import {
  Image,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

// Local Variables
const styles = {
  containerStyle: {
    flexDirection: 'row',
    margin: 12,
  },
  imageStyle: {
    borderRadius: 21,
    height: 42,
    width: 42,
  },
  primaryTitleStyle: {
    fontSize: 18,
  },
  secondaryTitleStyle: {
    color: '#d3d3d3',
    fontSize: 15,
  },
  titleContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 21,
  },
};

// Component Definition
function ListItem(props) {
  const {
    image,
    onPress,
    primaryTitle,
    secondaryTitle,
  } = props;

  const {
    containerStyle,
    imageStyle,
    primaryTitleStyle,
    secondaryTitleStyle,
    titleContainerStyle,
  } = styles;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      {/* <TouchableWithoutFeedback /> needs <View />!!! */}
      <View style={containerStyle}>
        <Image
          source={{ uri: image }}
          style={imageStyle}
        />
        <View style={titleContainerStyle}>
          <Text style={primaryTitleStyle}>{primaryTitle}</Text>
          <Text style={secondaryTitleStyle}>{secondaryTitle}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

// Prop Validations
ListItem.propTypes = {
  image: PropTypes.string,
  onPress: PropTypes.func,
  primaryTitle: PropTypes.string.isRequired,
  secondaryTitle: PropTypes.string,
};

ListItem.defaultProps = {
  image: '',
  onPress: null,
  secondaryTitle: '',
};

export default ListItem;
