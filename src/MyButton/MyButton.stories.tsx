import type { Meta, StoryObj } from '@storybook/react';
import { MyButton } from './MyButton';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'Atoms/Button',
    component: MyButton,
    parameters: {
      // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
      onClick: { action: 'clicked'}
    },
  } satisfies Meta<typeof MyButton>;
  
  export default meta;

export const Primary: StoryObj = {
  args: {
    primary: true,
    children: 'Button',
  },
};