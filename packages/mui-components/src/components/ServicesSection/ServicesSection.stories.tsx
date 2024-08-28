import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ServicesSection, { ServicesSectionProps } from './ServicesSection';
import HomeIcon from '@mui/icons-material/Home';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import BuildIcon from '@mui/icons-material/Build';

export default {
  title: 'Components/ServicesSection',
  component: ServicesSection,
} as Meta;

// Define a template for the stories
const Template: StoryFn<ServicesSectionProps> = (args) => <ServicesSection {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {
  sectionTitle: 'Our Services',
  services: [
    {
      title: 'Home Services',
      description: 'We offer a wide range of home services.',
      icon: <HomeIcon />,
    },
    {
      title: 'Special Offers',
      description: 'Check out our latest special offers.',
      icon: <LocalOfferIcon />,
    },
    {
      title: 'Custom Builds',
      description: 'We can build anything you need.',
      icon: <BuildIcon />,
    },
  ],
};

// Story with custom content
export const WithExtraContent = Template.bind({});
WithExtraContent.args = {
  sectionTitle: 'Our Premium Services',
  services: [
    {
      title: 'Home Services',
      description: 'We offer a wide range of home services.',
      icon: <HomeIcon />,
      extraContent: <a href="#home-services">Learn More</a>,
    },
    {
      title: 'Special Offers',
      description: 'Check out our latest special offers.',
      icon: <LocalOfferIcon />,
      extraContent: <a href="#special-offers">View Offers</a>,
    },
    {
      title: 'Custom Builds',
      description: 'We can build anything you need.',
      icon: <BuildIcon />,
      extraContent: <a href="#custom-builds">Start a Project</a>,
    },
  ],
};

// Story with custom styles
export const CustomStyled = Template.bind({});
CustomStyled.args = {
  sectionTitle: 'Our Custom Styled Services',
  containerSx: { backgroundColor: '#f0f0f0', padding: '2rem' },
  paperSx: { backgroundColor: '#e0e0e0', padding: '2rem' },
  services: [
    {
      title: 'Home Services',
      description: 'We offer a wide range of home services.',
      icon: <HomeIcon />,
    },
    {
      title: 'Special Offers',
      description: 'Check out our latest special offers.',
      icon: <LocalOfferIcon />,
    },
    {
      title: 'Custom Builds',
      description: 'We can build anything you need.',
      icon: <BuildIcon />,
    },
  ],
};