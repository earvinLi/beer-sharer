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
import { fetchBeer } from './actions/BeerAction';

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
      <Button
        hasBorder={false}
        onPress={() => navigation.navigate('BeerAdd')}
      >
        Add
      </Button>
    ),
  });

  componentDidMount() {
    const { onFetchBeer } = this.props;

    onFetchBeer();
  }

  renderBeerItem = ({ item: beer }) => (
    <ListItem
      // TODO: Change to not declare a function inside render
      onPress={() => {}}
      title={beer.name}
    />
  );

  render() {
    const {
      fetchedBeer,
      isFetching,
    } = this.props;

    return isFetching
      ? (
        <View style={styles.spinnerContainerStyle}>
          <Spinner loadingText="Loading beer ..." />
        </View>
      )
      : (
        <FlatList
          data={fetchedBeer}
          renderItem={this.renderBeerItem}
        />
      );
  }
}

// Prop Validations
FriendsList.propTypes = {
  fetchedBeer: PropTypes.arrayOf(PropTypes.object),
  isFetching: PropTypes.bool,
  onFetchBeer: PropTypes.func.isRequired,
};

FriendsList.defaultProps = {
  fetchedBeer: [],
  isFetching: false,
};

const mapStateToProps = (state) => {
  const {
    fetchedBeer,
    isFetching,
  } = state.beer;

  return {
    fetchedBeer,
    isFetching,
  };
};

export default connect(mapStateToProps, {
  onFetchBeer: fetchBeer,
})(FriendsList);
