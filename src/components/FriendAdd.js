// External Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Picker,
  Text,
  View,
} from 'react-native';

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
      favoriteStyle,
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
        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerLabelStyle}>Favorite Style</Text>
          <Picker
            onValueChange={value => onFriendUpdate({ prop: 'favoriteStyle', value })}
            selectedValue={favoriteStyle}
          >
            <Picker.Item label="India Pale Ale" value="ipa" />
            <Picker.Item label="Stout" value="stout" />
            <Picker.Item label="American Pale Ale" value="apa" />
            <Picker.Item label="Belgian (Tripel)" value="tripel" />
            <Picker.Item label="Bock" value="bock" />
            <Picker.Item label="Pilsner (German Style)" value="pilsner" />
          </Picker>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20,
  },
};

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
  onFriendUpdate: friendUpdate,
})(FriendAdd);
