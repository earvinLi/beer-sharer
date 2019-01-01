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
  onCreateButtonPress() {
    const {
      favoriteStyle,
      name,
      onBeerCreate,
      phone,
    } = this.props;

    onBeerCreate({ favoriteStyle: favoriteStyle || 'ipa', name, phone });
  }

  render() {
    const {
      favoriteStyle,
      name,
      onBeerUpdate,
      phone,
    } = this.props;

    const beerStylesData = [
      { key: 'ipa', label: 'India Pale Ale', value: 'ipa' },
      { key: 'stout', label: 'Stout', value: 'stout' },
      { key: 'apa', label: 'American Pale Ale', value: 'apa' },
      { key: 'tripel', label: 'Belgian (Tripel)', value: 'tripel' },
      { key: 'bock', label: 'Bock', value: 'bock' },
      { key: 'pilsner', label: 'Pilsner (German Style)', value: 'pilsner' },
    ];

    return (
      <View style={{ paddingTop: 36 }}>
        <CardSection>
          <Input
            label="Name"
            onChange={value => onBeerUpdate({ prop: 'name', value })}
            placeholder="Ninkasi"
            value={name}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            onChange={value => onBeerUpdate({ prop: 'phone', value })}
            placeholder="413-523-2367"
            value={phone}
          />
        </CardSection>
        <CardSection style={{ flexDirection: 'column' }}>
          <NativePicker
            onPick={value => onBeerUpdate({ prop: 'favoriteStyle', value })}
            optionsToPick={beerStylesData}
            pickedValue={favoriteStyle}
            pickerLabel="Favorite Style"
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
  favoriteStyle: PropTypes.string,
  name: PropTypes.string,
  onBeerCreate: PropTypes.func.isRequired,
  onBeerUpdate: PropTypes.func.isRequired,
  phone: PropTypes.string,
};

BeerAdd.defaultProps = {
  favoriteStyle: '',
  name: '',
  phone: '',
};

const mapStateToProps = (state) => {
  const {
    favoriteStyle,
    name,
    phone,
  } = state.beerForm;

  return {
    favoriteStyle,
    name,
    phone,
  };
};

export default connect(mapStateToProps, {
  onBeerCreate: beerCreate,
  onBeerUpdate: beerUpdate,
})(BeerAdd);
