import { customElement } from "lit/decorators.js";
import { styles } from "./finance-actions.css.js";
import { html, LitElement } from "lit";
import { ElementController } from "@open-cells/element-controller";

@customElement('finance-actions')
export class FinanceActions extends LitElement {
    elementController = new ElementController(this);

    static styles = styles;

    render() {
        return html`
            <h1 class="action__title">Acciones rápidas</h1>
            <action-form></action-form>
            
        `
    }
}