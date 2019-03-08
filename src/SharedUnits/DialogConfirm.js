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
import Spinner from './Spinner';

// Local Variables
const styles = {
  buttonContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  contentContainerStyle: {
    flexDirection: 'column',
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
  spinnerStyle: {
    marginLeft: 5,
    marginRight: 5,
  },
  supplementaryActionContainerStyle: {
    flex: 1,
  },
  titleStyle: {
    fontSize: 18,
    lineHeight: 42,
  },
};

// Component Definition
function DialogConfirm(props) {
  const {
    acceptButtonDisabled,
    acceptButtonText,
    children,
    isAccepting,
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
    spinnerStyle,
    supplementaryActionContainerStyle,
    titleStyle,
  } = styles;

  const acceptButton = isAccepting
    ? (
      <Spinner
        size="small"
        variantStyle={spinnerStyle}
      />
    )
    : (
      <Button
        disabled={acceptButtonDisabled}
        hasBorder={false}
        onPress={onAccept}
      >
        {acceptButtonText || 'OK'}
      </Button>
    );

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
            {acceptButton}
          </View>
        </CardSection>
      </View>
    </Modal>
  );
}

// Prop Validations
DialogConfirm.propTypes = {
  acceptButtonDisabled: PropTypes.bool,
  acceptButtonText: PropTypes.string,
  children: PropTypes.node.isRequired,
  isAccepting: PropTypes.bool,
  isOpen: PropTypes.bool,
  onAccept: PropTypes.func.isRequired,
  onDecline: PropTypes.func.isRequired,
  supplementaryAction: PropTypes.node,
  title: PropTypes.string.isRequired,
};

DialogConfirm.defaultProps = {
  acceptButtonDisabled: false,
  acceptButtonText: '',
  isAccepting: false,
  isOpen: false,
  supplementaryAction: null,
};

export default DialogConfirm;
