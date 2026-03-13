import { ElementController } from "@open-cells/element-controller";
import { customElement, property, state } from "lit/decorators.js";
import { ButtonType, ButtonVariant } from "../../types/ui.js";
import { styles } from "./button.css.js";
import { html, LitElement } from "lit";

@customElement('wc-button-with-modal')
export class ButtonModal extends LitElement {
    elementController = new ElementController(this)

    static styles = styles

    @property({ type: String })
    type: ButtonType = "button"

    @property({ type: String })
    variant: ButtonVariant = "primary"

    @property({ type: String })
    titleModal: string = "Title modal"

    @state()
    private _isOpen: boolean = false;

    _handleModalResult = (event: CustomEvent) => {
        this._isOpen = false;
        if (event.detail) {
            this.elementController.publish("delete-all-transaction", 'transactions')
            return
        }
    }

    render() {
        return html`
            <wc-button 
                .variant=${this.variant} 
                .type=${this.type} 
                @button-click=${() => this._isOpen = true}>
                <slot name="button-text"></slot>
            </wc-button>
            <wc-modal 
                .title=${this.titleModal} 
                .open=${this._isOpen}
                @modal-result=${this._handleModalResult}
            >
                <slot name="modal-content" slot="modal-content"></slot>            
            </wc-modal>
        `
    }
}