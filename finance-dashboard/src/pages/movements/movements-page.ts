import { PageController } from "@open-cells/page-controller";
import { customElement } from "lit/decorators.js";
import { html, LitElement } from "lit";

@customElement('movements-page')
export class MovementsPage extends LitElement {
    pageController = new PageController(this)

    render() {
        return html`
            <h1>Movement Page</h1>
        `
    }
}