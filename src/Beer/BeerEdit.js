// External Dependencies
import PropTypes from 'prop-types';
import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { text as onCommunicationsText } from 'react-native-communications';

// Internal Dependencies
import Alert from '../SharedUnits/Alert';
import Button from '../SharedUnits/Button';
import Card from '../SharedUnits/Card';
import CardSection from '../SharedUnits/CardSection';
import Input from '../SharedUnits/Input';
import NativePicker from '../SharedUnits/NativePicker';

// Local Dependencies
import {
  beerDelete,
  beerSave,
  beerUpdate,
} from './actions/BeerAction';

// Component Definition
class BeerEdit extends Component {
  state = { isAlertOpen: false };

  componentDidMount() {
    const {
      beer,
      onBeerUpdate,
    } = this.props;

    _.each(beer, (value, prop) => {
      onBeerUpdate({ prop, value });
    });
  }

  onDeleteButtonPress() {
    this.setState({ isAlertOpen: true });
  }

  onAccept() {
    const {
      onBeerDelete,
      uid,
    } = this.props;

    onBeerDelete({ uid });
  }

  onDecline() {
    this.setState({ isAlertOpen: false });
  }

  onSaveButtonPress() {
    const {
      favoriteStyle,
      name,
      onBeerSave,
      phone,
      uid,
    } = this.props;

    onBeerSave({
      favoriteStyle,
      name,
      phone,
      uid,
    });
  }

  onTextButtonPress() {
    const {
      favoriteStyle,
      phone,
    } = this.props;

    onCommunicationsText(phone, `Nice! Your favorite style is ${favoriteStyle}`);
  }

  render() {
    const { isAlertOpen } = this.state;

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
      <Card>
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
          <Button onPress={this.onSaveButtonPress}>
            Save
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onTextButtonPress}>
            Text
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onDeleteButtonPress}>
            Delete
          </Button>
        </CardSection>
        <Alert
          alertContent="Are you sure you want to delete this beer?"
          isOpen={isAlertOpen}
          onAccept={this.onAccept}
          onDecline={this.onDecline}
        />
      </Card>
    );
  }
}

// Prop Validations
BeerEdit.propTypes = {
  beer: PropTypes.shape({}).isRequired,
  favoriteStyle: PropTypes.string,
  name: PropTypes.string,
  onBeerDelete: PropTypes.func.isRequired,
  onBeerSave: PropTypes.func.isRequired,
  onBeerUpdate: PropTypes.func.isRequired,
  phone: PropTypes.string,
  uid: PropTypes.string,
};

BeerEdit.defaultProps = {
  favoriteStyle: '',
  name: '',
  phone: '',
  uid: '',
};

const mapStateToProps = (state) => {
  const {
    favoriteStyle,
    name,
    phone,
    uid,
  } = state.beerForm;

  return {
    favoriteStyle,
    name,
    phone,
    uid,
  };
};

export default connect(mapStateToProps, {
  onBeerDelete: beerDelete,
  onBeerSave: beerSave,
  onBeerUpdate: beerUpdate,
})(BeerEdit);
