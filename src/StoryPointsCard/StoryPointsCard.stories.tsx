import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import StoryPointsCard from './StoryPointsCard';

function StoryPointsCardWithValue({value}: {value: string}) {
    return (
        <StoryPointsCard>
            {value}
        </StoryPointsCard>
    )
}

const meta: Meta = {
    title: 'Atoms/StoryPointsCard',
    component: StoryPointsCardWithValue,
}

export const FirstStory: StoryObj = {
    args: {
        value: '5'
    }
}

export default meta;
