import React from 'react';
import { Meta } from '@storybook/react';
import CodeSection from './CodeSection';

export default {
  title: 'Components/CodeSection',
  component: CodeSection,
} as Meta;

export const JavaScriptExample = () => (
  <CodeSection
    code={`import React from 'react';

const MyComponent = () => {
  return <div>Hello, World!</div>;
};`}
    language="javascript"
  />
);

export const PythonExample = () => (
  <CodeSection
    code={`def greet(name): 
    return f"Hello, {name}!"`}
    language="python"
  />
);

export const HTMLExample = () => (
  <CodeSection
    code={`<div>
    <h1>Hello, World!</h1>
    <p>This is a simple HTML example.</p>
  </div>`}
    language="html"
  />
);

export const CSSExample = () => (
  <CodeSection
    code={`.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}`}
    language="css"
  />
);

export const CopyFeatureExample = () => (
  <CodeSection
    code={`console.log('This is a test for the copy feature');`}
    language="javascript"
  />
);