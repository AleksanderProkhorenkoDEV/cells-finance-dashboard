import { ElementController } from "@open-cells/element-controller";
import { customElement, property } from "lit/decorators.js";
import { ButtonType, ButtonVariant } from "../../types/ui";
import { styles } from "./button.css.js";
import { html, LitElement } from "lit";

@customElement('wc-button')
export class Button extends LitElement {
    elementController = new ElementController(this)

    static styles = styles

    @property({ type: String })
    type: ButtonType = "button"

    @property({ type: String })
    variant: ButtonVariant = "primary"

    private _handleClick = () => {

        if (this.type === "submit") {
            const form = this.closest("form");
            form?.requestSubmit();
            return
        }

        if (this.type === "reset") {
            const form = this.closest("form");
            form?.reset();
            return
        }

        this.dispatchEvent(new Event("button-click", {
            bubbles: true,
            composed: true
        }))
    }

    render() {
        return html`
            <button 
                type=${this.type} 
                class=${`button button__field button__field--${this.variant}`}
                @click=${this._handleClick}
            >
                <p><slot></slot></p>
            </button>
        `
    }
}