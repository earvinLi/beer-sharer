// External Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';

// Internal Dependencies
import Button from '../SharedUnits/Button';
import CardSection from '../SharedUnits/CardSection';
import Input from '../SharedUnits/Input';
import NativePicker from '../SharedUnits/NativePicker';

// Local Dependencies
import {
  addBeer,
  updateBeerInfo,
} from './actions/BeerAddAction';

// Component Definition
class BeerAdd extends Component {
  onCreateButtonPress = () => {
    const {
      brewery,
      name,
      navigation,
      onAddBeer,
      style,
    } = this.props;

    onAddBeer({ brewery, name, style: style || 'ipa' });

    navigation.navigate('BeerHome');
  }

  render() {
    const {
      brewery,
      name,
      onUpdateBeerInfo,
      style,
    } = this.props;

    const beerStyleData = [
      { key: 'ipa', label: 'India Pale Ale', value: 'ipa' },
      { key: 'stout', label: 'Stout', value: 'stout' },
      { key: 'tripel', label: 'Belgian (Tripel)', value: 'tripel' },
      { key: 'apa', label: 'American Pale Ale', value: 'apa' },
      { key: 'bock', label: 'Bock', value: 'bock' },
      { key: 'pilsner', label: 'Pilsner (German Style)', value: 'pilsner' },
    ];

    return (
      <View style={{ paddingTop: 36 }}>
        <CardSection>
          <Input
            label="Name"
            onChange={value => onUpdateBeerInfo('name', value)}
            placeholder="Focal Banger"
            value={name}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Brewery"
            onChange={value => onUpdateBeerInfo('brewery', value)}
            placeholder="The Alchemist"
            value={brewery}
          />
        </CardSection>
        <CardSection style={{ flexDirection: 'column' }}>
          <NativePicker
            onPick={value => onUpdateBeerInfo('style', value)}
            optionsToPick={beerStyleData}
            pickedValue={style}
            pickerLabel="Style"
          />
        </CardSection>
        <CardSection>
          <Button onPress={this.onCreateButtonPress}>Create</Button>
        </CardSection>
      </View>
    );
  }
}

// Prop Validations
BeerAdd.propTypes = {
  brewery: PropTypes.string,
  name: PropTypes.string,
  navigation: PropTypes.shape({}).isRequired,
  onAddBeer: PropTypes.func.isRequired,
  onUpdateBeerInfo: PropTypes.func.isRequired,
  style: PropTypes.string,
};

BeerAdd.defaultProps = {
  brewery: '',
  name: '',
  style: '',
};

const mapStateToProps = (state) => {
  const {
    brewery,
    name,
    style,
  } = state.Beer.beerAddForm;

  return {
    brewery,
    name,
    style,
  };
};

export default connect(mapStateToProps, {
  onAddBeer: addBeer,
  onUpdateBeerInfo: updateBeerInfo,
})(BeerAdd);
