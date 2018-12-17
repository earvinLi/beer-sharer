// External Dependencies
import React from 'react';
import {
  Modal,
  Text,
  View,
} from 'react-native';

// Internal Dependencies
import { Button } from './Button';
import { CardSection } from './CardSection';

// Component Definition
const Alert = (props) => {
  const {
    isOpen,
    onAccept,
    onDecline,
    title,
  } = props;

  const {
    containerStyle,
    titleStyle,
  } = styles;

  return (
    <Modal
      animationType="slide"
      transparent
      visible={isOpen}
    >
      <View style={containerStyle}>
        <CardSection style={{ justifyContent: 'center' }}>
          <Text style={titleStyle}>{title}</Text>
        </CardSection>
        <CardSection>
          <Button onPress={onDecline}>CANCEl</Button>
          <Button onPress={onAccept}>OK</Button>
        </CardSection>
      </View>
    </Modal>
  );
};

const styles = {
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
  },
  titleStyle: {
    flex: 1,
    fontSize: 18,
    lineHeight: 40,
    textAlign: 'center',
  },
};

export { Alert };
