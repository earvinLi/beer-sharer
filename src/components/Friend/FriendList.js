// External Dependencies
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  FlatList,
  View,
} from 'react-native';

// Internal Dependencies
import Button from '../shared/Button';
import DialogConfirm from '../shared/DialogConfirm';
import Input from '../shared/Input';
import ListItem from '../shared/ListItem';
import Spinner from '../shared/Spinner';
import { friendFetch } from '../../actions/FriendAction';

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
      fetchedFriend,
      isFetching,
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
            acceptButtonText="Add"
            isOpen={isAlertOpen}
            onAccept={this.onAccept}
            onDecline={this.onDeclineButtonPress}
            title="Search User"
          >
            <Input
              autoCapitalize="none"
              placeholder="Enter an emaill to search"
            />
          </DialogConfirm>
        </View>
      );
  }
}

// Prop Validations
FriendList.propTypes = {
  fetchedFriend: PropTypes.arrayOf(PropTypes.object),
  isFetching: PropTypes.bool,
  navigation: PropTypes.shape({}).isRequired,
  onFriendFetch: PropTypes.func.isRequired,
};

FriendList.defaultProps = {
  fetchedFriend: [],
  isFetching: false,
};

const mapStateToProps = (state) => {
  const {
    fetchedFriend,
    isFetching,
  } = state.friend;

  return {
    fetchedFriend,
    isFetching,
  };
};

export default connect(mapStateToProps, {
  onFriendFetch: friendFetch,
})(FriendList);
