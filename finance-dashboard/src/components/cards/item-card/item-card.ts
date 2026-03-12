import { Transaction } from "../../../types/transactions.js";
import { customElement, property } from "lit/decorators.js";
import { classMap } from 'lit/directives/class-map.js';
import { styles } from "./item-card.css.js";
import { html, LitElement } from "lit";

@customElement('item-card')
export class ItemCard extends LitElement {

    static styles = styles

    @property({ type: Object })
    transaction?: Transaction

    render() {
        const classes = {
            'card': true,
            'card--income': this.transaction?.type === 'ingreso', 
            'card--expense': this.transaction?.type === 'retirada'
        };

        return html`
        <div class="${classMap(classes)}">
            <div class="card__data">
                <span class="card__title">${this.transaction?.title}</span>
                <span class="card__amount">
                    ${this.transaction?.type === 'retirada' ? '-' : '+'}${this.transaction?.amount} €
                </span>
            </div>
            <div class="card__footer">
                <time>${this.transaction?.addedAt}</time>
                <span class="card__type-badge">${this.transaction?.type}</span>
            </div>
        </div>
        `
    }
}