// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import {
  ActivityIndicator,
  Text,
  View,
} from 'react-native';

// Local Variables
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

// Component Definition
function Spinner(props) {
  const {
    loadingItemsLabel,
    size,
  } = props;

  const {
    loadingWordsStyle,
    spinnerStyle,
  } = styles;

  const loadingWordsElement = loadingItemsLabel
    && (
      <Text style={loadingWordsStyle}>
        Loading&nbsp;
        {loadingItemsLabel}
        ...
      </Text>
    );

  return (
    <View style={spinnerStyle}>
      <ActivityIndicator size={size} />
      {loadingWordsElement}
    </View>
  );
}

// Prop Validations
Spinner.propTypes = {
  loadingItemsLabel: PropTypes.string,
  size: PropTypes.string,
};

Spinner.defaultProps = {
  loadingItemsLabel: 'Items',
  size: 'large',
};

export default Spinner;
