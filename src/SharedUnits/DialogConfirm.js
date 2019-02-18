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
  buttonContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  contentContainerStyle: {
    flexDirection: 'column',
    height: 180,
    padding: 0,
  },
  dialogContainerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 18,
    paddingRight: 18,
    position: 'relative',
  },
  supplementaryActionContainerStyle: {
    flex: 1,
  },
  titleStyle: {
    fontSize: 18,
    lineHeight: 40,
  },
};

// Component Definition
function DialogConfirm(props) {
  const {
    acceptButtonText,
    children,
    isOpen,
    onAccept,
    onDecline,
    supplementaryAction,
    title,
  } = props;

  const {
    buttonContainerStyle,
    contentContainerStyle,
    dialogContainerStyle,
    supplementaryActionContainerStyle,
    titleStyle,
  } = styles;

  return (
    <Modal
      animationType="fade"
      transparent
      visible={isOpen}
    >
      <View style={dialogContainerStyle}>
        <CardSection>
          <Text style={titleStyle}>{title}</Text>
        </CardSection>
        <CardSection variantStyle={contentContainerStyle}>
          {children}
        </CardSection>
        <CardSection>
          <View style={supplementaryActionContainerStyle}>
            {supplementaryAction}
          </View>
          <View style={buttonContainerStyle}>
            <Button
              hasBorder={false}
              onPress={onDecline}
            >
              CANCEL
            </Button>
            <Button
              hasBorder={false}
              onPress={onAccept}
            >
              {acceptButtonText || 'OK'}
            </Button>
          </View>
        </CardSection>
      </View>
    </Modal>
  );
}

// Prop Validations
DialogConfirm.propTypes = {
  acceptButtonText: PropTypes.string,
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  onAccept: PropTypes.func.isRequired,
  onDecline: PropTypes.func.isRequired,
  supplementaryAction: PropTypes.node,
  title: PropTypes.string.isRequired,
};

DialogConfirm.defaultProps = {
  acceptButtonText: '',
  isOpen: false,
  supplementaryAction: null,
};

export default DialogConfirm;
