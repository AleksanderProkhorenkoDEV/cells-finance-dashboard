import { ElementController } from "@open-cells/element-controller";
import { TransactionServices } from "../../services/transaction";
import { PageController } from "@open-cells/page-controller";
import { customElement, state } from "lit/decorators.js";
import { Transaction } from "../../types/transactions";
import { html, LitElement } from "lit";

@customElement('movements-page')
export class MovementsPage extends LitElement {
    pageController = new PageController(this)
    elementController = new ElementController(this)

    protected createRenderRoot(): HTMLElement | DocumentFragment {
        return this;
    }

    @state()
    transactions: Transaction[] = []

    connectedCallback(): void {
        super.connectedCallback()

        this.transactions = TransactionServices.getAllTransaction()

        this.elementController.subscribe("transactions-list-updated", (newList: Transaction[]) => {
            this.transactions = newList
        })
    }

    disconnectedCallback(): void {
        super.disconnectedCallback()

        this.elementController.unsubscribe("transactions-list-update")
    }

    render() {
        return html`
            <section class="movements">
                <article class="movements__list">
                    ${
                        this.transactions.map((item) => {
                            return html`
                                <item-card .transaction=${item}></item-card>
                            `
                        })
                    }
                </article>
                <article class="movements__action">
                    <div class="action__form">
                        <action-form></action-form>
                    </div>
                    <div class="action__button">
                        <wc-button-with-modal 
                        .type=${"button"} 
                        .variant=${"danger"} 
                        .titleModal=${"¿Estas seguro?"}
                    >
                        <span slot="button-text">Eliminar todos los movimientos</span>
                        <div slot="modal-content">
                            <p>Esta acción es permanente y no se puede deshacer.</p>
                        </div>
                        </wc-button-with-modal>
                    </div>
                </article>
                
            </section>
        `
    }
}