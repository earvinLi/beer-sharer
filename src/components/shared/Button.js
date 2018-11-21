// External Dependencies
import React from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';

// Component Definition
const Button = (props) => {
  const {
    children,
    onPress,
  } = props;

  const {
    buttonStyle,
    textStyle,
  } = styles;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={buttonStyle}
    >
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderColor: '#007aff',
    borderRadius: 5,
    borderWidth: 1,
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
};

export { Button };