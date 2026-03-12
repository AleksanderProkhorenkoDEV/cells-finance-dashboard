import { customElement } from 'lit/decorators.js';
import { PageController } from '@open-cells/page-controller';
import { html, LitElement } from 'lit';

@customElement('home-page')
export class HomePage extends LitElement {
  pageController = new PageController(this);

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  render() {
    return html`
      <h1>Home page</h1>
    `;
  }
}
