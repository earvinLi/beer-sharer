// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

// Local Variables
// May change to shorthands by css-to-react-native in the future
const styles = {
  containerStyle: {
    borderBottomWidth: 0,
    borderColor: '#ddd',
    borderRadius: 2,
    borderWidth: 1,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
};

// Component Definition
// Change to normal function?
const Card = ({ children }) => <View style={styles.containerStyle}>{children}</View>;

// Prop Validations
Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
