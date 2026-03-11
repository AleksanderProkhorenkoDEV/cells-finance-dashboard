import { ElementController } from "@open-cells/element-controller";
import { customElement } from "lit/decorators.js";
import { html, LitElement } from "lit";

@customElement("finance-char")
export class FinanceMovements extends LitElement {
    elementController = new ElementController(this);

    render() {
        return html`
                <h1>Gráficas</h1>
            `
    }
}