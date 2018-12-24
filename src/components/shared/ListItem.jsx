// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

// Local Dependencies
import CardSection from './CardSection';

// Local Variables
const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
};

// Component Definition
function ListItem(props) {
  const {
    onPress,
    title,
  } = props;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      {/* <TouchableWithoutFeedback /> needs <View />!!! */}
      <View>
        <CardSection>
          <Text style={styles.titleStyle}>{title}</Text>
        </CardSection>
      </View>
    </TouchableWithoutFeedback>
  );
}

// Prop Validations
ListItem.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string.isRequired,
};

ListItem.defaultProps = {
  onPress: null,
};

export default ListItem;
