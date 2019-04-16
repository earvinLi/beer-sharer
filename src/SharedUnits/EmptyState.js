// External Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  ViewPropTypes,
} from 'react-native';

// Internal Dependencies
import { grey } from '../App/Theme';

// Local Variables
const { grey500 } = grey;

const styles = {
  containerStyle: {
    justifyContent: 'center',
    paddingLeft: 18,
    paddingRight: 18,
  },
  secondaryTextStyle: {
    alignSelf: 'center',
    color: grey500,
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
    variantStyle,
  } = props;

  const {
    containerStyle,
    secondaryTextStyle,
    supplementaryIconContainerStyle,
  } = styles;

  return (
    <View style={[containerStyle, variantStyle]}>
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
  variantStyle: ViewPropTypes.style,
};

EmptyState.defaultProps = {
  supplementaryIcon: null,
  variantStyle: {},
};

export default EmptyState;
