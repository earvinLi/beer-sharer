// External Dependencies
import React from 'react';
import {
  Text,
  TouchableWithoutFeedback,
} from 'react-native';

// Internal Dependencies
import { CardSection } from './CardSection';

// Component Definition
const ListItem = (props) => {
  const {
    onPress,
    title,
  } = props;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <CardSection>
        <Text style={styles.titleStyle}>{title}</Text>
      </CardSection>
    </TouchableWithoutFeedback>
  );
};

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
};

export { ListItem };
