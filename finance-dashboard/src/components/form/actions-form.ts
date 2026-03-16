import { ElementController } from "@open-cells/element-controller";
import { TransactionServices } from "../../services/transaction";
import { customElement, state } from "lit/decorators.js";
import { ACTIONS } from "../../utils/contants";
import { styles } from "./actions-form.css";
import { html, LitElement } from "lit";
import { FormErrors } from "../../types/input";

@customElement("action-form")
export class ActionForm extends LitElement {
    elementController = new ElementController(this)

    @state()
    private _debounceTimer?: number;

    @state()
    private _values: Record<string, any> = { type: 'ingreso', title: '', amount: 0 };

    @state()
    private _validationErrors?: FormErrors

    static styles = styles

    private _handleSubmit = (event: Event) => {
        event.preventDefault();

        const isCorrect = this._validateFields(this._values)

        if (!isCorrect) {
            console.log(this._validationErrors);
            return
        }

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

    _validateFields = (values: Record<"title" | "amount" | "type", string>): Boolean => {

        const result: FormErrors = {
            title: {
                message: ""
            },
            amount: {
                message: ""
            },
            type: {
                message: ""
            }
        }

        if (Number(values.amount) <= 0) {
            result.amount.message = "La cantidad tiene que ser positiva";
        }

        if (values.title.trim().length < 3) {
            result.title.message = "El concepto tiene que tener mínimo tres caracteres";
        }

        const validTypes = ['ingreso', 'retirada'];
        if (!validTypes.includes(values.type.toLowerCase())) {
            result.type.message = "El tipo debe ser ingreso o retirada";
        }

        const isValid = Object.values(result).every(field => field.message === "");
        this._validationErrors = result

        return isValid;
    }

    render() {
        return html`
            <form @submit=${this._handleSubmit} class="form">
                <div class="field-container">
                    <wc-input 
                        name=${"title"}
                        .value=${this._values.title}
                        @input=${this._handleChangeInput}
                    ></wc-input>
                    ${this._validationErrors?.title.message
                        ? html`<span class="error-text">${this._validationErrors.title.message}</span>`
                        : ''
                    }
                </div>
                <div class="field-container">
                    <wc-input
                        name=${"amount"}
                        .type=${"number"}
                        .value=${this._values.amount}
                        @input=${this._handleChangeInput}
                    ></wc-input>
                    ${this._validationErrors?.amount.message
                        ? html`<span class="error-text">${this._validationErrors.amount.message}</span>`
                        : ''
                    }
                </div>
                <div class="field-container">
                    <wc-select .name=${"type"} .options=${ACTIONS} @change=${this._handleChangeInput}></wc-select>
                    ${this._validationErrors?.type.message 
                        ? html`<span class="error-text">${this._validationErrors.type.message}</span>` 
                        : ''
                    }
                </div>                   
                <wc-button .type=${"submit"} .variant=${"primary"} .customStyles=${"button--full-width"}>
                    Guardar movimiento
                </wc-button>
            </form>
        `
    }
}