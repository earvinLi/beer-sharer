// External Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ListView,
  View,
} from 'react-native';

// Internal Dependencies
import { friendsFetch } from '../actions';
import {
  ListItem,
  Spinner,
} from './shared';

class FriendsList extends Component {
  componentWillMount() {
    this.props.onFriendsFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ fetchedFriends }) {
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row, nextRow) => row !== nextRow,
    });

    this.friendsData = dataSource.cloneWithRows(fetchedFriends);
  }

  renderFriendsRow(friend) {
    return (
      <ListItem
        onPress={() => {}}
        title={friend.name}
      />
    );
  }

  render() {
    const { isFetching } = this.props;

    return isFetching
    ? (
      <View style={styles.spinnerContainerStyle}>
        <Spinner loadingItemsLabel="friends" />
      </View>
    )
    : (
      <ListView
        dataSource={this.friendsData}
        enableEmptySections
        renderRow={this.renderFriendsRow}
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
