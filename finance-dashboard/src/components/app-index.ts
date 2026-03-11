import { ElementController } from '@open-cells/element-controller';
import { customElement } from 'lit/decorators.js';
import './finance-movements/finance-movements.ts';
import './finanace-balance/finance-balance.ts';
import './finance-actions/finance-actions.ts';
import { routes } from '../router/routes.js';
import { startApp } from '@open-cells/core';
import { styles } from './app-index.css.js';
import './finance-char/finance-char.ts';
import { LitElement, html } from 'lit';
import './cards/card.ts';

startApp({
  routes,
  mainNode: 'app-content',
});

@customElement('app-index')
export class AppIndex extends LitElement {
  elementController = new ElementController(this);

  static styles = styles;

  render() {
    return html`
      <main role="main" tabindex="-1">
        <wc-card>
          <finance-balance></finance-balance>
        </wc-card>
        <wc-card>
          <finance-movements></finance-movements>
        </wc-card>
        <wc-card>
          <finance-char></finance-char>
        </wc-card>
        <wc-card>
          <finance-actions></finance-actions>
        </wc-card>
      </main>
    `;
  }
}
