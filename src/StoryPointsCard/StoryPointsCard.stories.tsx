import type { Meta, StoryObj } from '@storybook/react';
import StoryPointsCard from './StoryPointsCard';

const meta: Meta = {
    title: 'StoryPointsCard',
    component: StoryPointsCard,
}

export const FirstStory: StoryObj = {
    args: {
        value: '5'
    }
}

export default meta;
