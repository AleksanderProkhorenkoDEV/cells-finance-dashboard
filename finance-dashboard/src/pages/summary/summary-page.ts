import { PageController } from "@open-cells/page-controller";
import { customElement } from "lit/decorators.js";
import { html, LitElement } from "lit";

@customElement('summary-page')
export class SummaryPage extends LitElement {
    pageController = new PageController(this)

    protected createRenderRoot(): HTMLElement | DocumentFragment {
        return this;
    }

    render() {
        return html`
            <h1>Summary Page</h1>
        `
    }
}