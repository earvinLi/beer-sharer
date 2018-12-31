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
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
  },
  titleStyle: {
    fontSize: 18,
    lineHeight: 40,
  },
};

// Component Definition
function DialogConfirm(props) {
  const {
    children,
    title,
    isOpen,
    onAccept,
    onDecline,
  } = props;

  const {
    titleStyle,
    containerStyle,
  } = styles;

  return (
    <Modal
      animationType="fade"
      transparent
      visible={isOpen}
    >
      <View style={containerStyle}>
        <CardSection>
          <Text style={titleStyle}>{title}</Text>
        </CardSection>
        <CardSection>
          {children}
        </CardSection>
        <CardSection>
          <Button onPress={onDecline}>CANCEL</Button>
          <Button onPress={onAccept}>OK</Button>
        </CardSection>
      </View>
    </Modal>
  );
}

// Prop Validations
DialogConfirm.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
  onAccept: PropTypes.func.isRequired,
  onDecline: PropTypes.func.isRequired,
};

DialogConfirm.defaultProps = {
  isOpen: false,
};

export default DialogConfirm;
