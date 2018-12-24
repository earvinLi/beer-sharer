// External Dependencies
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {
  FlatList,
  View,
} from 'react-native';

// Internal Dependencies
import ListItem from '../shared/ListItem';
import Spinner from '../shared/Spinner';
import { friendsFetch } from '../../actions';

// Component Definition
class FriendsList extends Component {
  static navigationOptions = {
    title: 'Finest Liquids',
  };

  componentDidMount() {
    this.props.onFriendsFetch();
  }

  renderFriendItem({ item: friend }) {
    return (
      <ListItem
        // TODO: Change to not declare a function inside render
        onPress={() => { Actions.friendEdit({ friend }); }}
        title={friend.name}
      />
    );
  }

  render() {
    const {
      fetchedFriends,
      isFetching,
    } = this.props;

    return isFetching
    ? (
      <View style={styles.spinnerContainerStyle}>
        <Spinner loadingItemsLabel="friends" />
      </View>
    )
    : (
      <FlatList
        data={fetchedFriends}
        renderItem={this.renderFriendItem}
      />
    );
  }
}

const styles = {
  spinnerContainerStyle: {
    flex: 1,
    justifyContent: 'center',
  },
};

const mapStateToProps = state => {
  const {
    fetchedFriends,
    isFetching,
  } = state.friends;

  return {
    fetchedFriends,
    isFetching,
  };
};

export default connect(mapStateToProps, {
  onFriendsFetch: friendsFetch,
})(FriendsList);
