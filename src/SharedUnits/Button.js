// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';

// Local Variables
const styles = {
  basicButtonStyle: {
    backgroundColor: '#fff',
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
  },
  buttonBorderStyle: {
    borderColor: '#007aff',
    borderRadius: 5,
    borderWidth: 1,
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    // Why string not a num :(
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
};

// Component Definition
function Button(props) {
  const {
    children,
    hasBorder,
    onPress,
  } = props;

  const {
    basicButtonStyle,
    buttonBorderStyle,
    textStyle,
  } = styles;

  const buttonWithBorderStyle = [basicButtonStyle, buttonBorderStyle];

  return (
    <TouchableOpacity
      onPress={onPress}
      style={hasBorder ? buttonWithBorderStyle : basicButtonStyle}
    >
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
}

// Prop Validations
Button.propTypes = {
  children: PropTypes.node.isRequired,
  hasBorder: PropTypes.bool,
  onPress: PropTypes.func,
};

Button.defaultProps = {
  hasBorder: true,
  onPress: null,
};

export default Button;
