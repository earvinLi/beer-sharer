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
import ListItem from '../SharedUnits/ListItem';
import Spinner from '../SharedUnits/Spinner';

// Local Dependencies
import FriendAddDialog from './FriendAddDialog';
import { friendFetch } from './actions/FriendAction';

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

  componentDidMount() {
    const {
      navigation,
      onFriendFetch,
    } = this.props;

    navigation.setParams({ onAddButtonPress: this.onAddButtonPress });

    onFriendFetch();
  }

  onAddButtonPress = () => {};

  renderFriendItem = ({ item: friend }) => (
    <ListItem
      // TODO: Change to not declare a function inside render
      onPress={() => {}}
      title={friend.name}
    />
  );

  render() {
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
          <FriendAddDialog />
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
