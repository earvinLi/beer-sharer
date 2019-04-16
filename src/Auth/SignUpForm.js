// External Dependencies
import ImagePicker from 'react-native-image-picker';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Image,
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
  avatarPickerImageStyle: {
    marginLeft: 20,
    marginRight: 20,
    height: 100,
  },
  avatarPickerLabelStyle: {
    fontSize: 18,
    paddingBottom: 9,
    paddingLeft: 21,
    paddingTop: 9,
  },
  errorTextStyle: {
    alignSelf: 'center',
    color: 'red',
    fontSize: 20,
  },
};

// Component Definition
class SignUpForm extends Component {
  static navigationOptions = { title: 'Sign Up' };

  constructor(props) {
    super(props);

    this.onPressBrowseButton = this.onPressBrowseButton.bind(this);
    this.onPressSignUpButton = this.onPressSignUpButton.bind(this);
  }

  onPressBrowseButton() {
    const { onUpdateSignUpInfo } = this.props;

    const browseOption = {
      noData: true,
    };

    ImagePicker.launchImageLibrary(browseOption, (response) => {
      if (response.uri) return onUpdateSignUpInfo('avatar', response);

      return null;
    });
  }

  onPressSignUpButton() {
    const {
      avatar,
      email,
      navigation,
      onSignUpUser,
      password,
      username,
    } = this.props;

    return onSignUpUser(avatar, email, navigation, password, username);
  }

  render() {
    const {
      avatar,
      email,
      isSigningUp,
      onUpdateSignUpInfo,
      password,
      signUpFailErrorText,
      username,
    } = this.props;

    const {
      avatarPickerImageStyle,
      avatarPickerLabelStyle,
      errorTextStyle,
    } = styles;

    const inputSections = [
      {
        label: 'Username',
        prop: 'username',
        placeholder: 'Ninkasi',
        value: username,
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
        <Text style={errorTextStyle}>{signUpFailErrorText}</Text>
      </View>
    );

    const signUpButton = isSigningUp
      ? <Spinner size="large" />
      : <Button onPress={this.onPressSignUpButton}>Sign Up</Button>;

    return (
      <Card>
        {inputSections}
        <CardSection variantStyle={{ flexDirection: 'column' }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={avatarPickerLabelStyle}>Avatar</Text>
            <Button
              hasBorder={false}
              onPress={this.onPressBrowseButton}
              variantStyle={{ marginLeft: 12 }}
            >
              Browse for Uploading
            </Button>
          </View>
          {avatar && (
            <Image
              style={avatarPickerImageStyle}
              source={{ uri: avatar.uri }}
            />
          )}
        </CardSection>
        {signUpFailErrorElement}
        <CardSection>{signUpButton}</CardSection>
      </Card>
    );
  }
}

// Prop Validations
SignUpForm.propTypes = {
  avatar: PropTypes.shape({}),
  email: PropTypes.string,
  isSigningUp: PropTypes.bool,
  navigation: PropTypes.shape({}).isRequired,
  password: PropTypes.string,
  signUpFailErrorText: PropTypes.string,
  onSignUpUser: PropTypes.func.isRequired,
  onUpdateSignUpInfo: PropTypes.func.isRequired,
  username: PropTypes.string,
};

SignUpForm.defaultProps = {
  avatar: null,
  email: '',
  isSigningUp: false,
  password: '',
  signUpFailErrorText: '',
  username: '',
};

const mapStateToProps = (state) => {
  const {
    avatar,
    email,
    isSigningUp,
    password,
    signUpFailErrorText,
    username,
  } = state.Auth.signUpForm;

  return {
    avatar,
    email,
    isSigningUp,
    password,
    signUpFailErrorText,
    username,
  };
};

export default connect(mapStateToProps, {
  onSignUpUser: signUpUser,
  onUpdateSignUpInfo: updateSignUpInfo,
})(SignUpForm);
