// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';

// Local Variables
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
}

// Prop Validations
Button.propTypes = {
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func,
};

Button.defaultProps = {
  onPress: null,
};

export default Button;
