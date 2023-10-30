import * as React from 'react';
import { render, waitFor } from '@testing-library/react';
import { screen } from 'shadow-dom-testing-library';

import { MyButton } from "../../src/MyButton"

describe('MyButton', () => {
    it('renders correctly', () => {
        const { container } = render(<MyButton>Click Me</MyButton>)
        expect(container).toMatchSnapshot();
    })
    it('shows the text for the button', async () => {
        render(<MyButton>Click Me</MyButton>)
        expect(screen.getByShadowText('Click Me')).toBeInTheDocument()
    })
})