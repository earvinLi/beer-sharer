// External Dependencies
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
} from 'react-native';

// Internal Dependencies
import Button from '../SharedUnits/Button';
import Card from '../SharedUnits/Card';
import CardSection from '../SharedUnits/CardSection';
import Input from '../SharedUnits/Input';
import Spinner from '../SharedUnits/Spinner';

// Local Dependencies
import {
  signUpUser,
  updateSignUpInfo,
} from './actions/SignUpAction';

// Local Variables
const styles = {
  errorTextStyle: {
    alignSelf: 'center',
    color: 'red',
    fontSize: 20,
  },
};

// Component Definition
class SignUpForm extends Component {
  static navigationOptions = { title: 'Sign Up' };

  onPressSignUpButton = () => {
    const {
      email,
      name,
      navigation,
      onSignUpUser,
      password,
    } = this.props;

    onSignUpUser(email, name, navigation, password);
  }

  render() {
    const {
      email,
      isSigningUp,
      name,
      onUpdateSignUpInfo,
      password,
      signUpFailErrorText,
    } = this.props;

    const inputSections = [
      {
        label: 'Name',
        prop: 'name',
        placeholder: 'Ninkasi',
        value: name,
      },
      {
        label: 'Email',
        prop: 'email',
        placeholder: 'beer@home.com',
        value: email,
      },
      {
        label: 'Password',
        prop: 'password',
        placeholder: 'Please guess.',
        value: password,
      },
    ].map((inputSection, sectionIndex) => (
      <CardSection key={inputSection.label}>
        <Input
          autoCapitalize="none"
          label={inputSection.label}
          onChange={value => onUpdateSignUpInfo(inputSection.prop, value)}
          placeholder={inputSection.placeholder}
          secureTextEntry={sectionIndex === 2}
          value={inputSection.value}
        />
      </CardSection>
    ));

    const signUpFailErrorElement = Boolean(signUpFailErrorText) && (
      <View style={{ backgroundColor: 'white' }}>
        <Text style={styles.errorTextStyle}>{signUpFailErrorText}</Text>
      </View>
    );

    const signUpButton = isSigningUp
      ? <Spinner size="large" />
      : <Button onPress={this.onPressSignUpButton}>Sign Up</Button>;

    return (
      <Card>
        {inputSections}
        {signUpFailErrorElement}
        <CardSection>{signUpButton}</CardSection>
      </Card>
    );
  }
}

// Prop Validations
SignUpForm.propTypes = {
  email: PropTypes.string,
  isSigningUp: PropTypes.bool,
  name: PropTypes.string,
  navigation: PropTypes.shape({}).isRequired,
  password: PropTypes.string,
  signUpFailErrorText: PropTypes.string,
  onSignUpUser: PropTypes.func.isRequired,
  onUpdateSignUpInfo: PropTypes.func.isRequired,
};

SignUpForm.defaultProps = {
  email: '',
  isSigningUp: false,
  name: '',
  password: '',
  signUpFailErrorText: '',
};

const mapStateToProps = (state) => {
  const {
    email,
    isSigningUp,
    name,
    password,
    signUpFailErrorText,
  } = state.Auth.signUpForm;

  return {
    email,
    isSigningUp,
    name,
    password,
    signUpFailErrorText,
  };
};

export default connect(mapStateToProps, {
  onSignUpUser: signUpUser,
  onUpdateSignUpInfo: updateSignUpInfo,
})(SignUpForm);
