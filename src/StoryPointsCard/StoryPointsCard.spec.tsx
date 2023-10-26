import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import StoryPointsCard from "./StoryPointsCard"

describe('StoryPointsCard', () => {
    it('Test', () => {
        render(<StoryPointsCard value={'5'} />);
        expect(screen.getByText('5')).toBeInTheDocument();
    })
})