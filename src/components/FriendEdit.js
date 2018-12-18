// External Dependencies
import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { text as onCommunicationsText } from 'react-native-communications';

// Internal Dependencies
import {
  Alert,
  Button,
  Card,
  CardSection,
  Input,
  NativePicker,
} from './shared';
import {
  friendDelete,
  friendSave,
  friendUpdate,
} from '../actions';

// Component Definition
class FriendEdit extends Component {
  state = { isAlertOpen: false };

  componentDidMount() {
    _.each(this.props.friend, (value, prop) => {
      this.props.onFriendUpdate({ prop, value });
    });
  }

  onDeleteButtonPress() {
    this.setState({ isAlertOpen: true });
  }

  onAccept() {
    const {
      onFriendDelete,
      uid,
    } = this.props;

    onFriendDelete({ uid });
  }

  onDecline() {
    this.setState({ isAlertOpen: false });
  }

  onSaveButtonPress() {
    const {
      favoriteStyle,
      name,
      onFriendSave,
      phone,
      uid,
    } = this.props;

    onFriendSave({ favoriteStyle, name, phone, uid });
  }

  onTextButtonPress() {
    const {
      favoriteStyle,
      phone,
    } = this.props;

    onCommunicationsText(phone, `Nice! Your favorite style is ${favoriteStyle}`);
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
          <Button onPress={this.onTextButtonPress.bind(this)}>
            Text
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onDeleteButtonPress.bind(this)}>
            Delete
          </Button>
        </CardSection>
        <Alert
          alertContent="Are you sure you want to delete this friend?"
          isOpen={this.state.isAlertOpen}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        />
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    favoriteStyle,
    name,
    phone,
    uid,
  } = state.friendForm;

  return {
    favoriteStyle,
    name,
    phone,
    uid,
  };
};

export default connect(mapStateToProps, {
  onFriendDelete: friendDelete,
  onFriendSave: friendSave,
  onFriendUpdate: friendUpdate,
})(FriendEdit);
