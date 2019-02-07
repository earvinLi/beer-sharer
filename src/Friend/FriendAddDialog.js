// External Dependencies
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Internal Dependencies
import DialogConfirm from '../SharedUnits/DialogConfirm';
import Input from '../SharedUnits/Input';

// Local Dependencies
import { closeFriendAddDialog } from './actions/FriendAction';
import {
  searchFriend,
  updateFriendSearchInfo,
} from './actions/FriendSearchAction';

// Component Definition
class FriendAddDialog extends Component {
  onPressAcceptButton = () => {};

  onPressDeclineButton = () => {
    const { onCloseFriendAddDialog } = this.props;

    return onCloseFriendAddDialog();
  };

  onPressSearchButton = () => {
    const {
      emailToSearch,
      onSearchFriend,
    } = this.props;

    return onSearchFriend(emailToSearch);
  };

  render() {
    const {
      emailToSearch,
      isFriendAddDialogOpen,
      onUpdateFriendSearchInfo,
    } = this.props;

    return (
      <DialogConfirm
        acceptButtonText="ADD"
        isOpen={isFriendAddDialogOpen}
        onAccept={this.onPressSearchButton}
        onDecline={this.onPressDeclineButton}
        title="Search User"
      >
        <Input
          autoCapitalize="none"
          onChange={value => onUpdateFriendSearchInfo('emailToSearch', value)}
          onSubmit={this.onPressSearchButton}
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
  onCloseFriendAddDialog: PropTypes.func.isRequired,
  onSearchFriend: PropTypes.func.isRequired,
  onUpdateFriendSearchInfo: PropTypes.func.isRequired,
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
  onCloseFriendAddDialog: closeFriendAddDialog,
  onSearchFriend: searchFriend,
  onUpdateFriendSearchInfo: updateFriendSearchInfo,
})(FriendAddDialog);
