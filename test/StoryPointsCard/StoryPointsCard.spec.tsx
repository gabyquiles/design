import * as React from 'react';
import { render, waitFor } from '@testing-library/react';
import { screen } from 'shadow-dom-testing-library';

import StoryPointsCard from "../../src/StoryPointsCard/StoryPointsCard"

describe('StoryPointsCard', () => {
    it('renders correctly', () => {
        const { container } = render(<StoryPointsCard>7</StoryPointsCard>)
        expect(container).toMatchSnapshot();
    })
    it('shows the storypoints value', async () => {
        render(<StoryPointsCard>7</StoryPointsCard>)
        expect(screen.getByShadowText('7')).toBeInTheDocument()
    })
})