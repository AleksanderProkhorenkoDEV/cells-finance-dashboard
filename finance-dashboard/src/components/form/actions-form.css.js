import { css } from "lit";

export const styles = css`

    :host{
        width:85%;
        height:100%;

        display:flex;
        align-items:center;
        justify-content:center;
    }

    .form{
        display:flex;
        flex-direction:column;
        gap:1rem;

        width:65%;
        height: 80%;
    }

    .field-container{
        display:flex;
        flex-direction:column;
        gap:1rem;
    }

    .error-text{
        width:100%;

        position:relative;

        padding-left:0.4rem;

        color:oklch(65.57% 0.1744 23.19);

        box-sizing:border-box;
    }

    .error-text::before{
        content: "*";

        position:absolute;
        left:0;
        top:0;
    }
`