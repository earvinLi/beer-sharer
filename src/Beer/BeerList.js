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
import { grey } from '../App/Theme';

// Local Dependencies
import { fetchBeer } from './actions/BeerAction';

// Local Variables
const { grey200 } = grey;

const styles = {
  listItemStyle: {
    borderBottomColor: grey200,
    borderBottomWidth: 1,
  },
  spinnerContainerStyle: {
    flex: 1,
    justifyContent: 'center',
  },
};

// Component Definition
class BeerList extends Component {
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
      image="https://s3.amazonaws.com/beer-sharer/img/focal-banger-o.jpg"
      // TODO: Change to not declare a function inside render
      onPress={() => {}}
      primaryTitle={beer.name}
      secondaryTitle={beer.brewery}
      variantStyle={styles.listItemStyle}
    />
  );

  render() {
    const {
      fetchedBeerData,
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
          data={fetchedBeerData}
          renderItem={this.renderBeerItem}
        />
      );
  }
}

// Prop Validations
BeerList.propTypes = {
  fetchedBeerData: PropTypes.arrayOf(PropTypes.object),
  isFetching: PropTypes.bool,
  onFetchBeer: PropTypes.func.isRequired,
};

BeerList.defaultProps = {
  fetchedBeerData: [],
  isFetching: false,
};

const mapStateToProps = (state) => {
  const {
    fetchedBeer,
    isFetching,
  } = state.Beer.beerApiData;

  const fetchedBeerData = _.map(fetchedBeer, (val, uid) => ({
    ...val,
    uid,
    key: uid,
  }));

  return {
    fetchedBeerData,
    isFetching,
  };
};

export default connect(mapStateToProps, {
  onFetchBeer: fetchBeer,
})(BeerList);
