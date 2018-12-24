// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import {
  Picker,
  Text,
  View,
} from 'react-native';

// Local Variables
const styles = {
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20,
  },
};

// Component Definition
function NativePicker(props) {
  const {
    onPick,
    optionsToPick,
    pickedValue,
    pickerLabel,
  } = props;

  const optionsElement = optionsToPick.map(
    option => (
      <Picker.Item
        key={option.key}
        label={option.label}
        value={option.value}
      />
    ),
  );

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

// Prop Validations
NativePicker.propTypes = {
  onPick: PropTypes.func.isRequired,
  optionsToPick: PropTypes.arrayOf(PropTypes.object).isRequired,
  pickedValue: PropTypes.string.isRequired,
  pickerLabel: PropTypes.string,
};

NativePicker.defaultProps = {
  pickerLabel: 'Please Select',
};

export default NativePicker;
