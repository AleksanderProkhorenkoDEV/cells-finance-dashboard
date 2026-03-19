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
        return TransactionServices.getCurrentMonthMoney(filter);
    }

    render() {
        const balance = this._income - this._widthdraw;
        const total = this._income || 1;

        const expensePercent = ((this._widthdraw / total) * 100).toFixed(1);
        const savingPercent = ((balance / total) * 100).toFixed(1);
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
            <section class="balance-metrics">
                <article class="balance-metrics__card">
                    <h3 class="balance-metrics__title">% Gastado</h3>
                    <p class="balance-metrics__value balance-metrics__value--expense">
                    ${expensePercent}%
                    </p>
                </article>

                <article class="balance-metrics__card">
                    <h3 class="balance-metrics__title">% Ahorro</h3>
                    <p class="balance-metrics__value balance-metrics__value--saving">
                    ${savingPercent}%
                    </p>
                </article>
                </section>

                <section class="balance-charts">
                    <article class="balance-charts__item">
                        <income-chart></income-chart>
                    </article>

                    <article class="balance-charts__item">
                        <category-chart></category-chart>
                    </article>
                </section>
            </section>
        `
    }
}