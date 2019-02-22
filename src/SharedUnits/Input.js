// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import {
  Text,
  TextInput,
  View,
  ViewPropTypes,
} from 'react-native';

// Local Variables
const styles = {
  containerStyle: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    height: 42,
  },
  labelStyle: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 21,
  },
  inputStyle: {
    color: '#000',
    flex: 2,
    fontSize: 18,
    height: 21,
    lineHeight: 24,
    paddingLeft: 12,
    paddingRight: 12,
    width: 96,
  },
};

// Component Definition
function Input(props) {
  const {
    autoCapitalize,
    label,
    // Name from Material-UI
    onChange,
    onSubmit,
    placeholder,
    returnKeyType,
    secureTextEntry,
    value,
    variantStyle,
  } = props;

  const {
    containerStyle,
    labelStyle,
    inputStyle,
  } = styles;

  return (
    <View style={[containerStyle, variantStyle]}>
      {Boolean(label) && <Text style={labelStyle}>{label}</Text>}
      <TextInput
        autoCapitalize={autoCapitalize}
        autoCorrect={false}
        onChangeText={onChange}
        onSubmitEditing={onSubmit}
        placeholder={placeholder}
        returnKeyType={returnKeyType}
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
  onSubmit: PropTypes.func,
  placeholder: PropTypes.string,
  returnKeyType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  variantStyle: ViewPropTypes.style,
};

Input.defaultProps = {
  autoCapitalize: 'sentences',
  label: '',
  onChange: null,
  onSubmit: null,
  placeholder: '',
  returnKeyType: 'go',
  secureTextEntry: false,
  variantStyle: {},
};

export default Input;
