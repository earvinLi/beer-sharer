// External Dependencies
import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

// Internal Dependencies
import {
  Button,
  CardSection,
  Input,
  NativePicker,
} from './shared';
import {
  friendCreate,
  friendUpdate,
} from '../actions';

// Component Definition
class FriendEdit extends Component {
  componentDidMount() {
    _.each(this.props.friend, (value, prop) => {
      this.props.onFriendUpdate({ prop, value });
    });
  }

  onCreateButtonPress() {
    const {
      favoriteStyle,
      name,
      onFriendCreate,
      phone,
    } = this.props;

    onFriendCreate({ favoriteStyle: favoriteStyle || 'ipa', name, phone });
  }

  render() {
    const {
      favoriteStyle,
      name,
      onFriendUpdate,
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
            onChange={value => onFriendUpdate({ prop: 'name', value })}
            placeholder="Ninkasi"
            value={name}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            onChange={value => onFriendUpdate({ prop: 'phone', value })}
            placeholder="413-523-2367"
            value={phone}
          />
        </CardSection>
        <CardSection style={{ flexDirection: 'column' }}>
          <NativePicker
            onPick={value => onFriendUpdate({ prop: 'favoriteStyle', value })}
            optionsToPick={beerStylesData}
            pickedValue={favoriteStyle}
            pickerLabel="Favorite Style"
          />
        </CardSection>
        <CardSection>
          <Button onPress={this.onCreateButtonPress.bind(this)}>Create</Button>
        </CardSection>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    favoriteStyle,
    name,
    phone,
  } = state.friendForm;

  return {
    favoriteStyle,
    name,
    phone,
  };
};

export default connect(mapStateToProps, {
  onFriendCreate: friendCreate,
  onFriendUpdate: friendUpdate,
})(FriendEdit);
