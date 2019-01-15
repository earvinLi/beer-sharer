// External Dependencies
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Internal Dependencies
import DialogConfirm from '../SharedUnits/DialogConfirm';
import Input from '../SharedUnits/Input';

// Local Dependencies
import { friendAddDialogClose } from './actions/FriendAction';
import { friendSearchInfoUpdate } from './actions/FriendSearchAction';

// Component Definition
class FriendAddDialog extends Component {
  onAcceptButtonPress = () => {};

  onDeclineButtonPress = () => {
    const { onFriendAddDialogClose } = this.props;

    return onFriendAddDialogClose();
  };

  render() {
    const {
      emailToSearch,
      isFriendAddDialogOpen,
      onFriendSearchInfoUpdate,
    } = this.props;

    return (
      <DialogConfirm
        acceptButtonText="ADD"
        isOpen={isFriendAddDialogOpen}
        onAccept={this.onAcceptButtonPress}
        onDecline={this.onDeclineButtonPress}
        title="Search User"
      >
        <Input
          autoCapitalize="none"
          onChange={value => onFriendSearchInfoUpdate({ prop: 'emailToSearch', value })}
          onSubmit={() => {}}
          placeholder="Enter an emaill to search"
          returnKeyType="search"
          value={emailToSearch}
        />
      </DialogConfirm>
    );
  }
}

// Prop Validations
FriendAddDialog.propTypes = {
  emailToSearch: PropTypes.string,
  isFriendAddDialogOpen: PropTypes.bool.isRequired,
  onFriendAddDialogClose: PropTypes.func.isRequired,
  onFriendSearchInfoUpdate: PropTypes.func.isRequired,
};

FriendAddDialog.defaultProps = {
  emailToSearch: '',
};

const mapStateToProps = (state) => {
  const {
    emailToSearch,
    isOpen,
  } = state.Friend.friendAddDialog;

  return {
    emailToSearch,
    isFriendAddDialogOpen: isOpen,
  };
};

export default connect(mapStateToProps, {
  onFriendAddDialogClose: friendAddDialogClose,
  onFriendSearchInfoUpdate: friendSearchInfoUpdate,
})(FriendAddDialog);
