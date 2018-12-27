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
    hasLabel,
    loadingItemsLabel,
    size,
  } = props;

  const {
    loadingWordsStyle,
    spinnerStyle,
  } = styles;

  const loadingWordsElement = hasLabel
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
  hasLabel: PropTypes.bool,
  loadingItemsLabel: PropTypes.string,
  size: PropTypes.string,
};

Spinner.defaultProps = {
  hasLabel: false,
  loadingItemsLabel: 'Items',
  size: 'large',
};

export default Spinner;
