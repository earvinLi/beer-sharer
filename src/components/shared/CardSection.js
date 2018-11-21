// External Dependencies
import React from 'react';
import { View } from 'react-native';

// Component Definition
const CardSection = (props) => {
  const {
    children,
    style
  } = props;

  return <View style={[styles.containerStyle, style]}>{children}</View>;
};

const styles = {
  containerStyle: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 5,
    position: 'relative',
  },
};

export { CardSection };
