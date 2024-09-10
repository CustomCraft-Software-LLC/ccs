import React from 'react';
import { TextInput as RNTextInput, View, Text, StyleSheet, TextInputProps } from 'react-native';

interface Props extends TextInputProps {
  label?: string;
}

const TextInput: React.FC<Props> = ({ label, style, ...props }) => (
  <View style={styles.container}>
    {label && <Text style={styles.label}>{label}</Text>}
    <RNTextInput style={[styles.input, style]} {...props} />
  </View>
);

const styles = StyleSheet.create({
  container: { marginVertical: 10 },
  label: { marginBottom: 5, fontSize: 16 },
  input: { height: 40, borderColor: '#ccc', borderWidth: 1, borderRadius: 5, paddingHorizontal: 10 },
});

export default TextInput;