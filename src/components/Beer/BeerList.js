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
import { beerFetch } from '../../actions/BeerAction';

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
    const { onBeerFetch } = this.props;

    onBeerFetch();
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
          <Spinner
            hasLabel
            loadingItemsLabel="beer"
          />
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
  onBeerFetch: PropTypes.func.isRequired,
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
  onBeerFetch: beerFetch,
})(FriendsList);
