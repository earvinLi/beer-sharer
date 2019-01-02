// External Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';

// Internal Dependencies
import Button from '../shared/Button';
import CardSection from '../shared/CardSection';
import Input from '../shared/Input';
import NativePicker from '../shared/NativePicker';
import {
  beerCreate,
  beerUpdate,
} from '../../actions/BeerAction';

// Component Definition
class BeerAdd extends Component {
  onCreateButtonPress = () => {
    const {
      brewery,
      name,
      navigation,
      onBeerCreate,
      style,
    } = this.props;

    onBeerCreate({ brewery, name, style: style || 'ipa' });

    navigation.navigate('BeerHome');
  }

  render() {
    const {
      brewery,
      name,
      onBeerUpdate,
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
            onChange={value => onBeerUpdate({ prop: 'name', value })}
            placeholder="Focal Banger"
            value={name}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Brewery"
            onChange={value => onBeerUpdate({ prop: 'brewery', value })}
            placeholder="The Alchemist"
            value={brewery}
          />
        </CardSection>
        <CardSection style={{ flexDirection: 'column' }}>
          <NativePicker
            onPick={value => onBeerUpdate({ prop: 'style', value })}
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
  onBeerCreate: PropTypes.func.isRequired,
  onBeerUpdate: PropTypes.func.isRequired,
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
  } = state.beerForm;

  return {
    brewery,
    name,
    style,
  };
};

export default connect(mapStateToProps, {
  onBeerCreate: beerCreate,
  onBeerUpdate: beerUpdate,
})(BeerAdd);
