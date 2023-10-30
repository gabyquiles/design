import * as React from 'react';
import {createComponent} from '@lit/react';
import { MyButton as MyButtonWC } from './MyButtonWebComponent';

export const MyButton = createComponent<MyButtonWC>({
    react: React,
    tagName: 'my-button',
    elementClass: MyButtonWC,
    displayName: 'MyButton',
    events: {
      onClick: 'click'
    }
})

export interface MyButtonProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    value: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

declare global {
    namespace JSX {
      interface IntrinsicElements {
        'my-button': MyButtonProps
      }
    }
}

export default MyButton;