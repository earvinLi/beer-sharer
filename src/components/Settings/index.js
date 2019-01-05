// External Dependencies
import React, { Component } from 'react';
import { FlatList } from 'react-native';

// Internal Dependencies
import ListItem from '../shared/ListItem';

// Local Variables
const sectionData = [
  { key: 'Sign Out', name: 'Sign Out' },
];

class Account extends Component {
  static navigationOptions = () => ({
    headerTitle: 'Settings',
  });

  onSignOutItemPress = () => {}

  renderSectionItem = ({ item: section }) => (
    <ListItem
      title={section.name}
    />
  )

  render() {
    return (
      <FlatList
        data={sectionData}
        renderItem={this.renderSectionItem}
      />
    );
  }
}

export default Account;
