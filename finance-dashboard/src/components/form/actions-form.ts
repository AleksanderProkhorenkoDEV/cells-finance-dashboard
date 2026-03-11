import { ElementController } from "@open-cells/element-controller";
import { customElement } from "lit/decorators.js";
import { ACTIONS } from "../../utils/contants";
import { styles } from "./actions-form.css";
import { html, LitElement } from "lit";

@customElement("action-form")
export class ActionForm extends LitElement {
    elementController = new ElementController(this)

    static styles = styles

    private _handleSubmit = (event: Event) => {
        event.preventDefault();
        console.log('Se ejecuta el form');
    }

    render() {
        return html`
            <form @submit=${this._handleSubmit} class="form">
                <wc-input
                    .type=${"number"}
                    .required=${true}
                ></wc-input>
                <wc-select .options=${ACTIONS} ></wc-select>                   
                <wc-button .type=${"submit"} .variant=${"primary"}>
                    Guardar movimiento
                </wc-button>
            </form>
        `
    }
}