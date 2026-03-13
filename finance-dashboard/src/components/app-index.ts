import { initTransactionsManager } from '../bridge/transaction-managet.js';
import { ElementController } from '@open-cells/element-controller';
import { customElement } from 'lit/decorators.js';
import { routes } from '../router/routes.js';
import { startApp } from '@open-cells/core';
import { styles } from './app-index.css.js';
import { LitElement, html } from 'lit';
import "./index.ts"

startApp({
  routes,
  mainNode: 'app-content',
});

@customElement('app-index')
export class AppIndex extends LitElement {
  elementController = new ElementController(this);

  constructor() {
    super()
    initTransactionsManager(this)
  }

  static styles = styles;


  render() {
    return html`
      <wc-navigation></wc-navigation>
      <main role="main" tabindex="-1">
        <slot></slot>
      </main>
    `;
  }
}
