// External Dependencies
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  FlatList,
  View,
} from 'react-native';

// Internal Dependencies
import Button from '../SharedUnits/Button';
import DialogConfirm from '../SharedUnits/DialogConfirm';
import Input from '../SharedUnits/Input';
import ListItem from '../SharedUnits/ListItem';
import Spinner from '../SharedUnits/Spinner';

// Local Dependencies
import {
  friendFetch,
  friendSearchInfoUpdate,
} from './actions/FriendAction';

// Local Variables
const styles = {
  spinnerContainerStyle: {
    flex: 1,
    justifyContent: 'center',
  },
};

// Component Definition
class FriendList extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Drinking Buddies',
    headerRight: (
      <Button
        hasBorder={false}
        onPress={navigation.getParam('onAddButtonPress')}
      >
        Add
      </Button>
    ),
  });

  state = { isAlertOpen: false };

  componentDidMount() {
    const {
      navigation,
      onFriendFetch,
    } = this.props;

    navigation.setParams({ onAddButtonPress: this.onAddButtonPress });

    onFriendFetch();
  }

  onAddButtonPress = () => this.setState({ isAlertOpen: true });

  onDeclineButtonPress = () => this.setState({ isAlertOpen: false });

  renderFriendItem = ({ item: friend }) => (
    <ListItem
      // TODO: Change to not declare a function inside render
      onPress={() => {}}
      title={friend.name}
    />
  );

  render() {
    const { isAlertOpen } = this.state;

    const {
      emailToSearch,
      fetchedFriend,
      isFetching,
      onFriendSearchInfoUpdate,
    } = this.props;

    return isFetching
      ? (
        <View style={styles.spinnerContainerStyle}>
          <Spinner
            hasLabel
            loadingItemsLabel="friends"
          />
        </View>
      )
      : (
        <View>
          <FlatList
            data={fetchedFriend}
            renderItem={this.renderFriendItem}
          />
          <DialogConfirm
            acceptButtonText="ADD"
            isOpen={isAlertOpen}
            onAccept={this.onAccept}
            onDecline={this.onDeclineButtonPress}
            title="Search User"
          >
            <Input
              autoCapitalize="none"
              onChange={value => onFriendSearchInfoUpdate({ prop: 'emailToSearch', value })}
              onSubmit={() => { console.log(emailToSearch); }}
              placeholder="Enter an emaill to search"
              returnKeyType="search"
              value={emailToSearch}
            />
          </DialogConfirm>
        </View>
      );
  }
}

// Prop Validations
FriendList.propTypes = {
  emailToSearch: PropTypes.string,
  fetchedFriend: PropTypes.arrayOf(PropTypes.object),
  isFetching: PropTypes.bool,
  navigation: PropTypes.shape({}).isRequired,
  onFriendFetch: PropTypes.func.isRequired,
  onFriendSearchInfoUpdate: PropTypes.func.isRequired,
};

FriendList.defaultProps = {
  emailToSearch: '',
  fetchedFriend: [],
  isFetching: false,
};

const mapStateToProps = (state) => {
  const {
    fetchedFriend,
    isFetching,
  } = state.friend;

  const { emailToSearch } = state.friendForm;

  return {
    emailToSearch,
    fetchedFriend,
    isFetching,
  };
};

export default connect(mapStateToProps, {
  onFriendFetch: friendFetch,
  onFriendSearchInfoUpdate: friendSearchInfoUpdate,
})(FriendList);
