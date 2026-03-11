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
    value: string = ""

    @property({ type: Array })
    options: SelectOptions[] = []


    private _handleChangeOption = (event: Event) => {
        
    }

    render() {
        return html`
            <div class="select select__wrapper">
                <select 
                    .value=${this.value}
                    class="select select__field"
                    @change=${this._handleChangeOption}
                >
                    ${
                        this.options.map((item) => {
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