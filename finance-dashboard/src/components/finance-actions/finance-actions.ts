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
        `
    }
}