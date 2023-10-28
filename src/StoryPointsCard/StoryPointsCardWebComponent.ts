// import { WebComponentProps } from '@lit/react';
import {html, css, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('storypoints-card')
export class StoryPointsCard extends LitElement {
  static styles = css`
    .card {
      background-color: rgb(255, 255, 255);
      color: rgb(0, 0, 0);
      transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      border-radius: 4px;
      box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
      background-image: linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05));
      overflow: hidden;
      width: 6.6em;
      height: 9.2em;
      margin: 1em;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .card span {
      font-size: 2em;
    }
  `;

  render() {
      return html`
        <div class="card">
          <slot></slot>
        </div>
      `;
  }
}