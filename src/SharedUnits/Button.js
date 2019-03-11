// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';

// Internal Dependencies
import { blue } from '../App/Theme';

// Local Variables
const { blue700 } = blue;

const styles = {
  basicButtonStyle: {
    backgroundColor: '#fff',
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
  },
  buttonBorderStyle: {
    borderColor: blue700,
    borderRadius: 5,
    borderWidth: 1,
  },
  buttonDisabledStyle: {
    color: '#d3d3d3',
  },
  textBasicStyle: {
    alignSelf: 'center',
    color: blue700,
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
    disabled,
    hasBorder,
    onPress,
  } = props;

  const {
    basicButtonStyle,
    buttonBorderStyle,
    buttonDisabledStyle,
    textBasicStyle,
  } = styles;

  const buttonStyle = [basicButtonStyle];
  if (hasBorder) buttonStyle.push(buttonBorderStyle);

  const textStyle = [textBasicStyle];
  if (disabled) textStyle.push(buttonDisabledStyle);

  return (
    <TouchableOpacity
      onPress={disabled ? null : onPress}
      style={buttonStyle}
    >
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
}

// Prop Validations
Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  hasBorder: PropTypes.bool,
  onPress: PropTypes.func,
};

Button.defaultProps = {
  disabled: false,
  hasBorder: true,
  onPress: null,
};

export default Button;
