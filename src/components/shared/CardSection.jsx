// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

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
    style,
  } = props;

  return <View style={[styles.containerStyle, style]}>{children}</View>;
}

// Prop Validations
CardSection.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.shape(PropTypes.object),
};

CardSection.defaultProps = {
  style: {},
};

export default CardSection;
