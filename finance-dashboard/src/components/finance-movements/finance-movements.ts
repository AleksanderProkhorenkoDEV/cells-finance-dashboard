import { ElementController } from "@open-cells/element-controller";
import { customElement, state } from "lit/decorators.js";
import { html, LitElement } from "lit";
import { Transaction } from "../../types/transactions";
import { TransactionServices } from "../../services/transaction";

@customElement("finance-movements")
export class FinanceMovements extends LitElement {
    elementController = new ElementController(this);

    @state()
    transactions: Transaction[] = []

    connectedCallback(): void {
        super.connectedCallback()

        this.transactions = TransactionServices.getAllTransaction()

        this.elementController.subscribe("transactions-list-updated", (newList: Transaction[]) => {
            this.transactions = newList
        })
    }

    render() {
        return html`
                <h1 class="action__title">Movimientos</h1>
                ${
                    this.transactions.map((item) => {
                        return html`
                            <item-card .transaction=${item}></item-card>
                        `
                    })
                }
            `
    }
}