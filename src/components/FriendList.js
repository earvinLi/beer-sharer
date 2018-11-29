// External Dependencies
import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ListView,
  Text,
  View,
} from 'react-native';

// Internal Dependencies
import { friendsFetch } from '../actions';

class FriendList extends Component {
  componentWillMount() {
    this.props.onFriendsFetch();
  }

  createDataSource({ friends }) {
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row, nextRow) => row !== nextRow,
    });

    this.friendsData = dataSource.cloneWithRows(friends);
  }

  renderFriendsRow(friend) {
    return <View><Text>{friend.name}</Text></View>;
  }

  render() {
    return (
      <ListView
        dataSource={this.friendsData}
        enableEmptySections
        renderRow={this.renderFriendsRow}
      />
    );
  }
}

const mapStateToProps = state => ({
  friends: _.map(state.friends, (val, uid) => ({ ...val, uid })),
});

export default connect(mapStateToProps, {
  onFriendsFetch: friendsFetch,
})(FriendList);
