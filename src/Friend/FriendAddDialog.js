// External Dependencies
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Internal Dependencies
import DialogConfirm from '../SharedUnits/DialogConfirm';
import Input from '../SharedUnits/Input';

// Local Dependencies
import { friendSearchInfoUpdate } from './actions/FriendAction';

// Component Definition
class FriendAddDialog extends Component {
  onAcceptButtonPress = () => {};

  onDeclineButtonPress = () => {};

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
  onFriendSearchInfoUpdate: PropTypes.func.isRequired,
};

FriendAddDialog.defaultProps = {
  emailToSearch: '',
};

const mapStateToProps = (state) => {
  const {
    friendAddForm,
    isFriendAddDialogOpen,
  } = state.firend.friendAddDialog;

  const { emailToSearch } = friendAddForm;

  return {
    emailToSearch,
    isFriendAddDialogOpen,
  };
};

export default connect(mapStateToProps, {
  onFriendSearchInfoUpdate: friendSearchInfoUpdate,
})(FriendAddDialog);
