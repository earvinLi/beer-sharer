// External Dependencies
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';

// Internal Dependencies
import ListItem from '../SharedUnits/ListItem';
import { grey } from '../App/Theme';
import { signOutUser } from '../Auth/actions/SignOutAction';

// Local Variables
const { grey200 } = grey;

const styles = {
  listItemStyle: {
    borderBottomColor: grey200,
    borderBottomWidth: 1,
    // Not clean
    // TODO: Figure out settings of 'margin' and 'padding'
    marginBottom: 12,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 12,
  },
};

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

    return onSignOutUser(navigation);
  }

  renderSectionItem = ({ item: section }) => {
    let onPress;
    switch (section.name) {
      case 'Sign Out': onPress = this.onSignOutItemPress; break;
      default: return () => {};
    }

    return (
      <ListItem
        onPress={onPress}
        primaryTitle={section.name}
        variantStyle={styles.listItemStyle}
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
