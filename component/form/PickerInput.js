import { Picker } from '@react-native-picker/picker';
import { Controller, useFormContext } from 'react-hook-form';
import { StyleSheet, Text } from 'react-native';

const PickerInput = ({ name, items, rules }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        rules={rules}
        name={name}
        defaultValue={items[0] ? items[0].value : ''}
        render={({ field: { onChange, onBlur, value } }) => (
          <Picker selectedValue={value} onValueChange={(itemValue) => onChange(itemValue)} style={styles.picker}>
            {items.map((item, index) => (
              <Picker.Item label={item.label} value={item.value} key={index} color="white" />
            ))}
          </Picker>
        )}
      />
      {errors && errors[name] && (
        <Text style={styles.error}>{errors[name].message ? errors[name].message : 'Mauvaise valeur'}</Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  picker: {
    width: '50%',
  },
  error: {
    color: '#E3E3E1',
  },
});

export default PickerInput;
