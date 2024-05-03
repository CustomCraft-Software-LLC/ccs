import React from 'react';
import { Meta } from '@storybook/react';
import StatWidget from './StatWidget.tsx';

export default {
  title: 'Components/StatWidget', 
  component: StatWidget,
  parameters: {
    layout: 'centered',
  },
} as Meta;

export const Default = () => {
  return (   
    <div>
      <StatWidget isNum={true} stat={30} title="Growth" />
      <StatWidget isNum={false} stat={30} title="Growth" />
    </div>
  );
}