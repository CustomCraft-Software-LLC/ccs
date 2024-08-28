import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import ServicesSection, { ServicesSectionProps } from './ServicesSection';
import { Build, Home, Business } from '@mui/icons-material';

export default {
  title: 'Components/ServicesSection',
  component: ServicesSection,
  argTypes: {
    services: {
      control: 'object', // Allows editing the services object in Storybook's controls panel
    },
  },
} as Meta;

const Template: StoryFn<ServicesSectionProps> = (args) => <ServicesSection {...args} />;

export const Default = Template.bind({});
Default.args = {
  services: [
    {
      title: 'Consulting',
      description: 'We provide expert consulting services to help you grow your business.',
      icon: Build,
    },
    {
      title: 'Web Development',
      description: 'Our team creates stunning and functional websites tailored to your needs.',
      icon: Home,
    },
    {
      title: 'Marketing',
      description: 'Effective marketing strategies to elevate your brand and reach more customers.',
      icon: Business,
    },
  ],
};