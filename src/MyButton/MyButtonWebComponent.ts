import {html, css, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('my-button')
export class MyButton extends LitElement {
  static styles = css`
    button {
      padding: 5px 15px;
      font-size: 0.85rem;
      border: solid 1px rgb(0, 144, 255, 0.5);
      border-radius: 4px;
      background: transparent;
      color: rgb(0, 144, 255);
    }
    button:hover {
      background-color: rgb(0, 144, 255, 0.05);
      border: solid 1px rgb(0, 144, 255, 5);
    }
  `;

  render() {
      return html`
        <button @click="${this.handleClick}">
          <slot></slot>
        </button>
      `;
  }

  private handleClick(e: MouseEvent) {
    e.stopPropagation();
    this.dispatchEvent(new Event('click', {bubbles: true, composed: true}));
  }
}