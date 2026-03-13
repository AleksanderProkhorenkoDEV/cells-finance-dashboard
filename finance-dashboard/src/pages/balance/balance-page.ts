import { PageController } from "@open-cells/page-controller";
import { customElement } from "lit/decorators.js";
import { html, LitElement } from "lit";

@customElement('balance-page')
export class BalancePage extends LitElement {
    pageController = new PageController(this)

    protected createRenderRoot(): HTMLElement | DocumentFragment {
        return this;
    }

    render() {
        return html`
            <h1>Balance page</h1>
        `
    }
}