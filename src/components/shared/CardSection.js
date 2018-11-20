// External Dependencies
import React from 'react';
import { View } from 'react-native';

// Component Definition
const CardSection = (props) => {
  const {
    children,
    style
  } = props;

  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = {
  container: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 5,
    position: 'relative',
  },
};

export default CardSection;
