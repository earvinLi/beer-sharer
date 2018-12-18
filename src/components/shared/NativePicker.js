// External Dependencies
import React from 'react';
import {
  Picker,
  Text,
  View,
} from 'react-native';

// Component Definition
function NativePicker(props) {
  const {
    onPick,
    optionsToPick,
    pickedValue,
    pickerLabel,
  } = props;

  const optionsElement = optionsToPick.map(option =>
    <Picker.Item key={option.key} label={option.label} value={option.value} />);

  return (
    <View>
      <Text style={styles.pickerLabelStyle}>{pickerLabel}</Text>
      <Picker
        onValueChange={onPick}
        selectedValue={pickedValue}
      >
        {optionsElement}
      </Picker>
    </View>
  );
}

const styles = {
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20,
  },
};

export { NativePicker };
