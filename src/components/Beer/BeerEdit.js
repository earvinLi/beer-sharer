// External Dependencies
import PropTypes from 'prop-types';
import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { text as onCommunicationsText } from 'react-native-communications';

// Internal Dependencies
import Alert from '../shared/Alert';
import Button from '../shared/Button';
import Card from '../shared/Card';
import CardSection from '../shared/CardSection';
import Input from '../shared/Input';
import NativePicker from '../shared/NativePicker';
import {
  friendDelete,
  friendSave,
  friendUpdate,
} from '../../actions/FriendAction';

// Component Definition
class FriendEdit extends Component {
  constructor(props) {
    super(props);
    this.state = { isAlertOpen: false };
  }

  componentDidMount() {
    const {
      friend,
      onFriendUpdate,
    } = this.props;

    _.each(friend, (value, prop) => {
      onFriendUpdate({ prop, value });
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

    onFriendSave({
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
          alertContent="Are you sure you want to delete this friend?"
          isOpen={isAlertOpen}
          onAccept={this.onAccept}
          onDecline={this.onDecline}
        />
      </Card>
    );
  }
}

// Prop Validations
FriendEdit.propTypes = {
  friend: PropTypes.shape({}).isRequired,
  favoriteStyle: PropTypes.string,
  name: PropTypes.string,
  onFriendDelete: PropTypes.func.isRequired,
  onFriendSave: PropTypes.func.isRequired,
  onFriendUpdate: PropTypes.func.isRequired,
  phone: PropTypes.string,
  uid: PropTypes.string,
};

FriendEdit.defaultProps = {
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
