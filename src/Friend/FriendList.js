// External Dependencies
import _ from 'lodash';
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
import {
  openFriendAddDialog,
  fetchFriend,
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
        onPress={navigation.getParam('onPressAddButton')}
      >
        Add
      </Button>
    ),
  });

  componentDidMount() {
    const {
      navigation,
      onFetchFriend,
    } = this.props;

    navigation.setParams({ onPressAddButton: this.onPressAddButton });

    onFetchFriend();
  }

  onPressAddButton = () => {
    const { onOpenFriendAddDialog } = this.props;

    return onOpenFriendAddDialog();
  };

  renderFriendItem = ({ item: friend }) => (
    <ListItem
      image="https://s3.amazonaws.com/beer-sharer/img/beer-barrel-keg-cask-oak-o.jpg"
      // TODO: Change not to declare a function inside 'render'
      onPress={() => {}}
      primaryTitle={friend.name}
      secondaryTitle={friend.email}
    />
  );

  render() {
    const {
      fetchedFriendData,
      isFetching,
    } = this.props;

    return isFetching
      ? (
        <View style={styles.spinnerContainerStyle}>
          <Spinner loadingText="Loading friends ..." />
        </View>
      )
      : (
        <View>
          <FlatList
            data={fetchedFriendData}
            renderItem={this.renderFriendItem}
          />
          <FriendAddDialog />
        </View>
      );
  }
}

// Prop Validations
FriendList.propTypes = {
  fetchedFriendData: PropTypes.arrayOf(PropTypes.object),
  isFetching: PropTypes.bool,
  navigation: PropTypes.shape({}).isRequired,
  onFetchFriend: PropTypes.func.isRequired,
  onOpenFriendAddDialog: PropTypes.func.isRequired,
};

FriendList.defaultProps = {
  fetchedFriendData: [],
  isFetching: false,
};

const mapStateToProps = (state) => {
  const {
    fetchedFriend,
    isFetching,
  } = state.Friend.friendApiData;

  const fetchedFriendData = _.map(fetchedFriend, (val, uid) => ({
    ...val,
    uid,
    key: uid,
  }));

  return {
    fetchedFriendData,
    isFetching,
  };
};

export default connect(mapStateToProps, {
  onOpenFriendAddDialog: openFriendAddDialog,
  onFetchFriend: fetchFriend,
})(FriendList);
