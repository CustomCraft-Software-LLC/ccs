import React from 'react';
import TextInput from './TextInput';

const NumericInput: React.FC<Omit<React.ComponentProps<typeof TextInput>, 'keyboardType'>> = (props) => (
  <TextInput keyboardType="numeric" {...props} />
);

export default NumericInput;