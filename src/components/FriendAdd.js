// External Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

// Internal Dependencies
import {
  CardSection,
  Input,
} from './shared';
import { friendUpdate } from '../actions';

// Component Definition
class FriendAdd extends Component {
  render() {
    const {
      name,
      onFriendUpdate,
      phone,
    } = this.props;

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
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    name,
    phone,
  } = state.friendForm;

  console.log(name);
  console.log(phone);

  return {
    name,
    phone,
  };
};

export default connect(mapStateToProps, {
  onFriendUpdate: friendUpdate,
})(FriendAdd);
