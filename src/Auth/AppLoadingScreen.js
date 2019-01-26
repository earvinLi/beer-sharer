// External Dependencies
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

// Internal Dependencies
import Spinner from '../SharedUnits/Spinner';

// Local Dependencies
import { initApp } from './actions/InitAction';

// Local Variables
const styles = {
  spinnerContainerStyle: {
    flex: 1,
    justifyContent: 'center',
  },
};

class AppLoadingScreen extends Component {
  componentDidMount() {
    const {
      navigation,
      onInitApp,
    } = this.props;

    onInitApp(navigation);
  }

  render() {
    const { isInitializing } = this.props;

    return isInitializing && (
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
AppLoadingScreen.propTypes = {
  isInitializing: PropTypes.bool,
  navigation: PropTypes.shape({}).isRequired,
  onInitApp: PropTypes.func.isRequired,
};

AppLoadingScreen.defaultProps = {
  isInitializing: false,
};

const mapStateToProps = (state) => {
  const { isInitializing } = state.Auth.account;

  return { isInitializing };
};

export default connect(mapStateToProps, {
  onInitApp: initApp,
})(AppLoadingScreen);
