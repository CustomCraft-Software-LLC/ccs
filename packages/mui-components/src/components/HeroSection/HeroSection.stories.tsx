import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import HeroSection, { HeroSectionProps } from './HeroSection';

export default {
  title: 'Components/HeroSection',
  component: HeroSection,
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    backgroundImage: { control: 'text' },
    ctaText: { control: 'text' },
    ctaLink: { control: 'text' },
    overlayColor: { control: 'color' },
    textColor: { control: 'color' },
  },
} as Meta<HeroSectionProps>;

const Template: StoryFn<HeroSectionProps> = (args) => <HeroSection {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Welcome to Our Website',
  subtitle: 'We are glad to have you here!',
  backgroundImage: 'https://via.placeholder.com/1920x1080', // Placeholder image
  ctaText: 'Get Started',
  ctaLink: '#',
  overlayColor: 'rgba(0, 0, 0, 0.5)',
  textColor: '#fff',
};

export const NoSubtitle = Template.bind({});
NoSubtitle.args = {
  title: 'Explore Our Services',
  backgroundImage: 'https://via.placeholder.com/1920x1080',
  ctaText: 'Learn More',
  ctaLink: '#',
};

export const WithCustomOverlay = Template.bind({});
WithCustomOverlay.args = {
  title: 'Join Our Community',
  subtitle: 'Sign up to stay updated',
  backgroundImage: 'https://via.placeholder.com/1920x1080',
  ctaText: 'Sign Up',
  ctaLink: '#',
  overlayColor: 'rgba(255, 0, 0, 0.5)', // Red overlay
  textColor: '#fff',
};

export const WithoutCTA = Template.bind({});
WithoutCTA.args = {
  title: 'Contact Us',
  subtitle: 'We would love to hear from you!',
  backgroundImage: 'https://via.placeholder.com/1920x1080',
  overlayColor: 'rgba(0, 0, 0, 0.3)',
  textColor: '#fff',
};