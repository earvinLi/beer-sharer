// External Dependencies
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  FlatList,
  View,
} from 'react-native';

// Internal Dependencies
import Alert from '../shared/Alert';
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
      onFriendsFetch,
    } = this.props;

    navigation.setParams({ onAddButtonPress: this.onAddButtonPress });

    onFriendsFetch();
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
      fetchedFriends,
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
            data={fetchedFriends}
            renderItem={this.renderFriendItem}
          />
          <Alert
            alertContent="Are you sure you want to delete this friend?"
            isOpen={isAlertOpen}
            onAccept={this.onAccept}
            onDecline={this.onDeclineButtonPress}
          />
        </View>
      );
  }
}

// Prop Validations
FriendsList.propTypes = {
  fetchedFriends: PropTypes.arrayOf(PropTypes.object),
  isFetching: PropTypes.bool,
  navigation: PropTypes.shape({}).isRequired,
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
