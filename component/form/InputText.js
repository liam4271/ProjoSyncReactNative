import { Controller, useFormContext } from 'react-hook-form';
import { StyleSheet, Text, TextInput } from 'react-native';

const InputText = ({ name, placeholder, rules, password = false }) => {
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
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder={placeholder}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.input}
            secureTextEntry={password}
            placeholderTextColor="#E3E3E1"
          />
        )}
      />
      {errors && errors[name] && (
        <Text style={styles.error}>{errors[name].message ? errors[name].message : 'Mauvaise valeur'}</Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: '#E3E3E1',
    color: '#E3E3E1',
    fontFamily: 'Archivo',
    borderWidth: 1,
    borderRadius: 5,
    height: 50,
    fontSize: 15,
    padding: 5,
    width: '80%',
  },
  error: {
    color: '#E3E3E1',
  },
});
export default InputText;
