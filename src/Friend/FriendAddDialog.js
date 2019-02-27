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
import Spinner from '../SharedUnits/Spinner';

// Local Dependencies
import { closeFriendAddDialog } from './actions/FriendAction';
import {
  addFriend,
  selectFriend,
} from './actions/FriendAddAction';
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
  listItemStyle: {
    borderColor: '#007aff',
    borderRadius: 5,
    borderWidth: 1,
  },
  spinnerStyle: {
    flex: 0,
    height: 114,
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

  // TODO: Make resizing look better by adding an animation effect
  renderResultSection = () => {
    const {
      friendFound,
      friendSelected,
      isSearching,
      onSelectFriend,
    } = this.props;

    const {
      emptyStateStyle,
      listItemStyle,
      spinnerStyle,
    } = styles;

    if (isSearching) {
      return (
        <Spinner
          loadingText="Searching ..."
          variantStyle={spinnerStyle}
        />
      );
    }

    return Object.keys(friendFound).length
      ? (
        <ListItem
          image="https://s3.amazonaws.com/beer-sharer/img/beer-barrel-keg-cask-oak-o.jpg"
          // TODO: Change to not define a function inside 'return'
          // TODO: Changes needed when multiple friends found
          onPress={() => onSelectFriend(friendFound)}
          primaryTitle={friendFound.name}
          secondaryTitle={friendFound.email}
          variantStyle={Object.keys(friendSelected).length && listItemStyle}
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
          variantStyle={styles.inputStyle}
        />
        {this.renderResultSection()}
      </DialogConfirm>
    );
  }
}

// Prop Validations
FriendAddDialog.propTypes = {
  emailToSearch: PropTypes.string,
  friendFound: PropTypes.shape({}),
  friendSelected: PropTypes.shape({}),
  isFriendAddDialogOpen: PropTypes.bool.isRequired,
  isSearching: PropTypes.bool,
  onCloseFriendAddDialog: PropTypes.func.isRequired,
  onSearchFriend: PropTypes.func.isRequired,
  onSelectFriend: PropTypes.func.isRequired,
  onUpdateFriendSearchInfo: PropTypes.func.isRequired,
};

FriendAddDialog.defaultProps = {
  emailToSearch: '',
  friendFound: {},
  friendSelected: {},
  isSearching: false,
};

const mapStateToProps = (state) => {
  const {
    emailToSearch,
    // friendFound,
    friendSelected,
    isOpen,
    isSearching,
  } = state.Friend.friendAddDialog;

  return {
    emailToSearch,
    friendFound: {
      email: 'beer@home.com',
      name: 'Earvin',
    },
    friendSelected,
    isFriendAddDialogOpen: isOpen,
    isSearching,
  };
};

export default connect(mapStateToProps, {
  onAddFriend: addFriend,
  onCloseFriendAddDialog: closeFriendAddDialog,
  onSearchFriend: searchFriend,
  onSelectFriend: selectFriend,
  onUpdateFriendSearchInfo: updateFriendSearchInfo,
})(FriendAddDialog);
