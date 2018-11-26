// External Dependencies
import React, { Component } from 'react';
import { View } from 'react-native';

// Internal Dependencies
import {
  CardSection,
  Input,
} from './shared';

// Component Definition
class FriendAdd extends Component {
  render() {
    return (
      <View style={{ paddingTop: 36 }}>
        <CardSection>
          <Input
            label="Name"
            placeholder="Ninkasi"
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="413-523-2367"
          />
        </CardSection>
      </View>
    );
  }
}

export default FriendAdd;
