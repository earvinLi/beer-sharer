// External Dependencies
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

// Internal Dependencies
import Spinner from '../shared/Spinner';
import { loadApp } from '../../actions/AuthAction';

// Local Variables
const styles = {
  spinnerContainerStyle: {
    flex: 1,
    justifyContent: 'center',
  },
};

class AuthLoadingScreen extends Component {
  componentDidMount() {
    const {
      navigation: toAppNav,
      onLoadApp,
    } = this.props;

    onLoadApp(toAppNav);
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
  onLoadApp: PropTypes.func.isRequired,
};

export default connect(null, {
  onLoadApp: loadApp,
})(AuthLoadingScreen);
