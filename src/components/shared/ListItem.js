// External Dependencies
import React from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

// Internal Dependencies
import { CardSection } from './CardSection';

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

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
};

export { ListItem };
