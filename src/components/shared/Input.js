import React from 'react';
import {
  Text,
  TextInput,
  View,
} from 'react-native';

const Input = (props) => {
  const {
    label,
    // Name from material-ui
    onChange,
    placeholder,
    secureTextEntry,
    value,
  } = props;

  const {
    container,
    labelStyle,
    input,
  } = styles;

  return (
    <View style={container}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        autoCorrect={false}
        onChangeText={onChange}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={input}
        value={value}
      />
    </View>
  );
};

const styles = {
  container: {
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
  input: {
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

export default Input;
