import { ElementController } from "@open-cells/element-controller";
import { TransactionServices } from "../../services/transaction";
import { PageController } from "@open-cells/page-controller";
import { TransactionType } from "../../types/transactions";
import { customElement, state } from "lit/decorators.js";
import { html, LitElement } from "lit";

@customElement('balance-page')
export class BalancePage extends LitElement {
    pageController = new PageController(this)
    elementController = new ElementController(this)

    @state()
    private _income: number = 0;
    @state()
    private _widthdraw: number = 0;


    protected createRenderRoot(): HTMLElement | DocumentFragment {
        return this;
    }


    connectedCallback(): void {
        super.connectedCallback();

        this._income = this._onTransactionsUpdated("ingreso")
        this._widthdraw = this._onTransactionsUpdated("retirada")
        this.elementController.subscribe("transactions-list-updated", () => {
            this._income = this._onTransactionsUpdated("ingreso")
            this._widthdraw = this._onTransactionsUpdated("retirada")
        })
    }

    disconnectedCallback(): void {
        super.disconnectedCallback();

        this.elementController.unsubscribe(
            "transactions-list-updated",
        );
    }

    private _onTransactionsUpdated = (filter: TransactionType) => {
        return TransactionServices.getAllIconme(filter);
    }

    render() {
        const balance = this._income - this._widthdraw
        return html`
            <section class="balance">
                <article class="balance__stat balance__stat--income">
                    <h2 class="balance__title">Total de ingresos</h2>
                    <p class="balance__value">${this._income} €</p>
                </article>
                <article class="balance__stat balance__stat--withdraw">
                    <h2 class="balance__title">Total de pérdidas</h2>
                    <p class="balance__value">${this._widthdraw} €</p>
                </article>
                <article class="balance__stat balance__stat--available">
                    <h2 class="balance__title">Saldo disponible</h2>
                    <p class="balance__value">${balance} €</p>
                </article>
            </section>
        `
    }
}