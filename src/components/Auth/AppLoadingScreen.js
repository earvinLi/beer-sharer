// External Dependencies
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  AsyncStorage,
  View,
} from 'react-native';

// Internal Dependencies
import Spinner from '../shared/Spinner';

// Local Variables
const styles = {
  spinnerContainerStyle: {
    flex: 1,
    justifyContent: 'center',
  },
};

class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);

    this.loadApp();
  }

  loadApp = async () => {
    const { navigation } = this.props;

    const hasLoggedInUser = await AsyncStorage.getItem('hasLoggedInUser');
    navigation.navigate(hasLoggedInUser ? 'Home' : 'Auth');
  }

  render() {
    return (
      <View style={styles.spinnerContainerStyle}>
        <Spinner
          hasLabel
          loadingItemsLabel="Beer Sharer"
        />
      </View>
    );
  }
}

// Prop Validations
AuthLoadingScreen.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

export default AuthLoadingScreen;
