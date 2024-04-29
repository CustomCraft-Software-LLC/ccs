import React from 'react';
import StatWidget from './StatWidget';

export default {
  title: 'Components/StatWidget', 
  component: StatWidget,
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => {
  return (   
    <div>
      <StatWidget isNum={true} stat={30} title="Growth" />
      <StatWidget isNum={false} stat={30} title="Growth" />
    </div>
  );
}