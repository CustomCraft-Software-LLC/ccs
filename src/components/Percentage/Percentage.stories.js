import React from 'react';
import Percentage from './Percentage';

export default {
  title: 'Components/Percentage', 
  component: Percentage,
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => {
  return (   
    <Percentage percent={30.2}/>
  );
}
