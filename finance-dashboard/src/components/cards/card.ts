import { customElement } from "lit/decorators.js";
import {  html, LitElement } from "lit";
import { styles } from "./card.css";

@customElement("wc-card")
export class Card extends LitElement{
    static styles = styles

    render(){
        return html`
            <article>
                <slot></slot>
            </article>
        `
    }
}