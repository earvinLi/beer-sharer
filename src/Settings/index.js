// External Dependencies
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';

// Internal Dependencies
import ListItem from '../SharedUnits/ListItem';
import { signOutUser } from '../Auth/actions/AuthAction';

// Local Variables
const sectionData = [
  { key: 'Sign Out', name: 'Sign Out' },
];

class Settings extends Component {
  static navigationOptions = () => ({
    headerTitle: 'Settings',
  });

  onSignOutItemPress = () => {
    const {
      navigation,
      onSignOutUser,
    } = this.props;

    return onSignOutUser({ toAuthNav: navigation });
  }

  renderSectionItem = ({ item: section }) => {
    let onPress;
    switch (section.name) {
      case 'Sign Out': onPress = this.onSignOutItemPress; break;
      default: return () => {};
    }

    return (
      <ListItem
        title={section.name}
        onPress={onPress}
      />
    );
  }

  render() {
    return (
      <FlatList
        data={sectionData}
        renderItem={this.renderSectionItem}
      />
    );
  }
}

// Prop Validations
Settings.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
  onSignOutUser: PropTypes.func.isRequired,
};

export default connect(null, {
  onSignOutUser: signOutUser,
})(Settings);
