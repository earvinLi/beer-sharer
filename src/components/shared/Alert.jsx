// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import {
  Modal,
  Text,
  View,
} from 'react-native';

// Local Dependencies
import Button from './Button';
import CardSection from './CardSection';

// Local Variables
const styles = {
  alertContentStyle: {
    flex: 1,
    fontSize: 18,
    lineHeight: 40,
    textAlign: 'center',
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
  },
};

// Component Definition
function Alert(props) {
  const {
    alertContent,
    isOpen,
    onAccept,
    onDecline,
  } = props;

  const {
    alertContentStyle,
    containerStyle,
  } = styles;

  return (
    <Modal
      animationType="slide"
      transparent
      visible={isOpen}
    >
      <View style={containerStyle}>
        <CardSection style={{ justifyContent: 'center' }}>
          <Text style={alertContentStyle}>{alertContent}</Text>
        </CardSection>
        <CardSection>
          <Button onPress={onDecline}>CANCEl</Button>
          <Button onPress={onAccept}>OK</Button>
        </CardSection>
      </View>
    </Modal>
  );
}

// Prop Validations
Alert.propTypes = {
  alertContent: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
  onAccept: PropTypes.func.isRequired,
  onDecline: PropTypes.func.isRequired,
};

Alert.defaultProps = {
  isOpen: false,
};

export default Alert;
