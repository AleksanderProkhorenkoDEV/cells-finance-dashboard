import { ElementController } from "@open-cells/element-controller";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./input.css.js";
import { html, LitElement } from "lit";

@customElement('wc-input')
export class Input extends LitElement {
    elementController = new ElementController(this)

    @property({ type: String })
    name: string = "";

    @property({ type: String })
    value: string = "";

    @property({ type: String })
    placeholder: string = "";

    @property({ attribute: false })
    type: HTMLInputElement["type"] = "text"

    @property({ type: Boolean })
    required: boolean = true

    static styles = styles

    private _onInput(e: Event) {
        const target = e.target as HTMLInputElement;
        this.value = target.value; 

        this.dispatchEvent(new CustomEvent('input', {
            detail: this.value,
            bubbles: true,
            composed: true
        }));
    }


    render() {
        return html` 
            <input 
                class="input input__field"
                name=${this.name}
                .placeholder=${this.placeholder}
                .value=${this.value}
                .type=${this.type}
                .required=${this.required ? true : false}
                @input=${this._onInput}
            />
        `
    }
}