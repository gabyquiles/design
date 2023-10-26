// YourComponent.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Card> = {
  title: 'Atoms/Card',
  component: Card,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const FirstStory: Story = {
  args: {
    img: {
      src: '../stories/assets/assets.png',
      alt: 'Assets'
    },
    title: 'Hello'
  },
};