import { ElementController } from "@open-cells/element-controller";
import { customElement, state } from "lit/decorators.js";
import { styles } from "./navigation.css.js";
import { html, LitElement } from "lit";

@customElement('wc-navigation')
export class Navigation extends LitElement {
    elementController = new ElementController(this)

    @state()
    private _activePage = 'home';

    static styles = styles


    constructor() {
        super();
        const pathName = window.location.hash.replace('#!', '').replace('/', '')
        this._activePage = pathName
    }

    _handleNavigationClick = (e: Event) => {
        const li = e.target as HTMLElement

        const pageTogo = li.dataset.route as string;
        this.elementController.navigate(pageTogo)
        this._activePage = pageTogo;
    }

    render() {
        const menuItems = ['home', 'balance', 'movements', 'summary'];

        return html`
            <nav class="nav">
                <ul class="nav__host">
                    ${menuItems.map(item => {
            const isSelected = this._activePage === item.toLowerCase();
            return html`
                            <li 
                                class="nav__items ${isSelected ? 'nav__items--active' : ''}" 
                                @click=${this._handleNavigationClick}
                                data-route=${item}
                            >
                                ${item}
                            </li>
                        `;
        })}
                </ul>
            </nav>
        `;
    }
}