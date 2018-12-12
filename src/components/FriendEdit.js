// External Dependencies
import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Internal Dependencies
import {
  Button,
  Card,
  CardSection,
  Input,
  NativePicker,
} from './shared';
import {
  friendSave,
  friendUpdate,
} from '../actions';

// Component Definition
class FriendEdit extends Component {
  componentDidMount() {
    _.each(this.props.friend, (value, prop) => {
      this.props.onFriendUpdate({ prop, value });
    });
  }

  onSaveButtonPress() {
    const {
      favoriteStyle,
      friend,
      name,
      onFriendSave,
      phone,
    } = this.props;

    onFriendSave({ favoriteStyle, name, phone, uid: friend.uid });
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
      <Card>
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
          <Button onPress={this.onSaveButtonPress.bind(this)}>
            Save
          </Button>
        </CardSection>
        <CardSection>
          <Button>Text</Button>
        </CardSection>
        <CardSection>
          <Button>Delete</Button>
        </CardSection>
      </Card>
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
  onFriendSave: friendSave,
  onFriendUpdate: friendUpdate,
})(FriendEdit);
