// External Dependencies
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Internal Dependencies
import DialogConfirm from '../SharedUnits/DialogConfirm';
import EmptyState from '../SharedUnits/EmptyState';
import Input from '../SharedUnits/Input';
import ListItem from '../SharedUnits/ListItem';

// Local Dependencies
import { closeFriendAddDialog } from './actions/FriendAction';
import {
  searchFriend,
  updateFriendSearchInfo,
} from './actions/FriendSearchAction';

// Local Variables
const styles = {
  emptyStateStyle: {
    height: 114,
  },
  inputStyle: {
    borderBottomColor: '#f5f5f5',
    borderBottomWidth: 1,
    flex: 0,
  },
};

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
      userFound,
    } = this.props;

    const {
      emptyStateStyle,
      inputStyle,
    } = styles;

    const resultSection = Object.keys(userFound).length
      ? (
        <ListItem
          primaryTitle={userFound.name}
          secondaryTitle={userFound.email}
        />
      )
      : (
        <EmptyState
          secondaryText="To search a user,
          please enter an email in the field above and press Search."
          supplementaryIcon={(
            <MaterialCommunityIcons
              color="#bdbdbd"
              name="account-search"
              size={48}
            />
          )}
          variantStyle={emptyStateStyle}
        />
      );

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
          variantStyle={inputStyle}
        />
        {resultSection}
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
  userFound: PropTypes.shape({}),
};

FriendAddDialog.defaultProps = {
  emailToSearch: '',
  userFound: {},
};

const mapStateToProps = (state) => {
  const {
    emailToSearch,
    isOpen,
    isSearching,
    userFound,
  } = state.Friend.friendAddDialog;

  return {
    emailToSearch,
    isFriendAddDialogOpen: isOpen,
    isSearching,
    userFound,
  };
};

export default connect(mapStateToProps, {
  onCloseFriendAddDialog: closeFriendAddDialog,
  onSearchFriend: searchFriend,
  onUpdateFriendSearchInfo: updateFriendSearchInfo,
})(FriendAddDialog);
