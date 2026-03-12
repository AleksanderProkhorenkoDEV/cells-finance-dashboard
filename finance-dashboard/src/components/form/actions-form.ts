import { ElementController } from "@open-cells/element-controller";
import { TransactionServices } from "../../services/transaction";
import { customElement, state } from "lit/decorators.js";
import { ACTIONS } from "../../utils/contants";
import { styles } from "./actions-form.css";
import { html, LitElement } from "lit";

@customElement("action-form")
export class ActionForm extends LitElement {
    elementController = new ElementController(this)
    
    @state()
    private _debounceTimer?: number;

    @state()
    private _values: Record<string, any> = { type: 'ingreso', title: '', amount: 0 };

    static styles = styles

    private _handleSubmit = (event: Event) => {
        event.preventDefault();

        const transaction = TransactionServices.createTransaction(this._values);
        this.elementController.publish('new-transaction', transaction);

        this._values = { type: 'ingreso', title: '', amount: 0 };
    }

    private _handleChangeInput = (event: Event) => {
        const input = event.target as HTMLInputElement
        const name = input.name;
        const value = input.value;

        clearTimeout(this._debounceTimer);

        this._debounceTimer = window.setTimeout(() => {
            this._values = { ...this._values, [name]: value };
        }, 300);
    }

    render() {
        return html`
            <form @submit=${this._handleSubmit} class="form">
                <wc-input 
                    name=${"title"}
                    .type=${"text"}
                    .placeholder=${"Concepto"}
                    .required=${true}
                    .value=${this._values.title}
                    @input=${this._handleChangeInput}
                ></wc-input>
                <wc-input
                    name=${"amount"}
                    .type=${"number"}
                    .placeholder=${"cantidad"}
                    .required=${true}
                    .value=${this._values.amount}
                    @input=${this._handleChangeInput}
                ></wc-input>
                <wc-select .name=${"type"} .options=${ACTIONS} @change=${this._handleChangeInput}></wc-select>                   
                <wc-button .type=${"submit"} .variant=${"primary"}>
                    Guardar movimiento
                </wc-button>
            </form>
        `
    }
}