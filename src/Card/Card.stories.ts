// YourComponent.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Card> = {
  component: Card,
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