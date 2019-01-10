// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import {
  View,
  ViewPropTypes,
} from 'react-native';

// Local Variables
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
