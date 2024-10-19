import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CodeSection from './CodeSection';

const meta: Meta = {
  title: 'Components/CodeSection',
  component: CodeSection,
};

export default meta;

const Template: StoryFn<{ code: string; language?: string }> = (args) => <CodeSection {...args} />;

export const Default = Template.bind({});
Default.args = {
  code: `import React from 'react';

const MyComponent = () => {
  return <div>Hello, World!</div>;
};`,
  language: 'javascript',
};

export const AnotherExample = Template.bind({});
AnotherExample.args = {
  code: `const add = (a, b) => a + b;`,
  language: 'javascript',
};