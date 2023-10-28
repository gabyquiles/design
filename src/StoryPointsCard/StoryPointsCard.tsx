import * as React from 'react';
import {createComponent} from '@lit/react';
import { StoryPointsCard as StoryPointsCardWC } from './StoryPointsCardWebComponent';

export const StoryPointsCard = createComponent<StoryPointsCardWC>({
    react: React,
    tagName: 'storypoints-card',
    elementClass: StoryPointsCardWC,
    displayName: 'StoryPointsCard'
})

interface StoryPointsCardProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    value: string
}

declare global {
    namespace JSX {
      interface IntrinsicElements {
        'storypoints-card': StoryPointsCardProps
      }
    }
}

export default StoryPointsCard;