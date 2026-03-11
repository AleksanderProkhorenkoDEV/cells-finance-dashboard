import { ElementController } from "@open-cells/element-controller";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./input.css.js";
import { html, LitElement } from "lit";

@customElement('wc-input')
export class Input extends LitElement {
    elementController = new ElementController(this)

    @property({ type: String })
    value: string = "";

    @property({ attribute: false })
    type: HTMLInputElement["type"] = "text"

    @property({ type: Boolean })
    required: boolean = true

    static styles = styles


    render() {
        return html` 
            <input 
                class="input input__field"
                .value=${this.value}
                .type=${this.type}
                .required=${this.required ? true : false}
            />
        `
    }
}