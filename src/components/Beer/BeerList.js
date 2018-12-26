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
import ListItem from '../shared/ListItem';
import Spinner from '../shared/Spinner';
import { friendsFetch } from '../../actions/FriendAction';

// Local Variables
const styles = {
  spinnerContainerStyle: {
    flex: 1,
    justifyContent: 'center',
  },
};

// Component Definition
class FriendsList extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Finest Liquids',
    headerRight: (
      <Button onPress={() => navigation.navigate('FriendAdd')}>Add</Button>
    ),
  });

  componentDidMount() {
    const { onFriendsFetch } = this.props;

    onFriendsFetch();
  }

  renderFriendItem = ({ item: friend }) => (
    <ListItem
      // TODO: Change to not declare a function inside render
      onPress={() => {}}
      title={friend.name}
    />
  );

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

// Prop Validations
FriendsList.propTypes = {
  fetchedFriends: PropTypes.arrayOf(PropTypes.object),
  isFetching: PropTypes.bool,
  onFriendsFetch: PropTypes.func.isRequired,
};

FriendsList.defaultProps = {
  fetchedFriends: [],
  isFetching: false,
};

const mapStateToProps = (state) => {
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
