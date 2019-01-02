// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import {
  Text,
  TextInput,
  View,
} from 'react-native';

// Local Variables
const styles = {
  containerStyle: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    height: 40,
  },
  labelStyle: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 20,
  },
  inputStyle: {
    color: '#000',
    flex: 2,
    fontSize: 18,
    height: 20,
    lineHeight: 23,
    paddingLeft: 5,
    paddingRight: 5,
    width: 100,
  },
};

// Component Definition
function Input(props) {
  const {
    autoCapitalize,
    label,
    // Name from material-ui
    onChange,
    placeholder,
    secureTextEntry,
    value,
  } = props;

  const {
    containerStyle,
    labelStyle,
    inputStyle,
  } = styles;

  return (
    <View style={containerStyle}>
      {Boolean(label) && <Text style={labelStyle}>{label}</Text>}
      <TextInput
        autoCapitalize={autoCapitalize}
        autoCorrect={false}
        onChangeText={onChange}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={inputStyle}
        value={value}
      />
    </View>
  );
}

// Prop Validations
Input.propTypes = {
  autoCapitalize: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

Input.defaultProps = {
  autoCapitalize: 'sentences',
  label: '',
  onChange: null,
  placeholder: '',
  secureTextEntry: false,
};

export default Input;
