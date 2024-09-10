import React from 'react';
import TextInput from './TextInput';

const PasswordInput: React.FC<Omit<React.ComponentProps<typeof TextInput>, 'secureTextEntry'>> = (props) => (
  <TextInput secureTextEntry {...props} />
);

export default PasswordInput;