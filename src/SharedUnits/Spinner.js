// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import {
  ActivityIndicator,
  Text,
  View,
  ViewPropTypes,
} from 'react-native';

// Local Variables
const styles = {
  containerStyle: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  loadingTextStyle: {
    fontSize: 18,
    paddingTop: 12,
  },
};

// Component Definition
function Spinner(props) {
  const {
    loadingText,
    size,
    variantStyle,
  } = props;

  const {
    containerStyle,
    loadingTextStyle,
  } = styles;

  return (
    <View style={[containerStyle, variantStyle]}>
      <ActivityIndicator size={size} />
      {/* TODO: Change not to use Boolean? */}
      {Boolean(loadingText) && (
        <Text style={loadingTextStyle}>
          {loadingText}
        </Text>
      )}
    </View>
  );
}

// Prop Validations
Spinner.propTypes = {
  loadingText: PropTypes.string,
  size: PropTypes.string,
  variantStyle: ViewPropTypes.style,
};

Spinner.defaultProps = {
  loadingText: '',
  size: 'large',
  variantStyle: {},
};

export default Spinner;
