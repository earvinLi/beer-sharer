// External Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
} from 'react-native';

// Local Variables
const styles = {
  containerStyle: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 18,
    paddingRight: 18,
  },
  secondaryTextStyle: {
    alignSelf: 'center',
    color: '#9e9e9e',
    fontSize: 15,
    textAlign: 'center',
  },
  supplementaryIconContainerStyle: {
    alignSelf: 'center',
  },
};

// Component Definition
function EmptyState(props) {
  const {
    secondaryText,
    supplementaryIcon,
  } = props;

  const {
    containerStyle,
    secondaryTextStyle,
    supplementaryIconContainerStyle,
  } = styles;

  return (
    <View style={containerStyle}>
      <View style={supplementaryIconContainerStyle}>
        {supplementaryIcon}
      </View>
      <Text style={secondaryTextStyle}>
        {secondaryText}
      </Text>
    </View>
  );
}

// Prop Validations
EmptyState.propTypes = {
  secondaryText: PropTypes.string.isRequired,
  supplementaryIcon: PropTypes.node,
};

EmptyState.defaultProps = {
  supplementaryIcon: null,
};

export default EmptyState;
