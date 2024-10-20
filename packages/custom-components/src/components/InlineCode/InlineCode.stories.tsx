import React from 'react';
import { Meta } from '@storybook/react';
import InlineCode from './InlineCode';

export default {
  title: 'Components/InlineCode',
  component: InlineCode,
} as Meta;

export const Default = () => (
  <InlineCode>const x = 42;</InlineCode>
);

export const JavaScriptExample = () => (
  <InlineCode>let result = add(5, 3);</InlineCode>
);

export const HTMLExample = () => (
  <InlineCode>{`<div class="container"></div>`}</InlineCode>
);

export const CSSExample = () => (
  <InlineCode>{`.container { display: flex; justify-content: center; }`}</InlineCode>
);

export const PythonExample = () => (
  <InlineCode>{`def greet(name): return f"Hello, {name}"`}</InlineCode>
);