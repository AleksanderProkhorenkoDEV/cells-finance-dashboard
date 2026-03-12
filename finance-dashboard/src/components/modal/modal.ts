import { ElementController } from "@open-cells/element-controller";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./modal.css.js";
import { html, LitElement } from "lit";

@customElement('wc-modal')
export class Modal extends LitElement {
    elementController = new ElementController(this)

    @property({ type: String })
    title: string = "Title modal"

    @property({ type: Boolean, reflect: true })
    open: boolean = false

    static styles = styles

    private _handleAction(confirmed: boolean) {
        this.dispatchEvent(new CustomEvent('modal-result', {
            detail: confirmed,
            bubbles: true,
            composed: true
        }));
        this.open = false;
    }


    render() {
        return html`
            <div class="modal">
                <h3>${this.title}</h3>
                <slot name="modal-content"></slot>
                <div class="actions">
                    <wc-button .variant=${"primary"} @click=${() => this._handleAction(true)}>
                        Confirmar
                    </wc-button>
                    <wc-button .variant=${"danger"} @click=${() => this._handleAction(false)}>
                        Cancelar
                    </wc-button>
                </div>
            </div>
        `
    }
}