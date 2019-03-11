// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import {
  View,
  ViewPropTypes,
} from 'react-native';

// Internal Dependencies
import { grey } from '../App/Theme';

// Local Variables
const { grey300 } = grey;

const styles = {
  containerStyle: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: grey300,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 5,
    position: 'relative',
  },
};

// Component Definition
function CardSection(props) {
  const {
    children,
    variantStyle,
  } = props;

  return <View style={[styles.containerStyle, variantStyle]}>{children}</View>;
}

// Prop Validations
CardSection.propTypes = {
  children: PropTypes.node.isRequired,
  variantStyle: ViewPropTypes.style,
};

CardSection.defaultProps = {
  variantStyle: {},
};

export default CardSection;
