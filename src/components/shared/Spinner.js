// External Dependencies
import React from 'react';
import {
  ActivityIndicator,
  Text,
  View,
} from 'react-native';

// Component Definition
const Spinner = (props) => {
  const {
    loadingItemsLabel,
    size,
  } = props;

  const {
    loadingWordsStyle,
    spinnerStyle,
  } = styles;

  const loadingWordsElement = loadingItemsLabel
    && <Text style={loadingWordsStyle} >Loading {loadingItemsLabel}...</Text>;

  return (
    <View style={spinnerStyle}>
      <ActivityIndicator size={size || 'large'} />
      {loadingWordsElement}
    </View>
  );
};

const styles = {
  loadingWordsStyle: {
    fontSize: 18,
    paddingTop: 12,
  },
  spinnerStyle: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
};

export { Spinner };
