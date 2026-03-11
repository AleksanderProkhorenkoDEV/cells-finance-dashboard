import { css } from "lit";

export const styles = css`
    :host{
        border-radius:0.5rem;
        border: 1px solid var(--color-border);

        overflow:hidden;
    }
    article{
        width:100%;
        height:100%;
        
        box-sizing:border-box;
    }
`