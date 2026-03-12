import { ElementController } from "@open-cells/element-controller";
import { customElement, property } from "lit/decorators.js";
import { SelectOptions } from "../../types/input.js";
import { styles } from "./select.css.js";
import { html, LitElement } from "lit";

@customElement('wc-select')
export class Select extends LitElement {
    elementController = new ElementController(this)

    static styles = styles

    @property({ type: String })
    name: string = "";

    @property({ type: String })
    value: string = ""

    @property({ type: Array })
    options: SelectOptions[] = []


    private _handleChangeOption = (event: Event) => {
        const target = event.target as HTMLSelectElement;
        this.value = target.value; 

        this.dispatchEvent(new CustomEvent('change', {
            detail: this.value,
            bubbles: true,
            composed: true
        }));
    }

    render() {
        return html`
            <div class="select select__wrapper">
                <select 
                    name=${this.name}
                    .value=${this.value}
                    class="select select__field"
                    @change=${this._handleChangeOption}
                >
                    ${this.options.map((item) => {
            return html`
                                <option .value=${item.value}>
                                    ${item.label}
                                </option>
                            `
        })
            }
                </select>
            </div>
        `
    }
}